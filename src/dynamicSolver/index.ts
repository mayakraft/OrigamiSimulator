/**
 * Created by ghassaei on 10/7/16.
 */
import { GPUMath } from "./GPUMath.ts";
import type { Model } from "../model/index.ts";
import initialize from "./initialize/index.ts";
import { updateMaterials, updateCreasesMeta, updateLastPosition } from "./update.ts";
import { solveStep, render } from "./solve.ts";
// these few options are still remaining to be handled.
// not sure where the were used exactly
// - fixedHasChanged: false,

/**
 * @description Get the center of the bounding box of the model.
 * @param {Model} model
 */
const modelCenter = (model: Model): [number, number, number] => {
  if (!model.positions) { return [0, 0, 0]; }
  const min = Array(3).fill(Infinity);
  const max = Array(3).fill(-Infinity);
  for (let i = 0; i < model.positions.length; i += 3) {
    for (let dim = 0; dim < 3; dim += 1) {
      min[dim] = Math.min(min[dim], model.positions[i + dim]);
      max[dim] = Math.max(max[dim], model.positions[i + dim]);
    }
  }
  return [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
};

export class DynamicSolver {
  gpuMath: GPUMath | undefined;
  model: Model | null;
  textureDim;
  textureDimCreases;
  textureDimFaces;
  textureDimEdges;
  meta;
  beamMeta;
  creaseMeta;
  lastPosition;
  integrationType: string;

  constructor() {
    // the GPU instance which will be doing our calculation
    this.gpuMath = new GPUMath();
    // store reference to the Origami Simulator model
    this.model = null;

    // store these here due to being used the solve loop or nodeDidMove
    this.textureDim = null;
    this.textureDimCreases = null;
    this.textureDimFaces = null;
    this.textureDimEdges = null;
    this.meta = null;
    this.beamMeta = null;
    this.creaseMeta = null;
    //
    this.lastPosition = null;
    this.integrationType = "euler";
  }

  /**
   * @description The user will call this method when the UI is pulling on a
   * vertex, this conveys to the solver that a node is being manually moved.
   */
  nodeDidMove(): void {
    if (!this.gpuMath || !this.model) {
      return;
    }
    updateLastPosition(this.gpuMath, this.model, this);
    const [x, y, z] = modelCenter(this.model);
    this.gpuMath.setProgram("centerTexture");
    this.gpuMath.setUniformForProgram("centerTexture", "u_center", [x, y, z], "3f");
    this.gpuMath.step("centerTexture", ["u_lastPosition"], "u_position");
    if (this.integrationType === "verlet") {
      this.gpuMath.step("copyTexture", ["u_position"], "u_lastLastPosition");
    }
    this.gpuMath.swapTextures2("u_position", "u_lastPosition");
    this.gpuMath.step("zeroTexture", [], "u_lastVelocity");
    this.gpuMath.step("zeroTexture", [], "u_velocity");
  }

  /**
   * @returns {number} the global error as a percent
   * @param {number} numSteps number of iterations to run the solver
   * @param {boolean} computeStrain should the strain values be computed?
   */
  solve(numSteps: number = 100, computeStrain: boolean = false): number {
    if (!this.gpuMath || !this.model) {
      return 0;
    }
    // if (props.fixedHasChanged) {
    // 	updateFixed();
    // 	props.fixedHasChanged = false;
    // }
    for (let j = 0; j < numSteps; j += 1) {
      // { textureDim, textureDimCreases, textureDimFaces, integrationType }
      solveStep(this.gpuMath, this);
    }
    return render(this.gpuMath, this.model, {
      textureDim: this.textureDim,
      axialStrain: computeStrain,
    });
  }

  /**
   * @description Call this after a new model has been loaded
   * @param {Model} newModel the origami simulator model
   * @param {object} options optional initialization params. includes:
   * - creasePercent (number)
   * - axialStiffness (number)
   * - faceStiffness (number)
   * - calcFaceStrain (bool)
   */
  setModel(newModel: Model, options = {}): void {
    // these next 2 might be unnecessary
    // dealloc();
    // gpuMath = new GPUMath();
    // store the model
    this.model = newModel;
    // save these initialization variables
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
    // previous version reset the solver when a model loads.
    // do we need to? seems to work fine without.
    // solver.reset();
  }

  /**
   * @description Reset the vertices of the model back to their original state.
   * @returns {number} the global error as a percent
   */
  reset(): number {
    if (!this.gpuMath || !this.model) {
      return 0;
    }
    this.gpuMath.step("zeroTexture", [], "u_position");
    this.gpuMath.step("zeroTexture", [], "u_lastPosition");
    this.gpuMath.step("zeroTexture", [], "u_lastLastPosition");
    this.gpuMath.step("zeroTexture", [], "u_velocity");
    this.gpuMath.step("zeroTexture", [], "u_lastVelocity");
    this.gpuMath.step("zeroThetaTexture", ["u_lastTheta"], "u_theta");
    this.gpuMath.step("zeroThetaTexture", ["u_theta"], "u_lastTheta");
    return render(this.gpuMath, this.model, {
      textureDim: this.textureDim,
      axialStrain: true,
    });
  }

  /**
   * @description deallocate everything involved with the dynamic solver
   */
  dealloc(): void {
    if (this.gpuMath) {
      this.gpuMath.dealloc();
      this.gpuMath = undefined;
    }
  }

  setIntegration(integration: string) {
    this.integrationType = integration;
    this.reset();
  }

  setCreasePercent(value: string | number) {
    if (!this.gpuMath || !this.model) {
      return;
    }
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
  }

  setAxialStiffness(value: string | number) {
    if (!this.gpuMath || !this.model) {
      return;
    }
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
  }

  setFaceStiffness(value: string | number) {
    if (!this.gpuMath || !this.model) {
      return;
    }
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
  }

  setFaceStrain(value: string | number) {
    if (!this.gpuMath || !this.model) {
      return;
    }
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
  }

  /**
   * @description Some properties require rewrite to the shader textures,
   * after setting these properties, call this to update the texture data.
   */
  update() {
    if (!this.gpuMath || !this.model) {
      return;
    }
    // { creaseMeta, textureDimCreases }
    updateCreasesMeta(this.gpuMath, this.model, this);
    // { meta, beamMeta, textureDimEdges }
    updateMaterials(this.gpuMath, this.model, this);
  }

  // return {
  // 	solve,
  // 	setModel,
  // 	nodeDidMove,
  // 	reset,
  // 	dealloc,
  // 	setIntegration,
  // 	setCreasePercent,
  // 	setAxialStiffness,
  // 	setFaceStiffness,
  // 	setFaceStrain,
  // 	update,
  // };
  // };
}
