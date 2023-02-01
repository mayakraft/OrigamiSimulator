import Style from "./Settings.module.css";

const Settings = (props) => {
	// throws error if file is not a valid JSON format
	// event handler for file dialog <input>
	const fileDialogOnInput = (e) => {
		const reader = new FileReader();
		reader.onload = event => {
			try {
				props.setOrigami(JSON.parse(event.target.result));
			} catch (error) {
				window.alert(error);
			}
		};
		if (e.target.files.length) {
			reader.readAsText(e.target.files[0]);
		}
	};

	return (
		<div class={Style.Container}>
			<input type="file" onInput={fileDialogOnInput} />

			<h3>
				simulator active
				<input
					type="checkbox"
					checked={props.active()}
					onClick={() => props.setActive(!props.active())}
				/>
			</h3>

			<h3>fold amount</h3>
			<input
				type="range"
				min="0"
				max="1"
				step="0.01"
				disabled={!props.active()}
				value={props.foldAmount()}
				onInput={e => props.setFoldAmount(e.target.value)} />

			<h3>pointer tool</h3>
			<input
				type="radio"
				name="radio-webgl-tool"
				value="radio-webgl-tool-trackball"
				onClick={() => props.setTool("trackball")}
				checked={props.tool() === "trackball"} />
			<label for="radio-webgl-tool-trackball">trackball</label>
			<input
				type="radio"
				name="radio-webgl-tool"
				value="radio-webgl-tool-pull"
				onClick={() => props.setTool("pull")}
				checked={props.tool() === "pull"} />
			<label for="radio-webgl-tool-pull">pull</label>

			<h3>
				show strain
				<input
					type="checkbox"
					disabled={!props.active()}
					checked={props.strain()}
					onClick={() => props.setStrain(!props.strain())}
				/>
			</h3>

			<h3>
				show touches
				<input
					type="checkbox"
					checked={props.showTouches()}
					onClick={() => props.setShowTouches(!props.showTouches())}
				/>
			</h3>

			<h3>
				show shadows
				<input
					type="checkbox"
					disabled={props.strain()}
					checked={props.showShadows()}
					onClick={() => props.setShowShadows(!props.showShadows())}
				/>
			</h3>

			<h3>
				front
				<input
					type="text"
					class={Style.Medium}
					value={props.frontColor()}
					onInput={e => props.setFrontColor(e.target.value)}
				/>
			</h3>
			<h3>
				back
				<input
					type="text"
					class={Style.Medium}
					value={props.backColor()}
					onInput={e => props.setBackColor(e.target.value)}
				/>
			</h3>
			<h3>
				line
				<input
					type="text"
					class={Style.Medium}
					value={props.lineColor()}
					onInput={e => props.setLineColor(e.target.value)}
				/>
			</h3>
			<input
				type="range"
				min="0"
				max="1"
				step="0.02"
				value={props.lineOpacity()}
				onInput={e => props.setLineOpacity(e.target.value)} />
			<h3>
				background
				<input
					type="text"
					class={Style.Medium}
					value={props.backgroundColor()}
					onInput={e => props.setBackgroundColor(e.target.value)}
				/>
			</h3>

			<h3>integration</h3>
			<input
				type="radio"
				name="radio-integration"
				value="radio-integration-euler"
				onClick={() => props.setIntegration("euler")}
				checked={props.integration() === "euler"} />
			<label for="radio-integration-euler">euler</label>
			<input
				type="radio"
				name="radio-integration"
				value="radio-integration-verlet"
				onClick={() => props.setIntegration("verlet")}
				checked={props.integration() === "verlet"} />
			<label for="radio-integration-verlet">verlet</label>

			<h3>
				axial stiffness
				<input
					type="text"
					class={Style.Short}
					value={props.axialStiffness()}
				/>
			</h3>
			<input
				type="range"
				min="10"
				max="100"
				step="1"
				value={props.axialStiffness()}
				onInput={e => props.setAxialStiffness(e.target.value)} />

			<h3>
				face stiffness
				<input
					type="text"
					class={Style.Short}
					value={props.faceStiffness()}
				/>
			</h3>
			<input
				type="range"
				min="0"
				max="5"
				step="0.02"
				value={props.faceStiffness()}
				onInput={e => props.setFaceStiffness(e.target.value)} />

			<h3>
				join stiffness
				<input
					type="text"
					class={Style.Short}
					value={props.joinStiffness()}
				/>
			</h3>
			<input
				type="range"
				min="0"
				max="3"
				step="0.01"
				value={props.joinStiffness()}
				onInput={e => props.setJoinStiffness(e.target.value)} />

			<h3>
				crease stiffness
				<input
					type="text"
					class={Style.Short}
					value={props.creaseStiffness()}
				/>
			</h3>
			<input
				type="range"
				min="0"
				max="3"
				step="0.01"
				value={props.creaseStiffness()}
				onInput={e => props.setCreaseStiffness(e.target.value)} />

			<h3>
				damping ratio
				<input
					type="text"
					class={Style.Short}
					value={props.dampingRatio()}
				/>
			</h3>
			<input
				type="range"
				min="0.01"
				max="0.5"
				step="0.01"
				value={props.dampingRatio()}
				onInput={e => props.setDampingRatio(e.target.value)} />

			<h3>
				error
				<input
					type="text"
					class={Style.Long}
					disabled={!props.active()}
					value={props.error()}
				/>
			</h3>

			<button
				disabled={!props.active()}
				onClick={() => props.reset()()}>reset model</button>
			<br />

		</div>
	);
};

export default Settings;
