<!--
	TrackballView for Svelte (c) Kraft
	MIT license
-->

<!-- 
	@component
	Extends the ThreeView component to include a three.js
	TrackballControls; otherwise, the functionality is the same as ThreeView.
	
	@props
	see ThreeView for its props, additionally, this
	component offers these optional props (none are required), all relate
	to the setup of the trackball controlls:
	- enabled (boolean)
	- maxDistance (number)
	- minDistance (number)
	- panSpeed (number)
	- rotateSpeed (number)
	- zoomSpeed (number)
	- dynamicDampingFactor (number)
-->
<script lang="ts">
  import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
  import ThreeView from "./ThreeView.svelte";

  type PropsType = {
    didMount?: (options: object) => void;
    didResize?: (event?: Event) => void;
    animate?: () => void;
  };

  type TrackballPropsType = {
    enabled?: boolean;
    target?: [number, number, number];
    maxDistance?: number;
    minDistance?: number;
    panSpeed?: number;
    rotateSpeed?: number;
    zoomSpeed?: number;
    dynamicDampingFactor?: number;
  };

  let {
    // ThreeView component
    didMount,
    didResize,
    animate,
    // this component
    enabled = true,
    target = [0, 0, 0],
    maxDistance = 100,
    minDistance = 0.1,
    panSpeed = 1,
    rotateSpeed = 4,
    zoomSpeed = 16,
    dynamicDampingFactor,
  }: PropsType & TrackballPropsType = $props();

  let trackball: TrackballControls | undefined;

  $effect(() => {
    if (!trackball) {
      return;
    }
    trackball.enabled = enabled;
    trackball.target.set(...target);
    trackball.maxDistance = maxDistance;
    trackball.minDistance = minDistance;
    trackball.panSpeed = panSpeed;
    trackball.rotateSpeed = rotateSpeed;
    trackball.zoomSpeed = zoomSpeed;
    trackball.dynamicDampingFactor = dynamicDampingFactor;
  });

  const didMountHandler = ({ renderer, scene, camera }) => {
    trackball = new TrackballControls(camera, renderer.domElement.parentNode);
    // bubble up event handler
    if (didMount) {
      didMount({ renderer, scene, camera });
    }
  };

  const didResizeHandler = (event: Event) => {
    trackball?.handleResize();
    // bubble up event handler
    if (didResize) {
      didResize(event);
    }
  };

  const animateHandler = () => {
    trackball?.update();
    // bubble up event handler
    if (animate) {
      animate();
    }
  };

  $effect(() => {
    return () => trackball?.dispose();
  });
</script>

<ThreeView
  didMount={didMountHandler}
  didResize={didResizeHandler}
  animate={animateHandler} />
