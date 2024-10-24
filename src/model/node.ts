/**
 * Created by ghassaei on 9/16/16.
 */

import type { SimulatorNode } from "../types.d.ts";

/**
 * @param {[number, number, number]} coords the node's coordinates
 * @param {number} index the index of the node in the model
 * @returns {SimulatorNode}
 */
export const makeNode = (
  [x, y, z]: [number, number, number],
  index: number,
): SimulatorNode => ({
  originalPosition: [x, y, z],
  index: index,

  beams: [],
  creases: [],
  invCreases: [],
  externalForce: [0, 0, 0],
  fixed: false,
  simMass: 1,
});

/**
 * @param {SimulatorNode} node
 */
export const destroyNode = (node: SimulatorNode) => {
  node.beams = [];
  node.creases = [];
  node.invCreases = [];
};
