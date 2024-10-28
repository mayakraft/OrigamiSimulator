<!--
	@component
	Svelte component and interface for Origami Simulator by Amanda Ghassaei.
	@props
	These props are hard coded into the app and are currently required:
	- props.origami (the origami model in FOLD format)
	- props.active (the active state of the folding engine, on or off)
	- props.foldAmount (the amount the model is folded, 0.0 - 1.0)
	- props.strain (override the material to show strain forces)
	- props.tool (the UI tool, currently there are two: "trackball", "pull")
	- props.showTouches (highlight the vertex/face underneath the cursor)
	- props.showShadows (turn on three.js shadows)
	new ones
	- props.reset (reset the vertices of the origami model)
 -->

<script lang="ts">
	import * as THREE from "three";
	import TrackballView from "./ThreeJS/TrackballView.svelte";
	import GPUVisualizer from "./GPUVisualizer.svelte";
	//import { OrigamiSimulator } from "../../src/index.ts";
	import { OrigamiSimulator } from "../../src/SimulatorThree.ts";
	import Highlights from "../../src/touches/highlights";
	import Raycasters from "../../src/touches/raycasters";
	import boundingBox from "../../src/fold/boundingBox";

  import Style from "./state/Style.svelte.js";
  import Simulator from "./state/Simulator.svelte.js";
  import Solver from "./state/Solver.svelte.js";
  import { untrack } from "svelte";

	let {
    origami,
  } = $props();

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

	const lightRadius = $state(10);

	// model size will update the position of the lights, camera, and
	// trackball controlls, allowing for models to be of vastly different scales
	let modelSize = $state(1);

	// "touches" arises from the cursor position, it is an array containing
	// a point object for every raycasted intersection with the mesh.
	let touches = [];

	// origami simulator
	let simulator = $state(new OrigamiSimulator());

	// all raycaster methods for the user interface
	let raycasters;

	// highlighted geometry indicating the selected vertex/face
	let highlights = Highlights({ simulator });

	// three.js
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;

	// three.js lights for this scene
	let lights = lightVertices.map(([x, y, z]) => {
		const light = new THREE.PointLight();
		light.position.set(x, y, z);
		light.position.setLength(lightRadius);
		light.decay = 0;
		light.distance = lightRadius * Math.E;
		light.castShadow = false;
		light.shadow.mapSize.width = 512; // default
		light.shadow.mapSize.height = 512; // default
		return light;
	});

	// Origami Simulator solver just executed. This is attached
	// to the window.requestAnimationFrame and will fire at the end of every loop
	const onCompute = (props: { error: number }) => {
		Simulator.error = props.error;
		// The raycaster will update on a mousemove event, but if the origami is
		// in a folding animation, the raycaster will not update and the visuals
		// will mismatch, hence, the raycaster can fire on a frame update if needed
		raycasters.animate(Simulator.tool === "pull");
	};

	// This is the callback from ThreeView after three.js has
	// finished initializing. This is not the JS framework's builtin function.
	const didMount = ({ renderer, scene: _scene, camera: _camera }) => {
		scene = _scene;
		camera = _camera;
		// initialize origami simulator
		simulator.scene = (scene);
		simulator.onCompute = (onCompute);
		highlights.setScene(scene);
		raycasters = Raycasters({
			renderer,
			camera,
			simulator,
			setTouches: t => { touches = t; },
		});
		lights.forEach(light => scene.add(light));
		Simulator.exportModel = simulator.export;
	};

	// load a new origami model. thrown errors are because of a bad file format
	$effect(() => {
    const newFile = origami;
    let box;
    untrack(() => {
      try {
        simulator.load(newFile);
        box = boundingBox(newFile);
      } catch (error) {
        console.error(error);
        window.alert(error);
      }
    })
    if (box !== undefined) {
      modelSize = box ? Math.max(...box.span) : 1;
    }
	});

	// on model change, update camera position
	$effect(() => {
    if (!camera) { return; }
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
  });

	// on model change, update the position of the lights
	$effect(() => {
		const radius = modelSize * Math.SQRT1_2;
		// todo, might need these inside the initialize method
		lightVertices.forEach(([x, y, z], i) => {
			lights[i].position.set(x, y, z);
			lights[i].position.setLength(radius * lightRadius);
			lights[i].distance = radius * lightRadius * Math.E;
			lights[i].shadow.camera.near = radius / 10; // 0.5 default
			lights[i].shadow.camera.far = radius * 10; // 500 default
		});
	});

	$effect(() => Simulator.reset = simulator.reset);

	//settings from the Simulator store
	$effect(() => { simulator.active = Simulator.active; });
	$effect(() => { simulator.foldAmount = Simulator.foldAmount; });
	$effect(() => { simulator.strain = Simulator.strain; });
	$effect(() => { simulator.integration = Solver.integration; });
	$effect(() => { simulator.axialStiffness = Solver.axialStiffness; });
	$effect(() => { simulator.faceStiffness = Solver.faceStiffness; });
	$effect(() => { simulator.joinStiffness = Solver.joinStiffness; });
	$effect(() => { simulator.creaseStiffness = Solver.creaseStiffness; });
	$effect(() => { simulator.dampingRatio = Solver.dampingRatio; });

	// show/hide things
	$effect(() => { simulator.shadows = Style.showShadows; });
	$effect(() => {
    [0, 3, 4, 7].forEach(i => {
		  lights[i % lights.length].castShadow = Style.showShadows;
    });
  });
	$effect(() => {
    Style.showTouches
      ? highlights.highlightTouch(touches[0])
      : highlights.clear();
  });
	$effect(() => {
    simulator.frontVisible = Style.showFront;
	  simulator.backVisible = Style.showBack;
  });

	$effect(() => {
    simulator.getLines().B.visible = Style.showBoundary;
    simulator.getLines().M.visible = Style.showMountain;
    simulator.getLines().V.visible = Style.showValley;
    simulator.getLines().F.visible = Style.showFlat;
    simulator.getLines().J.visible = Style.showJoin;
    simulator.getLines().U.visible = Style.showUnassigned;
  });

	// colors
	$effect(() => {
    simulator.frontColor = (Style.frontColor);
    simulator.backColor = (Style.backColor);
    // todo bring this back
    //Object.values(simulator.getMaterials().line)
    //  .forEach(m => { m.opacity = Style.lineOpacity; });
    simulator.boundaryColor = (Style.boundaryColor);
    simulator.mountainColor = (Style.mountainColor);
    simulator.valleyColor = (Style.valleyColor);
    simulator.flatColor = (Style.flatColor);
    simulator.joinColor = (Style.joinColor);
    simulator.unassignedColor = (Style.unassignedColor);
    if (scene) { scene.background = new THREE.Color(Style.backgroundColor); }
  });

	// nitpicky ui thing. upon tool change we need raycasterPullVertex to be undefined
	$effect(() => { if (raycasters) { raycasters.raycasterReleaseHandler(Simulator.tool); }});

	// cleanup all memory associated with origami simulator
	const dealloc = () => {
		if (raycasters) { raycasters.dealloc(); }
		if (simulator) { simulator.dealloc(); }
		if (highlights) { highlights.dealloc(); }
	};

  $effect(() => dealloc);
</script>

<div class="container">
  <div>
    <TrackballView
      enabled={Simulator.tool !== "pull"}
      maxDistance={modelSize * 30}
      minDistance={modelSize * 0.1}
      panSpeed={1}
      rotateSpeed={4}
      zoomSpeed={16}
      dynamicDampingFactor={1}
      didMount={didMount}
    />
  </div>
  <!--
  <div class="panel">
    <GPUVisualizer {simulator} />
  </div>
  -->
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    flex: 1;
  }
  .container {
    display: flex;
    flex-direction: row;
  }
  .panel {
    flex: 0 1 320px;
    background-color: black;
  }
</style>
