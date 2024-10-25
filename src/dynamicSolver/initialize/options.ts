export type GPUMathOptions = {
  creasePercent?: number;
  axialStiffness?: number;
  faceStiffness?: number;
  calcFaceStrain?: boolean;
};

// default settings for origami simulator
export const defaults: GPUMathOptions = Object.freeze({
  creasePercent: 0.0,
  axialStiffness: 20,
  faceStiffness: 0.2,
  calcFaceStrain: false,
});
