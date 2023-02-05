import { useState } from "react";
import "./App.css";
import Simulator from "./Simulator.jsx";
import Settings from "./Settings.jsx";
// example file
import craneCP from "../../fold/crane-cp.fold?raw";

function App() {
	// the origami model, in FOLD format
	const [origami, setOrigami] = useState(JSON.parse(craneCP));
	// tool is either ["trackball", "pull"]
	const [tool, setTool] = useState("trackball");
	// turn on/off Origami Simulator's folding engine
	const [active, setActive] = useState(true);
	// override the material to show the model's strain forces
	const [strain, setStrain] = useState(false);
	// fold the origami model, float (0.0-1.0)
	const [foldAmount, setFoldAmount] = useState(0.15);
	// highlight vertices/faces under the cursor
	const [showTouches, setShowTouches] = useState(true);
	// turn on three.js shadows
	const [showShadows, setShowShadows] = useState(false);
	// style
	const [backgroundColor, setBackgroundColor] = useState("#1b1b1b");
	const [frontColor, setFrontColor] = useState("#ec008b");
	const [backColor, setBackColor] = useState("white");
	const [lineColor, setLineColor] = useState("black");
	const [lineOpacity, setLineOpacity] = useState(0.5);
	// reset the vertices back to their starting location
	const [reset, setReset] = useState();
	// settings for the simulator's solver
	const [integration, setIntegration] = useState("euler");
	const [axialStiffness, setAxialStiffness] = useState(20);
	const [faceStiffness, setFaceStiffness] = useState(0.2);
	const [joinStiffness, setJoinStiffness] = useState(0.7);
	const [creaseStiffness, setCreaseStiffness] = useState(0.7);
	const [dampingRatio, setDampingRatio] = useState(0.45);
	// information relayed up from the simulator
	const [error, setError] = useState(0);
	const [exportModel, setExportModel] = useState();

	return (
		<div className="App">
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
