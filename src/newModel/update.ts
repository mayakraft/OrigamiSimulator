import type { GPUMath } from "./GPUMath.ts";
import type { Model } from "../model/index.ts";
import { float_type } from "./constants.ts";
import { subtract } from "../general/math.ts";

/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 */
export const updateMaterials = (
  gpuMath: GPUMath,
  model: Model,
  { meta, beamMeta, textureDimEdges },
  initing = false,
) => {
  let index = 0;
  for (let i = 0; i < model.nodes.length; i += 1) {
    if (initing) {
      meta[4 * i] = index;
      meta[4 * i + 1] = model.nodes[i].beams.length;
    }
    for (let j = 0; j < model.nodes[i].beams.length; j += 1) {
      const beam = model.nodes[i].beams[j];
      beamMeta[4 * index] = beam.getK();
      beamMeta[4 * index + 1] = beam.getD();
      if (initing) {
        beamMeta[4 * index + 2] = beam.getLength();
        beamMeta[4 * index + 3] = beam.getOtherNode(model.nodes[i]).index;
      }
      index += 1;
    }
  }
  gpuMath.initTextureFromData(
    "u_beamMeta",
    textureDimEdges,
    textureDimEdges,
    float_type,
    beamMeta,
    true,
  );
};

// this is not the UI-grab-and-move vertex thing. this must be something else.
// whatever it was built for, it's no longer used, externalForce is always 0.
/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 */
export const updateExternalForces = (
  gpuMath: GPUMath,
  model: Model,
  { externalForces, textureDim },
) => {
  for (let i = 0; i < model.nodes.length; i += 1) {
    // external forces is always 0, 0, 0
    const [x, y, z] = model.nodes[i].externalForce;
    externalForces[i * 4 + 0] = x;
    externalForces[i * 4 + 1] = y;
    externalForces[i * 4 + 2] = z;
  }
  gpuMath.initTextureFromData(
    "u_externalForces",
    textureDim,
    textureDim,
    float_type,
    externalForces,
    true,
  );
};

/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 */
export const updateFixed = (gpuMath: GPUMath, model: Model, { mass, textureDim }) => {
  for (let i = 0; i < model.nodes.length; i += 1) {
    mass[4 * i + 1] = model.nodes[i].fixed ? 1 : 0;
  }
  gpuMath.initTextureFromData("u_mass", textureDim, textureDim, float_type, mass, true);
};

/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 */
export const updateOriginalPosition = (
  gpuMath: GPUMath,
  model: Model,
  { originalPosition, textureDim },
) => {
  for (let i = 0; i < model.nodes.length; i += 1) {
    //const [x, y, z] = model.nodes[i].originalPosition;
    const [x, y, z] = model.fold.vertices_coordsInitial[i];
    originalPosition[i * 4 + 0] = x;
    originalPosition[i * 4 + 1] = y;
    originalPosition[i * 4 + 2] = z;
  }
  gpuMath.initTextureFromData(
    "u_originalPosition",
    textureDim,
    textureDim,
    float_type,
    originalPosition,
    true,
  );
};

/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 */
export const updateCreaseVectors = (
  gpuMath: GPUMath,
  model: Model,
  { creaseVectors, textureDimCreases },
) => {
  for (let i = 0; i < model.creases.length; i += 1) {
    const rgbaIndex = i * 4;
    const nodes = model.creases[i].edge.nodes;
    // this.vertices[1].clone().sub(this.vertices[0]);
    creaseVectors[rgbaIndex] = nodes[0].index;
    creaseVectors[rgbaIndex + 1] = nodes[1].index;
  }
  gpuMath.initTextureFromData(
    "u_creaseVectors",
    textureDimCreases,
    textureDimCreases,
    float_type,
    creaseVectors,
    true,
  );
};

/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 */
export const updateCreasesMeta = (
  gpuMath: GPUMath,
  model: Model,
  { creaseMeta, textureDimCreases },
  initing = false,
) => {
  for (let i = 0; i < model.creases.length; i += 1) {
    const crease = model.creases[i];
    creaseMeta[i * 4] = crease.getK();
    // creaseMeta[i * 4 + 1] = crease.getD();
  }
  if (initing) {
    for (let i = 0; i < model.creases.length; i += 1) {
      const crease = model.creases[i];
      creaseMeta[i * 4 + 2] = crease.targetTheta;
    }
  }
  gpuMath.initTextureFromData(
    "u_creaseMeta",
    textureDimCreases,
    textureDimCreases,
    float_type,
    creaseMeta,
    true,
  );
};

/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 */
export const updateLastPosition = (
  gpuMath: GPUMath,
  model: Model,
  { lastPosition, textureDim },
) => {
  for (let i = 0; i < model.nodes.length; i += 1) {
    // const [x, y, z] = model.nodes[i].getRelativePosition();
    /** @type {[number, number, number]} */
    const position: [number, number, number] = [
      model.positions[model.nodes[i].index * 3 + 0],
      model.positions[model.nodes[i].index * 3 + 1],
      model.positions[model.nodes[i].index * 3 + 2],
    ];
    //const [x, y, z] = subtract(position, model.nodes[i].originalPosition);
    const [x, y, z] = subtract(position, model.fold.vertices_coordsInitial[i]);
    lastPosition[i * 4 + 0] = x;
    lastPosition[i * 4 + 1] = y;
    lastPosition[i * 4 + 2] = z;
  }
  gpuMath.initTextureFromData(
    "u_lastPosition",
    textureDim,
    textureDim,
    float_type,
    lastPosition,
    true,
  );
  gpuMath.initFrameBufferForTexture("u_lastPosition", true);
};
