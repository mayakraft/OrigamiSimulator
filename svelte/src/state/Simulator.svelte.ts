//
// communication from outside to Origami Simulator
//

class Simulator {
  // turn on/off Origami Simulator's folding engine
  active = $state(true);

  // fold the origami model, float (0.0-1.0)
  foldAmount = $state(0.15);

  // override the material to show the model's strain forces
  strain = $state(false);

  // tool is either ["trackball", "pull"], this determines how
  // to respond to a user interface: rotate model or pull a vertex
  tool = $state("trackball");

  //
  // communication from Origami Simulator to outside
  //

  // vertex displacement error relayed back from the simulator
  error = $state(0);

  // reset the vertices back to their starting location
  reset = $state(() => { });

  // ask origami simulator to export the current 3D state
  exportModel = $state(() => { });
}

export default new Simulator();

