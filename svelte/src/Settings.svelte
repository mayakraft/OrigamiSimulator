<script>
	import {
		active,
		foldAmount,
		strain,
		tool,
		error,
		reset,
		exportModel,
	} from "./stores/Simulator.js";
	import {
		integration,
		axialStiffness,
		faceStiffness,
		joinStiffness,
		creaseStiffness,
		dampingRatio,
	} from "./stores/Solver.js";
	import {
		showTouches,
		showShadows,
		showBoundary,
		showMountain,
		showValley,
		showFlat,
		showJoin,
		showUnassigned,
		backgroundColor,
		frontColor,
		backColor,
		lineOpacity,
		boundaryColor,
		mountainColor,
		valleyColor,
		flatColor,
		joinColor,
		unassignedColor,
	} from "./stores/Style.js";

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
				window.alert(error);
			}
		};
		if (files.length) {
			reader.readAsText(files[0]);
		}
	}

	const saveFoldFile = () => {
		const FOLD = $exportModel();
		const a = document.createElement("a");
		a.style = "display: none";
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
		<input type="checkbox" bind:checked={$active} />

	</h3>

	<h3>fold amount</h3>
	<input
		type="range"
		min="0"
		max="1"
		step="0.01"
		disabled={!$active}
		bind:value={$foldAmount} />

	<h3>pointer tool</h3>
	<input
		type="radio"
		id="radio-webgl-tool-trackball"
		name="radio-webgl-tool"
		bind:group={$tool}
		value="trackball" />
	<label for="radio-webgl-tool-trackball">trackball</label>
	<input
		type="radio"
		id="radio-webgl-tool-pull"
		name="radio-webgl-tool"
		bind:group={$tool}
		value="pull" />
	<label for="radio-webgl-tool-pull">pull</label>

	<h3>
		show strain
		<input type="checkbox" disabled={!$active} bind:checked={$strain} />
	</h3>

	<h3>
		show touches
		<input type="checkbox" bind:checked={$showTouches} />
	</h3>

	<h3>
		show shadows
		<input type="checkbox" disabled={$strain} bind:checked={$showShadows} />
	</h3>

	<h3>
		background
		<input type="text" class="medium" bind:value={$backgroundColor} />
	</h3>

	<h3>
		front
		<input type="text" class="medium" bind:value={$frontColor} />
	</h3>
	<h3>
		back
		<input type="text" class="medium" bind:value={$backColor} />
	</h3>

	<h3>
		lines
	</h3>
	<input
		type="range"
		min="0"
		max="1"
		step="0.02"
		bind:value={$lineOpacity} />
	<div>
		<input
			type="checkbox"
			id="show-line-boundary"
			bind:checked={$showBoundary} />
		<input type="text" class="short" bind:value={$boundaryColor} />
		<label for="show-line-boundary">boundary</label>
		<br />
		<input
			type="checkbox"
			id="show-line-mountain"
			bind:checked={$showMountain} />
		<input type="text" class="short" bind:value={$mountainColor} />
		<label for="show-line-mountain">mountain</label>
		<br />
		<input
			type="checkbox"
			id="show-line-valley"
			bind:checked={$showValley} />
		<input type="text" class="short" bind:value={$valleyColor} />
		<label for="show-line-valley">valley</label>
		<br />
		<input
			type="checkbox"
			id="show-line-flat"
			bind:checked={$showFlat} />
		<input type="text" class="short" bind:value={$flatColor} />
		<label for="show-line-flat">flat</label>
		<br />
		<input
			type="checkbox"
			id="show-line-join"
			bind:checked={$showJoin} />
		<input type="text" class="short" bind:value={$joinColor} />
		<label for="show-line-join">triangulated</label>
		<br />
		<input
			type="checkbox"
			id="show-line-unassigned"
			bind:checked={$showUnassigned} />
		<input type="text" class="short" bind:value={$unassignedColor} />
		<label for="show-line-unassigned">unassigned</label>
	</div>

	<h3>integration</h3>
	<input
		type="radio"
		name="radio-integration"
		id="radio-integration-euler"
		value="euler"
		bind:group={$integration} />
	<label for="radio-integration-euler">euler</label>
	<input
		type="radio"
		name="radio-integration"
		id="radio-integration-verlet"
		value="verlet"
		bind:group={$integration} />
	<label for="radio-integration-verlet">verlet</label>

	<h3>
		axial stiffness
		<input type="text" class="short" bind:value={$axialStiffness} />
	</h3>
	<input
		type="range"
		min="10"
		max="100"
		step="1"
		bind:value={$axialStiffness} />

	<h3>
		face stiffness
		<input type="text" class="short" bind:value={$faceStiffness} />
	</h3>
	<input
		type="range"
		min="0"
		max="5"
		step="0.02"
		bind:value={$faceStiffness} />

	<h3>
		join stiffness
		<input type="text" class="short" bind:value={$joinStiffness} />

	</h3>
	<input
		type="range"
		min="0"
		max="3"
		step="0.01"
		bind:value={$joinStiffness} />

	<h3>
		crease stiffness
		<input type="text" class="short" bind:value={$creaseStiffness} />

	</h3>
	<input
		type="range"
		min="0"
		max="3"
		step="0.01"
		bind:value={$creaseStiffness} />

	<h3>
		damping ratio
		<input type="text" class="short" bind:value={$dampingRatio} />

	</h3>
	<input
		type="range"
		min="0.01"
		max="0.5"
		step="0.01"
		bind:value={$dampingRatio} />

	<h3>
		error
		<input type="text" class="long" disabled={!$active} bind:value={$error} />
	</h3>

	<button
		disabled={!$active}
		on:click={$reset}>reset model</button>
	<br />

	<button on:click={saveFoldFile}>export model as FOLD</button>
	<br />

</div>

<style>
	.container {
		background-color: #fff1;
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
	.medium { width: 5.5rem; }
	.short { width: 2.5rem; }
</style>
