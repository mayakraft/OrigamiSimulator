/**
 * Origami Simulator for SolidJS (c) Kraft
 * MIT license
 */
import { createSignal, createEffect, onCleanup } from "solid-js";
import * as THREE from "three";
import Style from "./Simulator.module.css";
import TrackballView from "../WebGL/TrackballView";
import OrigamiSimulator from "../../../src/index.js";
import Highlights from "../../../src/highlights.js";
import Raycasters from "../../../src/raycasters.js";
import * as Materials from "../../../src/materials";
import boundingBox from "../../../src/fold/boundingBox";

// intensity of point lights for light and dark mode
const lightIntensityLightMode = 0.45;
const lightIntensityDarkMode = 0.707;
// octahedron
// const lightVertices = [[1,0,0], [0,1,0], [0,0,1], [-1,0,0], [0,-1,0], [0,0,-1]];
// cube
const lightVertices = [
	[ 1,  1,  1],
	[-1,  1,  1],
	[ 1, -1,  1],
	[-1, -1,  1],
	[ 1,  1, -1],
	[-1,  1, -1],
	[ 1, -1, -1],
	[-1, -1, -1],
];
/**
 * @description SolidJS component and interface for Origami Simulator
 * by Amanda Ghassaei.
 * @param {object} props These props are hard coded into the app and
 * are currently required:
 * - props.origami (the origami model in FOLD format)
 * - props.active (the active state of the folding engine, on or off)
 * - props.foldAmount (the amount the model is folded, 0.0 - 1.0)
 * - props.strain (override the material to show strain forces)
 * - props.tool (the UI tool, currently there are two: "trackball", "pull")
 * - props.showTouches (highlight the vertex/face underneath the cursor)
 * - props.showShadows (turn on three.js shadows)
 * - props.darkMode (swap materials based on light/dark mode)
 */
const Simulator = (props) => {
	// model size will update the position of the lights, camera, and
	// trackball controlls, allowing for models to be of vastly different scales
	const [modelSize, setModelSize] = createSignal(1);
	// the following are mutually exclusive, and activated/deactivated
	// based on which UI tool is currently selected.
	const [trackballEnabled, setTrackballEnabled] = createSignal(true);
	const [pullNodesEnabled, setPullNodesEnabled] = createSignal(false);
	// "touches" are the current position of the cursor and where the raycaster
	// has intersected the origami mesh, nearest vertex/face, etc..
	const [touches, setTouches] = createSignal([]);
	// origami simulator
	let simulator;
	// all raycaster methods for the user interface
	let raycasters;
	// highlighted geometry indicating the selected vertex/face
	let highlights;
	// three.js lights for this scene
	let lights;
	/**
	 * @description This is the callback from ThreeView after three.js has
	 * finished initializing. This is not the JS framework's builtin function.
	 */
	const onMount = ({ renderer, scene, camera }) => {
		// initialize origami simulator
		simulator = OrigamiSimulator({ renderer, scene, camera });
		highlights = Highlights({ scene, simulator });
		raycasters = Raycasters({ renderer, scene, camera, simulator, setTouches });
		lights = lightVertices.map(pos => {
			const light = new THREE.PointLight();
			light.position.set(...pos);
			light.distance = 0;
			light.decay = 2;
			light.castShadow = false;
			light.shadow.mapSize.width = 512; // default
			light.shadow.mapSize.height = 512; // default
			scene.add(light);
			return light;
		});
		// load a new origami model. thrown errors will be bad file format.
		createEffect(() => {
			try {
				simulator.load(props.origami());
				const box = boundingBox(props.origami());
				const vmax = box ? Math.max(...box.span) : 1;
				setModelSize(vmax);
			} catch (error) {
				window.alert(error);
			}
		});
		// on model change, update camera position
		createEffect(() => {
			const vmax = modelSize();
			// scale is due to the camera's FOV
			const scale = 1.25;
			// the distance the camera should be to nicely fit the object (of size vmax)
			const fitLength = camera.aspect > 1
				? vmax * scale
				: vmax * scale * (1 / camera.aspect);
			const length = fitLength / camera.position.length();
			camera.position.multiplyScalar(length);
			camera.lookAt(0, 0, 0);
			camera.far = vmax * 100;
			camera.near = vmax / 100;
		});
		// on model change, update the position of the lights
		createEffect(() => {
			const radius = modelSize() * Math.SQRT1_2;
			// todo, might need these inside the initialize method
			lights.forEach((light, i) => {
				light.position.set(...lightVertices[i % lightVertices.length]);
				light.position.setLength(radius);
				light.shadow.camera.near = radius / 10; // 0.5 default
				light.shadow.camera.far = radius * 10; // 500 default
			});
		});
		// tool -> what happens when cursor is pressed
		createEffect(() => {
			setTrackballEnabled(props.tool() !== "pull");
			setPullNodesEnabled(props.tool() === "pull");
		});
		// forward these props to settings of origami simulator
		createEffect(() => props.active() ? simulator.start() : simulator.stop());
		createEffect(() => simulator.setStrain(props.strain()));
		createEffect(() => simulator.setFoldAmount(props.foldAmount()));
		// deliver the touch data from the raycaster to be highlighted
		createEffect(() => highlights.highlightTouch(touches()[0]));
		// nitpicky. upon tool change we need raycasterPullVertex to be undefined
		createEffect(() => raycasters.raycasterReleaseHandler(props.tool()));
		// reset materials depending on dark or light mode
		createEffect(() => updateStyle(props.darkMode(), scene));
		// shadows
		createEffect(() => {
			simulator.shadows = props.showShadows();
			[0, 3, 4, 7].forEach(i => {
				lights[i].castShadow = props.showShadows();
			});
		});
	};

	onCleanup(() => {
		raycasters.dealloc();
		simulator.dealloc();
	});

	const animate = () => {
		raycasters.animate({ pullEnabled: pullNodesEnabled() });
	};

	// setup (or re-apply) all mesh materials, like when switching to dark mode.
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
		simulator.setStrain(props.strain());
	};

	return (<>
		<div class={Style.Simulator}>
			<TrackballView
				// props for the TrackballView
				enabled={trackballEnabled()}
				maxDistance={modelSize() * 30}
				minDistance={modelSize() * 0.1}
				panSpeed={1}
				rotateSpeed={4}
				zoomSpeed={16}
				dynamicDampingFactor={1}
				// props for the ThreeView child component
				didMount={onMount}
				didResize={() => {}}
				animate={animate}
			/>
		</div>
	</>);
};

export default Simulator;
