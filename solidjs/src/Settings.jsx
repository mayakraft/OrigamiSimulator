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

	const containerClasses = props.darkMode()
		? [Style.Container, Style.Dark]
		: [Style.Container, Style.Light];

	return (
		<div class={containerClasses.join(" ")}>
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

		</div>
	);
};

export default Settings;
