/**
 * Created by amandaghassaei on 2/24/17.
 */
import * as THREE from "three";
import {
	makeNode,
	destroyNode,
} from "./node.js";
import Beam from "./beam.js";
import Crease from "./crease.js";
import * as Materials from "./materials.js";
import { makeCreasesParams } from "../fold/creaseParams.js";
import prepare from "../fold/prepare.js";
import exportFold from "./exportFold.js";
import {
	makeTypedArrays,
} from "./convert.js";
import {
	resize3,
} from "../general/math.js";

// buffer geometry has materialIndex property. use this for front/back colors

// no "cut" assignment. all cuts have now been turned into boundaries
const assignments = Array.from("BMVFJU");

const setNewFaceMaterial = (model, material, key) => {
	if (model.materials[key]) { model.materials[key].dispose(); }
	model.materials[key] = material;
	model.faceMaterialDidUpdate();
};

/**
 * @param {{ scene: THREE.Scene }} options
 */
class Model {
	constructor({ scene }) {
		// if the user chooses to export the 3D model, we need to reference
		// the original FOLD data. "this.fold" contains triangulated faces.
		this.fold = {};
		this.foldUnmodified = {};
		this.geometry = null;
		this.materials = {};
		this.materials.front = Materials.front;
		this.materials.back = Materials.back;
		this.materials.strain = Materials.strain;
		this.materials.line = {};
		assignments.forEach(key => {
			this.materials.line[key] = Materials.line.clone();
		});
		this.frontMesh = new THREE.Mesh(); // front face of mesh
		this.backMesh = new THREE.Mesh(); // back face of mesh (different color)
		this.lines = {};
		assignments.forEach(key => {
			this.lines[key] = new THREE.LineSegments(
				new THREE.BufferGeometry(),
				this.materials.line[key],
			);
		});
		// by default, "join" edges (result of triangulation) are not visible
		this.lines.J.visible = false;
		this.strain = false;
		this.axialStiffness = 20;
		this.joinStiffness = 0.7;
		this.creaseStiffness = 0.7;
		this.dampingRatio = 0.45;
		// vertex / color buffer arrays for GPU
		this.positions = null;
		this.colors = null;
		// these contain a bunch of information for the solver.
		/** @type {SimulatorNode[]} */
		this.nodes = [];
		this.edges = [];
		this.creases = [];
		this.faces_vertices = [];

		this.frontMesh.castShadow = true;
		this.frontMesh.receiveShadow = true;
		// this.backMesh.castShadow = true;
		this.backMesh.receiveShadow = true;

		this.makeNewGeometries();
		this.materialDidUpdate();
		this.setScene(scene);
	}

	/**
	 * @param {THREE.Scene} scene
	 */
	setScene(scene) {
		// remove from previous scene
		[this.frontMesh, this.backMesh]
			.filter(el => el.removeFromParent)
			.forEach(side => side.removeFromParent());
		Object.values(this.lines)
			.filter(el => el.removeFromParent)
			.forEach(line => line.removeFromParent());
		// add to new scene
		if (scene) {
			scene.add(this.frontMesh);
			scene.add(this.backMesh);
			Object.values(this.lines).forEach(line => scene.add(line));
		}
	}

	makeNewGeometries() {
		this.geometry = new THREE.BufferGeometry();
		// this.geometry.dynamic = true; // property no longer exists
		this.frontMesh.geometry = this.geometry;
		this.backMesh.geometry = this.geometry;
		// todo: do we need to set frontside/backside dynamic?
		// this.geometry.verticesNeedUpdate = true;
		Object.values(this.lines).forEach((line) => {
			line.geometry = new THREE.BufferGeometry();
			line.geometry.dynamic = true;
			// line.geometry.verticesNeedUpdate = true;
		});
	}

	faceMaterialDidUpdate() {
		this.frontMesh.material = this.strain
			? this.materials.strain
			: this.materials.front;
		this.backMesh.material = this.materials.back;
		// hide the back mesh if strain is currently enabled
		this.backMesh.visible = !this.strain;
		// this.frontMesh.material.depthWrite = false;
		// this.backMesh.material.depthWrite = false;
		this.frontMesh.material.needsUpdate = true;
		this.backMesh.material.needsUpdate = true;
	}

	lineMaterialDidUpdate() {
		assignments.forEach(key => {
			this.lines[key].material = this.materials.line[key] || Materials.line.clone();
			this.lines[key].material.needsUpdate = true;
		});
	}

	materialDidUpdate() {
		this.faceMaterialDidUpdate();
		this.lineMaterialDidUpdate();
	}

	/**
	 * @param {boolean} strain
	 */
	setStrain(strain) {
		this.strain = strain;
		this.faceMaterialDidUpdate();
	}

	getMesh() { return [this.frontMesh, this.backMesh]; }

	needsUpdate() {
		if (!this.positions) { return; }
		this.geometry.attributes.position.needsUpdate = true;
		if (this.strain) { this.geometry.attributes.color.needsUpdate = true; }
		// if (vrEnabled) this.geometry.computeBoundingBox();
		// this is needed for the raycaster. even if VR is not enabled.
		this.geometry.computeBoundingBox();
	}

	/**
	 * @param {FOLD} fold
	 */
	makeObjects(fold) {
		const options = {
			axialStiffness: this.axialStiffness,
			joinStiffness: this.joinStiffness,
			creaseStiffness: this.creaseStiffness,
			dampingRatio: this.dampingRatio,
		};
		this.nodes = fold.vertices_coords.map(resize3).map(makeNode);
		this.edges = fold.edges_vertices
			.map(ev => ev.map(v => this.nodes[v]))
			.map(([a, b]) => new Beam([a, b], options));
		this.creases = makeCreasesParams(fold)
			.map((param, i) => new Crease(
				this.edges[param.edge],
				i,
				param.foldAngle !== 0 ? 1 : 0, // type
				param.faces,
				param.vertices.map(v => this.nodes[v]),
				param.foldAngle * (Math.PI / 180), // up until now everything has been in degrees
				options,
			));
		this.faces_vertices = fold.faces_vertices;
	}

	setGeometryBuffers({
		positions, colors, indices, lineIndices,
	}) {
		const positionsAttribute = new THREE.BufferAttribute(positions, 3);
		this.geometry.setAttribute("position", positionsAttribute);
		this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
		this.geometry.setIndex(new THREE.BufferAttribute(indices, 1));
		assignments.forEach((key) => {
			this.lines[key].geometry.setAttribute("position", positionsAttribute);
			this.lines[key].geometry.setIndex(new THREE.BufferAttribute(lineIndices[key], 1));
			// this.lines[key].geometry.attributes.position.needsUpdate = true;
			// this.lines[key].geometry.index.needsUpdate = true;
			this.lines[key].geometry.computeBoundingBox();
			this.lines[key].geometry.computeBoundingSphere();
			this.lines[key].geometry.center();
		});
		// geometry.attributes.position.needsUpdate = true;
		// geometry.index.needsUpdate = true;
		// geometry.verticesNeedUpdate = true;
		// re-scale object to unit-space and center it at the origin.
		this.geometry.computeVertexNormals();
		this.geometry.computeBoundingBox();
		this.geometry.computeBoundingSphere();
		this.geometry.center();
	}

	/**
	 *
	 */
	dealloc() {
		// console.log("--- dealloc: Model()");
		// dispose geometries
		[this.geometry, this.frontMesh.geometry, this.backMesh.geometry]
			.filter(geo => geo)
			.forEach(geo => geo.dispose());
		this.geometry = null;
		this.frontMesh.geometry = null;
		this.backMesh.geometry = null;
		Object.values(this.lines)
			.filter(line => line.geometry)
			.forEach((line) => line.geometry.dispose());
		// dispose materials
		[this.frontMesh.material, this.backMesh.material]
			.filter(material => material)
			.forEach(material => material.dispose());
		Object.values(this.lines)
			.filter(line => line.material)
			.forEach(line => line.material.dispose());
		// dispose class objects
		this.nodes.forEach(destroyNode);
		this.edges.forEach(edge => edge.destroy());
		this.creases.forEach(crease => crease.destroy());
		this.nodes = [];
		this.edges = [];
		this.creases = [];
	}

	/**
	 * @description Load a new FOLD object into origami simulator.
	 * Immediately following this method the solver should call .setModel()
	 */
	load(foldObject) {
		this.dealloc();
		this.makeNewGeometries();
		const fold = prepare(foldObject);
		this.foldUnmodified = foldObject;
		this.fold = fold;
		this.makeObjects(fold);
		const { positions, colors, indices, lineIndices } = makeTypedArrays(fold);
		this.setGeometryBuffers({ positions, colors, indices, lineIndices });
		// initialize original state data
		this.nodes.forEach((node, i) => {
			node.originalPosition = [
				positions[3 * i + 0],
				positions[3 * i + 1],
				positions[3 * i + 2],
			];
		});
		this.edges.forEach(edge => edge.recalcOriginalLength());
		// save these for the solver to modify
		this.positions = positions;
		this.colors = colors;
	}

	/**
	 *
	 */
	export() {
		return exportFold(this, this.foldUnmodified, this.fold);
	}

	/**
	 *
	 */
	setAxialStiffness(value) {
		this.axialStiffness = parseFloat(value);
		this.edges.forEach(edge => { edge.axialStiffness = this.axialStiffness; });
	}

	/**
	 *
	 */
	setJoinStiffness(value) {
		this.joinStiffness = parseFloat(value);
		this.creases.forEach(crease => { crease.joinStiffness = this.joinStiffness; });
	}

	/**
	 *
	 */
	setCreaseStiffness(value) {
		this.creaseStiffness = parseFloat(value);
		this.creases.forEach(crease => { crease.creaseStiffness = this.creaseStiffness; });
	}

	/**
	 *
	 */
	setDampingRatio(value) {
		this.dampingRatio = parseFloat(value);
		this.creases.forEach(crease => { crease.dampingRatio = this.dampingRatio; });
		this.edges.forEach(edge => { edge.dampingRatio = this.dampingRatio; });
	}

	/**
	 *
	 */
	setFrontColor(color) {
		this.materials.front.color.set(color);
		this.frontMesh.material.needsUpdate = true;
	}

	setBackColor(color) {
		this.materials.back.color.set(color);
		this.backMesh.material.needsUpdate = true;
	}

	setBoundaryColor(color) {
		this.materials.line.B.color.set(color);
		this.lines.B.material.needsUpdate = true;
	}

	setMountainColor(color) {
		this.materials.line.M.color.set(color);
		this.lines.M.material.needsUpdate = true;
	}

	setValleyColor(color) {
		this.materials.line.V.color.set(color);
		this.lines.V.material.needsUpdate = true;
	}

	setFlatColor(color) {
		this.materials.line.F.color.set(color);
		this.lines.F.material.needsUpdate = true;
	}

	setUnassignedColor(color) {
		this.materials.line.U.color.set(color);
		this.lines.U.material.needsUpdate = true;
	}

	setJoinColor(color) {
		this.materials.line.J.color.set(color);
		this.lines.J.material.needsUpdate = true;
	}

	setLineColor(color) {
		assignments.forEach(key => {
			this.materials.line[key].color.set(color);
		});
		this.lineMaterialDidUpdate();
	}

	/**
	 *
	 */
	setMaterialFront(material) {
		setNewFaceMaterial(this, material, "front");
	}

	setMaterialBack(material) {
		setNewFaceMaterial(this, material, "back");
	}

	setMaterialStrain(material) {
		setNewFaceMaterial(this, material, "strain");
	}

	/**
	 * @param {object} material a three js material
	 * @param {string} assignments a list of the assignment(s)
	 * you want to apply this material to.
	 */
	setMaterialLine(material, assignmentsOptions = []) {
		const keys = assignmentsOptions.length
			? assignmentsOptions
				.filter(a => typeof a === "string")
				.map(str => str.toUpperCase())
			: assignments;
		keys.forEach(key => this.materials.line[key].dispose());
		keys.forEach(key => { this.materials.line[key] = material; });
		this.lineMaterialDidUpdate();
	}
}

export default Model;
