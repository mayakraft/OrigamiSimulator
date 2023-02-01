/**
 * Origami Simulator for React (c) Kraft
 * MIT license
 */
import { useState, useEffect } from "react";
import * as THREE from "three";
import "./Simulator.css";
import TrackballView from "./WebGL/TrackballView.jsx";
import OrigamiSimulator from "../../src/index";
import Highlights from "../../src/touches/highlights";
import Raycasters from "../../src/touches/raycasters";
import boundingBox from "../../src/fold/boundingBox";
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
/**
 * @description React component and interface for Origami Simulator
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
	const [modelSize, setModelSize] = useState(1);
	// the following are mutually exclusive, and activated/deactivated
	// based on which UI tool is currently selected.
	const [trackballEnabled, setTrackballEnabled] = useState(true);
	const [pullNodesEnabled, setPullNodesEnabled] = useState(false);
	// "touches" are the current position of the cursor and where the raycaster
	// has intersected the origami mesh, nearest vertex/face, etc..
	const [touches, setTouches] = useState([]);
	// origami simulator
	let simulator;
	// all raycaster methods for the user interface
	let raycasters;
	// highlighted geometry indicating the selected vertex/face
	let highlights;
	// three.js lights for this scene
	let lights;
	//
	let renderer;
	let scene;
	let camera;
	/**
	 * @description Origami Simulator solver just executed. This is attached
	 * to the window.requestAnimationFrame and will fire at the end of every loop
	 */
	const onCompute = ({ error }) => {
		props.setError(error);
		// The raycaster will update on a mousemove event, but if the origami is
		// in a folding animation, the raycaster will not update and the visuals
		// will mismatch, hence, the raycaster can fire on a frame update if needed
		raycasters.animate({ pullEnabled: pullNodesEnabled });
	};
	/**
	 * @description This is the callback from ThreeView after three.js has
	 * finished initializing. This is not the JS framework's builtin function.
	 */
	const didMount = ({ renderer: r, scene: s, camera: c }) => {
		renderer = r;
		scene = s;
		camera = c;
		// initialize origami simulator
		simulator = OrigamiSimulator({ scene, onCompute });
		highlights = Highlights({ scene, simulator });
		raycasters = Raycasters({
			renderer, camera, simulator, setTouches,
		});
		lights = lightVertices.map(pos => {
			const light = new THREE.PointLight();
			light.position.set(...pos);
			light.intensity = 0.45;
			light.distance = 0;
			light.decay = 2;
			light.castShadow = false;
			light.shadow.mapSize.width = 512; // default
			light.shadow.mapSize.height = 512; // default
			scene.add(light);
			return light;
		});
		// upstream
		props.setReset(() => simulator.reset);
	};
	// load a new origami model. thrown errors are because of a bad file format
	useEffect(() => {
		try {
			simulator.load(props.origami);
			const box = boundingBox(props.origami);
			const vmax = box ? Math.max(...box.span) : 1;
			setModelSize(vmax);
		} catch (error) {
			window.alert(error);
		}
	}, [simulator, props.origami]);
	// on model change, update camera position
	useEffect(() => {
		const vmax = modelSize;
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
	}, [modelSize, camera]);
	// on model change, update the position of the lights
	useEffect(() => {
		const radius = modelSize * Math.SQRT1_2;
		// todo, might need these inside the initialize method
		lights.forEach((light, i) => {
			light.position.set(...lightVertices[i % lightVertices.length]);
			light.position.setLength(radius);
			light.shadow.camera.near = radius / 10; // 0.5 default
			light.shadow.camera.far = radius * 10; // 500 default
		});
	}, [lights, modelSize]);
	// tool -> what happens when cursor is pressed
	useEffect(() => {
		setTrackballEnabled(props.tool !== "pull");
		setPullNodesEnabled(props.tool === "pull");
	}, [props.tool]);
	// forward these props to settings of origami simulator
	useEffect(() => {
		if (simulator) { simulator.setActive(props.active); }
	}, [simulator, props.active]);
	useEffect(() => {
		if (simulator) { simulator.setStrain(props.strain); }
	}, [simulator, props.strain]);
	useEffect(() => {
		if (simulator) { simulator.setFoldAmount(props.foldAmount); }
	}, [simulator, props.foldAmount]);
	useEffect(() => {
		if (simulator) { simulator.setIntegration(props.integration); }
	}, [simulator, props.integration]);
	useEffect(() => {
		if (simulator) { simulator.setAxialStiffness(props.axialStiffness); }
	}, [simulator, props.axialStiffness]);
	useEffect(() => {
		if (simulator) { simulator.setFaceStiffness(props.faceStiffness); }
	}, [simulator, props.faceStiffness]);
	useEffect(() => {
		if (simulator) { simulator.setJoinStiffness(props.joinStiffness); }
	}, [simulator, props.joinStiffness]);
	useEffect(() => {
		if (simulator) { simulator.setCreaseStiffness(props.creaseStiffness); }
	}, [simulator, props.creaseStiffness]);
	useEffect(() => {
		if (simulator) { simulator.setDampingRatio(props.dampingRatio); }
	}, [simulator, props.dampingRatio]);
	// deliver the touch data from the raycaster to be highlighted
	useEffect(() => highlights.highlightTouch(touches[0]), [highlights, touches]);
	// nitpicky. upon tool change we need raycasterPullVertex to be undefined
	useEffect(() => raycasters.raycasterReleaseHandler(pullNodesEnabled), [raycasters, pullNodesEnabled]);
	// shadows
	useEffect(() => {
		simulator.shadows = props.showShadows;
		[0, 3, 4, 7].forEach(i => {
			lights[i].castShadow = props.showShadows;
		});
	}, [lights, simulator, props.showShadows]);

	/**
	 * @description This is tied to the animation loop event managed by
	 * the ThreeView, attached to window.requestAnimationFrame.
	 */
	const animate = () => {
		// The raycaster will update on a mousemove event, but if the origami is
		// in a folding animation, the raycaster will not update and the visuals
		// will mismatch, hence, the raycaster can fire on a frame update if needed
		// raycasters.animate({ pullEnabled: pullNodesEnabled() });
	};
	/**
	 * @description cleanup all memory associated with origami simulator
	 */
	// onCleanup(() => {
	// 	if (raycasters) { raycasters.dealloc(); }
	// 	if (simulator) { simulator.dealloc(); }
	// });
	return (
		<div className="Simulator">
			<TrackballView
				// props for the TrackballView
				enabled={trackballEnabled}
				maxDistance={modelSize * 30}
				minDistance={modelSize * 0.1}
				panSpeed={1}
				rotateSpeed={4}
				zoomSpeed={16}
				dynamicDampingFactor={1}
				// props for the ThreeView child component
				didMount={didMount}
				didResize={() => {}}
				animate={animate}
			/>
		</div>
	);
};

export default Simulator;
