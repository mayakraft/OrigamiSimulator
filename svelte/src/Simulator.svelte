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
  import { untrack } from "svelte";
  import TrackballView from "./ThreeJS/TrackballView.svelte";
  import GPUVisualizer from "./GPUVisualizer.svelte";
  import Style from "./state/Style.svelte.ts";
  import Simulator from "./state/Simulator.svelte.ts";
  import Solver from "./state/Solver.svelte.ts";
  import { OrigamiSimulator } from "../../src/index.ts";
  import { boundingBox, type BoundingBox } from "../../src/fold/boundingBox.ts";
  // these pertain to the touch interaction which uses the raycaster
  import { Highlights } from "../../src/touches/Highlights.ts";
  import { Raycasters } from "../../src/touches/Raycasters.ts";
  import type { RayTouch } from "../../src/touches/makeTouches.ts";

  let { origami } = $props();

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
  let modelCenter: [number, number, number] = $state([0, 0, 0]);

  // "touches" arises from the cursor position, it is an array containing
  // a point object for every raycasted intersection with the mesh.
  let touches: RayTouch[] = $state([]);

  // origami simulator
  let simulator = $state(new OrigamiSimulator());

  // all raycaster methods for the user interface
  let raycasters: Raycasters;

  // highlighted geometry indicating the selected vertex/face
  let highlights: Highlights;

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
    raycasters?.animate(Simulator.tool === "pull");
  };

  // cleanup all memory associated with origami simulator
  const dealloc = () => {
    raycasters?.dealloc();
    simulator?.dealloc();
    highlights?.dealloc();
  };

  // This is the callback from ThreeView after three.js has
  // finished initializing. This is not the JS framework's builtin function.
  const didMount = ({ renderer, scene: _scene, camera: _camera }) => {
    scene = _scene;
    camera = _camera;
    // initialize origami simulator
    simulator.scene = scene;
    simulator.onCompute = onCompute;
    //highlights = new Highlights({ simulator, parent: simulator.mesh.layer });
    highlights = new Highlights({ simulator, parent: scene });
    raycasters = new Raycasters({
      renderer,
      camera,
      simulator,
      setTouches: (t: RayTouch[]) => {
        touches = t;
      },
    });
    lights.forEach((light) => scene.add(light));
    Simulator.exportModel = simulator.export.bind(simulator);
    return dealloc;
  };

  // load a new origami model. thrown errors are because of a bad file format
  $effect(() => {
    const newFile = origami;
    let box: BoundingBox | undefined;
    untrack(() => {
      try {
        simulator.load(newFile);
        box = boundingBox(newFile);
      } catch (error) {
        console.error(error);
        window.alert(error);
      }
    });
    if (box !== undefined) {
      //modelCenter = [
      //  (box.max[0] - box.min[0]) / 2,
      //  (box.max[1] - box.min[1]) / 2,
      //  (box.max[2] || 0) - (box.min[2] || 0) / 2,
      //];
      modelSize = box ? Math.max(...box.span) : 1;
    }
  });

  // on model change, update camera position
  $effect(() => {
    if (!camera) {
      return;
    }
    // scale is due to the camera's FOV
    const scale = 1.25;
    // the distance the camera should be to nicely fit the object
    const fitLength =
      camera.aspect > 1 ? modelSize * scale : modelSize * scale * (1 / camera.aspect);
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

  $effect(() => (Simulator.reset = simulator.reset.bind(simulator)));

  //settings from the Simulator store
  $effect(() => {
    simulator.active = Simulator.active;
    simulator.foldAmount = Simulator.foldAmount;
    simulator.strain = Simulator.strain;
  });

  $effect(() => {
    simulator.integration = Solver.integration;
    simulator.axialStiffness = Solver.axialStiffness;
    simulator.faceStiffness = Solver.faceStiffness;
    simulator.joinStiffness = Solver.joinStiffness;
    simulator.creaseStiffness = Solver.creaseStiffness;
    simulator.dampingRatio = Solver.dampingRatio;
  });

  // show/hide things
  $effect(() => {
    simulator.shadows = Style.showShadows;
  });

  $effect(() => {
    [0, 3, 4, 7].forEach((i) => {
      lights[i % lights.length].castShadow = Style.showShadows;
    });
  });

  $effect(() => {
    simulator.mesh.needsUpdate();
    //console.log("recomputing bounding box", touches[0]);
    Style.showTouches ? highlights?.highlightTouch(touches[0]) : highlights?.clear();
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
    simulator.frontColor = Style.frontColor;
    simulator.backColor = Style.backColor;
    Object.values(simulator.getLineMaterials()).forEach((m) => {
      m.opacity = Style.lineOpacity;
    });
    simulator.boundaryColor = Style.boundaryColor;
    simulator.mountainColor = Style.mountainColor;
    simulator.valleyColor = Style.valleyColor;
    simulator.flatColor = Style.flatColor;
    simulator.joinColor = Style.joinColor;
    simulator.unassignedColor = Style.unassignedColor;
    if (scene) {
      scene.background = new THREE.Color(Style.backgroundColor);
    }
  });

  // nitpicky ui thing. upon tool change we need raycasterPullVertex to be undefined
  $effect(() => {
    raycasters?.raycasterReleaseHandler(Simulator.tool);
  });
</script>

<div class="container">
  <div>
    <TrackballView
      enabled={Simulator.tool !== "pull"}
      target={modelCenter}
      maxDistance={modelSize * 30}
      minDistance={modelSize * 0.1}
      panSpeed={1}
      rotateSpeed={4}
      zoomSpeed={16}
      dynamicDampingFactor={1}
      {didMount} />
  </div>
  <div class="panel">
    <GPUVisualizer {simulator} />
  </div>
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
