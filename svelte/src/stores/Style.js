import { writable } from "svelte/store";

//
// show/hide things
//

// highlight vertices/faces under the cursor
export const showTouches = writable(true);

// turn on three.js shadows
export const showShadows = writable(false);

// show model faces
export const showFront = writable(true);
export const showBack = writable(true);

// show/hide lines by assignment
export const showBoundary = writable(false);
export const showMountain = writable(true);
export const showValley = writable(true);
export const showFlat = writable(true);
export const showJoin = writable(false);
export const showUnassigned = writable(true);

//
// colors
//

// the background of the WebGL canvas
export const backgroundColor = writable("gray");
// export const backgroundColor = writable("#111");

// front and back are the mesh faces
// export const frontColor = writable("#e08");
export const backColor = writable("white");
export const frontColor = writable("#222");

// line color by assignment
export const lineOpacity = writable(1);
export const boundaryColor = writable("#000");
export const mountainColor = writable("red");
export const valleyColor = writable("#08f");
export const flatColor = writable("#888");
export const joinColor = writable("#f80");
export const unassignedColor = writable("#80f");
