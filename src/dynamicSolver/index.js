/**
 * Created by ghassaei on 10/7/16.
 */
import GPUMath from "./GPUMath";
import modelCenter from "../model/modelCenter";
import initialize from "./initialize";
import { updateLastPosition } from "./update";
import {
	solveStep,
	render,
} from "./solve";

// ///////////////////////
// currently looking into making this work on iOS.
// problem appears to be the need to support and switch to using HALF_FLOAT
//
// update: seems to be working. iOS might have added support to the float type.
//
// https://github.com/mrdoob/three.js/issues/9628
// http://yomboprime.github.io/GPGPU-threejs-demos/webgl_gpgpu_water.html

// these few options are still remaining to be handled.
// not sure where the were used exactly
// - fixedHasChanged: false,
// - materialHasChanged: false,
// - creaseMaterialHasChanged: false,

const DynamicSolver = () => {
	// the GPU instance which will be doing our calculation
	let gpuMath;
	// store reference to the Origami Simulator model
	let model;
	// store here due to being used in the user-called method, nodeDidMove()
	// let lastPosition;
	// "euler" or "verlet". also used in a few places, including nodeDidMove()
	// let integrationType = "euler";
	// // store these up here. they are used in lots of places.
	// let textureDim = 0;
	// let textureDimEdges = 0;
	// let textureDimFaces = 0;
	// let textureDimCreases = 0;
	// let textureDimNodeCreases = 0;
	// let textureDimNodeFaces = 0;

	let textureDim;
	let textureDimCreases;
	let textureDimFaces;
	let lastPosition;
	let integrationType = "euler";

	/**
	 * @description The user will call this method when the UI is pulling on a
	 * vertex, this conveys to the solver that a node is being manually moved.
	 */
	const nodeDidMove = () => {
		updateLastPosition(gpuMath, model, { lastPosition, textureDim });
		const avgPosition = modelCenter(model);
		gpuMath.setProgram("centerTexture");
		gpuMath.setUniformForProgram("centerTexture", "u_center", [avgPosition.x, avgPosition.y, avgPosition.z], "3f");
		gpuMath.step("centerTexture", ["u_lastPosition"], "u_position");
		if (integrationType === "verlet") {
			gpuMath.step("copyTexture", ["u_position"], "u_lastLastPosition");
		}
		gpuMath.swapTextures("u_position", "u_lastPosition");
		gpuMath.step("zeroTexture", [], "u_lastVelocity");
		gpuMath.step("zeroTexture", [], "u_velocity");
	};
	/**
	 * @returns {number} the global error as a percent
	 * @param {number} numSteps number of iterations to run the solver
	 * @param {object} props to be passed along to render(). should
	 * include "axialStrain" set to a boolean.
	 */
	const solve = (numSteps = 100, computeStrain = false) => {
		// if (props.fixedHasChanged) {
		// 	updateFixed();
		// 	props.fixedHasChanged = false;
		// }
		// if (props.nodePositionHasChanged) {
		// 	updateLastPosition();
		// 	// nodePositionHasChanged = false;
		// }
		// if (props.creaseMaterialHasChanged) {
		// 	updateCreasesMeta();
		// 	props.creaseMaterialHasChanged = false;
		// }
		// if (props.materialHasChanged) {
		// 	updateMaterials();
		// 	props.materialHasChanged = false;
		// }
		for (let j = 0; j < numSteps; j += 1) {
			solveStep(gpuMath, { textureDim, textureDimCreases, textureDimFaces, integrationType });
		}
		return render(gpuMath, model, { textureDim, axialStrain: computeStrain });
	};

	const dealloc = () => {
		if (gpuMath) {
			gpuMath.dealloc();
			gpuMath = undefined;
		}
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
		dealloc();
		gpuMath = GPUMath();
		model = newModel;
		({
			textureDim,
			textureDimCreases,
			textureDimFaces,
			lastPosition,
		} = initialize(gpuMath, model, options));
	};
	/**
	 * @description Reset the vertices of the model back to their original state.
	 * @returns {number} the global error as a percent
	 */
	const reset = () => {
		if (!gpuMath) { return 0; }
		gpuMath.step("zeroTexture", [], "u_position");
		gpuMath.step("zeroTexture", [], "u_lastPosition");
		gpuMath.step("zeroTexture", [], "u_lastLastPosition");
		gpuMath.step("zeroTexture", [], "u_velocity");
		gpuMath.step("zeroTexture", [], "u_lastVelocity");
		gpuMath.step("zeroThetaTexture", ["u_lastTheta"], "u_theta");
		gpuMath.step("zeroThetaTexture", ["u_theta"], "u_lastTheta");
		return render(gpuMath, model, { textureDim, axialStrain: true });
	};

	const setIntegration = (integration) => {
		integrationType = integration;
		reset();
	};

	const setCreasePercent = (percent) => {
		if (!gpuMath) { return; }
		const number = parseFloat(percent);
		gpuMath.setProgram("velocityCalc");
		gpuMath.setUniformForProgram("velocityCalc", "u_creasePercent", number, "1f");
		gpuMath.setProgram("positionCalcVerlet");
		gpuMath.setUniformForProgram("positionCalcVerlet", "u_creasePercent", number, "1f");
	};

	const setAxialStiffness = (value) => {
		if (!gpuMath) { return; }
		const number = parseFloat(value);
		gpuMath.setProgram("velocityCalc");
		gpuMath.setUniformForProgram("velocityCalc", "u_axialStiffness", number, "1f");
		gpuMath.setProgram("positionCalcVerlet");
		gpuMath.setUniformForProgram("positionCalcVerlet", "u_axialStiffness", number, "1f");
	};

	const setFaceStiffness = (value) => {
		if (!gpuMath) { return; }
		const number = parseFloat(value);
		gpuMath.setProgram("velocityCalc");
		gpuMath.setUniformForProgram("velocityCalc", "u_faceStiffness", number, "1f");
		gpuMath.setProgram("positionCalcVerlet");
		gpuMath.setUniformForProgram("positionCalcVerlet", "u_faceStiffness", number, "1f");
	};

	const setFaceStrain = (value) => {
		if (!gpuMath) { return; }
		const number = parseFloat(value);
		gpuMath.setProgram("velocityCalc");
		gpuMath.setUniformForProgram("velocityCalc", "u_calcFaceStrain", number, "1f");
		gpuMath.setProgram("positionCalcVerlet");
		gpuMath.setUniformForProgram("positionCalcVerlet", "u_calcFaceStrain", number, "1f");
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
	};
};

export default DynamicSolver;
