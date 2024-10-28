import type { GPUMath } from "../GPUMath.ts";
import type { GPUMathOptions } from "./options.ts";
import type { Model } from "../../model/index.ts";
import type { Beam } from "../../model/beam.ts";
import initArrays from "./initArrays.ts";
import fillArrays from "./fillArrays.ts";
import initGPU from "./initGPU.ts";

const calcDt = (model: Model): number => {
  let maxFreqNat = 0;
  model.edges.forEach((beam: Beam) => {
    if (beam.getNaturalFrequency() > maxFreqNat) {
      maxFreqNat = beam.getNaturalFrequency();
    }
  });
  // 0.9 of max delta t for good measure
  return (1 / (2 * Math.PI * maxFreqNat)) * 0.9;
};

const setSolveParams = (gpuMath: GPUMath, model: Model) => {
  console.log("index.ts setSolveParams() [10]");
  const dt = calcDt(model);
  // $("#deltaT").html(dt);
  gpuMath.setProgram("thetaCalc");
  gpuMath.setUniformForProgram("thetaCalc", "u_dt", dt, "1f");
  gpuMath.setProgram("velocityCalc");
  gpuMath.setUniformForProgram("velocityCalc", "u_dt", dt, "1f");
  gpuMath.setProgram("positionCalcVerlet");
  gpuMath.setUniformForProgram("positionCalcVerlet", "u_dt", dt, "1f");
  gpuMath.setProgram("positionCalc");
  gpuMath.setUniformForProgram("positionCalc", "u_dt", dt, "1f");
  gpuMath.setProgram("velocityCalcVerlet");
  gpuMath.setUniformForProgram("velocityCalcVerlet", "u_dt", dt, "1f");
  // options.controls.setDeltaT(dt);
};

const initialize = (gpuMath: GPUMath, model: Model, options: GPUMathOptions) => {
  console.log("index.ts initialize() [5]");
  const arrays = initArrays(gpuMath, model);
  const moreArrays = fillArrays(gpuMath, model, arrays);
  initGPU(gpuMath, arrays, options);
  setSolveParams(gpuMath, model);
  return { ...arrays, ...moreArrays };
};

export default initialize;
