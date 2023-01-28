/**
 * TrackballView for SolidJS (c) Kraft
 * MIT license
 */
import { createEffect, onCleanup } from "solid-js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import ThreeView from "./ThreeView";
/**
 * @description Extends the ThreeView component to include a three.js
 * TrackballControls; otherwise, the functionality is the same as ThreeView.
 * @param {object} props see ThreeView for its props, additionally, this
 * component offers these optional props (none are required), all relate
 * to the setup of the trackball controlls:
 * - enabled (boolean)
 * - maxDistance (number)
 * - minDistance (number)
 * - panSpeed (number)
 * - rotateSpeed (number)
 * - zoomSpeed (number)
 * - dynamicDampingFactor (number)
 */
const TrackballView = (props) => {

	let trackball;

	const didMount = ({ renderer, scene, camera }) => {
		trackball = new TrackballControls(camera, renderer.domElement.parentNode);
		createEffect(() => { trackball.enabled = props.enabled; });
		createEffect(() => { trackball.maxDistance = props.maxDistance; });
		createEffect(() => { trackball.minDistance = props.minDistance; });
		createEffect(() => { trackball.panSpeed = props.panSpeed; });
		createEffect(() => { trackball.rotateSpeed = props.rotateSpeed; });
		createEffect(() => { trackball.zoomSpeed = props.zoomSpeed; });
		createEffect(() => {
			trackball.dynamicDampingFactor = props.dynamicDampingFactor;
		});
		// bubble up event handler
		if (props.didMount) {
			props.didMount({ renderer, scene, camera });
		}
	};

	const didResize = (event) => {
		trackball.handleResize();
		// bubble up event handler
		if (props.didResize) {
			props.didResize(event)
		}
	};
	
	const animate = () => {
		trackball.update();
		// bubble up event handler
		if (props.animate) {
			props.animate();
		}
	};

	onCleanup(() => trackball.dispose());

	return (
		<ThreeView
			didMount={didMount}
			didResize={didResize}
			animate={animate}
		/>
	);
};

export default TrackballView;
