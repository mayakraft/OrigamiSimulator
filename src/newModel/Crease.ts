/**
 * Created by amandaghassaei on 2/25/17.
 */
import type { FOLDMesh } from "../types.ts";
import type { Beam } from "./Beam.ts";
import { SolverOptions } from "./GPUMath.ts";
import type { Node } from "./Node.ts";

export class Crease {
  index: number;
  type: number;
  edge: Beam;
  faces: [number, number];
  nodes: [Node, Node];
  targetTheta: number;
  joinStiffness: number;
  creaseStiffness: number;
  dampingRatio: number;

  /** options these options tend to be app-wide, not specific to any one crease-line. */
  constructor({
    edge,
    index,
    type,
    faces,
    nodes,
    targetTheta,
    options: { joinStiffness = 0.7, creaseStiffness = 0.7, dampingRatio = 0.45 },
  }: {
    edge: Beam;
    index: number;
    type: 0 | 1;
    faces: [number, number];
    nodes: [Node, Node];
    targetTheta: number;
    options: SolverOptions;
  }) {

    this.index = index;
    this.type = type;
    this.edge = edge;

    // face[0] corresponds to node[0], face[1] to node[1]
    this.faces = [faces[0], faces[1]];
    this.nodes = nodes;
    this.targetTheta = targetTheta;
    this.joinStiffness = joinStiffness;
    this.creaseStiffness = creaseStiffness;
    this.dampingRatio = dampingRatio;
    edge.nodes.forEach((node) => node.invCreases.push(this));
    nodes[0].creases.push(this);
    nodes[1].creases.push(this);
  }

  getK(): number {
    const length = this.edge.getLength();
    return this.type === 0 ? this.joinStiffness * length : this.creaseStiffness * length;
  }

  getD(): number {
    return this.dampingRatio * 2 * Math.sqrt(this.getK());
  }

  getNodeIndex(node: Node): 0 | 1 | 2 | 3 | 4 {
    if (node === this.nodes[0]) {
      return 1;
    }
    if (node === this.nodes[1]) {
      return 2;
    }
    if (node === this.edge.nodes[0]) {
      return 3;
    }
    if (node === this.edge.nodes[1]) {
      return 4;
    }
    console.log("unknown node type");
    return 0;
  }

  destroy(): void {
    this.nodes.forEach((node) => {
      const index = node.creases.indexOf(this);
      if (index >= 0) node.creases.splice(index, 1);
    });

    if (this.edge && this.edge.nodes) {
      for (let i = 0; i < this.edge.nodes.length; i += 1) {
        const index = this.edge.nodes[i].invCreases.indexOf(this);
        if (index >= 0) this.edge.nodes[i].invCreases.splice(index, 1);
      }
    }
    this.edge = undefined;
    this.nodes = undefined;
  }
}

type CreaseParam = {
  faces: [number, number];
  vertices: [number, number];
  edge: number;
  foldAngle: number;
};

const creaseAssignments: { [key: string]: boolean } = {
  M: true,
  V: true,
  F: true,
  J: true,
  m: true,
  v: true,
  f: true,
  j: true,
};

export const makeCreasesParams = (fold: FOLDMesh): CreaseParam[] => {
  const result: (CreaseParam | undefined)[] = fold.edges_faces.map((faces, edge) => {
    const [v1, v2] = fold.edges_vertices[edge];
    if (faces.length !== 2) {
      return undefined;
    }
    if (!creaseAssignments[fold.edges_assignment[edge]]) {
      return undefined;
    }
    // this is the face vertex across from the edge
    const vertices = faces.map((face) =>
      fold.faces_vertices[face].filter((v) => v !== v1 && v !== v2).shift(),
    );
    // we might need to flip the order... for some reason I still don't know
    const v1Index = fold.faces_vertices[faces[1]].indexOf(v1);
    const v2Index = fold.faces_vertices[faces[1]].indexOf(v2);
    const flipOrder = v2Index - v1Index === 1 || v2Index - v1Index === -2;
    return {
      faces: flipOrder ? [faces[1], faces[0]] : [faces[0], faces[1]],
      vertices: flipOrder ? [vertices[1], vertices[0]] : [vertices[0], vertices[1]],
      edge,
      foldAngle: fold.edges_foldAngle[edge],
    };
  });
  return result.filter((a) => a !== undefined);
};

//export const makeCreases = (fold: FOLDMesh) => {
//  return makeCreasesParams(fold).map(
//    (param, i) =>
//      new Crease(
//        this.edges[param.edge],
//        i,
//        param.foldAngle !== 0 ? 1 : 0, // type
//        param.faces,
//        param.vertices.map((v) => this.nodes[v]),
//        param.foldAngle * (Math.PI / 180), // up until now everything has been in degrees
//        options,
//      ),
//  );
//};
