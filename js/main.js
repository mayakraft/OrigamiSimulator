/**
 * Created by ghassaei on 2/22/17.
 */

import defaults from "./globals";
import ThreeView from "./threeView";
import UI3D from "./3dUI";
import GPUMath from "./dynamic/GPUMath";
import DynamicSolver from "./dynamic/dynamicSolver";
import Model from "./model";
import Pattern from "./pattern";
import window from "./environment/window";
// import Controls from "./controls"; // this file is all kinds of front-end hardcoded
// import Importer from "./importer"; // also needs refactoring
// import Vive from "./VRInterface";  // haven't touched yet
// import VideoAnimator from "./videoAnimator"; // haven't touched yet


/**
 * return a copy of the user's options object that contains only keys
 * matching valid options parameters, taken from "globals.js"
 */
const validateUserOptions = function (options) {
  if (options == null) { return {}; }
  const validKeys = Object.keys(defaults);
  const validatedOptions = {};
  Object.keys(options)
    .filter(key => validKeys.includes(key))
    .forEach((key) => { validatedOptions[key] = options[key]; });
  return validatedOptions;
};


const OrigamiSimulator = function (options) {
  const app = Object.assign(
    JSON.parse(JSON.stringify(defaults)),
    validateUserOptions(options)
  );
  if (app.append == null) { app.append = window.document.body; }


  /** initialize the app */
  app.threeView = ThreeView(app);
  // app.controls = Controls(app);
  app.UI3D = UI3D(app);
  // app.importer = Importer(app);
  app.model = Model(app);
  app.gpuMath = GPUMath();
  app.dynamicSolver = DynamicSolver(app);
  app.pattern = Pattern(app);
  // app.vive = Vive(app);
  // app.videoAnimator = VideoAnimator(app);


  // object methods
  const loadSVG = function (svgAsDomNode) {
    app.threeView.resetModel();
    app.pattern.loadSVG(svgAsDomNode);
  };
  const loadSVGString = function (svgAsString) {
    app.threeView.resetModel();
    const svg = new DOMParser().parseFromString(svgAsString, "text/xml").childNodes[0];
    app.pattern.loadSVG(svg);
  };
  const warn = msg => console.warn(msg);
  const noCreasePatternAvailable = () => app.extension === "fold";
  const setTouchModeRotate = function () {
    app.touchMode = "rotate";
    app.threeView.enableCameraRotate(true);
    app.UI3D.hideHighlighters();
  };
  const setTouchModeGrab = function () {
    app.touchMode = "grab";
    app.threeView.enableCameraRotate(false);
    app.threeView.resetModel();
  };

  Object.defineProperty(app, "loadSVG", { value: loadSVG });
  Object.defineProperty(app, "loadSVGString", { value: loadSVGString });
  Object.defineProperty(app, "warn", { value: warn });
  Object.defineProperty(app, "noCreasePatternAvailable", { value: noCreasePatternAvailable });
  Object.defineProperty(app, "grab", {
    set: value => (value ? setTouchModeGrab() : setTouchModeRotate()),
    get: () => app.touchMode === "grab"
  });
  Object.defineProperty(app, "foldPercent", {
    set: (value) => {
      app.creasePercent = value;
      app.shouldChangeCreasePercent = true;
    },
    get: () => app.creasePercent
  });
  Object.defineProperty(app, "strain", {
    set: (value) => {
      app.colorMode = (value ? "axialStrain" : "color");
      app.model.setMeshMaterial();
    },
    get: () => app.colorMode === "axialStrain"
  });

  return app;
};

export default OrigamiSimulator;
