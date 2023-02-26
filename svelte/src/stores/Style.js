import { writable } from "svelte/store";

//
// show/hide things
//

// highlight vertices/faces under the cursor
export const showTouches = writable(true);

// turn on three.js shadows
export const showShadows = writable(false);

// show/hide lines by assignment
export const showBoundary = writable(true);
export const showMountain = writable(true);
export const showValley = writable(true);
export const showFlat = writable(true);
export const showJoin = writable(false);
export const showUnassigned = writable(true);

//
// colors
//

// the background of the WebGL canvas
export const backgroundColor = writable("#1b1b1b");

// front and back are the mesh faces
export const frontColor = writable("#ec008b");
export const backColor = writable("white");
export const lineOpacity = writable(0.5);

// line color by assignment
export const boundaryColor = writable("black");
export const mountainColor = writable("black");
export const valleyColor = writable("black");
export const flatColor = writable("black");
export const joinColor = writable("black");
export const unassignedColor = writable("black");
