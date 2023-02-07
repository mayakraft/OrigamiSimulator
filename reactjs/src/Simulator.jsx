/**
 * Origami Simulator for React (c) Kraft
 * MIT license
 */
import { Component } from "react";
import * as THREE from "three";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import "./Simulator.css";
import ThreeView from "./WebGL/ThreeView.jsx";
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
class Simulator extends Component {
	// the following are mutually exclusive, and activated/deactivated
	// based on which UI tool is currently selected.
	trackballEnabled = true;
	// const [trackballEnabled, setTrackballEnabled] = useState(true);
	// const [pullNodesEnabled, setPullNodesEnabled] = useState(false);

	touches = [];

	setTouches(newTouches) {
		this.touches = newTouches;
		// deliver the touch data from the raycaster to be highlighted
		if (this.highlights) { this.highlights.highlightTouch(this.touches[0]); }
	}

	modelSize = 1.0;

	setModelSize(newModelSize) {
		this.modelSize = newModelSize;
		const radius = this.modelSize * Math.SQRT1_2;
		// on model change, update camera position
		if (this.camera) {
			const vmax = this.modelSize;
			// scale is due to the camera's FOV
			const scale = 1.25;
			// the distance the camera should be to nicely fit the object
			const fitLength = this.camera.aspect > 1
				? vmax * scale
				: vmax * scale * (1 / this.camera.aspect);
			const length = fitLength / this.camera.position.length();
			this.camera.position.multiplyScalar(length);
			this.camera.lookAt(0, 0, 0);
			this.camera.far = vmax * 100;
			this.camera.near = vmax / 100;
		}
		// on model change, update the position of the lights
		if (this.lights) {
			this.lights.forEach((light, i) => {
				light.position.set(...lightVertices[i % lightVertices.length]);
				light.position.setLength(radius);
				light.shadow.camera.near = radius / 10; // 0.5 default
				light.shadow.camera.far = radius * 10; // 500 default
			});
		}
	}

	// load a new origami model. thrown errors are because of a bad file format
	loadModel(FOLD) {
		if (!this.simulator) { return; }
		try {
			this.simulator.load(FOLD);
			const box = boundingBox(FOLD);
			const vmax = box ? Math.max(...box.span) : 1;
			this.setModelSize(vmax);
		} catch (error) {
			window.alert(error);
		}
	}

	constructor(props) {
		super(props);
		// three.js lights for this scene
		this.lights = lightVertices.map(pos => {
			const light = new THREE.PointLight();
			light.position.set(...pos);
			light.intensity = 0.5;
			light.distance = 0;
			light.decay = 2;
			light.castShadow = false;
			light.shadow.mapSize.width = 512; // default
			light.shadow.mapSize.height = 512; // default
			return light;
		});
	}

	shouldComponentUpdate(nextProps) {
		if (!this.simulator) { return true; }
		this.quietUpdate(nextProps);
		return false;
	}

	/**
	 * @description cleanup all memory associated with origami simulator
	 */
	componentWillUnmount() {
		if (this.raycasters) { this.raycasters.dealloc(); }
		if (this.simulator) { this.simulator.dealloc(); }
		if (this.trackball) { this.trackball.dispose(); }
	}

	/**
	 * @description Origami Simulator solver just executed. This is attached
	 * to the window.requestAnimationFrame and will fire at the end of every loop
	 */
	onCompute({ error }) {
		// enabling this will cause the component to quietUpdate every frame
		this.props.setError(error);

		// The raycaster will update on a mousemove event, but if the origami is
		// in a folding animation, the raycaster will not update and the visuals
		// will mismatch, hence, the raycaster can fire on a frame update if needed
		this.raycasters.animate({ pullEnabled: this.props.tool === "pull" });
	}

	/**
	 * @description This is the callback from ThreeView after three.js has
	 * finished initializing. This is not the JS framework's builtin function.
	 */
	didMount({ renderer, scene, camera }) {
		this.renderer = renderer;
		this.scene = scene;
		this.camera = camera;
		this.lights.forEach(light => scene.add(light));
		if (this.raycasters) { this.raycasters.dealloc(); }
		if (this.simulator) { this.simulator.dealloc(); }
		if (this.trackball) { this.trackball.dispose(); }
		// initialize origami simulator
		const simulator = OrigamiSimulator({
			scene,
			onCompute: (...args) => this.onCompute(...args),
		});
		const highlights = Highlights({ scene, simulator });
		this.simulator = simulator;
		this.highlights = highlights;
		this.raycasters = Raycasters({
			renderer,
			camera,
			simulator,
			setTouches: (...args) => this.setTouches(...args),
		});
		this.trackball = new TrackballControls(camera, renderer.domElement);
		this.trackball.panSpeed = 1;
		this.trackball.rotateSpeed = 4;
		this.trackball.zoomSpeed = 16;
		this.trackball.dynamicDampingFactor = 1;

		this.props.setReset(() => simulator.reset);
		this.props.setExportModel(() => simulator.export);
		if (this.props.origami) {
			this.loadModel(this.props.origami);
		}
		this.quietUpdate(this.props, true);
	}

	didResize() {
		if (this.trackball) { this.trackball.handleResize(); }
	}

	animate() {
		if (this.trackball) { this.trackball.update(); }
	}

	/**
	 * @description forward all modified props to origami simulator,
	 * do this only if props have changed, and bypass DOM reload
	 */
	quietUpdate(props, setAll = false) {
		if (setAll || props.origamiDidLoad) {
			if (props.origami) {
				this.loadModel(props.origami);
			}
			props.setOrigamiDidLoad(false);
		}
		if (setAll || this.active !== props.active) {
			this.active = props.active;
			this.simulator.setActive(this.active);
		}
		if (setAll || this.foldAmount !== props.foldAmount) {
			this.foldAmount = props.foldAmount;
			this.simulator.setFoldAmount(this.foldAmount);
		}
		if (setAll || this.strain !== props.strain) {
			this.strain = props.strain;
			this.simulator.setStrain(this.strain);
		}
		if (setAll || this.integration !== props.integration) {
			this.integration = props.integration;
			this.simulator.setIntegration(this.integration);
		}
		if (setAll || this.axialStiffness !== props.axialStiffness) {
			this.axialStiffness = props.axialStiffness;
			this.simulator.setAxialStiffness(this.axialStiffness);
		}
		if (setAll || this.faceStiffness !== props.faceStiffness) {
			this.faceStiffness = props.faceStiffness;
			this.simulator.setFaceStiffness(this.faceStiffness);
		}
		if (setAll || this.joinStiffness !== props.joinStiffness) {
			this.joinStiffness = props.joinStiffness;
			this.simulator.setJoinStiffness(this.joinStiffness);
		}
		if (setAll || this.creaseStiffness !== props.creaseStiffness) {
			this.creaseStiffness = props.creaseStiffness;
			this.simulator.setCreaseStiffness(this.creaseStiffness);
		}
		if (setAll || this.dampingRatio !== props.dampingRatio) {
			this.dampingRatio = props.dampingRatio;
			this.simulator.setDampingRatio(this.dampingRatio);
		}
		if (setAll || this.showShadows !== props.showShadows) {
			this.showShadows = props.showShadows;
			if (this.lights) {
				this.simulator.setShadows(props.showShadows);
				[0, 3, 4, 7].forEach(i => {
					this.lights[i].castShadow = this.showShadows;
				});
			}
		}
		if (setAll || this.frontColor !== props.frontColor) {
			this.frontColor = props.frontColor;
			this.simulator.setFrontColor(this.frontColor);
		}
		if (setAll || this.backColor !== props.backColor) {
			this.backColor = props.backColor;
			this.simulator.setBackColor(this.backColor);
		}
		if (setAll || this.lineColor !== props.lineColor) {
			this.lineColor = props.lineColor;
			this.simulator.setLineColor(this.lineColor);
		}
		if (setAll || this.lineOpacity !== props.lineOpacity) {
			this.lineOpacity = props.lineOpacity;
			this.simulator.materials.line.opacity = this.lineOpacity;
		}
		if (setAll || this.backgroundColor !== props.backgroundColor) {
			if (this.scene) {
				this.backgroundColor = props.backgroundColor;
				this.scene.background = new THREE.Color(props.backgroundColor);
			}
		}
		if (this.highlights && !props.showTouches) {
			this.highlights.clear();
		}
		this.trackballEnabled = props.tool !== "pull";
		if (this.trackball) {
			this.trackball.enabled = this.trackballEnabled;
			this.trackball.maxDistance = this.modelSize * 30;
			this.trackball.minDistance = this.modelSize * 0.1;
		}
		// upon tool change we need raycasterPullVertex to be undefined
		// does not seem to be necessary in React
		// if (setAll || this.tool !== props.tool) {
		// 	if (this.raycasters) { this.raycasters.raycasterReleaseHandler(); }
		// }
	}

	render() {
		return (
			<div className="Simulator">
				<ThreeView
					didResize={(...args) => this.didResize(...args)}
					didMount={(...args) => this.didMount(...args)}
					animate={() => this.animate()}
				/>
			</div>
		);
	}
}

export default Simulator;
