import { float_type } from "./constants";
import {
	updateMaterials,
	updateExternalForces,
	updateFixed,
	updateOriginalPosition,
	updateCreaseVectors,
	updateCreasesMeta,
} from "./update";
import vertexShader from "../shaders/vertexShader.vert?raw";
import positionCalcShader from "../shaders/positionCalcShader.frag?raw";
import velocityCalcVerletShader from "../shaders/velocityCalcVerletShader.frag?raw";
import velocityCalcShader from "../shaders/velocityCalcShader.frag?raw";
import positionCalcVerletShader from "../shaders/positionCalcVerletShader.frag?raw";
import thetaCalcShader from "../shaders/thetaCalcShader.frag?raw";
import normalCalc from "../shaders/normalCalc.frag?raw";
import packToBytesShader from "../shaders/packToBytesShader.frag?raw";
import zeroTexture from "../shaders/zeroTexture.frag?raw";
import zeroThetaTexture from "../shaders/zeroThetaTexture.frag?raw";
import centerTexture from "../shaders/centerTexture.frag?raw";
import copyTexture from "../shaders/copyTexture.frag?raw";
import updateCreaseGeo from "../shaders/updateCreaseGeo.frag?raw";

// default settings for origami simulator
const DEFAULTS = Object.freeze({
	creasePercent: 0.0,
	axialStiffness: 20,
	faceStiffness: 0.2,
	calcFaceStrain: false,
});

const calcDt = (model) => {
	let maxFreqNat = 0;
	model.edges.forEach((beam) => {
		if (beam.getNaturalFrequency() > maxFreqNat) {
			maxFreqNat = beam.getNaturalFrequency();
		}
	});
	// 0.9 of max delta t for good measure
	return (1 / (2 * Math.PI * maxFreqNat)) * 0.9;
};

const setSolveParams = (gpuMath, model) => {
	const dt = calcDt(model);
	// $("#deltaT").html(dt);
	gpuMath.setProgram("thetaCalc");
	gpuMath.setUniformForProgram("thetaCalc", "u_dt", dt, "1f");
	gpuMath.setProgram("velocityCalc");
	gpuMath.setUniformForProgram("velocityCalc", "u_dt", dt, "1f");
	gpuMath.setProgram("positionCalcVerlet");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_dt", dt, "1f");
	gpuMath.setProgram("positionCalc");
	gpuMath.setUniformForProgram("positionCalc", "u_dt", dt, "1f");
	gpuMath.setProgram("velocityCalcVerlet");
	gpuMath.setUniformForProgram("velocityCalcVerlet", "u_dt", dt, "1f");
	// options.controls.setDeltaT(dt);
};

const calcTextureSize = (numNodes) => {
	if (numNodes === 1) return 2;
	for (let i = 0; i < numNodes; i += 1) {
		if ((2 ** (2 * i)) >= numNodes) {
			return (2 ** i);
		}
	}
	console.warn(`no texture size found for ${numNodes} items`);
	return 2;
};

const initTypedArrays = (gpuMath, model) => {
	let numNodeFaces = 0;
	const nodeFaces = [];
	for (let i = 0; i < model.nodes.length; i += 1) {
		nodeFaces.push([]);
		for (let j = 0; j < model.faces_vertices.length; j += 1) {
			if (model.faces_vertices[j].indexOf(i) >= 0) {
				nodeFaces[i].push(j);
				numNodeFaces += 1;
			}
		}
	}
	let numEdges = 0;
	for (let i = 0; i < model.nodes.length; i += 1) {
		numEdges += model.nodes[i].numBeams();
	}
	const numFaces = model.faces_vertices.length;
	const numCreases = model.creases.length;
	let numNodeCreases = 0;
	for (let i = 0; i < model.nodes.length; i += 1) {
		numNodeCreases += model.nodes[i].numCreases();
	}
	numNodeCreases += numCreases * 2; // reactions

	const textureDim = calcTextureSize(model.nodes.length);
	const textureDimNodeFaces = calcTextureSize(numNodeFaces);
	const textureDimEdges = calcTextureSize(numEdges);
	const textureDimCreases = calcTextureSize(numCreases);
	const textureDimNodeCreases = calcTextureSize(numNodeCreases);
	const textureDimFaces = calcTextureSize(numFaces);

	const originalPosition = new Float32Array(textureDim * textureDim * 4);
	const externalForces = new Float32Array(textureDim * textureDim * 4);
	const mass = new Float32Array(textureDim * textureDim * 4);
	const beamMeta = new Float32Array(textureDimEdges * textureDimEdges * 4);
	const creaseVectors = new Float32Array(textureDimCreases * textureDimCreases * 4);
	const position = new Float32Array(textureDim * textureDim * 4);
	const lastPosition = new Float32Array(textureDim * textureDim * 4);
	const lastLastPosition = new Float32Array(textureDim * textureDim * 4);
	const velocity = new Float32Array(textureDim * textureDim * 4);
	const lastVelocity = new Float32Array(textureDim * textureDim * 4);
	const meta = new Float32Array(textureDim * textureDim * 4);
	const meta2 = new Float32Array(textureDim * textureDim * 4);
	const normals = new Float32Array(textureDimFaces * textureDimFaces * 4);
	const faceVertexIndices = new Float32Array(textureDimFaces * textureDimFaces * 4);
	const creaseMeta = new Float32Array(textureDimCreases * textureDimCreases * 4);
	const nodeFaceMeta = new Float32Array(textureDimNodeFaces * textureDimNodeFaces * 4);
	const nominalTriangles = new Float32Array(textureDimFaces * textureDimFaces * 4);
	const nodeCreaseMeta = new Float32Array(textureDimNodeCreases * textureDimNodeCreases * 4);
	const creaseMeta2 = new Float32Array(textureDimCreases * textureDimCreases * 4);
	const creaseGeo = new Float32Array(textureDimCreases * textureDimCreases * 4);
	const theta = new Float32Array(textureDimCreases * textureDimCreases * 4);
	const lastTheta = new Float32Array(textureDimCreases * textureDimCreases * 4);
	for (let i = 0; i < model.faces_vertices.length; i += 1) {
		const face = model.faces_vertices[i];
		faceVertexIndices[4 * i + 0] = face[0];
		faceVertexIndices[4 * i + 1] = face[1];
		faceVertexIndices[4 * i + 2] = face[2];
		const a = model.nodes[face[0]].getOriginalPosition();
		const b = model.nodes[face[1]].getOriginalPosition();
		const c = model.nodes[face[2]].getOriginalPosition();
		const ab = (b.clone().sub(a)).normalize();
		const ac = (c.clone().sub(a)).normalize();
		const bc = (c.clone().sub(b)).normalize();
		nominalTriangles[4 * i + 0] = Math.acos(ab.dot(ac));
		nominalTriangles[4 * i + 1] = Math.acos(-1 * ab.dot(bc));
		nominalTriangles[4 * i + 2] = Math.acos(ac.dot(bc));
		if (Math.abs(nominalTriangles[4 * i]
			+ nominalTriangles[4 * i + 1]
			+ nominalTriangles[4 * i + 2]
			- Math.PI) > 0.1) {
			console.warn("bad angles");
		}
	}
	for (let i = 0; i < textureDim * textureDim; i += 1) {
		mass[4 * i + 1] = 1; // set all fixed by default
	}
	for (let i = 0; i < textureDimCreases * textureDimCreases; i += 1) {
		if (i >= numCreases) {
			lastTheta[i * 4 + 2] = -1;
			lastTheta[i * 4 + 3] = -1;
			continue;
		}
		lastTheta[i * 4 + 2] = model.creases[i].getNormal1Index();
		lastTheta[i * 4 + 3] = model.creases[i].getNormal2Index();
	}
	let index = 0;
	for (let i = 0; i < model.nodes.length; i += 1) {
		meta2[4 * i] = index;
		const num = nodeFaces[i].length;
		meta2[4 * i + 1] = num;
		for (let j = 0; j < num; j += 1) {
			const _index = (index + j) * 4;
			const face = model.faces_vertices[nodeFaces[i][j]];
			nodeFaceMeta[_index] = nodeFaces[i][j];
			nodeFaceMeta[_index + 1] = face[0] === i ? -1 : face[0];
			nodeFaceMeta[_index + 2] = face[1] === i ? -1 : face[1];
			nodeFaceMeta[_index + 3] = face[2] === i ? -1 : face[2];
		}
		index += num;
	}
	index = 0;
	for (let i = 0; i < model.nodes.length; i += 1) {
		mass[4 * i] = model.nodes[i].getSimMass();
		meta[i * 4 + 2] = index;
		const nodeCreases = model.nodes[i].creases;
		// nodes attached to crease move in opposite direction
		const nodeInvCreases = model.nodes[i].invCreases;
		meta[i * 4 + 3] = nodeCreases.length + nodeInvCreases.length;
		for (let j = 0; j < nodeCreases.length; j += 1) {
			nodeCreaseMeta[index * 4] = nodeCreases[j].getIndex();
			// type 1, 2, 3, 4
			nodeCreaseMeta[index * 4 + 1] = nodeCreases[j].getNodeIndex(model.nodes[i]);
			index += 1;
		}
		for (let j = 0; j < nodeInvCreases.length; j += 1) {
			nodeCreaseMeta[index * 4] = nodeInvCreases[j].getIndex();
			// type 1, 2, 3, 4
			nodeCreaseMeta[index * 4 + 1] = nodeInvCreases[j].getNodeIndex(model.nodes[i]);
			index += 1;
		}
	}
	for (let i = 0; i < model.creases.length; i += 1) {
		const crease = model.creases[i];
		creaseMeta2[i * 4] = crease.node1.getIndex();
		creaseMeta2[i * 4 + 1] = crease.node2.getIndex();
		creaseMeta2[i * 4 + 2] = crease.edge.nodes[0].getIndex();
		creaseMeta2[i * 4 + 3] = crease.edge.nodes[1].getIndex();
		index += 1;
	}
	updateOriginalPosition(gpuMath, model, { originalPosition, textureDim });
	updateMaterials(gpuMath, model, { meta, beamMeta, textureDimEdges }, true);
	updateFixed(gpuMath, model, { mass, textureDim });
	updateExternalForces(gpuMath, model, { externalForces, textureDim });
	updateCreasesMeta(gpuMath, model, { creaseMeta, textureDimCreases }, true);
	updateCreaseVectors(gpuMath, model, { creaseVectors, textureDimCreases });
	return {
		textureDim,
		textureDimEdges,
		textureDimFaces,
		textureDimCreases,
		textureDimNodeFaces,
		textureDimNodeCreases,
		position,
		lastPosition,
		lastLastPosition,
		velocity,
		lastVelocity,
		meta,
		meta2,
		normals,
		faceVertexIndices,
		nodeFaceMeta,
		nominalTriangles,
		nodeCreaseMeta,
		creaseMeta2,
		creaseGeo,
		theta,
		lastTheta,
	};
};
/**
 * @description This method is called when a new model is loaded.
 * This allocates all space needed for communication back and forth
 * with the GPU.
 * @param {object} options these options are not required, if empty it
 * will default to origami simulator's default settings.
 */
const initTexturesAndPrograms = (gpuMath, {
	textureDim,
	textureDimEdges,
	textureDimFaces,
	textureDimCreases,
	textureDimNodeFaces,
	textureDimNodeCreases,
	position,
	lastPosition,
	lastLastPosition,
	velocity,
	lastVelocity,
	meta,
	meta2,
	normals,
	faceVertexIndices,
	nodeFaceMeta,
	nominalTriangles,
	nodeCreaseMeta,
	creaseMeta2,
	creaseGeo,
	theta,
	lastTheta,
}, options = {}) => {
	const defaults = { ...DEFAULTS, ...options };

	gpuMath.initTextureFromData("u_position", textureDim, textureDim, float_type, position, true);
	gpuMath.initTextureFromData("u_lastPosition", textureDim, textureDim, float_type, lastPosition, true);
	gpuMath.initTextureFromData("u_lastLastPosition", textureDim, textureDim, float_type, lastLastPosition, true);
	gpuMath.initTextureFromData("u_velocity", textureDim, textureDim, float_type, velocity, true);
	gpuMath.initTextureFromData("u_lastVelocity", textureDim, textureDim, float_type, lastVelocity, true);
	gpuMath.initTextureFromData("u_theta", textureDimCreases, textureDimCreases, float_type, theta, true);
	gpuMath.initTextureFromData("u_lastTheta", textureDimCreases, textureDimCreases, float_type, lastTheta, true);
	gpuMath.initTextureFromData("u_normals", textureDimFaces, textureDimFaces, float_type, normals, true);

	gpuMath.initFrameBufferForTexture("u_position", true);
	gpuMath.initFrameBufferForTexture("u_lastPosition", true);
	gpuMath.initFrameBufferForTexture("u_lastLastPosition", true);
	gpuMath.initFrameBufferForTexture("u_velocity", true);
	gpuMath.initFrameBufferForTexture("u_lastVelocity", true);
	gpuMath.initFrameBufferForTexture("u_theta", true);
	gpuMath.initFrameBufferForTexture("u_lastTheta", true);
	gpuMath.initFrameBufferForTexture("u_normals", true);

	gpuMath.initTextureFromData("u_meta", textureDim, textureDim, float_type, meta, true);
	gpuMath.initTextureFromData("u_meta2", textureDim, textureDim, float_type, meta2, true);
	gpuMath.initTextureFromData("u_nominalTrinagles", textureDimFaces, textureDimFaces, float_type, nominalTriangles, true);
	gpuMath.initTextureFromData("u_nodeCreaseMeta", textureDimNodeCreases, textureDimNodeCreases, float_type, nodeCreaseMeta, true);
	gpuMath.initTextureFromData("u_creaseMeta2", textureDimCreases, textureDimCreases, float_type, creaseMeta2, true);
	gpuMath.initTextureFromData("u_nodeFaceMeta", textureDimNodeFaces, textureDimNodeFaces, float_type, nodeFaceMeta, true);
	gpuMath.initTextureFromData("u_creaseGeo", textureDimCreases, textureDimCreases, float_type, creaseGeo, true);
	gpuMath.initFrameBufferForTexture("u_creaseGeo", true);
	gpuMath.initTextureFromData("u_faceVertexIndices", textureDimFaces, textureDimFaces, float_type, faceVertexIndices, true);
	gpuMath.initTextureFromData("u_nominalTriangles", textureDimFaces, textureDimFaces, float_type, nominalTriangles, true);

	gpuMath.createProgram("positionCalc", vertexShader, positionCalcShader);
	gpuMath.setUniformForProgram("positionCalc", "u_velocity", 0, "1i");
	gpuMath.setUniformForProgram("positionCalc", "u_lastPosition", 1, "1i");
	gpuMath.setUniformForProgram("positionCalc", "u_mass", 2, "1i");
	gpuMath.setUniformForProgram("positionCalc", "u_textureDim", [textureDim, textureDim], "2f");

	gpuMath.createProgram("velocityCalcVerlet", vertexShader, velocityCalcVerletShader);
	gpuMath.setUniformForProgram("velocityCalcVerlet", "u_position", 0, "1i");
	gpuMath.setUniformForProgram("velocityCalcVerlet", "u_lastPosition", 1, "1i");
	gpuMath.setUniformForProgram("velocityCalcVerlet", "u_mass", 2, "1i");
	gpuMath.setUniformForProgram("velocityCalcVerlet", "u_textureDim", [textureDim, textureDim], "2f");

	gpuMath.createProgram("velocityCalc", vertexShader, velocityCalcShader);
	gpuMath.setUniformForProgram("velocityCalc", "u_lastPosition", 0, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_lastVelocity", 1, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_originalPosition", 2, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_externalForces", 3, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_mass", 4, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_meta", 5, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_beamMeta", 6, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_creaseMeta", 7, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_nodeCreaseMeta", 8, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_normals", 9, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_theta", 10, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_creaseGeo", 11, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_meta2", 12, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_nodeFaceMeta", 13, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_nominalTriangles", 14, "1i");
	gpuMath.setUniformForProgram("velocityCalc", "u_textureDim", [textureDim, textureDim], "2f");
	gpuMath.setUniformForProgram("velocityCalc", "u_textureDimEdges", [textureDimEdges, textureDimEdges], "2f");
	gpuMath.setUniformForProgram("velocityCalc", "u_textureDimFaces", [textureDimFaces, textureDimFaces], "2f");
	gpuMath.setUniformForProgram("velocityCalc", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");
	gpuMath.setUniformForProgram("velocityCalc", "u_textureDimNodeCreases", [textureDimNodeCreases, textureDimNodeCreases], "2f");
	gpuMath.setUniformForProgram("velocityCalc", "u_textureDimNodeFaces", [textureDimNodeFaces, textureDimNodeFaces], "2f");
	gpuMath.setUniformForProgram("velocityCalc", "u_creasePercent", defaults.creasePercent, "1f");
	gpuMath.setUniformForProgram("velocityCalc", "u_axialStiffness", defaults.axialStiffness, "1f");
	gpuMath.setUniformForProgram("velocityCalc", "u_faceStiffness", defaults.faceStiffness, "1f");
	gpuMath.setUniformForProgram("velocityCalc", "u_calcFaceStrain", defaults.calcFaceStrain, "1f");

	gpuMath.createProgram("positionCalcVerlet", vertexShader, positionCalcVerletShader);
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_lastPosition", 0, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_lastLastPosition", 1, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_lastVelocity", 2, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_originalPosition", 3, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_externalForces", 4, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_mass", 5, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_meta", 6, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_beamMeta", 7, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_creaseMeta", 8, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_nodeCreaseMeta", 9, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_normals", 10, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_theta", 11, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_creaseGeo", 12, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_meta2", 13, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_nodeFaceMeta", 14, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_nominalTriangles", 15, "1i");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDim", [textureDim, textureDim], "2f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimEdges", [textureDimEdges, textureDimEdges], "2f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimFaces", [textureDimFaces, textureDimFaces], "2f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimNodeCreases", [textureDimNodeCreases, textureDimNodeCreases], "2f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimNodeFaces", [textureDimNodeFaces, textureDimNodeFaces], "2f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_creasePercent", defaults.creasePercent, "1f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_axialStiffness", defaults.axialStiffness, "1f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_faceStiffness", defaults.faceStiffness, "1f");
	gpuMath.setUniformForProgram("positionCalcVerlet", "u_calcFaceStrain", defaults.calcFaceStrain, "1f");

	gpuMath.createProgram("thetaCalc", vertexShader, thetaCalcShader);
	gpuMath.setUniformForProgram("thetaCalc", "u_normals", 0, "1i");
	gpuMath.setUniformForProgram("thetaCalc", "u_lastTheta", 1, "1i");
	gpuMath.setUniformForProgram("thetaCalc", "u_creaseVectors", 2, "1i");
	gpuMath.setUniformForProgram("thetaCalc", "u_lastPosition", 3, "1i");
	gpuMath.setUniformForProgram("thetaCalc", "u_originalPosition", 4, "1i");
	gpuMath.setUniformForProgram("thetaCalc", "u_textureDim", [textureDim, textureDim], "2f");
	gpuMath.setUniformForProgram("thetaCalc", "u_textureDimFaces", [textureDimFaces, textureDimFaces], "2f");
	gpuMath.setUniformForProgram("thetaCalc", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");

	gpuMath.createProgram("normalCalc", vertexShader, normalCalc);
	gpuMath.setUniformForProgram("normalCalc", "u_faceVertexIndices", 0, "1i");
	gpuMath.setUniformForProgram("normalCalc", "u_lastPosition", 1, "1i");
	gpuMath.setUniformForProgram("normalCalc", "u_originalPosition", 2, "1i");
	gpuMath.setUniformForProgram("normalCalc", "u_textureDim", [textureDim, textureDim], "2f");
	gpuMath.setUniformForProgram("normalCalc", "u_textureDimFaces", [textureDimFaces, textureDimFaces], "2f");

	gpuMath.createProgram("packToBytes", vertexShader, packToBytesShader);
	gpuMath.initTextureFromData("outputBytes", textureDim * 4, textureDim, "UNSIGNED_BYTE", null, true);
	gpuMath.initFrameBufferForTexture("outputBytes", true);
	gpuMath.setUniformForProgram("packToBytes", "u_floatTextureDim", [textureDim, textureDim], "2f");
	gpuMath.setUniformForProgram("packToBytes", "u_floatTexture", 0, "1i");

	gpuMath.createProgram("zeroTexture", vertexShader, zeroTexture);
	gpuMath.createProgram("zeroThetaTexture", vertexShader, zeroThetaTexture);
	gpuMath.setUniformForProgram("zeroThetaTexture", "u_theta", 0, "1i");
	gpuMath.setUniformForProgram("zeroThetaTexture", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");

	gpuMath.createProgram("centerTexture", vertexShader, centerTexture);
	gpuMath.setUniformForProgram("centerTexture", "u_lastPosition", 0, "1i");
	gpuMath.setUniformForProgram("centerTexture", "u_textureDim", [textureDim, textureDim], "2f");

	gpuMath.createProgram("copyTexture", vertexShader, copyTexture);
	gpuMath.setUniformForProgram("copyTexture", "u_orig", 0, "1i");
	gpuMath.setUniformForProgram("copyTexture", "u_textureDim", [textureDim, textureDim], "2f");

	gpuMath.createProgram("updateCreaseGeo", vertexShader, updateCreaseGeo);
	gpuMath.setUniformForProgram("updateCreaseGeo", "u_lastPosition", 0, "1i");
	gpuMath.setUniformForProgram("updateCreaseGeo", "u_originalPosition", 1, "1i");
	gpuMath.setUniformForProgram("updateCreaseGeo", "u_creaseMeta2", 2, "1i");
	gpuMath.setUniformForProgram("updateCreaseGeo", "u_textureDim", [textureDim, textureDim], "2f");
	gpuMath.setUniformForProgram("updateCreaseGeo", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");

	gpuMath.setSize(textureDim, textureDim);
};

const initialize = (gpuMath, model, options) => {
	const arrays = initTypedArrays(gpuMath, model);
	initTexturesAndPrograms(gpuMath, arrays, options);
	setSolveParams(gpuMath, model);
	return arrays;
};

export default initialize;
