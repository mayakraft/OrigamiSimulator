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
	// vertex displacement error relayed back from the simulator
	const [error, setError] = createSignal(0);
	const [exportModel, setExportModel] = createSignal();
	// reset the vertices back to their starting location
	const [reset, setReset] = createSignal();

	// settings for the simulator's solver
	const [integration, setIntegration] = createSignal("euler");
	const [axialStiffness, setAxialStiffness] = createSignal(20);
	const [faceStiffness, setFaceStiffness] = createSignal(0.2);
	const [joinStiffness, setJoinStiffness] = createSignal(0.7);
	const [creaseStiffness, setCreaseStiffness] = createSignal(0.7);
	const [dampingRatio, setDampingRatio] = createSignal(0.45);

	// show/hide things
	const [showTouches, setShowTouches] = createSignal(true);
	const [showShadows, setShowShadows] = createSignal(false);
	const [showFront, setShowFront] = createSignal(true);
	const [showBack, setShowBack] = createSignal(true);
	const [showBoundary, setShowBoundary] = createSignal(false);
	const [showMountain, setShowMountain] = createSignal(true);
	const [showValley, setShowValley] = createSignal(true);
	const [showFlat, setShowFlat] = createSignal(true);
	const [showJoin, setShowJoin] = createSignal(false);
	const [showUnassigned, setShowUnassigned] = createSignal(true);
	// style
	const [backgroundColor, setBackgroundColor] = createSignal("#111");
	const [frontColor, setFrontColor] = createSignal("#222");
	const [backColor, setBackColor] = createSignal("white");
	const [lineColor, setLineColor] = createSignal("black");
	const [lineOpacity, setLineOpacity] = createSignal(1);
	const [boundaryColor, setBoundaryColor] = createSignal("#777");
	const [mountainColor, setMountainColor] = createSignal("#e53");
	const [valleyColor, setValleyColor] = createSignal("#38d");
	const [flatColor, setFlatColor] = createSignal("#555");
	const [joinColor, setJoinColor] = createSignal("#fb4");
	const [unassignedColor, setUnassignedColor] = createSignal("#a4f");

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
				showFront={showFront}
				setShowFront={setShowFront}
				showBack={showBack}
				setShowBack={setShowBack}
				showBoundary={showBoundary}
				setShowBoundary={setShowBoundary}
				showMountain={showMountain}
				setShowMountain={setShowMountain}
				showValley={showValley}
				setShowValley={setShowValley}
				showFlat={showFlat}
				setShowFlat={setShowFlat}
				showJoin={showJoin}
				setShowJoin={setShowJoin}
				showUnassigned={showUnassigned}
				setShowUnassigned={setShowUnassigned}
				boundaryColor={boundaryColor}
				setBoundaryColor={setBoundaryColor}
				mountainColor={mountainColor}
				setMountainColor={setMountainColor}
				valleyColor={valleyColor}
				setValleyColor={setValleyColor}
				flatColor={flatColor}
				setFlatColor={setFlatColor}
				joinColor={joinColor}
				setJoinColor={setJoinColor}
				unassignedColor={unassignedColor}
				setUnassignedColor={setUnassignedColor}
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
				showFront={showFront}
				showBack={showBack}
				showBoundary={showBoundary}
				showMountain={showMountain}
				showValley={showValley}
				showFlat={showFlat}
				showJoin={showJoin}
				showUnassigned={showUnassigned}
				boundaryColor={boundaryColor}
				mountainColor={mountainColor}
				valleyColor={valleyColor}
				flatColor={flatColor}
				joinColor={joinColor}
				unassignedColor={unassignedColor}
			/>
		</div>
	);
}

export default App;
