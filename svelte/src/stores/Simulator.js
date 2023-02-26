import { writable } from "svelte/store";

//
// communication from outside to Origami Simulator
//

// turn on/off Origami Simulator's folding engine
export const active = writable(true);
// fold the origami model, float (0.0-1.0)
export const foldAmount = writable(0.15);
// override the material to show the model's strain forces
export const strain = writable(false);
// highlight vertices/faces under the cursor
export const showTouches = writable(true);
// turn on three.js shadows
export const showShadows = writable(false);
// tool is either ["trackball", "pull"]
export const tool = writable("trackball");
// settings for the simulator's solver
export const integration = writable("euler");
export const axialStiffness = writable(20);
export const faceStiffness = writable(0.2);
export const joinStiffness = writable(0.7);
export const creaseStiffness = writable(0.7);
export const dampingRatio = writable(0.45);

//
// communication from Origami Simulator to outside
//

// vertex displacement error relayed back from the simulator
export const error = writable(0);
// reset the vertices back to their starting location
export const reset = writable(() => {});
