import Style from "./Settings.module.css";

const Settings = (props) => {

	const fileDialogDidLoad = (string, filename, mimeType) => {
		try { props.setCP(JSON.parse(string)); }
		catch (error) { window.alert(error); }
	};

	const fileDialogOnInput = (e) => {
		const file = e.target.files[0];
		let mimeType, filename;
		const reader = new FileReader();
		reader.onload = loadEvent => fileDialogDidLoad(loadEvent.target.result, filename, mimeType);
		if (e.target.files.length) {
			mimeType = e.target.files[0].type;
			filename = e.target.files[0].name;
			reader.readAsText(e.target.files[0]);
		}
	}

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
					checked={props.simulatorOn()}
					onClick={() => props.setSimulatorOn(!props.simulatorOn())}
				/>
			</h3>

			<h3>fold amount</h3>
			<input
				type="range"
				min="0"
				max="1"
				step="0.01"
				disabled={!props.simulatorOn()}
				value={props.simulatorFoldAmount()}
				onInput={e => props.setSimulatorFoldAmount(e.target.value)} />

			<h3>pointer tool</h3>
			<input
				type="radio"
				name="radio-webgl-tool"
				value="radio-webgl-tool-inspect"
				onClick={() => props.setTool("inspect")}
				checked={props.tool() === "inspect"} />
			<label for="radio-webgl-tool-inspect">inspect</label>
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
					disabled={!props.simulatorOn()}
					checked={props.simulatorStrain()}
					onClick={() => props.setSimulatorStrain(!props.simulatorStrain())}
				/>
			</h3>

			<h3>
				show touches
				<input
					type="checkbox"
					checked={props.simulatorShowTouches()}
					onClick={() => props.setSimulatorShowTouches(!props.simulatorShowTouches())}
				/>
			</h3>

			<h3>
				show shadows
				<input
					type="checkbox"
					checked={props.simulatorShowShadows()}
					onClick={() => props.setSimulatorShowShadows(!props.simulatorShowShadows())}
				/>
			</h3>

		</div>
	);
};

export default Settings;
