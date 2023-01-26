import { createSignal } from "solid-js";
import styles from "./App.module.css";
import Simulator from "./Simulator";
import Settings from "./Settings";
// example file
import craneCP from "../../fold/crane-cp.fold?raw";

function App() {
	// cp is the origami model, in FOLD format
	const [cp, setCP] = createSignal(JSON.parse(craneCP));
	// tool is either ["inspect", "pull"]
	const [tool, setTool] = createSignal("inspect");
	const [darkMode, setDarkMode] = createSignal(true);
	const [simulatorOn, setSimulatorOn] = createSignal(true);
	const [simulatorStrain, setSimulatorStrain] = createSignal(false);
	// float (0.0-1.0)
	const [simulatorFoldAmount, setSimulatorFoldAmount] = createSignal(0);
	const [simulatorShowTouches, setSimulatorShowTouches] = createSignal(true);
	const [simulatorShowShadows, setSimulatorShowShadows] = createSignal(false);
	// todo
	const [simulatorPointers, setSimulatorPointers] = createSignal([]);

	return (
		<div class={styles.App}>
			<Settings
				cp={cp}
				setCP={setCP}
				tool={tool}
				setTool={setTool}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				simulatorOn={simulatorOn}
				setSimulatorOn={setSimulatorOn}
				simulatorStrain={simulatorStrain}
				setSimulatorStrain={setSimulatorStrain}
				simulatorFoldAmount={simulatorFoldAmount}
				setSimulatorFoldAmount={setSimulatorFoldAmount}
				simulatorShowTouches={simulatorShowTouches}
				setSimulatorShowTouches={setSimulatorShowTouches}
				simulatorShowShadows={simulatorShowShadows}
				setSimulatorShowShadows={setSimulatorShowShadows}
				simulatorPointers={simulatorPointers}
				setSimulatorPointers={setSimulatorPointers}
			/>
			<Simulator
				cp={cp}
				tool={tool}
				darkMode={darkMode}
				// simulator
				simulatorOn={simulatorOn}
				simulatorShowTouches={simulatorShowTouches}
				simulatorStrain={simulatorStrain}
				simulatorFoldAmount={simulatorFoldAmount}
				simulatorShowShadows={simulatorShowShadows}
				// events
				setSimulatorPointers={setSimulatorPointers}
			/>
		</div>
	);
}

export default App;
