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
// export const backgroundColor = writable("#eee");
export const backgroundColor = writable("#111");

// front and back are the mesh faces
// export const frontColor = writable("white");
// export const backColor = writable("#ec008b"); // OG ori sim pink
export const frontColor = writable("#222");
export const backColor = writable("white");

// line color by assignment
export const lineOpacity = writable(1);
export const boundaryColor = writable("#777");
export const mountainColor = writable("#e53");
export const valleyColor = writable("#38d");
export const flatColor = writable("#555");
export const joinColor = writable("#fb4");
export const unassignedColor = writable("#a4f");
