import { createSignal } from "solid-js";
import styles from "./App.module.css";
import Simulator from "./Simulator/Simulator";
import Settings from "./Settings";
// example file
import craneCP from "../../fold/crane-cp.fold?raw";

function App() {
	// the origami model, in FOLD format
	const [origami, setOrigami] = createSignal(JSON.parse(craneCP));
	// tool is either ["trackball", "pull"]
	const [tool, setTool] = createSignal("trackball");
	// turn on/off Origami Simulator's folding engine
	const [active, setActive] = createSignal(false);
	// override the material to show the model's strain forces
	const [strain, setStrain] = createSignal(false);
	// fold the origami model, float (0.0-1.0)
	const [foldAmount, setFoldAmount] = createSignal(0);
	// highlight vertices/faces under the cursor
	const [showTouches, setShowTouches] = createSignal(true);
	// turn on three.js shadows
	const [showShadows, setShowShadows] = createSignal(false);
	// swap materials based on the app color theme
	const [darkMode, setDarkMode] = createSignal(true);

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
				darkMode={darkMode}
				setDarkMode={setDarkMode}
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
			/>
		</div>
	);
}

export default App;
