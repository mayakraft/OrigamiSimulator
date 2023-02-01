/**
 * ThreeView (c) Kraft
 * MIT license
 */
/**
 * This will create a three.js canvas, start an animation loop,
 * and watch for changes to the screen so that the three.js scene can
 * refresh its aspect ratio and projection matrix. The camera's view matrix
 * is not automatically refreshed- if you would like to do so, listen to the
 * didResize method and didMount where you are given a pointer to camera.
 */
import * as THREE from "three";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
// the default export
const app = {
	// member variables
	renderer: undefined,
	scene: undefined,
	camera: undefined,
	trackball: undefined,
	// event handlers
	didMount: undefined,
	didResize: undefined,
	animate: undefined,
};
// the parent of the <canvas> element
const parentNode = document.body;
// the value returned from window.requestAnimationFrame
let animationID;
/**
 * @description Update the projection matrix, aspect ratio, and size
 * of the renderer.
 */
const updateProjection = () => {
	const width = parentNode.clientWidth;
	const height = parentNode.clientHeight;
	app.renderer.setSize(width, height);
	app.camera.aspect = width / height;
	app.camera.updateProjectionMatrix();
};
/**
 * @description Update the camera's view matrix. The camera will look
 * at the origin (0, 0, 0), and position itself along the +Z axis
 * so that the model will be aspect fit and should be nicely visible.
 * @param {number} modelSize the diameter across the largest size
 * of the model; used to aspect fit the model in view.
 */
const updateView = (modelSize = 1.0) => {
	const scale = 1.25;
	const fitLength = app.camera.aspect > 1
		? modelSize * scale
		: modelSize * scale * (1 / app.camera.aspect);
	app.camera.position.set(0, 0, fitLength);
	app.camera.up = new THREE.Vector3(0, 1, 0);
	app.camera.lookAt(0, 0, 0);
	app.camera.far = modelSize * 100;
	app.camera.near = modelSize / 100;
};
/**
 * @description Setup one three.js canvas with a renderer, scene, and camera
 */
const initializeThreeJS = () => {
	app.renderer = new THREE.WebGLRenderer({ antialias: true });
	app.scene = new THREE.Scene();
	app.camera = new THREE.PerspectiveCamera(45, 1 / 1, 0.1, 1000);
	app.renderer.setPixelRatio(window.devicePixelRatio);
	app.renderer.shadowMap.enabled = true;
	// THREE.BasicShadowMap, THREE.PCFShadowMap, THREE.PCFSoftShadowMap, THREE.VSMShadowMap
	app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	updateProjection();
	updateView();
	parentNode.appendChild(app.renderer.domElement);
};
/**
 * @description Begin the animation loop, maintain a reference to the
 * return value of requestAnimationFrame so that the animation loop
 * can be canceled at any time (like in the deallocate method).
 */
const initializeAnimationLoop = () => {
	const animateLoop = () => {
		animationID = window.requestAnimationFrame(animateLoop);
		// bubble up animation event just before the scene is rendered
		if (app.animate) {
			app.animate();
		}
		app.renderer.render(app.scene, app.camera);
		app.trackball.update();
	};
	animateLoop();
};
/**
 * @description The method attached to the window's "resize" event.
 */
const onResize = (event) => {
	parentNode.removeChild(app.renderer.domElement);
	updateProjection();
	parentNode.appendChild(app.renderer.domElement);
	app.trackball.handleResize();
	if (app.didResize) {
		app.didResize(event);
	}
};
/**
 * @description onMount (built-in function) will setup three.js, then
 * bubble up the didMount event, and lastly, start the animation loop,
 * ensuring that animation begins after all setup is (presumably) done.
 */
window.addEventListener("load", () => {
	initializeThreeJS();
	app.camera.position.z = 2;
	app.camera.lookAt(0, 0, 0);
	app.camera.far = 100;
	app.camera.near = 1 / 100;
	app.trackball = new TrackballControls(app.camera, app.renderer.domElement);
	app.trackball.maxDistance = 10;
	app.trackball.minDistance = 0.5;
	app.trackball.distance = 2;
	app.trackball.panSpeed = 1;
	app.trackball.rotateSpeed = 4;
	app.trackball.zoomSpeed = 16;
	app.trackball.enabled = true;
	window.addEventListener("resize", onResize);
	if (app.didMount) {
		app.didMount(app);
	}
	initializeAnimationLoop();
});
/**
 * @description Free all memory associated with this three.js instance.
 * This allows you to destroy and re-instance this component many times
 * throughout the lifecycle of the app.
 * note: window "unload" event does not reliably fire, especially on mobile.
 */
window.addEventListener("unload", () => {
	window.removeEventListener("resize", onResize);
	window.cancelAnimationFrame(animationID);
	app.scene.clear();
	app.renderer.renderLists.dispose();
	app.renderer.dispose();
	app.camera = null;
	parentNode.removeChild(app.renderer.domElement);
});

export default app;
