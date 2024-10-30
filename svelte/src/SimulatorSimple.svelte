<script lang="ts">
  import * as THREE from "three";
  import { untrack } from "svelte";
  import TrackballView from "./ThreeJS/TrackballView.svelte";
  import Simulator from "./state/Simulator.svelte.ts";
  import { Model } from "../../src/model/Model.ts";
  import { MeshThree } from "../../src/three/MeshThree.ts";
  import { boundingBox, type BoundingBox } from "../../src/fold/boundingBox.ts";

  let { origami } = $props();

  let model: Model;
  let mesh: MeshThree;
  let camera: THREE.PerspectiveCamera;
  let modelSize = $state(1);

  // This is the callback from the ThreeView component
  // after three.js has finished loading.
  const didMount = ({ scene, camera: trackballCamera }) => {
    camera = trackballCamera;
    mesh = new MeshThree({ scene });
    scene.add(new THREE.AmbientLight(0xffffff, 2.0));
    // cleanup all memory associated with origami simulator
    return () => {
      model?.dealloc();
      mesh?.dealloc();
    };
  };

  // this is the solver loop, attach this to requestAnimationFrame
  let computeLoopID: number | undefined;
  const computeLoop = () => {
    computeLoopID = window.requestAnimationFrame(computeLoop);
    Simulator.error = model?.solve(100);
    mesh?.sync();
  };

  // start or stop the animation loop, depending on Simulator.active
  $effect(() => {
    if (computeLoopID) {
      window.cancelAnimationFrame(computeLoopID);
      computeLoopID = undefined;
    }
    if (Simulator.active) {
      computeLoop();
    }
  });

  // on file load.
  // untrack is needed to prevent re-loading at other times too.
  $effect(() => {
    origami;
    let box: BoundingBox | undefined;
    untrack(() => {
      try {
        model?.dealloc();
        model = new Model($state.snapshot(origami), {
          creasePercent: Simulator.foldAmount,
        });
        mesh?.setModel(model);
        box = boundingBox($state.snapshot(origami));
        Simulator.exportModel = model.export;
        Simulator.reset = model.reset;
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
    model.foldAmount = Simulator.foldAmount;
  });

  $effect(() => {
    model.strain = Simulator.strain;
    mesh.strain = Simulator.strain;
  });
</script>

<TrackballView
  enabled={Simulator.tool !== "pull"}
  maxDistance={modelSize * 30}
  minDistance={modelSize * 0.1}
  panSpeed={1}
  rotateSpeed={4}
  zoomSpeed={16}
  dynamicDampingFactor={1}
  {didMount} />
