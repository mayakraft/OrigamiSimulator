import type { FOLD, FOLDMesh } from "../types.ts";
import { makeNode, destroyNode, type Node } from "./Node.ts";
import { Beam } from "./Beam.ts";
import { Crease } from "./Crease.ts";
import { prepare } from "../fold/prepare.ts";
import { exportFold } from "../model/exportFOLD.ts";
import { makeCreasesParams } from "./Crease.ts";
import { makeTypedArrays } from "./typedArrays.ts";

//const emptyMesh = (): FOLDMesh => ({
//  vertices_coords: [],
//  edges_vertices: [],
//  edges_assignment: [],
//  edges_foldAngle: [],
//  faces_vertices: [],
//  faces_edges: [],
//});

export class NewModel {
  fold: FOLDMesh;
  initialFOLD: FOLD;

  strain: boolean;
  axialStiffness: number;
  joinStiffness: number;
  creaseStiffness: number;
  dampingRatio: number;

  // vertex / color buffer arrays for GPU
  positions: Float32Array;
  colors: Float32Array;
  //indices: Uint16Array;

  nodes: Node[];
  edges: Beam[];
  creases: Crease[];

  /**
   * @description Load a new FOLD object into origami simulator.
   * Immediately following this method the solver should call .setModel()
   */
  constructor(foldObject: FOLD) {
    this.initialFOLD = foldObject;
    this.fold = prepare(foldObject);

    // makeObjects(fold: FOLDMesh): void
    const options = {
      axialStiffness: this.axialStiffness,
      joinStiffness: this.joinStiffness,
      creaseStiffness: this.creaseStiffness,
      dampingRatio: this.dampingRatio,
    };

    this.nodes = this.fold.vertices_coords.map(makeNode);
    this.edges = this.fold.edges_vertices
      .map((ev) => ev.map((v) => this.nodes[v]))
      .map(([a, b]) => new Beam([a, b], options));
    this.creases = makeCreasesParams(this.fold).map((param, index) =>
      new Crease({
        edge: this.edges[param.edge],
        index,
        type: param.foldAngle !== 0 ? 1 : 0, // type
        faces: param.faces,
        nodes: param.vertices.map((v) => this.nodes[v]) as [Node, Node],
        targetTheta: param.foldAngle * (Math.PI / 180), // until now this was in degrees
        options,
      }),
    );

    const { positions, colors, indices, lineIndices } = makeTypedArrays(this.fold);

    // save these for the solver to modify
    this.positions = positions;
    this.colors = colors;


    //setModel(newModel: Model, options: GPUMathOptions = {});
    ({
      textureDim: this.textureDim,
      textureDimCreases: this.textureDimCreases,
      textureDimFaces: this.textureDimFaces,
      textureDimEdges: this.textureDimEdges,
      meta: this.meta,
      beamMeta: this.beamMeta,
      creaseMeta: this.creaseMeta,
      lastPosition: this.lastPosition,
    } = initialize(this.gpuMath, this.model, options));









  }

  setAxialStiffness(value: number | string): void {
    this.axialStiffness = typeof value === "number" ? value : parseFloat(value);
    this.edges.forEach((edge) => {
      edge.axialStiffness = this.axialStiffness;
    });
  }

  setJoinStiffness(value: number | string): void {
    this.joinStiffness = typeof value === "number" ? value : parseFloat(value);
    this.creases.forEach((crease) => {
      crease.joinStiffness = this.joinStiffness;
    });
  }

  setCreaseStiffness(value: number | string): void {
    this.creaseStiffness = typeof value === "number" ? value : parseFloat(value);
    this.creases.forEach((crease) => {
      crease.creaseStiffness = this.creaseStiffness;
    });
  }

  setDampingRatio(value: number | string): void {
    this.dampingRatio = typeof value === "number" ? value : parseFloat(value);
    this.creases.forEach((crease) => {
      crease.dampingRatio = this.dampingRatio;
    });
    this.edges.forEach((edge) => {
      edge.dampingRatio = this.dampingRatio;
    });
  }

  export(): FOLD {
    return exportFold(this, this.initialFOLD, this.fold);
  }
}
