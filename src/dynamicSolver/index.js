/**
 * Created by ghassaei on 10/7/16.
 */
import GPUMath from "./GPUMath.js";
import initialize from "./initialize/index.js";
import {
	updateMaterials,
	updateCreasesMeta,
	updateLastPosition,
} from "./update.js";
import {
	solveStep,
	render,
} from "./solve.js";
// these few options are still remaining to be handled.
// not sure where the were used exactly
// - fixedHasChanged: false,

/**
 * @description Get the center of the bounding box of the model.
 */
const modelCenter = (model) => {
	const min = Array(3).fill(Infinity);
	const max = Array(3).fill(-Infinity);
	for (let i = 0; i < model.positions.length; i += 3) {
		for (let dim = 0; dim < 3; dim += 1) {
			min[dim] = Math.min(min[dim], model.positions[i + dim]);
			max[dim] = Math.max(max[dim], model.positions[i + dim]);
		}
	}
	return [
		(min[0] + max[0]) / 2,
		(min[1] + max[1]) / 2,
		(min[2] + max[2]) / 2,
	];
};

const DynamicSolver = () => {
	// the GPU instance which will be doing our calculation
	let gpuMath = new GPUMath();
	// store reference to the Origami Simulator model
	let model;
	// store these here due to being used the solve loop or nodeDidMove
	let textureDim;
	let textureDimCreases;
	let textureDimFaces;
	let textureDimEdges;
	let meta;
	let beamMeta;
	let creaseMeta;
	//
	let lastPosition;
	let integrationType = "euler";

	/**
	 * @description The user will call this method when the UI is pulling on a
	 * vertex, this conveys to the solver that a node is being manually moved.
	 */
	const nodeDidMove = () => {
		if (!gpuMath || !model) { return; }
		updateLastPosition(gpuMath, model, { lastPosition, textureDim });
		const [x, y, z] = modelCenter(model);
		gpuMath.setProgram("centerTexture");
		gpuMath.setUniformForProgram("centerTexture", "u_center", [x, y, z], "3f");
		gpuMath.step("centerTexture", ["u_lastPosition"], "u_position");
		if (integrationType === "verlet") {
			gpuMath.step("copyTexture", ["u_position"], "u_lastLastPosition");
		}
		gpuMath.swapTextures2("u_position", "u_lastPosition");
		gpuMath.step("zeroTexture", [], "u_lastVelocity");
		gpuMath.step("zeroTexture", [], "u_velocity");
	};

	/**
	 * @returns {number} the global error as a percent
	 * @param {number} numSteps number of iterations to run the solver
	 * @param {boolean} computeStrain should the strain values be computed?
	 */
	const solve = (numSteps = 100, computeStrain = false) => {
		if (!gpuMath || !model) { return 0; }
		// if (props.fixedHasChanged) {
		// 	updateFixed();
		// 	props.fixedHasChanged = false;
		// }
		for (let j = 0; j < numSteps; j += 1) {
			solveStep(gpuMath, { textureDim, textureDimCreases, textureDimFaces, integrationType });
		}
		return render(gpuMath, model, { textureDim, axialStrain: computeStrain });
	};

	/**
	 * @description Call this after a new model has been loaded
	 * @params {object} model the origami simulator model
	 * @params {object} options optional initialization params. includes:
	 * - creasePercent (number)
	 * - axialStiffness (number)
	 * - faceStiffness (number)
	 * - calcFaceStrain (bool)
	 */
	const setModel = (newModel, options = {}) => {
		// these next 2 might be unnecessary
		// dealloc();
		// gpuMath = new GPUMath();
		// store the model
		model = newModel;
		// save these initialization variables
		({
			textureDim,
			textureDimCreases,
			textureDimFaces,
			textureDimEdges,
			meta,
			beamMeta,
			creaseMeta,
			lastPosition,
		} = initialize(gpuMath, model, options));
		// previous version reset the solver when a model loads.
		// do we need to? seems to work fine without.
		// solver.reset();
	};
	/**
	 * @description Reset the vertices of the model back to their original state.
	 * @returns {number} the global error as a percent
	 */
	const reset = () => {
		if (!gpuMath || !model) { return 0; }
		gpuMath.step("zeroTexture", [], "u_position");
		gpuMath.step("zeroTexture", [], "u_lastPosition");
		gpuMath.step("zeroTexture", [], "u_lastLastPosition");
		gpuMath.step("zeroTexture", [], "u_velocity");
		gpuMath.step("zeroTexture", [], "u_lastVelocity");
		gpuMath.step("zeroThetaTexture", ["u_lastTheta"], "u_theta");
		gpuMath.step("zeroThetaTexture", ["u_theta"], "u_lastTheta");
		return render(gpuMath, model, { textureDim, axialStrain: true });
	};
	/**
	 * @description deallocate everything involved with the dynamic solver
	 */
	const dealloc = () => {
		if (gpuMath) {
			gpuMath.dealloc();
			gpuMath = undefined;
		}
	};

	const setIntegration = (integration) => {
		integrationType = integration;
		reset();
	};

	const setCreasePercent = (percent) => {
		if (!gpuMath || !model) { return; }
		const number = parseFloat(percent);
		gpuMath.setProgram("velocityCalc");
		gpuMath.setUniformForProgram("velocityCalc", "u_creasePercent", number, "1f");
		gpuMath.setProgram("positionCalcVerlet");
		gpuMath.setUniformForProgram("positionCalcVerlet", "u_creasePercent", number, "1f");
	};

	const setAxialStiffness = (value) => {
		if (!gpuMath || !model) { return; }
		const number = parseFloat(value);
		gpuMath.setProgram("velocityCalc");
		gpuMath.setUniformForProgram("velocityCalc", "u_axialStiffness", number, "1f");
		gpuMath.setProgram("positionCalcVerlet");
		gpuMath.setUniformForProgram("positionCalcVerlet", "u_axialStiffness", number, "1f");
	};

	const setFaceStiffness = (value) => {
		if (!gpuMath || !model) { return; }
		const number = parseFloat(value);
		gpuMath.setProgram("velocityCalc");
		gpuMath.setUniformForProgram("velocityCalc", "u_faceStiffness", number, "1f");
		gpuMath.setProgram("positionCalcVerlet");
		gpuMath.setUniformForProgram("positionCalcVerlet", "u_faceStiffness", number, "1f");
	};

	const setFaceStrain = (value) => {
		if (!gpuMath || !model) { return; }
		const number = parseFloat(value);
		gpuMath.setProgram("velocityCalc");
		gpuMath.setUniformForProgram("velocityCalc", "u_calcFaceStrain", number, "1f");
		gpuMath.setProgram("positionCalcVerlet");
		gpuMath.setUniformForProgram("positionCalcVerlet", "u_calcFaceStrain", number, "1f");
	};
	/**
	 * @description Some properties require rewrite to the shader textures,
	 * after setting these properties, call this to update the texture data.
	 */
	const update = () => {
		if (!gpuMath || !model) { return; }
		updateCreasesMeta(gpuMath, model, { creaseMeta, textureDimCreases });
		updateMaterials(gpuMath, model, { meta, beamMeta, textureDimEdges });
	};

	return {
		solve,
		setModel,
		nodeDidMove,
		reset,
		dealloc,
		setIntegration,
		setCreasePercent,
		setAxialStiffness,
		setFaceStiffness,
		setFaceStrain,
		update,
	};
};

export default DynamicSolver;
