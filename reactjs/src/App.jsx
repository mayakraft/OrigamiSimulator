import { useState } from "react";
import "./App.css";
import Simulator from "./Simulator";
import Settings from "./Settings";
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
	const [foldAmount, setFoldAmount] = useState(0);
	// highlight vertices/faces under the cursor
	const [showTouches, setShowTouches] = useState(true);
	// turn on three.js shadows
	const [showShadows, setShowShadows] = useState(false);
	// swap materials based on the app color theme
	const [darkMode, setDarkMode] = useState(true);

	const [reset, setReset] = useState();
	const [integration, setIntegration] = useState("euler");
	const [axialStiffness, setAxialStiffness] = useState(20);
	const [faceStiffness, setFaceStiffness] = useState(0.2);
	const [joinStiffness, setJoinStiffness] = useState(0.7);
	const [creaseStiffness, setCreaseStiffness] = useState(0.7);
	const [dampingRatio, setDampingRatio] = useState(0.45);
	// information relayed up from the simulator
	const [error, setError] = useState(0);

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
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				error={error}
				reset={reset}
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
				darkMode={darkMode}
				setError={setError}
				setReset={setReset}
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
