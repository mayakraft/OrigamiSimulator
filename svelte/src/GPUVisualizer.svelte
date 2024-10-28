<script lang="ts">
	import { OrigamiSimulator } from "../../src/index";
	import { DebugTextures } from "../../src/newModel/DebugTextures.ts";
	import { DebugTexture } from "../../src/newModel/DebugTexture.ts";

  let {
    simulator,
  }: { simulator: OrigamiSimulator } = $props();

  $effect(() => console.log("simulator", simulator));

  let gpuMath = $derived(simulator?.newModel?.gpuMath);
  let gpuMathTextures = $derived(simulator?.newModel?.gpuMath?.textures);

  // one for each
  let canvas_originalPosition: HTMLCanvasElement = $state();
  let originalPosition = $derived(new DebugTexture(canvas_originalPosition));
  let texture_originalPosition = $derived(gpuMathTextures?.u_originalPosition);

  const data = new Float32Array([
    1, 1, 1, 1,
    1, 1, 0, 1,
    1, 0, 1, 1,
    1, 0, 0, 1,
    0, 1, 1, 1,
    0, 1, 0, 1,
    0, 0, 1, 1,
    0, 0, 0, 1,
    1, 1, 1, 1,
    1, 1, 0, 1,
    1, 0, 1, 1,
    1, 0, 0, 1,
    0, 1, 1, 1,
    0, 1, 0, 1,
    0, 0, 1, 1,
    0, 0, 0, 1,
  ]);

  const onclickTest = () => {
    console.log("draw", data, 4, 4);
    originalPosition.setPixels(data, 4, 4);
    originalPosition.draw();
  }

  // textureDim
  //"u_originalPosition",
  //"u_lastPosition",
  //"u_externalForces",
  //"u_mass",

  // textureDimCreases
  //"u_creaseMeta",
  //"u_creaseVectors",

  // textureDimEdges
  //"u_beamMeta",

  const onclick = () => {
    const arr = simulator?.newModel?.gpuMath?.originalPosition;
    const size = simulator?.newModel?.gpuMath.textureDim;
    originalPosition.setPixels(arr, size, size);
    originalPosition.draw();
  };

  const onclick2 = () => {
    const arr = simulator?.newModel?.gpuMath?.lastPosition;
    const size = simulator?.newModel?.gpuMath.textureDim;
    originalPosition.setPixels(arr, size, size);
    originalPosition.draw();
  };

  const onclick3 = () => {
    const arr = simulator?.newModel?.gpuMath?.externalForces;
    const size = simulator?.newModel?.gpuMath.textureDim;
    originalPosition.setPixels(arr, size, size);
    originalPosition.draw();
  };

  const onclick4 = () => {
    const arr = simulator?.newModel?.gpuMath?.mass;
    const size = simulator?.newModel?.gpuMath.textureDim;
    originalPosition.setPixels(arr, size, size);
    originalPosition.draw();
  };

  const onclick5 = () => {
    const arr = simulator?.newModel?.gpuMath?.creaseMeta;
    const size = simulator?.newModel?.gpuMath.textureDimCreases;
    originalPosition.setPixels(arr, size, size);
    originalPosition.draw();
  };

  const onclick6 = () => {
    const arr = simulator?.newModel?.gpuMath?.creaseVectors;
    const size = simulator?.newModel?.gpuMath.textureDimCreases;
    originalPosition.setPixels(arr, size, size);
    originalPosition.draw();
  };

  const onclick7 = () => {
    const arr = simulator?.newModel?.gpuMath?.beamMeta;
    const size = simulator?.newModel?.gpuMath.textureDimEdges;
    originalPosition.setPixels(arr, size, size);
    originalPosition.draw();
  };

  //const logData = () => console.log(
  //  "draw",
  //  simulator?.newModel?.gpuMath?.originalPosition,
  //  simulator?.newModel?.gpuMath.textureDim,
  //  simulator?.newModel?.gpuMath.textureDim,
  //);
</script>

<div class="column">
  <button onclick={onclickTest}>draw test</button>
  <button onclick={onclick}>draw</button>
  <button onclick={onclick2}>draw</button>
  <button onclick={onclick3}>draw</button>
  <button onclick={onclick4}>draw</button>
  <button onclick={onclick5}>draw</button>
  <button onclick={onclick6}>draw</button>
  <button onclick={onclick7}>draw</button>
  <canvas bind:this={canvas_originalPosition}></canvas>
</div>

<style>
  button {
    width: 100%;
    height: 2rem;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  canvas {
    width: 320px;
    height: 240px;
  }
</style>
