/**
 * Created by ghassaei on 2/22/17.
 */
import Model from "./model/index";
import DynamicSolver from "./dynamicSolver/index";
import prepare from "./fold/prepare";
/**
 * @description Origami Simulator by Amanda Ghassaei.
 * refactored so that:
 * - encapsulate global variables to allow for multiple simultaneous instances
 * - ability to dealloc() and reinitialize, memory will properly free itself.
 * - rewrite in ES6 module format to work in popular JS frameworks.
 *
 * This will create an instance of an Origami Simulator, which is meant to
 * be created just after you create a ThreeJS canvas, so that this can
 * bind itself to the ThreeJS instance.
 * @param {object} props provide a pre-initialized three.js scene (THREE.Scene)
 */
const OrigamiSimulator = ({ scene, onCompute } = {}) => {
	// app variables
	// const visible = {
	// 	B: true,
	// 	M: true,
	// 	V: true,
	// 	F: true,
	// 	C: false,
	// 	U: true,
	// };
	const model = new Model({ scene });
	const solver = DynamicSolver();
	// this is the error in the folding, the deviation
	// from where it's supposed to be.
	let error = 0;
	/**
	 * @description Fold the origami, between 0.0 and 1.0.
	 */
	let foldAmount = 0.0;
	const setFoldAmount = (value) => {
		const number = parseFloat(value);
		foldAmount = !Number.isNaN(number) ? number : 0.0;
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
	const setShadows = (newShadows) => {
		shadows = newShadows;
		model.frontside.castShadow = shadows;
		model.frontside.receiveShadow = shadows;
		// model.backside.castShadow = shadows;
		model.backside.receiveShadow = shadows;
	};
	/**
	 * @description When the user pulls on a node, call this method, it will
	 * relay the information to the solver
	 */
	const nodeDidMove = () => solver.nodeDidMove();
	/**
	 * @description One call to origami simulator's solver
	 */
	const compute = () => {
		// error is the global error in the folding of the model
		// not a computational error.
		error = solver.solve(100, { axialStrain: strain });
		model.needsUpdate({ axialStrain: strain });
		// reset single loop variables
	};
	/**
	 * @description Start a loop with window.requestAnimationFrame
	 * which will call the compute method on every frame.
	 */
	let computeLoopID;
	const computeLoop = () => {
		computeLoopID = window.requestAnimationFrame(computeLoop);
		compute();
		if (onCompute) { onCompute({ error }); }
	};
	/**
	 * @description Activate origami simulator's compute loop.
	 */
	let active = false;
	const setActive = (isActive) => {
		// no matter the new state, ensure that no loop is (already) running
		if (computeLoopID) {
			window.cancelAnimationFrame(computeLoopID);
			computeLoopID = undefined;
		}
		active = isActive;
		if (active) { computeLoop(); }
	};
	/**
	 * @description this load method can throw an error. wrap it in a try catch
	 * and deliver the error to the end user.
	 */
	const load = (foldObject) => {
		const fold = prepare(foldObject);
		model.load(fold, { axialStrain: strain });
		solver.setModel(model, { creasePercent: foldAmount });
	};
	/**
	 *
	 */
	const setIntegration = (value) => {
		solver.setIntegration(value);
	};
	const setAxialStiffness = (value) => {
		solver.setAxialStiffness(value);
		model.setAxialStiffness(value);
		solver.update();
	};
	const setFaceStiffness = (value) => {
		solver.setFaceStiffness(value);
		solver.update();
	};
	const setJoinStiffness = (value) => {
		model.setJoinStiffness(value);
		solver.update();
	};
	const setCreaseStiffness = (value) => {
		model.setCreaseStiffness(value);
		solver.update();
	};
	const setDampingRatio = (value) => {
		model.setDampingRatio(value);
		solver.update();
	};
	/**
	 * @description Reset the vertices of the model to their original position
	 */
	const reset = () => solver.reset();
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
		reset,
		dealloc,
		nodeDidMove,
		setActive,
		setFoldAmount,
		setStrain,
		setShadows,
		setIntegration,
		setAxialStiffness,
		setFaceStiffness,
		setJoinStiffness,
		setCreaseStiffness,
		setDampingRatio,
	};
	// getters and setters
	// Object.defineProperty(app, "scene", { get: () => scene, set: setScene });
	Object.defineProperty(app, "active", { get: () => active, set: setActive });
	Object.defineProperty(app, "foldAmount", { get: () => foldAmount, set: setFoldAmount });
	Object.defineProperty(app, "strain", { get: () => strain, set: setStrain });
	Object.defineProperty(app, "shadows", { get: () => shadows, set: setShadows });
	return app;
};

export default OrigamiSimulator;
