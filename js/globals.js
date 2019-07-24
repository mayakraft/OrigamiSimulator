/**
 * Created by ghassaei on 10/7/16.
 */

const globalDefaults = {
  // new options for node module
  // the <canvas> will be appended to this element
  parent: null, // to be set to document.body

  navMode: "simulation",
  // in place of userInteractionEnabled, more clear, opportunity to add modes
  touchMode: "rotate", // what to do on mouse drag, options: ["rotate", "grab"]

  // view
  backgroundColor: "ffffff",
  colorMode: "color",
  calcFaceStrain: false,
  color1: "ec008b",
  color2: "ffffff",
  edgesVisible: true,
  mtnsVisible: true,
  valleysVisible: true,
  panelsVisible: false,
  passiveEdgesVisible: false,
  boundaryEdgesVisible: true,
  meshVisible: true,
  ambientOcclusion: false,

  // flags
  simulationRunning: true,
  fixedHasChanged: false,
  forceHasChanged: false,
  materialHasChanged: false,
  creaseMaterialHasChanged: false,
  shouldResetDynamicSim: false, // not used
  shouldChangeCreasePercent: false,
  nodePositionHasChanged: false,
  shouldZeroDynamicVelocity: false,
  shouldCenterGeo: false,
  needsSync: false,
  simNeedsSync: false,
  menusVisible: true,
  pausedForPatternView: false,
  userInteractionEnabled: false,
  vrEnabled: false,

  url: null,
  numSteps: 100,

  // 3d vis
  simType: "dynamic",
  scale: 1,

  // compliant sim settings
  creasePercent: 0.6,
  axialStiffness: 20,
  creaseStiffness: 0.7,
  panelStiffness: 0.7,
  faceStiffness: 0.2,

  // dynamic sim settings
  percentDamping: 0.45, // damping ratio
  density: 1,
  integrationType: "euler",

  strainClip: 5.0, // for strain visualization, % strain that is drawn red

  // import pattern settings
  vertTol: 0.001, // vertex merge tolerance
  foldUseAngles: true, // import current angles from fold format as target angles

  // export settings
  //
  // save stl settings
  filename: null,
  extension: null,
  doublesidedSTL: false,
  doublesidedOBJ: false,
  exportScale: 1,
  thickenModel: true,
  thickenOffset: 5,
  polyFacesOBJ: true,

  // save fold settings
  foldUnits: "unit",
  triangulateFOLDexport: false,
  exportFoldAngle: true,

  capturer: null,
  capturerQuality: 63,
  capturerFPS: 60,
  gifFPS: 20,
  currentFPS: null,
  capturerScale: 1,
  capturerFrames: 0,
  shouldScaleCanvas: false,
  isGif: false,
  shouldAnimateFoldPercent: false,
};

export default globalDefaults;
