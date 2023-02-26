<script>
	import Simulator from "./Simulator.svelte";
	import Settings from "./Settings.svelte";
	// example model
	import craneCP from "../../fold/crane-cp.fold?raw";

	// the origami model, in FOLD format
	let origami = JSON.parse(craneCP);
	// ask origami simulator to export the current 3D state
	let exportModel;
</script>

<div class="App">
	<Settings
		bind:origami={origami}
		{exportModel}
	/>
	<Simulator
		{origami}
		bind:exportModel={exportModel}
	/>
</div>

<style>
	.App {
		height: 100%;
	}
</style>
