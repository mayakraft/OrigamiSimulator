// this was helpful to get three js hooked up
// https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817
import React from "react";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import OrigamiSimulator from "./origami-simulator/";
import DragControls from "./origami-simulator/dragControls";

// provide the CP (in FOLD format) as in props as "props.cp"

class Simulator extends React.Component {

	state = {
		tool: "rotate",
		strain: false,
		isActive: true,
		foldAmount: 0.0,
	}

	foldAmountDidChange(foldAmount) {
		this.setState({ foldAmount });
		this.simulator.foldAmount = foldAmount;
	}

	strainDidPress() {
		this.setState({ strain: !this.state.strain });
	}

	isActiveDidPress() {
		this.setState({ isActive: !this.state.isActive });
		this.state.isActive ? this.simulator.stop() : this.simulator.start();
	}

	componentDidMount() {
		this.setupScene();
		this.setupLighting();
		this.setupLoop();
		window.addEventListener("resize", this.handleWindowResize.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowResize);
		window.cancelAnimationFrame(this.animationID);
		// console.log("--- dealloc: Origami Simulator");
		this.simulator.dealloc();
		// console.log("--- dealloc: THREE.JS renderer, camera, controls");
		this.renderer.renderLists.dispose();
		this.renderer.dispose();
		this.camera = null;
		this.rotateControls.dispose();
		this.dragControls.dealloc();
		this.el.removeChild(this.renderer.domElement);
	}

	handleWindowResize() {
		if (!this.el) { return; }
		// lol this doesn't work, it uses the already established canvas
		// to infer the "new" screen size. spoiler, it's the old size.
		const width = this.el.clientWidth;
		const height = this.el.clientHeight;
		// console.log("width height", width, height);
		this.renderer.setSize(width, height);
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		this.rotateControls.handleResize();
	};

	setupScene() {
		const width = this.el.clientWidth;
		const height = this.el.clientHeight;
		// console.log("+++ initialize: THREE.JS, new scene, camera, controls");
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 100);
		// console.log(this.camera)
		this.rotateControls = new TrackballControls(this.camera, this.el);
		// console.log("+++ initialize: Origami Simulator");
		this.simulator = OrigamiSimulator({
			renderer: this.renderer,
			scene: this.scene,
			camera: this.camera,
		});

		this.dragControls = new DragControls({
			renderer: this.renderer,
			camera: this.camera,
			simulator: this.simulator,
		});
		this.dragControls.nodePositionsDidChange = () => {
			this.simulator.modelDidChange();
		};

		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(width, height);
		this.scene.background = new THREE.Color("#eee");
		this.camera.position.z = 2;
		this.camera.lookAt(0, 0, 0);
		this.camera.up = new THREE.Vector3(0, 1, 0);

		this.rotateControls.rotateSpeed = 4.0;
		this.rotateControls.zoomSpeed = 1.2;
		this.rotateControls.panSpeed = 0.8;
		this.rotateControls.dynamicDampingFactor = 0.2;

		this.rotateControls.maxDistance = 30;
		this.rotateControls.minDistance = 0.1;

		this.el.appendChild(this.renderer.domElement);
		
		this.simulator.load(this.props.cp);

		const sphereGeometry = new THREE.SphereGeometry(0.03, 32, 16);
		const faceGeometry = new THREE.BufferGeometry();
		const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc55 });
		const faceMaterial = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, color: 0x77cc55 });
		// two triangle faces, three vertices with x, y, z
		const buffer = new Float32Array(Array(2 * 3 * 3).fill(0.0));
		const position = new THREE.BufferAttribute(buffer, 3);
		faceGeometry.setAttribute("position", position);
		this.highlightedVertex = new THREE.Mesh(sphereGeometry, sphereMaterial);
		this.highlightedFace = new THREE.Mesh(faceGeometry, faceMaterial);

		this.scene.add(this.highlightedVertex);
		this.scene.add(this.highlightedFace);
	}

	setupLighting() {
		// octahedral (vertices) arrangement of lights
		const radius = 10;
		const lights = [
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 1],
			[-1, 0, 0],
			[0, -1, 0],
			[0, 0, -1],
		].map(vec => vec.map(n => n * radius))
			.map(vec => {
			const light = new THREE.PointLight(0xffffff, 1, 0);
			light.position.set(...vec);
			return light;
		});
		lights.forEach(light => this.scene.add(light));
	}

	highlightVertex(nearest) {
		const visible = (nearest && nearest.vertex != null);
		this.highlightedVertex.visible = visible;
		if (!visible) { return; }
		this.highlightedVertex.position.set(
			this.simulator.model.positions[nearest.vertex * 3 + 0],
			this.simulator.model.positions[nearest.vertex * 3 + 1],
			this.simulator.model.positions[nearest.vertex * 3 + 2]
		);
	};

	highlightFace(nearest) {
		const visible = (nearest && nearest.face != null);
		this.highlightedFace.visible = visible;
		if (!visible) { return; }
		const zDistance = 0.001;
		// const zDistance = 0.1;
		const normal = nearest.face_normal.clone().multiplyScalar(zDistance);
		const normals = [normal, normal.clone().multiplyScalar(-1)];
		const facePoints = nearest.face_vertices
			.map(vert => [0, 1, 2].map(i => this.simulator.model.positions[vert * 3 + i]))
			.map(vertex => new THREE.Vector3(...vertex));
		[facePoints, facePoints]
			.map((tri, i) => tri.map(p => p.clone().add(normals[i])))
			.forEach((tri, i) => tri.forEach((p, j) => {
				this.highlightedFace.geometry.attributes.position.array[i * 9 + j * 3 + 0] = p.x;
				this.highlightedFace.geometry.attributes.position.array[i * 9 + j * 3 + 1] = p.y;
				this.highlightedFace.geometry.attributes.position.array[i * 9 + j * 3 + 2] = p.z;
			}));
		this.highlightedFace.geometry.attributes.position.needsUpdate = true;
		this.highlightedFace.geometry.computeBoundingBox();
		this.highlightedFace.geometry.computeBoundingSphere();
	};

	setupLoop() {
		const animate = () => {
			this.animationID = window.requestAnimationFrame(animate);
			this.rotateControls.update();
			if (this.dragControls.nearest) { // if show nearest
				this.highlightVertex(this.dragControls.nearest);
				this.highlightFace(this.dragControls.nearest)
			}
			this.renderer.render(this.scene, this.camera);
		};
		animate();
	}

	render() {
		if (this.simulator) {
			this.simulator.strain = this.state.strain;
			// this.simulator.grab = this.state.tool === "grab";
			this.rotateControls.enabled = this.state.tool === "rotate"
			this.dragControls.enabled = this.state.tool === "grab";
			// console.log(this.rotateControls);
		}
		return (<>
			<div className="simulator" ref={ref => (this.el = ref)} />
		</>);
	}
}

export default Simulator;
