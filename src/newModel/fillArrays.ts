import type { NewModel } from "./NewModel.ts";
import type { GPUMathSettings } from "./initGPU.ts";
//import {
//  updateMaterials,
//  updateExternalForces,
//  updateFixed,
//  updateOriginalPosition,
//  updateCreaseVectors,
//  updateCreasesMeta,
//} from "../update.ts";
import { normalize, dot, subtract } from "../general/math.ts";

/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 *
 */
export const fillArrays = (
  model: NewModel,
  {
    textureDim,
    textureDimEdges,
    textureDimCreases,
    meta,
    meta2,
    faceVertexIndices,
    nodeFaceMeta,
    nominalTriangles,
    nodeCreaseMeta,
    creaseMeta2,
    lastTheta,
  }: GPUMathSettings,
) => {
  const numCreases = model.creases.length;
  const nodeFaces = verticesFaces(model);
  const originalPosition = new Float32Array(textureDim * textureDim * 4);
  const externalForces = new Float32Array(textureDim * textureDim * 4);
  const mass = new Float32Array(textureDim * textureDim * 4);
  const beamMeta = new Float32Array(textureDimEdges * textureDimEdges * 4);
  const creaseVectors = new Float32Array(textureDimCreases * textureDimCreases * 4);
  const creaseMeta = new Float32Array(textureDimCreases * textureDimCreases * 4);

  for (let i = 0; i < model.fold.faces_vertices.length; i += 1) {
    const face = model.fold.faces_vertices[i];
    faceVertexIndices[4 * i + 0] = face[0];
    faceVertexIndices[4 * i + 1] = face[1];
    faceVertexIndices[4 * i + 2] = face[2];
    //const a = model.nodes[face[0]].originalPosition;
    //const b = model.nodes[face[1]].originalPosition;
    //const c = model.nodes[face[2]].originalPosition;
    const a = model.fold.vertices_coordsInitial[face[0]];
    const b = model.fold.vertices_coordsInitial[face[1]];
    const c = model.fold.vertices_coordsInitial[face[2]];
    const ab = normalize(subtract(b, a));
    const ac = normalize(subtract(c, a));
    const bc = normalize(subtract(c, b));
    nominalTriangles[4 * i + 0] = Math.acos(dot(ab, ac));
    nominalTriangles[4 * i + 1] = Math.acos(-1 * dot(ab, bc));
    nominalTriangles[4 * i + 2] = Math.acos(dot(ac, bc));
    if (
      Math.abs(
        nominalTriangles[4 * i] +
        nominalTriangles[4 * i + 1] +
        nominalTriangles[4 * i + 2] -
        Math.PI,
      ) > 0.1
    ) {
      console.warn("bad angles");
    }
  }
  for (let i = 0; i < textureDim * textureDim; i += 1) {
    mass[4 * i + 1] = 1; // set all fixed by default
  }
  for (let i = 0; i < textureDimCreases * textureDimCreases; i += 1) {
    if (i >= numCreases) {
      lastTheta[i * 4 + 2] = -1;
      lastTheta[i * 4 + 3] = -1;
      continue;
    }
    lastTheta[i * 4 + 2] = model.creases[i].faces[0];
    lastTheta[i * 4 + 3] = model.creases[i].faces[1];
  }
  let index = 0;
  for (let i = 0; i < model.nodes.length; i += 1) {
    meta2[4 * i] = index;
    const num = nodeFaces[i].length;
    meta2[4 * i + 1] = num;
    for (let j = 0; j < num; j += 1) {
      const _index = (index + j) * 4;
      const face = model.fold.faces_vertices[nodeFaces[i][j]];
      nodeFaceMeta[_index] = nodeFaces[i][j];
      nodeFaceMeta[_index + 1] = face[0] === i ? -1 : face[0];
      nodeFaceMeta[_index + 2] = face[1] === i ? -1 : face[1];
      nodeFaceMeta[_index + 3] = face[2] === i ? -1 : face[2];
    }
    index += num;
  }
  index = 0;
  for (let i = 0; i < model.nodes.length; i += 1) {
    mass[4 * i] = model.nodes[i].simMass;
    meta[i * 4 + 2] = index;
    const nodeCreases = model.nodes[i].creases;
    // nodes attached to crease move in opposite direction
    const nodeInvCreases = model.nodes[i].invCreases;
    meta[i * 4 + 3] = nodeCreases.length + nodeInvCreases.length;
    for (let j = 0; j < nodeCreases.length; j += 1) {
      nodeCreaseMeta[index * 4] = nodeCreases[j].index;
      // type 1, 2, 3, 4
      nodeCreaseMeta[index * 4 + 1] = nodeCreases[j].getNodeIndex(model.nodes[i]);
      index += 1;
    }
    for (let j = 0; j < nodeInvCreases.length; j += 1) {
      nodeCreaseMeta[index * 4] = nodeInvCreases[j].index;
      // type 1, 2, 3, 4
      nodeCreaseMeta[index * 4 + 1] = nodeInvCreases[j].getNodeIndex(model.nodes[i]);
      index += 1;
    }
  }
  for (let i = 0; i < model.creases.length; i += 1) {
    const crease = model.creases[i];
    creaseMeta2[i * 4 + 0] = crease.nodes[0].index;
    creaseMeta2[i * 4 + 1] = crease.nodes[1].index;
    creaseMeta2[i * 4 + 2] = crease.edge.nodes[0].index;
    creaseMeta2[i * 4 + 3] = crease.edge.nodes[1].index;
    index += 1;
  }
  updateOriginalPosition(gpuMath, model, { originalPosition, textureDim });
  updateMaterials(gpuMath, model, { meta, beamMeta, textureDimEdges }, true);
  updateFixed(gpuMath, model, { mass, textureDim });
  updateExternalForces(gpuMath, model, { externalForces, textureDim });
  updateCreasesMeta(gpuMath, model, { creaseMeta, textureDimCreases }, true);
  updateCreaseVectors(gpuMath, model, { creaseVectors, textureDimCreases });
  return {
    originalPosition,
    externalForces,
    mass,
    beamMeta,
    creaseVectors,
    creaseMeta,
  };
};

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
  for (let i = 0; i < model.fold.vertices_coordsInitial.length; i += 1) {
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
