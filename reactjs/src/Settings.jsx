import "./Settings.css";

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

	const saveFoldFile = () => {
		const a = document.createElement("a");
		a.style = "display: none";
		document.body.appendChild(a);
		const blob = new Blob([JSON.stringify(props.exportModel()())], { type: "octet/stream" });
		const url = window.URL.createObjectURL(blob);
		a.href = url;
		a.download = "origami.fold";
		a.click();
		window.URL.revokeObjectURL(url);
	};

	return (
		<div className="Container">
			<input type="file" onChange={fileDialogOnInput} />

			<h3>
				simulator active
				<input
					type="checkbox"
					defaultChecked={props.active}
					onChange={() => props.setActive(!props.active)}
				/>
			</h3>

			<h3>fold amount</h3>
			<input
				type="range"
				min="0"
				max="1"
				step="0.01"
				disabled={!props.active}
				value={props.foldAmount}
				onChange={e => props.setFoldAmount(e.target.value)} />

			<h3>pointer tool</h3>
			<input
				type="radio"
				name="radio-webgl-tool"
				// value="radio-webgl-tool-trackball"
				onChange={() => props.setTool("trackball")}
				defaultChecked={props.tool === "trackball"} />
			<label htmlFor="radio-webgl-tool-trackball">trackball</label>
			<input
				type="radio"
				name="radio-webgl-tool"
				// value="radio-webgl-tool-pull"
				onChange={() => props.setTool("pull")}
				defaultChecked={props.tool === "pull"} />
			<label htmlFor="radio-webgl-tool-pull">pull</label>

			<h3>
				show strain
				<input
					type="checkbox"
					disabled={!props.active}
					defaultChecked={props.strain}
					onChange={() => props.setStrain(!props.strain)}
				/>
			</h3>

			<h3>
				show touches
				<input
					type="checkbox"
					defaultChecked={props.showTouches}
					onChange={() => props.setShowTouches(!props.showTouches)}
				/>
			</h3>

			<h3>
				show shadows
				<input
					type="checkbox"
					disabled={props.strain}
					defaultChecked={props.showShadows}
					onChange={() => props.setShowShadows(!props.showShadows)}
				/>
			</h3>

			<h3>
				front
				<input
					type="text"
					className="Medium"
					value={props.frontColor}
					onChange={e => props.setFrontColor(e.target.value)}
				/>
			</h3>
			<h3>
				back
				<input
					type="text"
					className="Medium"
					value={props.backColor}
					onChange={e => props.setBackColor(e.target.value)}
				/>
			</h3>
			<h3>
				line
				<input
					type="text"
					className="Medium"
					value={props.lineColor}
					onChange={e => props.setLineColor(e.target.value)}
				/>
			</h3>
			<input
				type="range"
				min="0"
				max="1"
				step="0.02"
				value={props.lineOpacity}
				onChange={e => props.setLineOpacity(e.target.value)} />
			<h3>
				background
				<input
					type="text"
					className="Medium"
					value={props.backgroundColor}
					onChange={e => props.setBackgroundColor(e.target.value)}
				/>
			</h3>

			<h3>integration</h3>
			<input
				type="radio"
				name="radio-integration"
				value="radio-integration-euler"
				onChange={() => props.setIntegration("euler")}
				defaultChecked={props.integration === "euler"} />
			<label htmlFor="radio-integration-euler">euler</label>
			<input
				type="radio"
				name="radio-integration"
				value="radio-integration-verlet"
				onChange={() => props.setIntegration("verlet")}
				defaultChecked={props.integration === "verlet"} />
			<label htmlFor="radio-integration-verlet">verlet</label>

			<h3>
				axial stiffness
				<input
					type="text"
					className="Short"
					value={props.axialStiffness}
					readOnly
				/>
			</h3>
			<input
				type="range"
				min="10"
				max="100"
				step="1"
				value={props.axialStiffness}
				onChange={e => props.setAxialStiffness(e.target.value)} />

			<h3>
				face stiffness
				<input
					type="text"
					className="Short"
					value={props.faceStiffness}
					readOnly
				/>
			</h3>
			<input
				type="range"
				min="0"
				max="5"
				step="0.02"
				value={props.faceStiffness}
				onChange={e => props.setFaceStiffness(e.target.value)} />

			<h3>
				join stiffness
				<input
					type="text"
					className="Short"
					value={props.joinStiffness}
					readOnly
				/>
			</h3>
			<input
				type="range"
				min="0"
				max="3"
				step="0.01"
				value={props.joinStiffness}
				onChange={e => props.setJoinStiffness(e.target.value)} />

			<h3>
				crease stiffness
				<input
					type="text"
					className="Short"
					value={props.creaseStiffness}
					readOnly
				/>
			</h3>
			<input
				type="range"
				min="0"
				max="3"
				step="0.01"
				value={props.creaseStiffness}
				onChange={e => props.setCreaseStiffness(e.target.value)} />

			<h3>
				damping ratio
				<input
					type="text"
					className="Short"
					value={props.dampingRatio}
					readOnly
				/>
			</h3>
			<input
				type="range"
				min="0.01"
				max="0.5"
				step="0.01"
				value={props.dampingRatio}
				onChange={e => props.setDampingRatio(e.target.value)} />

			<h3>
				error
				<input
					type="text"
					className="Long"
					disabled={!props.active}
					value={props.error}
					readOnly
				/>
			</h3>

			<button
				disabled={!props.active}
				onClick={() => props.reset()}>reset model</button>

			<br />

			<button onClick={saveFoldFile}>export model as FOLD</button>

			<br />

		</div>
	);
};

export default Settings;
