import type { FOLD, FOLDMesh } from "../types.ts";
import type { SolverOptions } from "./GPUMath.ts";
import { defaultSolverOptions } from "./GPUMath.ts";
import { GPUMath } from "./GPUMath.ts";
import { makeNode, destroyNode, type Node } from "./Node.ts";
import { Beam } from "./Beam.ts";
import { Crease } from "./Crease.ts";
import { prepare } from "../fold/prepare.ts";
import { exportFold } from "../model/exportFOLD.ts";
import { makeCreasesParams } from "./Crease.ts";
import { makeTypedArrays } from "./typedArrays.ts";
import { solveStep, render } from "./solve.ts";

/**
 * @description Get the center of the bounding box of the model.
 * @param {Model} model
 */
const modelCenter = (positions: Float32Array): [number, number, number] => {
  console.log("modelCenter()");
  if (!positions.length) {
    return [0, 0, 0];
  }
  const min = Array(3).fill(Infinity);
  const max = Array(3).fill(-Infinity);
  for (let i = 0; i < positions.length; i += 3) {
    for (let dim = 0; dim < 3; dim += 1) {
      min[dim] = Math.min(min[dim], positions[i + dim]);
      max[dim] = Math.max(max[dim], positions[i + dim]);
    }
  }
  return [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
};

//const emptyMesh = (): FOLDMesh => ({
//  vertices_coords: [],
//  edges_vertices: [],
//  edges_assignment: [],
//  edges_foldAngle: [],
//  faces_vertices: [],
//  faces_edges: [],
//});

export class NewModel {
  initialFOLD: FOLD;
  fold: FOLDMesh;
  gpuMath: GPUMath;

  strain: boolean;

  axialStiffness: number;
  joinStiffness: number;
  creaseStiffness: number;
  dampingRatio: number;

  // vertex / color buffer arrays for GPU
  positions: Float32Array;
  colors: Float32Array;
  indices: Uint16Array;
  lineIndices: { [key: string]: Uint16Array };

  nodes: Node[];
  edges: Beam[];
  creases: Crease[];

  /**
   * @description Load a new FOLD object into origami simulator.
   * Immediately following this method the solver should call .setModel()
   */
  constructor(foldObject: FOLD, options?: SolverOptions) {
    console.log("NewModel constructor()");
    // makeObjects(fold: FOLDMesh): void
    options = { ...defaultSolverOptions, ...options };

    this.initialFOLD = foldObject;
    this.fold = prepare(foldObject);

    this.axialStiffness = 20;
    this.joinStiffness = 0.7;
    this.creaseStiffness = 0.7;
    this.dampingRatio = 0.45;

    // will get rid of these eventually
    this.nodes = this.fold.vertices_coords.map(makeNode);

    // will get rid of these eventually
    this.edges = this.fold.edges_vertices
      .map((ev) => ev.map((v) => this.nodes[v]))
      .map(([a, b]) => new Beam([a, b], options));

    // will move creases here
    this.creases = makeCreasesParams(this.fold).map(
      (param, index) =>
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
    this.fold.creases = this.creases;

    const { positions, colors, indices, lineIndices } = makeTypedArrays(this.fold);

    // save these for the solver to modify
    this.positions = positions;
    this.colors = colors;
    this.indices = indices;
    this.lineIndices = lineIndices;

    this.gpuMath = new GPUMath(this);
  }

  /**
   * @description Reset the vertices of the model back to their original state.
   * @returns {number} the global error as a percent
   */
  reset(): number {
    console.log("NewModel reset()");
    this.gpuMath.step("zeroTexture", [], "u_position");
    this.gpuMath.step("zeroTexture", [], "u_lastPosition");
    this.gpuMath.step("zeroTexture", [], "u_lastLastPosition");
    this.gpuMath.step("zeroTexture", [], "u_velocity");
    this.gpuMath.step("zeroTexture", [], "u_lastVelocity");
    this.gpuMath.step("zeroThetaTexture", ["u_lastTheta"], "u_theta");
    this.gpuMath.step("zeroThetaTexture", ["u_theta"], "u_lastTheta");

    // todo: save strain
    //return render(this.gpuMath, this, computeStrain);
    return render(this.gpuMath, this, false);
  }

  /**
   * @description The user will call this method when the UI is pulling on a
   * vertex, this conveys to the solver that a node is being manually moved.
   */
  nodeDidMove(): void {
    console.log("NewModel nodeDidMove()");
    this.gpuMath.updateLastPosition(this);
    const [x, y, z] = modelCenter(this.positions);
    this.gpuMath.setProgram("centerTexture");
    this.gpuMath.setUniformForProgram("centerTexture", "u_center", [x, y, z], "3f");
    this.gpuMath.step("centerTexture", ["u_lastPosition"], "u_position");
    if (this.gpuMath.integrationType === "verlet") {
      this.gpuMath.step("copyTexture", ["u_position"], "u_lastLastPosition");
    }
    this.gpuMath.swapTextures2("u_position", "u_lastPosition");
    this.gpuMath.step("zeroTexture", [], "u_lastVelocity");
    this.gpuMath.step("zeroTexture", [], "u_velocity");
  }

  setIntegration(integration: string) {
    console.log("NewModel setIntegration()");
    this.gpuMath.integrationType = integration;
    this.reset();
  }

  /**
   * @description Some properties require rewrite to the shader textures,
   * after setting these properties, call this to update the texture data.
   */
  update(initing: boolean = false) {
    console.log("NewModel update()");
    // { creaseMeta, textureDimCreases }
    this.gpuMath.updateCreasesMeta(this, initing);
    // { meta, beamMeta, textureDimEdges }
    this.gpuMath.updateMaterials(this, initing);
  }

  setCreasePercent(value: string | number) {
    console.log("NewModel setCreasePercent()");
    const number = typeof value === "number" ? value : parseFloat(value);
    this.gpuMath.setProgram("velocityCalc");
    this.gpuMath.setUniformForProgram("velocityCalc", "u_creasePercent", number, "1f");
    this.gpuMath.setProgram("positionCalcVerlet");
    this.gpuMath.setUniformForProgram(
      "positionCalcVerlet",
      "u_creasePercent",
      number,
      "1f",
    );
    this.update();
  }

  // todo: duplicate methods
  setAxialStiffness(value: string | number) {
    console.log("NewModel setAxialStiffness()");
    const number = typeof value === "number" ? value : parseFloat(value);
    this.gpuMath.setProgram("velocityCalc");
    this.gpuMath.setUniformForProgram("velocityCalc", "u_axialStiffness", number, "1f");
    this.gpuMath.setProgram("positionCalcVerlet");
    this.gpuMath.setUniformForProgram(
      "positionCalcVerlet",
      "u_axialStiffness",
      number,
      "1f",
    );

    this.axialStiffness = typeof value === "number" ? value : parseFloat(value);
    this.edges.forEach((edge) => {
      edge.axialStiffness = this.axialStiffness;
    });
    this.update();
  }

  setFaceStiffness(value: string | number) {
    console.log("NewModel setFaceStiffness()");
    const number = typeof value === "number" ? value : parseFloat(value);
    this.gpuMath.setProgram("velocityCalc");
    this.gpuMath.setUniformForProgram("velocityCalc", "u_faceStiffness", number, "1f");
    this.gpuMath.setProgram("positionCalcVerlet");
    this.gpuMath.setUniformForProgram(
      "positionCalcVerlet",
      "u_faceStiffness",
      number,
      "1f",
    );
    this.update();
  }

  setFaceStrain(value: string | number) {
    console.log("NewModel setFaceStrain()");
    const number = typeof value === "number" ? value : parseFloat(value);
    this.gpuMath.setProgram("velocityCalc");
    this.gpuMath.setUniformForProgram("velocityCalc", "u_calcFaceStrain", number, "1f");
    this.gpuMath.setProgram("positionCalcVerlet");
    this.gpuMath.setUniformForProgram(
      "positionCalcVerlet",
      "u_calcFaceStrain",
      number,
      "1f",
    );
    this.update();
  }

  setJoinStiffness(value: number | string): void {
    this.joinStiffness = typeof value === "number" ? value : parseFloat(value);
    this.creases.forEach((crease) => {
      crease.joinStiffness = this.joinStiffness;
    });
    this.update();
  }

  setCreaseStiffness(value: number | string): void {
    this.creaseStiffness = typeof value === "number" ? value : parseFloat(value);
    this.creases.forEach((crease) => {
      crease.creaseStiffness = this.creaseStiffness;
    });
    this.update();
  }

  setDampingRatio(value: number | string): void {
    this.dampingRatio = typeof value === "number" ? value : parseFloat(value);
    this.creases.forEach((crease) => {
      crease.dampingRatio = this.dampingRatio;
    });
    this.edges.forEach((edge) => {
      edge.dampingRatio = this.dampingRatio;
    });
    this.update();
  }

  /**
   * @returns {number} the global error as a percent
   * @param {number} numSteps number of iterations to run the solver
   * @param {boolean} computeStrain should the strain values be computed?
   */
  solve(numSteps: number = 100, computeStrain: boolean = false): number {
    console.log("NewModel solve()");
    for (let j = 0; j < numSteps; j += 1) {
      solveStep(this.gpuMath, this.gpuMath);
    }
    //console.log(this.positions[10], this.positions[11], this.positions[12]);
    return render(this.gpuMath, this, computeStrain);
  }

  //export(): FOLD {
  //  return exportFold(this, this.initialFOLD, this.fold);
  //}

  dealloc() {
    console.log("NewModel dealloc()");
    // todo
  }
}
