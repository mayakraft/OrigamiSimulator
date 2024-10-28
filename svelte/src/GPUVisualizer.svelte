<script lang="ts">
	import { OrigamiSimulator } from "../../src/index";
	import { RenderTexture } from "../../src/newModel/RenderTexture.ts";

  let {
    simulator,
  }: { simulator: OrigamiSimulator } = $props();

  //let gpuMath = $derived(simulator?.newModel?.gpuMath);
  //let gpuMathTextures = $derived(simulator?.newModel?.gpuMath?.textures);

  // one for each
  let canvas_originalPosition: HTMLCanvasElement = $state();
  let originalPosition = $derived(new RenderTexture(canvas_originalPosition));
  //let texture_originalPosition = $derived(gpuMathTextures?.u_originalPosition);

  const locations = [
    { name: "originalPosition", size: "textureDim" },
    { name: "lastPosition", size: "textureDim" },
    { name: "externalForces", size: "textureDim" },
    { name: "mass", size: "textureDim" },
    { name: "creaseMeta", size: "textureDimCreases" },
    { name: "creaseVectors", size: "textureDimCreases" },
    { name: "beamMeta", size: "textureDimEdges" },
  ];

  const onclicks = locations.map(({ name, size }) => {
    return () => {
      const arr = simulator?.newModel?.gpuMath?.[name];
      const dim = simulator?.newModel?.gpuMath?.[size];
      originalPosition.setFloatPixels(arr, dim, dim);
      originalPosition.draw();
    }
  });
</script>

<div class="column">
  {#each onclicks as onclick, i}
    <button {onclick}>{locations[i].name}</button>
  {/each}
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
