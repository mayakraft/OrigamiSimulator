<script lang="ts">
  import { Model } from "../../src/simulator/Model.ts";
  import { RenderTexture } from "../../src/simulator/RenderTexture.ts";

  let { model }: { model: Model } = $props();

  //let gpuMath = $derived(model.gpuMath);
  //let gpuMathTextures = $derived(model.gpuMath?.textures);

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
      const arr = model?.gpuMath?.[name];
      const dim = model?.gpuMath?.[size];
      originalPosition.setFloatPixels(arr, dim, dim);
      originalPosition.draw();
    };
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
