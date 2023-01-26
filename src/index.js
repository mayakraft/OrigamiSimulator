/**
 * Created by ghassaei on 2/22/17.
 */
import window from "./environment/window";
import Model from "./model/";
import DynamicSolver from "./dynamic/dynamicSolver";
import prepare from "./fold/prepare";
// import VideoAnimator from "./videoAnimator"; // haven't touched yet

const empty_square_fold = {
	vertices_coords:[[0,0],[1,0],[1,1],[0,1]],
	edges_vertices:[[0,1],[1,2],[2,3],[3,0]],
	edges_assignment:["B","B","B","B"],
	faces_vertices:[[0,1,2,3]]
};
/**
 * @description Origami Simulator by Amanda Ghassaei. refactored so that:
 * - global variables removed to allow for multiple simultaneous instances
 * - ability to dealloc() and reinitialize, and memory is freed.
 * - can work as a node package inside a Node JS project, including React.
 */
const OrigamiSimulator = function ({ renderer, scene, camera }) {
	// app variables
	const visible = {
		B: true,
		M: true,
		V: true,
		F: true,
		C: false,
		U: true,
	};
	let creasePercent = 0.0;
	let axialStrain = false;
	let shadows = true;

	// carryovers from global
	let nodePositionHasChanged = false;
	let shouldCenterGeo = false;
	const modelDidChange = () => {
		nodePositionHasChanged = true;
		shouldCenterGeo = true;
	};

	/** initialize the app */
	const model = new Model({
		scene,
		visible,
		axialStrain,
	});

	const solver = DynamicSolver({
		fixedHasChanged: false,
		nodePositionHasChanged: false,
		creaseMaterialHasChanged: false,
		materialHasChanged: false,
		shouldZeroDynamicVelocity: false,
		shouldCenterGeo: false,
		numSteps: 100,
		integrationType: "euler",
		strainClip: 0.5,
		calcFaceStrain: false,
		axialStiffness: 20,
		faceStiffness: 0.2,
	});

	// // app.controls = Controls(app);
	// app.UI3D = UI3D(app);
	// // app.importer = Importer(app);

	/**
	 * @description this load method can throw an error. wrap it in a try catch
	 * and deliver the error to the end user.
	 */
	const loadFOLD = function (foldObject) {
		if (!foldObject.vertices_coords || !foldObject.edges_vertices || !foldObject.faces_vertices) {
			foldObject = JSON.parse(JSON.stringify(empty_square_fold));
		}
		// app.threeView.resetModel();
		const fold = prepare(foldObject);
		model.load(fold, {
			axialStiffness: 20,
			percentDamping: 0.45, // damping ratio
			panelStiffness: 0.7,
			creaseStiffness: 0.7,
			visible,
			axialStrain,
		});
		solver.syncNodesAndEdges(model, { creasePercent });
	};

	// const changeTouchMode = (newGrabMode) => {
	//   isGrabMode = newGrabMode;
	//   // app.threeView.enableCameraRotate(true);
	//   // app.threeView.enableCameraRotate(false);
	//   // app.threeView.resetModel();
	//   // app.UI3D.hideHighlighters();
	// };

	// const getEdgesFoldAngle = () => {
	// };

	// one single iteration of the compute loop. useful to call as a draw-refresh
	const compute = () => {
		solver.solve(100, { axialStrain, creasePercent, nodePositionHasChanged, shouldCenterGeo }); // globals.numSteps
		model.needsUpdate({ axialStrain });
		// reset single loop variables
		nodePositionHasChanged = false;
		shouldCenterGeo = false;
	};

	let computeLoopID = undefined;
	function startLoop() {
		// console.log("Starting...");
		computeLoopID = window.requestAnimationFrame(startLoop);
		compute();
	}

	const stopLoop = () => {
		window.cancelAnimationFrame(computeLoopID);
		computeLoopID = undefined;
	};

	const dealloc = () => {
		stopLoop();
		model.dealloc();
		solver.dealloc();
	};

	const setFoldAmount = (value) => {
		creasePercent = value;
		solver.setCreasePercent(creasePercent);
	};

	const setStrain = (value) => {
		const boolean = !!value;
		axialStrain = boolean;
		// solverOptions.materialHasChanged = true;
		// solverOptions.fixedHasChanged = true;
		// solverOptions.nodePositionHasChanged = true;
		// solverOptions.creaseMaterialHasChanged = true;
		model.setAxialStrain(axialStrain);
	};

	const setShadows = (value) => {
		shadows = value;
		model.frontside.castShadow = shadows;
		model.frontside.receiveShadow = shadows;
		// model.backside.castShadow = shadows;
		model.backside.receiveShadow = shadows;
	};

	const app = {};
	Object.defineProperty(app, "dealloc", { value: dealloc });
	Object.defineProperty(app, "stop", { value: stopLoop });
	Object.defineProperty(app, "start", { value: startLoop });
	Object.defineProperty(app, "isOn", { get: () => computeLoopID !== undefined });
	Object.defineProperty(app, "load", { value: loadFOLD });
	// Object.defineProperty(app, "loadSVG", { value: loadSVG });
	// Object.defineProperty(app, "loadSVGString", { value: loadSVGString });
	Object.defineProperty(app, "modelDidChange", { value: modelDidChange });
	Object.defineProperty(app, "model", { get: () => model });
	Object.defineProperty(app, "setFoldAmount", { value: setFoldAmount });
	Object.defineProperty(app, "foldAmount", {
		set: setFoldAmount,
		get: () => creasePercent
	});
	Object.defineProperty(app, "setStrain", { value: setStrain });
	Object.defineProperty(app, "strain", {
		set: setStrain,
		get: () => axialStrain
	});
	Object.defineProperty(app, "setShadows", { value: setShadows });
	Object.defineProperty(app, "shadows", {
		set: setShadows,
		get: () => shadows
	});
	// Object.defineProperty(app, "getEdgesFoldAngle", {
	//   get: () => getEdgesFoldAngle
	// });

	return app;
};

export default OrigamiSimulator;
