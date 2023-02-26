import { writable } from "svelte/store";

export const backgroundColor = writable("#1b1b1b");
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
// show/hide lines by assignment
export const showBoundary = writable(true);
export const showMountain = writable(true);
export const showValley = writable(true);
export const showFlat = writable(true);
export const showJoin = writable(false);
export const showUnassigned = writable(true);
