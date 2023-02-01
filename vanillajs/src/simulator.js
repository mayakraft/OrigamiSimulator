/**
 * Origami Simulator (c) Kraft
 * MIT license
 */
import * as THREE from "three";
import ThreeView from "./three-view.js";
import OrigamiSimulator from "../../src/index.js";
import Highlights from "../../src/highlights.js";
import Raycasters from "../../src/raycasters.js";
import * as Materials from "../../src/materials.js";
import boundingBox from "../../src/fold/boundingBox.js";
// tool is either ["trackball", "pull"]
let tool = "trackball";
// override the material to show the model's strain forces
let strain = false;
// fold the origami model, float (0.0-1.0)
let foldAmount = 0.25;
// cube
const lightVertices = [
	[+1, +1, +1],
	[-1, +1, +1],
	[+1, -1, +1],
	[-1, -1, +1],
	[+1, +1, -1],
	[-1, +1, -1],
	[+1, -1, -1],
	[-1, -1, -1],
];
// model size will update the position of the lights, camera, and
// trackball controlls, allowing for models to be of vastly different scales
let modelSize = 1;
// origami simulator
let simulator;
// all raycaster methods for the user interface
let raycasters;
// highlighted geometry indicating the selected vertex/face
let highlights;
// three.js
let scene;
let camera;
const lights = lightVertices.map(pos => {
	const light = new THREE.PointLight();
	light.position.set(...pos);
	return light;
});
/**
 * @description when a new model loads, set the camera and lights
 * to be a nice distance away
 */
const updateScene = () => {
	// scale is due to the camera's FOV
	const scale = 1.25;
	// the distance the camera should be to nicely fit the object
	const fitLength = camera.aspect > 1
		? modelSize * scale
		: modelSize * scale * (1 / camera.aspect);
	const length = fitLength / camera.position.length();
	camera.position.multiplyScalar(length);
	camera.lookAt(0, 0, 0);
	camera.far = modelSize * 100;
	camera.near = modelSize / 100;
	ThreeView.trackball.maxDistance = modelSize * 30;
	ThreeView.trackball.minDistance = modelSize * 0.1;
	// on model change, update the position of the lights
	const radius = modelSize * Math.SQRT1_2;
	// todo, might need these inside the initialize method
	lights.forEach((light, i) => {
		light.position.set(...lightVertices[i % lightVertices.length]);
		light.position.setLength(radius);
		light.shadow.camera.near = radius / 10; // 0.5 default
		light.shadow.camera.far = radius * 10; // 500 default
	});
};
/**
 * @description Initialize/reset all mesh materials including those
 * associated with the hover face/vertex selection.
 */
const updateStyle = () => {
	scene.background = new THREE.Color("#0F0F10");
	simulator.model.materials.front = Materials.materialDarkFront;
	simulator.model.materials.back = Materials.materialDarkBack;
	highlights.face.material = [
		Materials.materialHighlightFrontDark,
		Materials.materialHighlightBackDark,
	];
	highlights.point.material = Materials.materialRaycastPointDark;
	highlights.vertex.material = Materials.materialHighlightVertexDark;
	const lineMaterial = Materials.materialDarkLine;
	Object.keys(simulator.model.lines)
		.forEach(key => { simulator.model.lines[key].material = lineMaterial; });
	lights.forEach(light => { light.intensity = 0.707; });
	// i see why this was here. material won't update on the model.
	// we need a better setter that propagates through the correct model data.
	simulator.setStrain(strain);
};
/**
 * @description Origami Simulator solver just executed. This is attached
 * to the window.requestAnimationFrame and will fire at the end of every loop
 */
const onCompute = () => {
	// The raycaster will update on a mousemove event, but if the origami is
	// in a folding animation, the raycaster will not update and the visuals
	// will mismatch, hence, the raycaster can fire on a frame update if needed
	raycasters.animate({ pullEnabled: tool === "pull" });
};
/**
 * @description This is the callback from ThreeView after three.js has
 * finished initializing. This is not the JS framework's builtin function.
 */
window.addEventListener("load", () => {
	const renderer = ThreeView.renderer;
	scene = ThreeView.scene;
	camera = ThreeView.camera;
	// initialize origami simulator
	simulator = OrigamiSimulator({ scene, onCompute });
	highlights = Highlights({ scene, simulator });
	raycasters = Raycasters({
		renderer,
		camera,
		simulator,
		setTouches: touches => { highlights.highlightTouch(touches[0]); },
	});
	lights.forEach(light => scene.add(light));
	simulator.setActive(true);
	simulator.setStrain(strain);
	simulator.setFoldAmount(foldAmount);
	updateScene();
	updateStyle();
});
/**
 * @description cleanup all memory associated with origami simulator.
 * note: window "unload" event does not reliably fire, especially on mobile.
 */
window.addEventListener("unload", () => {
	if (raycasters) { raycasters.dealloc(); }
	if (simulator) { simulator.dealloc(); }
});

// load a new origami model. thrown errors are because of a bad file format
const load = (FOLD) => {
	try {
		simulator.load(FOLD);
		const box = boundingBox(FOLD);
		modelSize = box ? Math.max(...box.span) : 1;
		updateScene();
	} catch (err) {
		window.alert(err);
	}
};

// load example
fetch("../fold/crane-cp.fold")
	.then(res => res.json())
	.then(json => load(json));

// bind event handlers to UI elements
document.querySelector("#file-dialog")
	.addEventListener("input", (e) => {
		const reader = new FileReader();
		reader.onload = event => {
			try { load(JSON.parse(event.target.result)); }
			catch (error) { window.alert(error); }
		};
		if (e.target.files.length) {
			reader.readAsText(e.target.files[0]);
		}
	});
document.querySelector("#checkbox-active")
	.addEventListener("input", (e) => {
		simulator.setActive(e.target.checked);
	});
document.querySelector("#input-fold-amount")
	.addEventListener("input", (e) => {
		foldAmount = parseFloat(e.target.value);
		simulator.setFoldAmount(foldAmount);
	});
document.querySelector("#radio-tool-trackball")
	.addEventListener("input", (e) => {
		tool = e.target.value;
		raycasters.raycasterReleaseHandler(false);
		ThreeView.trackball.enabled = true;
	});
document.querySelector("#radio-tool-pull")
	.addEventListener("input", (e) => {
		tool = e.target.value;
		raycasters.raycasterReleaseHandler(true);
		ThreeView.trackball.enabled = false;
	});
document.querySelector("#checkbox-strain")
	.addEventListener("input", (e) => {
		strain = e.target.checked;
		simulator.setStrain(strain);
	});
