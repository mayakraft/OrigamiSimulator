import type { GPUMath } from "./GPUMath.ts";
import type { Model } from "../model/index.ts";
import { add, hslToRgb } from "../general/math.ts";

const strainClip = 0.5;

export const solveStep = (
  gpuMath: GPUMath,
  {
    textureDim,
    textureDimCreases,
    textureDimFaces,
    integrationType,
  }: {
    textureDim: number;
    textureDimCreases: number;
    textureDimFaces: number;
    integrationType: string;
  },
) => {
  gpuMath.setProgram("normalCalc");
  gpuMath.setSize(textureDimFaces, textureDimFaces);
  gpuMath.step(
    "normalCalc",
    ["u_faceVertexIndices", "u_lastPosition", "u_originalPosition"],
    "u_normals",
  );
  gpuMath.setProgram("thetaCalc");
  gpuMath.setSize(textureDimCreases, textureDimCreases);
  gpuMath.step(
    "thetaCalc",
    [
      "u_normals",
      "u_lastTheta",
      "u_creaseVectors",
      "u_lastPosition",
      "u_originalPosition",
    ],
    "u_theta",
  );
  gpuMath.setProgram("updateCreaseGeo");
  // already at textureDimCreasesxtextureDimCreases
  gpuMath.step(
    "updateCreaseGeo",
    ["u_lastPosition", "u_originalPosition", "u_creaseMeta2"],
    "u_creaseGeo",
  );
  switch (integrationType) {
    case "verlet":
      gpuMath.setProgram("positionCalcVerlet");
      gpuMath.setSize(textureDim, textureDim);
      gpuMath.step(
        "positionCalcVerlet",
        [
          "u_lastPosition",
          "u_lastLastPosition",
          "u_lastVelocity",
          "u_originalPosition",
          "u_externalForces",
          "u_mass",
          "u_meta",
          "u_beamMeta",
          "u_creaseMeta",
          "u_nodeCreaseMeta",
          "u_normals",
          "u_theta",
          "u_creaseGeo",
          "u_meta2",
          "u_nodeFaceMeta",
          "u_nominalTriangles",
        ],
        "u_position",
      );
      gpuMath.step(
        "velocityCalcVerlet",
        ["u_position", "u_lastPosition", "u_mass"],
        "u_velocity",
      );
      gpuMath.swapTextures2("u_lastPosition", "u_lastLastPosition");
      break;
    case "euler":
    default:
      gpuMath.setProgram("velocityCalc");
      gpuMath.setSize(textureDim, textureDim);
      gpuMath.step(
        "velocityCalc",
        [
          "u_lastPosition",
          "u_lastVelocity",
          "u_originalPosition",
          "u_externalForces",
          "u_mass",
          "u_meta",
          "u_beamMeta",
          "u_creaseMeta",
          "u_nodeCreaseMeta",
          "u_normals",
          "u_theta",
          "u_creaseGeo",
          "u_meta2",
          "u_nodeFaceMeta",
          "u_nominalTriangles",
        ],
        "u_velocity",
      );
      gpuMath.step(
        "positionCalc",
        ["u_velocity", "u_lastPosition", "u_mass"],
        "u_position",
      );
      break;
  }
  gpuMath.swapTextures2("u_theta", "u_lastTheta");
  gpuMath.swapTextures2("u_velocity", "u_lastVelocity");
  gpuMath.swapTextures2("u_position", "u_lastPosition");
};

/**
 * @description todo
 * @param {GPUMath} gpuMath
 * @param {Model} model
 * @param {object} options
 * @returns {number} the global error as a percent
 */
export const render = (
  gpuMath: GPUMath,
  model: Model,
  { textureDim, axialStrain }: { textureDim: number; axialStrain: boolean },
) => {
  if (!gpuMath) {
    return 0;
  }
  const vectorLength = 4;
  gpuMath.setProgram("packToBytes");
  gpuMath.setUniformForProgram("packToBytes", "u_vectorLength", vectorLength, "1f");
  gpuMath.setUniformForProgram(
    "packToBytes",
    "u_floatTextureDim",
    [textureDim, textureDim],
    "2f",
  );
  gpuMath.setSize(textureDim * vectorLength, textureDim);
  gpuMath.step("packToBytes", ["u_lastPosition"], "outputBytes");

  if (!gpuMath.readyToRead()) {
    return 0;
  }
  const numPixels = model.nodes.length * vectorLength;
  const height = Math.ceil(numPixels / (textureDim * vectorLength));
  const pixels = new Uint8Array(height * textureDim * 4 * vectorLength);
  gpuMath.readPixels(0, 0, textureDim * vectorLength, height, pixels);
  const parsedPixels = new Float32Array(pixels.buffer);
  let globalError = 0;
  for (let i = 0; i < model.nodes.length; i += 1) {
    const rgbaIndex = i * vectorLength;
    let nodeError = parsedPixels[rgbaIndex + 3] * 100;
    globalError += nodeError;
    const nodePosition: [number, number, number] = [
      parsedPixels[rgbaIndex],
      parsedPixels[rgbaIndex + 1],
      parsedPixels[rgbaIndex + 2],
    ];
    const [x, y, z] = add(nodePosition, model.nodes[i].originalPosition);
    model.positions[3 * i] = x;
    model.positions[3 * i + 1] = y;
    model.positions[3 * i + 2] = z;
    if (axialStrain) {
      if (nodeError > strainClip) nodeError = strainClip;
      const scaledVal = (1 - nodeError / strainClip) * 0.7;
      const [r, g, b] = hslToRgb(scaledVal * 360, 100, 50);
      model.colors[i * 3 + 0] = r / 255;
      model.colors[i * 3 + 1] = g / 255;
      model.colors[i * 3 + 2] = b / 255;
    }
  }
  return globalError / model.nodes.length;
};
