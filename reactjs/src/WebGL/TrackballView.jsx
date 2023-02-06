/**
 * TrackballView for React (c) Kraft
 * MIT license
 */
import { Component, useEffect } from "react";
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
class TrackballView extends Component {

	didMount({ renderer, scene, camera }) {
		const trackball = new TrackballControls(camera, renderer.domElement.parentNode);
		this.trackball = trackball;
		// bubble up event handler
		if (this.props.didMount) {
			this.props.didMount({ renderer, scene, camera, trackball });
		}
		this.quietUpdate(this.props);
	};

	shouldComponentUpdate(nextProps, nextState) {
		if (!this.simulator) { return true; }
		this.quietUpdate(nextProps);
		return false;
	}

	componentWillUnmount() {
		if (this.trackball) { this.trackball.dispose(); }
	}

	quietUpdate(props) {
		if (!this.trackball) { return; }
		// forward these props to the trackball controls
		this.trackball.enabled = props.enabled;
		this.trackball.maxDistance = props.maxDistance;
		this.trackball.minDistance = props.minDistance;
		this.trackball.panSpeed = props.panSpeed;
		this.trackball.rotateSpeed = props.rotateSpeed;
		this.trackball.zoomSpeed = props.zoomSpeed;
		this.trackball.dynamicDampingFactor = props.dynamicDampingFactor;
	}

	didResize = (event) => {
		if (this.trackball) { this.trackball.handleResize(); }
		// bubble up event handler
		if (this.props.didResize) {
			this.props.didResize(event);
		}
	};

	animate = () => {
		if (this.trackball) { this.trackball.update(); }
		// bubble up event handler
		if (this.props.animate) {
			this.props.animate();
		}
	};

	render() {
		return (
			<ThreeView
				didMount={(...args) => this.didMount(...args)}
				didResize={(...args) => this.didResize(...args)}
				animate={(...args) => this.animate(...args)}
			/>
		);
	}
}

export default TrackballView;
