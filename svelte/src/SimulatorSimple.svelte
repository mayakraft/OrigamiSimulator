<script lang="ts">
  import * as THREE from "three";
  import { untrack } from "svelte";
  import TrackballView from "./ThreeJS/TrackballView.svelte";
  import Settings from "./state/Settings.svelte.ts";
  import { Model } from "../../src/simulator/Model.ts";
  import { MeshThree } from "../../src/three/MeshThree.ts";
  import { boundingBox, type BoundingBox } from "../../src/fold/boundingBox.ts";

  let { origami } = $props();

  let model: Model = $state();
  let mesh: MeshThree = $state();
  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let modelSize = $state(1);

  // This is the callback from the ThreeView component
  // after three.js has finished loading.
  const didMount = ({ scene: defaultScene, camera: trackballCamera }) => {
    scene = defaultScene;
    camera = trackballCamera;
    scene.add(new THREE.AmbientLight(0xffffff, 2.0));
  };

  // cleanup all memory associated with origami simulator
  const dealloc = () => {
    console.log("simulator cleanup");
    model?.dealloc();
    mesh?.dealloc();
  };

  // this is the solver loop, attach this to requestAnimationFrame
  let computeLoopID: number | undefined;
  const computeLoop = () => {
    computeLoopID = window.requestAnimationFrame(computeLoop);
    Settings.error = model?.solve(100);
    mesh?.sync();
  };

  // start or stop the animation loop, depending on Settings.active
  $effect(() => {
    if (computeLoopID) {
      window.cancelAnimationFrame(computeLoopID);
      computeLoopID = undefined;
    }
    if (Settings.active) {
      computeLoop();
    }
  });

  // on file load.
  // untrack is needed to prevent re-loading at other times too.
  $effect(() => {
    const fold = $state.snapshot(origami);
    let box: BoundingBox | undefined;
    untrack(() => {
      try {
        model?.dealloc();
        mesh?.dealloc();
        model = new Model(fold);
        mesh = new MeshThree(model);
        mesh.scene = scene;
        box = boundingBox(fold);
        Settings.exportModel = model.export.bind(model);
        Settings.reset = model.reset.bind(model);
      } catch (error) {
        console.error(error);
        window.alert(error);
      }
    });
    if (box !== undefined) {
      modelSize = box ? Math.max(...box.span) : 1;
    }
  });

  // on file load.
  // move the camera to aspect-fit to the model
  $effect(() => {
    if (!camera) {
      return;
    }
    // scale is due to the camera's FOV
    const scale = 1.25;
    const fitLength =
      camera.aspect > 1 ? modelSize * scale : modelSize * scale * (1 / camera.aspect);
    const length = fitLength / camera.position.length();
    camera.position.multiplyScalar(length);
    camera.lookAt(0, 0, 0);
    camera.far = modelSize * 100;
    camera.near = modelSize / 100;
  });

  $effect(() => {
    model.foldAmount = Settings.foldAmount;
  });

  $effect(() => {
    model.strain = Settings.strain;
    mesh.strain = Settings.strain;
  });

  // cleanup when navigating away from the page.
  $effect(() => dealloc);
</script>

<TrackballView
  enabled={Settings.tool !== "pull"}
  maxDistance={modelSize * 30}
  minDistance={modelSize * 0.1}
  panSpeed={1}
  rotateSpeed={4}
  zoomSpeed={16}
  dynamicDampingFactor={1}
  {didMount} />
