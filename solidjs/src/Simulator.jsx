/**
 * Origami Simulator for SolidJS (c) Kraft
 * MIT license
 */
import { createSignal, createEffect, onCleanup } from "solid-js";
import * as THREE from "three";
import Style from "./Simulator.module.css";
import TrackballView from "./WebGL/TrackballView.jsx";
import OrigamiSimulator from "../../src/index";
import Highlights from "../../src/touches/highlights";
import Raycasters from "../../src/touches/raycasters";
import boundingBox from "../../src/fold/boundingBox";

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
const lightRadius = 10;
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
 * - props.reset (reset the vertices of the origami model)
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
	 * @description Origami Simulator solver just executed. This is attached
	 * to the window.requestAnimationFrame and will fire at the end of every loop
	 */
	const onCompute = ({ error }) => {
		props.setError(error);
		// The raycaster will update on a mousemove event, but if the origami is
		// in a folding animation, the raycaster will not update and the visuals
		// will mismatch, hence, the raycaster can fire on a frame update if needed
		raycasters.animate(pullNodesEnabled());
	};
	/**
	 * @description This is the callback from ThreeView after three.js has
	 * finished initializing. This is not the JS framework's builtin function.
	 */
	const didMount = ({ renderer, scene, camera }) => {
		// initialize origami simulator
		simulator = OrigamiSimulator({ scene, onCompute });
		highlights = Highlights({ scene, simulator });
		raycasters = Raycasters({
			renderer, camera, simulator, setTouches,
		});
		lights = lightVertices.map(pos => {
			const light = new THREE.PointLight();
			light.position.set(...pos);
			light.position.setLength(lightRadius);
			light.distance = lightRadius * Math.E;
			light.castShadow = false;
			light.shadow.mapSize.width = 512; // default
			light.shadow.mapSize.height = 512; // default
			scene.add(light);
			return light;
		});
		// load a new origami model. thrown errors are because of a bad file format
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
			// the distance the camera should be to nicely fit the object
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
			lightVertices.forEach((pos, i) => {
				lights[i].position.set(...pos);
				lights[i].position.setLength(radius * lightRadius);
				lights[i].distance = radius * lightRadius * Math.E;
				lights[i].shadow.camera.near = radius / 10; // 0.5 default
				lights[i].shadow.camera.far = radius * 10; // 500 default
			});
		});
		// tool -> what happens when cursor is pressed
		createEffect(() => {
			setTrackballEnabled(props.tool() !== "pull");
			setPullNodesEnabled(props.tool() === "pull");
		});
		// forward these props to settings of origami simulator
		createEffect(() => simulator.setActive(props.active()));
		createEffect(() => simulator.setStrain(props.strain()));
		createEffect(() => simulator.setFoldAmount(props.foldAmount()));
		createEffect(() => simulator.setIntegration(props.integration()));
		createEffect(() => simulator.setAxialStiffness(props.axialStiffness()));
		createEffect(() => simulator.setFaceStiffness(props.faceStiffness()));
		createEffect(() => simulator.setJoinStiffness(props.joinStiffness()));
		createEffect(() => simulator.setCreaseStiffness(props.creaseStiffness()));
		createEffect(() => simulator.setDampingRatio(props.dampingRatio()));

		// show/hide things
		createEffect(() => {
			simulator.shadows = props.showShadows();
			[0, 3, 4, 7].forEach(i => {
				lights[i].castShadow = props.showShadows();
			});
		});
		createEffect(() => {
			if (props.showTouches()) { highlights.highlightTouch(touches()[0]); }
		});
		createEffect(() => {
			if (!props.showTouches()) { highlights.clear(); }
		});

		createEffect(() => { simulator.getModel().frontMesh.visible = props.showFront(); });
		createEffect(() => { simulator.getModel().backMesh.visible = props.showBack(); });
		createEffect(() => { simulator.getLines().B.visible = props.showBoundary(); });
		createEffect(() => { simulator.getLines().M.visible = props.showMountain(); });
		createEffect(() => { simulator.getLines().V.visible = props.showValley(); });
		createEffect(() => { simulator.getLines().F.visible = props.showFlat(); });
		createEffect(() => { simulator.getLines().J.visible = props.showJoin(); });
		createEffect(() => { simulator.getLines().U.visible = props.showUnassigned(); });

		createEffect(() => simulator.setFrontColor(props.frontColor()));
		createEffect(() => simulator.setBackColor(props.backColor()));
		createEffect(() => simulator.setLineColor(props.lineColor()));
		createEffect(() => Object.values(simulator.getMaterials().line)
			.forEach(m => { m.opacity = props.lineOpacity(); }));

		createEffect(() => simulator.setBoundaryColor(props.boundaryColor()));
		createEffect(() => simulator.setMountainColor(props.mountainColor()));
		createEffect(() => simulator.setValleyColor(props.valleyColor()));
		createEffect(() => simulator.setFlatColor(props.flatColor()));
		createEffect(() => simulator.setJoinColor(props.joinColor()));
		createEffect(() => simulator.setUnassignedColor(props.unassignedColor()));

		createEffect(() => { scene.background = new THREE.Color(props.backgroundColor()); });

		// createEffect(() => { simulator.getMaterials().line.opacity = props.lineOpacity(); });
		// deliver the touch data from the raycaster to be highlighted
		// nitpicky. upon tool change we need raycasterPullVertex to be undefined
		createEffect(() => raycasters.raycasterReleaseHandler(pullNodesEnabled()));
		// reset materials depending on dark or light mode
		// createEffect(() => updateStyle(props.darkMode(), scene));
		// upstream
		props.setReset(() => simulator.reset);
		props.setExportModel(() => simulator.export);
	};
	/**
	 * @description cleanup all memory associated with origami simulator
	 */
	onCleanup(() => {
		if (raycasters) { raycasters.dealloc(); }
		if (simulator) { simulator.dealloc(); }
	});

	return (
		<div class={Style.Simulator}>
			<TrackballView
				enabled={trackballEnabled()}
				maxDistance={modelSize() * 30}
				minDistance={modelSize() * 0.1}
				panSpeed={1}
				rotateSpeed={4}
				zoomSpeed={16}
				dynamicDampingFactor={1}
				didMount={didMount}
			/>
		</div>
	);
};

export default Simulator;
