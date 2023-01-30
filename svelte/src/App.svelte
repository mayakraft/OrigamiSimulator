<script>
	import Simulator from "./Simulator.svelte";
	import TrackballView from "./WebGL/TrackballView.svelte";
	import Settings from "./Settings.svelte";
	// example file
	import craneCP from "../../fold/crane-cp.fold?raw";

	// the origami model, in FOLD format
	let origami = JSON.parse(craneCP);
	// tool is either ["trackball", "pull"]
	let tool = "trackball";
	// turn on/off Origami Simulator's folding engine
	let active = false;
	// override the material to show the model's strain forces
	let strain = false;
	// fold the origami model, float (0.0-1.0)
	let foldAmount = 0;
	// highlight vertices/faces under the cursor
	let showTouches = true;
	// turn on three.js shadows
	let showShadows = false;
	// swap materials based on the app color theme
	let darkMode = true;

	let reset = () => {};
	let integration = "euler";
	let axialStiffness = 20;
	let faceStiffness = 0.2;
	let joinStiffness = 0.7;
	let creaseStiffness = 0.7;
	let dampingRatio = 0.45;
	// information relayed up from the simulator
	let error = 0;

</script>

<div class="App">
	<Settings
		bind:origami={origami}
		bind:tool={tool}
		bind:active={active}
		bind:strain={strain}
		bind:foldAmount={foldAmount}
		bind:showTouches={showTouches}
		bind:showShadows={showShadows}
		bind:integration={integration}
		bind:axialStiffness={axialStiffness}
		bind:faceStiffness={faceStiffness}
		bind:joinStiffness={joinStiffness}
		bind:creaseStiffness={creaseStiffness}
		bind:dampingRatio={dampingRatio}
		{darkMode}
		{error}
		{reset}
	/>
	<Simulator
		{origami}
		{active}
		{foldAmount}
		{strain}
		{tool}
		{showTouches}
		{showShadows}
		{darkMode}
		{integration}
		{axialStiffness}
		{faceStiffness}
		{joinStiffness}
		{creaseStiffness}
		{dampingRatio}
		bind:error={error}
		bind:reset={reset}
	/>
</div>

<style>
	.App {
		height: 100%;
	}
</style>
