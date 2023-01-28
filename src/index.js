/**
 * Created by ghassaei on 2/22/17.
 */
import Model from "./model";
import DynamicSolver from "./dynamic/dynamicSolver";
import prepare from "./fold/prepare";
/**
 * @description Origami Simulator by Amanda Ghassaei.
 * refactored so that:
 * - encapsulate global variables to allow for multiple simultaneous instances
 * - ability to dealloc() and reinitialize, memory will properly free itself.
 * - rewrite in ES6 module for functionality in popular JS frameworks.
 *
 * This will create an instance of an Origami Simulator, which is meant to
 * be created just after you create a ThreeJS canvas, so that Ori Sim can
 * bind itself to the ThreeJS instance.
 */
const OrigamiSimulator = function ({ scene }) {
	// app variables
	const visible = {
		B: true,
		M: true,
		V: true,
		F: true,
		C: false,
		U: true,
	};
	const model = new Model({ scene });
	const solver = DynamicSolver({
		fixedHasChanged: false,
		nodePositionHasChanged: false,
		shouldCenterGeo: false,
		creaseMaterialHasChanged: false,
		materialHasChanged: false,
		shouldZeroDynamicVelocity: false,
		numSteps: 100,
		integrationType: "euler",
		strainClip: 0.5,
		calcFaceStrain: false,
		axialStiffness: 20,
		faceStiffness: 0.2,
	});
	/**
	 * @description Fold the origami, between 0.0 and 1.0.
	 */
	let foldAmount = 0.0;
	const setFoldAmount = (value) => {
		const float = parseFloat(value);
		foldAmount = !Number.isNaN(float) ? float : 0.0;
		solver.setCreasePercent(foldAmount);
	};
	/**
	 * @description Override the material with the strain forces visualization.
	 */
	let strain = false;
	const setStrain = (value) => {
		strain = !!value;
		model.setAxialStrain(strain);
	};
	/**
	 * @description Activate three.js shadows on the materials.
	 */
	let shadows = false;
	const setShadows = (value) => {
		shadows = value;
		model.frontside.castShadow = shadows;
		model.frontside.receiveShadow = shadows;
		// model.backside.castShadow = shadows;
		model.backside.receiveShadow = shadows;
	};
	/**
	 * @description When the user pulls on a node, call this method, it will
	 * relay the information to the solver
	 */
	let nodePositionHasChanged = false;
	let shouldCenterGeo = false;
	const nodeDidMove = () => {
		nodePositionHasChanged = true;
		shouldCenterGeo = true;
	};
	/**
	 * @description One call to origami simulator's solver
	 */
	const compute = () => {
		solver.solve(100, {
			axialStrain: strain,
			creasePercent: foldAmount,
			nodePositionHasChanged,
			shouldCenterGeo,
			// globals.numSteps
		});
		model.needsUpdate({ axialStrain: strain });
		// reset single loop variables
		nodePositionHasChanged = false;
		shouldCenterGeo = false;
	};
	/**
	 * @description Start a loop with window.requestAnimationFrame
	 * which will call the compute method on every frame.
	 */
	let computeLoopID;
	const computeLoop = () => {
		computeLoopID = window.requestAnimationFrame(computeLoop);
		compute();
	};
	/**
	 * @description Activate origami simulator's compute loop.
	 */
	let active = false;
	const setActive = (isActive) => {
		active = isActive;
		if (active) {
			computeLoop();
		} else {
			window.cancelAnimationFrame(computeLoopID);
			computeLoopID = undefined;
		}
	};
	/**
	 * @description this load method can throw an error. wrap it in a try catch
	 * and deliver the error to the end user.
	 */
	const load = function (foldObject) {
		const fold = prepare(foldObject);
		model.load(fold, {
			axialStiffness: 20,
			percentDamping: 0.45,
			panelStiffness: 0.7,
			creaseStiffness: 0.7,
			visible,
			axialStrain: strain,
		});
		solver.syncNodesAndEdges(model, { creasePercent: foldAmount });
	};
	/**
	 * @description Stop the compute loop and free all associated memory
	 */
	const dealloc = () => {
		setActive(false);
		model.dealloc();
		solver.dealloc();
	};
	/**
	 * @description Origami Simulator
	 */
	const app = {
		load,
		model,
		dealloc,
		nodeDidMove,
		setActive,
		setFoldAmount,
		setStrain,
		setShadows,
	};
	// getters and setters
	Object.defineProperty(app, "active", { get: () => active, set: setActive });
	Object.defineProperty(app, "foldAmount", { get: () => foldAmount, set: setFoldAmount });
	Object.defineProperty(app, "strain", { get: () => strain, set: setStrain });
	Object.defineProperty(app, "shadows", { get: () => shadows, set: setShadows });
	return app;
};

export default OrigamiSimulator;
