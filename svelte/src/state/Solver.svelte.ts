// settings to fine-tune the simulator's solver
class Solver {
  integration = $state("euler");
  axialStiffness = $state(20);
  faceStiffness = $state(0.2);
  joinStiffness = $state(0.7);
  creaseStiffness = $state(0.7);
  dampingRatio = $state(0.45);
}

export default new Solver();
