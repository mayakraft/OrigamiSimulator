/**
 * Origami Simulator for Svelte (c) Kraft
 * MIT license
 */
/**
 * @component
 * Svelte component and interface for Origami Simulator by Amanda Ghassaei.
 * @props
 * These props are hard coded into the app and are currently required:
 * - props.origami (the origami model in FOLD format)
 * - props.active (the active state of the folding engine, on or off)
 * - props.foldAmount (the amount the model is folded, 0.0 - 1.0)
 * - props.strain (override the material to show strain forces)
 * - props.tool (the UI tool, currently there are two: "trackball", "pull")
 * - props.showTouches (highlight the vertex/face underneath the cursor)
 * - props.showShadows (turn on three.js shadows)
 * - props.darkMode (swap materials based on light/dark mode)
 * new ones
 * - props.reset (reset the vertices of the origami model)
 */
import * as THREE from "three";
import ThreeView from "./three-view.js";
import OrigamiSimulator from "../../src/index.js";
import Highlights from "../../src/highlights.js";
import Raycasters from "../../src/raycasters.js";
import * as Materials from "../../src/materials.js";
import boundingBox from "../../src/fold/boundingBox.js";

let origami;
// tool is either ["trackball", "pull"]
let tool = "trackball";
// turn on/off Origami Simulator's folding engine
let active = true;
// override the material to show the model's strain forces
let strain = false;
// fold the origami model, float (0.0-1.0)
let foldAmount = 0.25;
// highlight vertices/faces under the cursor
let showTouches = true;
// turn on three.js shadows
let showShadows = false;
// swap materials based on the app color theme
let darkMode = true;
let reset = () => {};
let integration = "euler";
let axialStiffness = 20;
let faceStiffness = 0.2;
let joinStiffness = 0.7;
let creaseStiffness = 0.7;
let dampingRatio = 0.45;
// information relayed up from the simulator
let error = 0;

// intensity of point lights for light and dark mode
const lightIntensityLightMode = 0.45;
const lightIntensityDarkMode = 0.707;
// octahedron
// const lightVertices = [[1,0,0], [0,1,0], [0,0,1], [-1,0,0], [0,-1,0], [0,0,-1]];
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
// the following are mutually exclusive, and activated/deactivated
// based on which UI tool is currently selected.
let trackballEnabled = true;
let pullNodesEnabled = false;
// origami simulator
let simulator;
// all raycaster methods for the user interface
let raycasters;
// highlighted geometry indicating the selected vertex/face
let highlights;
//
let scene;
let camera;
// three.js lights for this scene
const lights = lightVertices.map(pos => {
	const light = new THREE.PointLight();
	light.position.set(...pos);
	light.distance = 0;
	light.decay = 2;
	light.castShadow = false;
	light.shadow.mapSize.width = 512; // default
	light.shadow.mapSize.height = 512; // default
	return light;
});
/**
 * @description Origami Simulator solver just executed. This is attached
 * to the window.requestAnimationFrame and will fire at the end of every loop
 */
const onCompute = (props) => {
	error = props.error;
	// The raycaster will update on a mousemove event, but if the origami is
	// in a folding animation, the raycaster will not update and the visuals
	// will mismatch, hence, the raycaster can fire on a frame update if needed
	raycasters.animate({ pullEnabled: pullNodesEnabled });
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
	// console.log("scene", scene, simulator);
	// on model change, update camera position

	// tool -> what happens when cursor is pressed
	trackballEnabled = (tool !== "pull");
	pullNodesEnabled = (tool === "pull");

	// forward these props to settings of origami simulator
	simulator.setActive(active);
	simulator.setStrain(strain);
	simulator.setFoldAmount(foldAmount);
	simulator.setIntegration(integration);
	simulator.setAxialStiffness(axialStiffness);
	simulator.setFaceStiffness(faceStiffness);
	simulator.setJoinStiffness(joinStiffness);
	simulator.setCreaseStiffness(creaseStiffness);
	simulator.setDampingRatio(dampingRatio);
	updateScene();
	// reset materials depending on dark or light mode
	updateStyle(darkMode, scene);
	// shadows
	simulator.setShadows(showShadows);
	[0, 3, 4, 7].forEach(i => {
		lights[i].castShadow = showShadows;
	});
	// upstream
	reset = simulator.reset;
});

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

// load a new origami model. thrown errors are because of a bad file format
const load = (FOLD) => {
	origami = FOLD;
	try {
		simulator.load(origami);
		const box = boundingBox(origami);
		modelSize = box ? Math.max(...box.span) : 1;
		updateScene();
	} catch (err) {
		window.alert(err);
	}
};
/**
 * @description cleanup all memory associated with origami simulator
 */
// onDestroy(() => {
// 	if (raycasters) { raycasters.dealloc(); }
// 	if (simulator) { simulator.dealloc(); }
// });
/**
 * @description Initialize/reset all mesh materials including those
 * associated with the hover face/vertex selection.
 */
const updateStyle = (darkMode, scene) => {
	scene.background = darkMode
		? new THREE.Color("#0F0F10")
		: new THREE.Color("#eee");
	simulator.model.materials.front = darkMode
		? Materials.materialDarkFront
		: Materials.materialLightFront;
	simulator.model.materials.back = darkMode
		? Materials.materialDarkBack
		: Materials.materialLightBack;
	highlights.face.material = darkMode
		? [Materials.materialHighlightFrontDark, Materials.materialHighlightBackDark]
		: [Materials.materialHighlightFrontLight, Materials.materialHighlightBackLight];
	highlights.point.material = darkMode
		? Materials.materialRaycastPointDark
		: Materials.materialRaycastPointLight;
	highlights.vertex.material = darkMode
		? Materials.materialHighlightVertexDark
		: Materials.materialHighlightVertexLight;
	const lineMaterial = darkMode
		? Materials.materialDarkLine
		: Materials.materialLightLine;
	Object.keys(simulator.model.lines)
		.forEach(key => { simulator.model.lines[key].material = lineMaterial; });
	const lightIntensity = darkMode
		? lightIntensityDarkMode
		: lightIntensityLightMode;
	lights.forEach(light => { light.intensity = lightIntensity; });
	// i see why this was here. material won't update on the model.
	// we need a better setter that propagates through the correct model data.
	simulator.setStrain(strain);
};

fetch("../fold/crane-cp.fold")
	.then(res => res.json())
	.then(json => load(json));

document.querySelector("#input-fold-amount")
	.addEventListener("input", (e) => {
		foldAmount = parseFloat(e.target.value);
		simulator.setFoldAmount(foldAmount);
	});

document.querySelector("#radio-webgl-tool-trackball")
	.addEventListener("input", (e) => {
		trackballEnabled = e.target.checked;
		pullNodesEnabled = !e.target.checked;
		tool = e.target.value;
		raycasters.raycasterReleaseHandler(pullNodesEnabled);
		ThreeView.setEnabled(trackballEnabled);
	});

document.querySelector("#radio-webgl-tool-pull")
	.addEventListener("input", (e) => {
		pullNodesEnabled = e.target.checked;
		trackballEnabled = !e.target.checked;
		tool = e.target.value;
		raycasters.raycasterReleaseHandler(pullNodesEnabled);
		ThreeView.setEnabled(trackballEnabled);
	});
