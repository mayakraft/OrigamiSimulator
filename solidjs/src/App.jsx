import { createSignal } from "solid-js";
import styles from "./App.module.css";
import Simulator from "./Simulator";
import Settings from "./Settings";
// example model
import craneCP from "../../fold/crane-cp.fold?raw";

function App() {
	// the origami model, in FOLD format
	const [origami, setOrigami] = createSignal(JSON.parse(craneCP));
	// tool is either ["trackball", "pull"]
	const [tool, setTool] = createSignal("trackball");
	// turn on/off Origami Simulator's folding engine
	const [active, setActive] = createSignal(true);
	// override the material to show the model's strain forces
	const [strain, setStrain] = createSignal(false);
	// fold the origami model, float (0.0-1.0)
	const [foldAmount, setFoldAmount] = createSignal(0.15);
	// highlight vertices/faces under the cursor
	const [showTouches, setShowTouches] = createSignal(true);
	// turn on three.js shadows
	const [showShadows, setShowShadows] = createSignal(false);
	// style
	const [backgroundColor, setBackgroundColor] = createSignal("#1b1b1b");
	const [frontColor, setFrontColor] = createSignal("#ec008b");
	const [backColor, setBackColor] = createSignal("white");
	const [lineColor, setLineColor] = createSignal("black");
	const [lineOpacity, setLineOpacity] = createSignal(0.5);
	// reset the vertices back to their starting location
	const [reset, setReset] = createSignal();
	// settings for the simulator's solver
	const [integration, setIntegration] = createSignal("euler");
	const [axialStiffness, setAxialStiffness] = createSignal(20);
	const [faceStiffness, setFaceStiffness] = createSignal(0.2);
	const [joinStiffness, setJoinStiffness] = createSignal(0.7);
	const [creaseStiffness, setCreaseStiffness] = createSignal(0.7);
	const [dampingRatio, setDampingRatio] = createSignal(0.45);
	// vertex displacement error relayed back from the simulator
	const [error, setError] = createSignal(0);
	const [exportModel, setExportModel] = createSignal();

	return (
		<div class={styles.App}>
			<Settings
				origami={origami}
				setOrigami={setOrigami}
				tool={tool}
				setTool={setTool}
				active={active}
				setActive={setActive}
				strain={strain}
				setStrain={setStrain}
				foldAmount={foldAmount}
				setFoldAmount={setFoldAmount}
				showTouches={showTouches}
				setShowTouches={setShowTouches}
				showShadows={showShadows}
				setShowShadows={setShowShadows}
				backgroundColor={backgroundColor}
				setBackgroundColor={setBackgroundColor}
				frontColor={frontColor}
				setFrontColor={setFrontColor}
				backColor={backColor}
				setBackColor={setBackColor}
				lineColor={lineColor}
				setLineColor={setLineColor}
				lineOpacity={lineOpacity}
				setLineOpacity={setLineOpacity}
				error={error}
				reset={reset}
				exportModel={exportModel}
				integration={integration}
				setIntegration={setIntegration}
				axialStiffness={axialStiffness}
				setAxialStiffness={setAxialStiffness}
				faceStiffness={faceStiffness}
				setFaceStiffness={setFaceStiffness}
				joinStiffness={joinStiffness}
				setJoinStiffness={setJoinStiffness}
				creaseStiffness={creaseStiffness}
				setCreaseStiffness={setCreaseStiffness}
				dampingRatio={dampingRatio}
				setDampingRatio={setDampingRatio}
			/>
			<Simulator
				origami={origami}
				active={active}
				foldAmount={foldAmount}
				strain={strain}
				tool={tool}
				showTouches={showTouches}
				showShadows={showShadows}
				backgroundColor={backgroundColor}
				frontColor={frontColor}
				backColor={backColor}
				lineColor={lineColor}
				lineOpacity={lineOpacity}
				setError={setError}
				setReset={setReset}
				setExportModel={setExportModel}
				integration={integration}
				axialStiffness={axialStiffness}
				faceStiffness={faceStiffness}
				joinStiffness={joinStiffness}
				creaseStiffness={creaseStiffness}
				dampingRatio={dampingRatio}
			/>
		</div>
	);
}

export default App;
