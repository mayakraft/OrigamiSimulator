/**
 * Created by ghassaei on 9/16/16.
 */
import type { SimulatorNode } from "../types.ts";
import { magnitude, subtract } from "../general/math.ts";

export class Beam {
  type: string;
  axialStiffness: number;
  dampingRatio: number;
  vertices: [[number, number, number], [number, number, number]];
  nodes: [SimulatorNode, SimulatorNode];
  originalLength: number;

  constructor(
    nodes: [SimulatorNode, SimulatorNode],
    { axialStiffness, dampingRatio }: { axialStiffness: number; dampingRatio: number },
    //{ axialStiffness, dampingRatio }: {axialStiffness?: number, dampingRatio?: number},
  ) {
    this.type = "beam";
    this.axialStiffness = axialStiffness;
    this.dampingRatio = dampingRatio;
    this.vertices = [nodes[0].originalPosition, nodes[1].originalPosition];
    this.nodes = nodes;
    this.originalLength = this.getLength();
    nodes[0].beams.push(this);
    nodes[1].beams.push(this);
  }

  getVector(): [number, number, number] {
    return subtract(this.vertices[1], this.vertices[0]);
  }

  /** distance between the original position of the two nodes */
  getLength(): number {
    return magnitude(this.getVector());
  }

  recalcOriginalLength(): void {
    this.originalLength = magnitude(this.getVector());
  }

  isFixed(): boolean {
    return this.nodes[0].fixed && this.nodes[1].fixed;
  }

  // dynamic solve
  getK(): number {
    return this.axialStiffness / this.getLength();
  }

  getD(): number {
    return this.dampingRatio * 2 * Math.sqrt(this.getK() * this.getMinMass());
  }

  getNaturalFrequency(): number {
    return Math.sqrt(this.getK() / this.getMinMass());
  }

  getMinMass(): number {
    let minMass = this.nodes[0].simMass;
    if (this.nodes[1].simMass < minMass) minMass = this.nodes[1].simMass;
    return minMass;
  }

  /** given a node in this beam, get the other node */
  getOtherNode(node: SimulatorNode): SimulatorNode {
    if (this.nodes[0] === node) return this.nodes[1];
    return this.nodes[0];
  }

  // deallocate
  destroy(): void {
    const that = this;
    this.nodes.forEach((node) => {
      const index = node.beams.indexOf(that);
      if (index >= 0) node.beams.splice(index, 1);
    });
    this.vertices = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.nodes = undefined;
  }
}
