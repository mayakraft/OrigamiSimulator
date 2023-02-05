/**
 * TrackballView for React (c) Kraft
 * MIT license
 */
import { useEffect } from "react";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import ThreeView from "./ThreeView.jsx";
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
		// bubble up event handler
		if (props.didMount) {
			props.didMount({ renderer, scene, camera });
		}
	};

	// trackball dealloc ?
	useEffect(() => () => { if (trackball) { trackball.dispose(); } });

	useEffect(() => {
		if (trackball) { trackball.enabled = props.enabled; }
	}, [props.enabled, trackball]);

	useEffect(() => {
		if (trackball) { trackball.maxDistance = props.maxDistance; }
	}, [props.maxDistance, trackball]);

	useEffect(() => {
		if (trackball) { trackball.minDistance = props.minDistance; }
	}, [props.minDistance, trackball]);

	useEffect(() => {
		if (trackball) { trackball.panSpeed = props.panSpeed; }
	}, [props.panSpeed, trackball]);

	useEffect(() => {
		if (trackball) { trackball.rotateSpeed = props.rotateSpeed; }
	}, [props.rotateSpeed, trackball]);

	useEffect(() => {
		if (trackball) { trackball.zoomSpeed = props.zoomSpeed; }
	}, [props.zoomSpeed, trackball]);

	useEffect(() => {
		if (trackball) { trackball.dynamicDampingFactor = props.dynamicDampingFactor; }
	}, [props.dynamicDampingFactor, trackball]);

	const didResize = (event) => {
		if (trackball) { trackball.handleResize(); }
		// bubble up event handler
		if (props.didResize) {
			props.didResize(event);
		}
	};

	const animate = () => {
		if (trackball) { trackball.update(); }
		// bubble up event handler
		if (props.animate) {
			props.animate();
		}
	};

	return (
		<ThreeView
			didMount={didMount}
			didResize={didResize}
			animate={animate}
		/>
	);
};

export default TrackballView;
