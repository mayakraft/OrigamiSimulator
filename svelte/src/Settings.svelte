<script>
  import Style from "./state/Style.svelte.ts";
  import Simulator from "./state/Simulator.svelte.ts";
  import Solver from "./state/Solver.svelte.ts";

	export let origami = {};

	// throws error if file is not a valid JSON format
	// event handler for file dialog <input>
	let files;
	$: if (files) {
		const reader = new FileReader();
		reader.onload = event => {
			try {
				origami = JSON.parse(event.target.result);
			} catch (error) {
				console.error(error);
				window.alert(error);
			}
		};
		if (files.length) {
			reader.readAsText(files[0]);
		}
	}

	const saveFoldFile = () => {
		const FOLD = Simulator.exportModel();
		const a = document.createElement("a");
    a.setAttribute("style", "display: none;");
		document.body.appendChild(a);
		const blob = new Blob([JSON.stringify(FOLD)], { type: "octet/stream" });
		const url = window.URL.createObjectURL(blob);
		a.href = url;
		a.download = "origami.fold";
		a.click();
		window.URL.revokeObjectURL(url);
	};
</script>

<div class={"container"}>
	<input type="file" bind:files>

	<h3>
		simulator active
		<input type="checkbox" bind:checked={Simulator.active} />

	</h3>

	<h3>fold amount</h3>
	<input
		type="range"
		min="0"
		max="1"
		step="0.01"
		disabled={!Simulator.active}
		bind:value={Simulator.foldAmount} />

	<h3>pointer tool</h3>
	<input
		type="radio"
		id="radio-webgl-tool-trackball"
		name="radio-webgl-tool"
		bind:group={Simulator.tool}
		value="trackball" />
	<label for="radio-webgl-tool-trackball">trackball</label>
	<input
		type="radio"
		id="radio-webgl-tool-pull"
		name="radio-webgl-tool"
		bind:group={Simulator.tool}
		value="pull" />
	<label for="radio-webgl-tool-pull">pull</label>

	<h3>
		show strain
		<input type="checkbox" disabled={!Simulator.active} bind:checked={Simulator.strain} />
	</h3>

	<h3>
		show touches
		<input type="checkbox" bind:checked={Style.showTouches} />
	</h3>

	<h3>
		show shadows
		<input type="checkbox" disabled={Simulator.strain} bind:checked={Style.showShadows} />
	</h3>

	<h3>
		background
		<input type="text" class="medium" bind:value={Style.backgroundColor} />
	</h3>

	<h3>
		front
		<input
			type="checkbox"
			id="show-faces-front"
			bind:checked={Style.showFront} />
		<input type="text" class="medium" bind:value={Style.frontColor} />
	</h3>
	<h3>
		back
		<input
			type="checkbox"
			id="show-faces-back"
			bind:checked={Style.showBack} />
		<input type="text" class="medium" bind:value={Style.backColor} />
	</h3>

	<h3>
		lines
	</h3>
	<input
		type="range"
		min="0"
		max="1"
		step="0.02"
		bind:value={Style.lineOpacity} />
	<div>
		<input
			type="checkbox"
			id="show-line-boundary"
			bind:checked={Style.showBoundary} />
		<input type="text" class="medium" bind:value={Style.boundaryColor} />
		<label for="show-line-boundary">boundary</label>
		<br />
		<input
			type="checkbox"
			id="show-line-mountain"
			bind:checked={Style.showMountain} />
		<input type="text" class="medium" bind:value={Style.mountainColor} />
		<label for="show-line-mountain">mountain</label>
		<br />
		<input
			type="checkbox"
			id="show-line-valley"
			bind:checked={Style.showValley} />
		<input type="text" class="medium" bind:value={Style.valleyColor} />
		<label for="show-line-valley">valley</label>
		<br />
		<input
			type="checkbox"
			id="show-line-flat"
			bind:checked={Style.showFlat} />
		<input type="text" class="medium" bind:value={Style.flatColor} />
		<label for="show-line-flat">flat</label>
		<br />
		<input
			type="checkbox"
			id="show-line-join"
			bind:checked={Style.showJoin} />
		<input type="text" class="medium" bind:value={Style.joinColor} />
		<label for="show-line-join">triangulated</label>
		<br />
		<input
			type="checkbox"
			id="show-line-unassigned"
			bind:checked={Style.showUnassigned} />
		<input type="text" class="medium" bind:value={Style.unassignedColor} />
		<label for="show-line-unassigned">unassigned</label>
	</div>

	<h3>integration</h3>
	<input
		type="radio"
		name="radio-integration"
		id="radio-integration-euler"
		value="euler"
		bind:group={Solver.integration} />
	<label for="radio-integration-euler">euler</label>
	<input
		type="radio"
		name="radio-integration"
		id="radio-integration-verlet"
		value="verlet"
		bind:group={Solver.integration} />
	<label for="radio-integration-verlet">verlet</label>

	<h3>
		axial stiffness
		<input type="text" class="short" bind:value={Solver.axialStiffness} />
	</h3>
	<input
		type="range"
		min="10"
		max="100"
		step="1"
		bind:value={Solver.axialStiffness} />

	<h3>
		face stiffness
		<input type="text" class="short" bind:value={Solver.faceStiffness} />
	</h3>
	<input
		type="range"
		min="0"
		max="5"
		step="0.02"
		bind:value={Solver.faceStiffness} />

	<h3>
		join stiffness
		<input type="text" class="short" bind:value={Solver.joinStiffness} />

	</h3>
	<input
		type="range"
		min="0"
		max="3"
		step="0.01"
		bind:value={Solver.joinStiffness} />

	<h3>
		crease stiffness
		<input type="text" class="short" bind:value={Solver.creaseStiffness} />

	</h3>
	<input
		type="range"
		min="0"
		max="3"
		step="0.01"
		bind:value={Solver.creaseStiffness} />

	<h3>
		damping ratio
		<input type="text" class="short" bind:value={Solver.dampingRatio} />

	</h3>
	<input
		type="range"
		min="0.01"
		max="0.5"
		step="0.01"
		bind:value={Solver.dampingRatio} />

	<h3>
		error
		<input type="text" class="long" disabled={!Simulator.active} bind:value={Simulator.error} />
	</h3>

	<button
		disabled={!Simulator.active}
		on:click={Simulator.reset}>reset model</button>
	<br />

	<button on:click={saveFoldFile}>export model as FOLD</button>
	<br />

</div>

<style>
	.container {
		background-color: #000b;
		z-index: 2;
		position: absolute;
		top: 0;
		left: 0;
		padding: 0.5rem;
		overflow-y: auto;
		max-height: 100vh;
		text-shadow:
			-1px -1px 0 #0008,
			1px -1px 0 #0008,
			-1px 1px 0 #0008,
			1px 1px 0 #0008;
	}
	.container > * {
		margin: 0.33rem 0;
	}
	/*.container input[type=radio] + * {*/
	.container input {
		margin: 0rem 0.25rem;
	}
	.long { width: 8rem; }
	.medium { width: 5rem; }
	.short { width: 3rem; }
</style>
