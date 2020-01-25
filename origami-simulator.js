/* Origami Simulator (c) Amanda Ghassaei, MIT License */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.OrigamiSimulator = factory());
}(this, (function () { 'use strict';

  var globalDefaults = {
    parent: null,
    navMode: "simulation",
    touchMode: "rotate",
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
    simulationRunning: true,
    fixedHasChanged: false,
    forceHasChanged: false,
    materialHasChanged: false,
    creaseMaterialHasChanged: false,
    shouldResetDynamicSim: false,
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
    simType: "dynamic",
    scale: 1,
    creasePercent: 0.6,
    axialStiffness: 20,
    creaseStiffness: 0.7,
    panelStiffness: 0.7,
    faceStiffness: 0.2,
    percentDamping: 0.45,
    density: 1,
    integrationType: "euler",
    strainClip: 5.0,
    vertTol: 0.001,
    foldUseAngles: true,
    filename: null,
    extension: null,
    doublesidedSTL: false,
    doublesidedOBJ: false,
    exportScale: 1,
    thickenModel: true,
    thickenOffset: 5,
    polyFacesOBJ: true,
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
    shouldAnimateFoldPercent: false
  };

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
  var isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
  var isWebWorker = (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope";

  var htmlString = "<!DOCTYPE html><title>a</title>";
  var win = !isNode && isBrowser ? window : {};

  if (isNode) {
    var _require = require("xmldom"),
        DOMParser$1 = _require.DOMParser,
        XMLSerializer = _require.XMLSerializer;

    win.DOMParser = DOMParser$1;
    win.XMLSerializer = XMLSerializer;
    win.document = new DOMParser$1().parseFromString(htmlString, "text/html");
  }

  var THREE = win.THREE || require("three");

  var TrackballControls;

  if (isNode && !isBrowser) {
    TrackballControls = function TrackballControls() {
      return {};
    };
  } else {
    TrackballControls = win.TrackballControls || require("three-trackballcontrols");
  }

  function initThreeView(globals) {
    var container = globals.parent || win.document.getElementsByTagName("body")[0];
    var rect = container != null ? container.getBoundingClientRect() : {
      x: 0,
      y: 0,
      width: 320,
      height: 240
    };
    var scene = new THREE.Scene();
    var modelWrapper = new THREE.Object3D();
    var camera = new THREE.PerspectiveCamera(60, rect.width / rect.height, 0.1, 500);
    var renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    var controls;

    function setCameraX(sign) {
      controls.reset(new THREE.Vector3(sign, 0, 0));
    }

    function setCameraY(sign) {
      controls.reset(new THREE.Vector3(0, sign, 0));
    }

    function setCameraZ(sign) {
      controls.reset(new THREE.Vector3(0, 0, sign));
    }

    function setCameraIso() {
      controls.reset(new THREE.Vector3(1, 1, 1));
    }

    function resetCamera() {
      camera.zoom = 7;
      camera.fov = 100;
      camera.updateProjectionMatrix();
      camera.position.x = 4;
      camera.position.y = 4;
      camera.position.z = 4;
      if (controls) setCameraIso();
    }

    function render() {
      if (globals.vrEnabled) {
        globals.vive.render();
        return;
      }

      renderer.render(scene, camera);

      if (globals.capturer) {
        if (globals.capturer === "png") {
          var canvas = globals.threeView.renderer.domElement;
          canvas.toBlob(function (blob) {
            saveAs(blob, "".concat(globals.screenRecordFilename, ".png"));
          }, "image/png");
          globals.capturer = null;
          globals.shouldScaleCanvas = false;
          globals.shouldAnimateFoldPercent = false;
          globals.threeView.onWindowResize();
          return;
        }

        globals.capturer.capture(renderer.domElement);
      }
    }

    function loop() {
      if (globals.needsSync) {
        globals.model.sync();
      }

      if (globals.simNeedsSync) {
        globals.model.syncSolver();
      }

      if (globals.simulationRunning) globals.model.step();

      if (globals.vrEnabled) {
        render();
        return;
      }

      controls.update();
      render();
    }

    function startAnimation() {
      console.log("starting animation");
      renderer.setAnimationLoop(loop);
    }

    function pauseSimulation() {
      globals.simulationRunning = false;
      console.log("pausing simulation");
    }

    function startSimulation() {
      console.log("starting simulation");
      globals.simulationRunning = true;
    }

    function sceneAddModel(object) {
      modelWrapper.add(object);
    }

    function onWindowResize() {
      if (globals.vrEnabled) {
        globals.warn("Can't resize window when in VR mode.");
        return;
      }

      camera.aspect = win.innerWidth / win.innerHeight;
      camera.updateProjectionMatrix();
      var scale = 1;
      if (globals.shouldScaleCanvas) scale = globals.capturerScale;
      renderer.setSize(scale * win.innerWidth * 0.5, scale * win.innerHeight * 0.5);
      controls.handleResize();
    }

    function enableCameraRotate(state) {
      controls.enabled = state;
      controls.enableRotate = state;
    }

    function resetModel() {
      modelWrapper.rotation.set(0, 0, 0);
    }

    function setBackgroundColor() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globals.backgroundColor;
      scene.background.setStyle("#".concat(color));
    }

    function init() {
      renderer.setPixelRatio(win.devicePixelRatio);
      renderer.setSize(rect.width, rect.height);
      container.append(renderer.domElement);
      scene.background = new THREE.Color(0xffffff);
      setBackgroundColor();
      scene.add(modelWrapper);
      var directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.7);
      directionalLight1.position.set(100, 100, 100);
      scene.add(directionalLight1);
      var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight2.position.set(0, -100, 0);
      scene.add(directionalLight2);
      var spotLight1 = new THREE.SpotLight(0xffffff, 0.3);
      spotLight1.position.set(0, 100, 200);
      scene.add(spotLight1);
      var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);
      scene.add(camera);
      resetCamera();
      controls = new TrackballControls(camera, renderer.domElement);
      controls.rotateSpeed = 4.0;
      controls.zoomSpeed = 15;
      controls.noPan = true;
      controls.staticMoving = true;
      controls.dynamicDampingFactor = 0.3;
      controls.minDistance = 0.1;
      controls.maxDistance = 30;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      render();
      directionalLight1.castShadow = true;
      directionalLight1.shadow.mapSize.width = 2048;
      directionalLight1.shadow.mapSize.height = 2048;
      directionalLight1.shadow.camera.near = 0.5;
      directionalLight1.shadow.camera.far = 500;
    }

    init();
    return {
      sceneAddModel: sceneAddModel,
      onWindowResize: onWindowResize,
      startAnimation: startAnimation,
      startSimulation: startSimulation,
      pauseSimulation: pauseSimulation,
      enableCameraRotate: enableCameraRotate,
      scene: scene,
      camera: camera,
      renderer: renderer,
      modelWrapper: modelWrapper,
      setCameraX: setCameraX,
      setCameraY: setCameraY,
      setCameraZ: setCameraZ,
      setCameraIso: setCameraIso,
      resetModel: resetModel,
      resetCamera: resetCamera,
      setBackgroundColor: setBackgroundColor
    };
  }

  var THREE$1 = win.THREE || require("three");

  var nodeMaterial = new THREE$1.MeshBasicMaterial({
    color: 0x000000,
    side: THREE$1.DoubleSide
  });
  var transparentMaterial = new THREE$1.MeshBasicMaterial({
    color: 0xffffff,
    opacity: 0.5,
    transparent: true
  });
  var transparentVRMaterial = new THREE$1.MeshBasicMaterial({
    color: 0xffffff,
    opacity: 0.8,
    transparent: true
  });
  var nodeGeo = new THREE$1.SphereGeometry(0.02, 20);

  function Node(globals, position, index) {
    this.type = "node";
    this.index = index;
    this.globals = globals;
    this._originalPosition = position.clone();
    this.beams = [];
    this.creases = [];
    this.invCreases = [];
    this.externalForce = null;
    this.fixed = false;
  }

  Node.prototype.setFixed = function (fixed) {
    this.fixed = fixed;
  };

  Node.prototype.isFixed = function () {
    return this.fixed;
  };

  Node.prototype.addExternalForce = function (force) {};

  Node.prototype.getExternalForce = function () {
    if (!this.externalForce) return new THREE$1.Vector3(0, 0, 0);
    return this.externalForce.getForce();
  };

  Node.prototype.addCrease = function (crease) {
    this.creases.push(crease);
  };

  Node.prototype.removeCrease = function (crease) {
    if (this.creases === null) return;
    var index = this.creases.indexOf(crease);
    if (index >= 0) this.creases.splice(index, 1);
  };

  Node.prototype.addInvCrease = function (crease) {
    this.invCreases.push(crease);
  };

  Node.prototype.removeInvCrease = function (crease) {
    if (this.invCreases === null) return;
    var index = this.invCreases.indexOf(crease);
    if (index >= 0) this.invCreases.splice(index, 1);
  };

  Node.prototype.addBeam = function (beam) {
    this.beams.push(beam);
  };

  Node.prototype.removeBeam = function (beam) {
    if (this.beams === null) return;
    var index = this.beams.indexOf(beam);
    if (index >= 0) this.beams.splice(index, 1);
  };

  Node.prototype.getBeams = function () {
    return this.beams;
  };

  Node.prototype.numBeams = function () {
    return this.beams.length;
  };

  Node.prototype.isConnectedTo = function (node) {
    for (var i = 0; i < this.beams.length; i += 1) {
      if (this.beams[i].getOtherNode(this) == node) return true;
    }

    return false;
  };

  Node.prototype.numCreases = function () {
    return this.creases.length;
  };

  Node.prototype.getIndex = function () {
    return this.index;
  };

  Node.prototype.getObject3D = function () {
    return this.object3D;
  };

  Node.prototype.setTransparent = function () {
    if (!this.object3D) {
      this.object3D = new THREE$1.Mesh(nodeGeo, nodeMaterial);
      this.object3D.visible = false;
    }

    this.object3D.material = transparentMaterial;
  };

  Node.prototype.setTransparentVR = function () {
    if (!this.object3D) {
      this.object3D = new THREE$1.Mesh(nodeGeo, nodeMaterial);
      this.object3D.visible = false;
    }

    this.object3D.material = transparentVRMaterial;
    this.object3D.scale.set(0.4, 0.4, 0.4);
  };

  Node.prototype.getOriginalPosition = function () {
    return this._originalPosition.clone();
  };

  Node.prototype.setOriginalPosition = function (x, y, z) {
    this._originalPosition.set(x, y, z);
  };

  Node.prototype.getPosition = function () {
    var positions = this.globals.model.getPositionsArray();
    var i = this.getIndex();
    return new THREE$1.Vector3(positions[3 * i], positions[3 * i + 1], positions[3 * i + 2]);
  };

  Node.prototype.moveManually = function (position) {
    var positions = this.globals.model.getPositionsArray();
    var i = this.getIndex();
    positions[3 * i] = position.x;
    positions[3 * i + 1] = position.y;
    positions[3 * i + 2] = position.z;
  };

  Node.prototype.getRelativePosition = function () {
    return this.getPosition().sub(this._originalPosition);
  };

  Node.prototype.getSimMass = function () {
    return 1;
  };

  Node.prototype.destroy = function () {
    this.object3D = null;
    this.beams = null;
    this.creases = null;
    this.invCreases = null;
    this.externalForce = null;
  };

  var THREE$2 = win.THREE || require("three");

  function init3DUI(globals) {
    var raycaster = new THREE$2.Raycaster();
    var mouse = new THREE$2.Vector2();
    var raycasterPlane = new THREE$2.Plane(new THREE$2.Vector3(0, 0, 1));
    var isDragging = false;
    var draggingNode = null;
    var draggingNodeFixed = false;
    var mouseDown = false;
    var highlightedObj;
    var highlighter1 = new Node(globals, new THREE$2.Vector3());
    highlighter1.setTransparent();
    globals.threeView.scene.add(highlighter1.getObject3D());

    function setHighlightedObj(object) {
      if (highlightedObj && object != highlightedObj) {
        highlighter1.getObject3D().visible = false;
      }

      highlightedObj = object;

      if (highlightedObj) {
        highlighter1.getObject3D().visible = true;
      }
    }

    win.document.addEventListener("mousedown", function (e) {
      mouseDown = true;

      if (globals.touchMode === "grab") {
        var parent = globals.parent || win.document.getElementsByTagName("body")[0];
        var bounds = parent.getBoundingClientRect();
        mouse.x = (e.clientX - bounds.x) / bounds.width * 2 - 1;
        mouse.y = -((e.clientY - bounds.y) / bounds.height) * 2 + 1;
        raycaster.setFromCamera(mouse, globals.threeView.camera);
        var obj = checkForIntersections(e, globals.model.getMesh());
        setHighlightedObj(obj);

        if (highlightedObj) {
          draggingNode = highlightedObj;
          draggingNodeFixed = draggingNode.isFixed();
          draggingNode.setFixed(true);
          globals.fixedHasChanged = true;
          globals.threeView.enableCameraRotate(false);
        } else {
          globals.threeView.enableCameraRotate(true);
        }
      }
    }, false);
    win.document.addEventListener("mouseup", function () {
      isDragging = false;

      if (draggingNode) {
        draggingNode.setFixed(draggingNodeFixed);
        draggingNode = null;
        globals.fixedHasChanged = true;
        setHighlightedObj(null);
        globals.shouldCenterGeo = true;
      }

      if (globals.touchMode === "grab") {
        globals.threeView.enableCameraRotate(false);
      }

      mouseDown = false;
    }, false);
    win.document.addEventListener("mousemove", mouseMove, false);

    function mouseMove(e) {
      if (mouseDown) {
        isDragging = true;
      }

      if (globals.touchMode === "rotate") {
        return;
      }

      if (isDragging) {
        if (highlightedObj) {
          var parent = globals.parent || win.document.getElementsByTagName("body")[0];
          var bounds = parent.getBoundingClientRect();
          mouse.x = (e.clientX - bounds.x) / bounds.width * 2 - 1;
          mouse.y = -((e.clientY - bounds.y) / bounds.height) * 2 + 1;
          raycaster.setFromCamera(mouse, globals.threeView.camera);
          var intersection = getIntersectionWithObjectPlane(highlightedObj.getPosition().clone());
          highlightedObj.moveManually(intersection);
          globals.nodePositionHasChanged = true;
        }
      } else {
        var _parent = globals.parent || win.document.getElementsByTagName("body")[0];

        var _bounds = _parent.getBoundingClientRect();

        mouse.x = (e.clientX - _bounds.x) / _bounds.width * 2 - 1;
        mouse.y = -((e.clientY - _bounds.y) / _bounds.height) * 2 + 1;
        raycaster.setFromCamera(mouse, globals.threeView.camera);
        var obj = checkForIntersections(e, globals.model.getMesh());
        setHighlightedObj(obj);
      }

      if (highlightedObj) {
        var position = highlightedObj.getPosition();
        highlighter1.getObject3D().position.set(position.x, position.y, position.z);
      }
    }

    function getIntersectionWithObjectPlane(position) {
      var cameraOrientation = globals.threeView.camera.getWorldDirection();
      var dist = position.dot(cameraOrientation);
      raycasterPlane.set(cameraOrientation, -dist);
      var intersection = new THREE$2.Vector3();
      raycaster.ray.intersectPlane(raycasterPlane, intersection);
      return intersection;
    }

    function checkForIntersections(e, objects) {
      var _highlightedObj = null;
      var intersections = raycaster.intersectObjects(objects, false);

      if (intersections.length > 0) {
        var face = intersections[0].face;
        var position = intersections[0].point;
        var positionsArray = globals.model.getPositionsArray();
        var vertices = [];
        vertices.push(new THREE$2.Vector3(positionsArray[3 * face.a], positionsArray[3 * face.a + 1], positionsArray[3 * face.a + 2]));
        vertices.push(new THREE$2.Vector3(positionsArray[3 * face.b], positionsArray[3 * face.b + 1], positionsArray[3 * face.b + 2]));
        vertices.push(new THREE$2.Vector3(positionsArray[3 * face.c], positionsArray[3 * face.c + 1], positionsArray[3 * face.c + 2]));
        var dist = vertices[0].clone().sub(position).lengthSq();
        var nodeIndex = face.a;

        for (var i = 1; i < 3; i += 1) {
          var _dist = vertices[i].clone().sub(position).lengthSq();

          if (_dist < dist) {
            dist = _dist;
            if (i === 1) nodeIndex = face.b;else nodeIndex = face.c;
          }
        }

        var nodesArray = globals.model.getNodes();
        _highlightedObj = nodesArray[nodeIndex];
      }

      return _highlightedObj;
    }

    function hideHighlighters() {
      highlighter1.getObject3D().visible = false;
    }

    return {
      hideHighlighters: hideHighlighters
    };
  }

  function GLBoilerPlate() {
    function compileShader(gl, shaderSource, shaderType) {
      var shader = gl.createShader(shaderType);
      gl.shaderSource(shader, shaderSource);
      gl.compileShader(shader);
      var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

      if (!success) {
        throw new Error("could not compile shader: ".concat(gl.getShaderInfoLog(shader)));
      }

      return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
      var program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      var success = gl.getProgramParameter(program, gl.LINK_STATUS);

      if (!success) {
        throw new Error("program filed to link: ".concat(gl.getProgramInfoLog(program)));
      }

      return program;
    }

    function createShaderFromSource(gl, shaderSource, shaderType) {
      return compileShader(gl, shaderSource, shaderType);
    }

    function createProgramFromSource(gl, vertexShaderSrc, fragmentShaderSrc) {
      var vertexShader = createShaderFromSource(gl, vertexShaderSrc, gl.VERTEX_SHADER);
      var fragmentShader = createShaderFromSource(gl, fragmentShaderSrc, gl.FRAGMENT_SHADER);
      return createProgram(gl, vertexShader, fragmentShader);
    }

    function loadVertexData(gl, program) {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      var positionLocation = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    }

    function makeTexture(gl, width, height, type, data) {
      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, type, data);
      return texture;
    }

    return {
      createProgramFromSource: createProgramFromSource,
      loadVertexData: loadVertexData,
      makeTexture: makeTexture
    };
  }

  function initGPUMath() {
    var glBoilerplate = GLBoilerPlate();
    var canvas = win.document.createElement("canvas");
    canvas.setAttribute("style", "display:none;");
    canvas.setAttribute("class", "gpuMathCanvas");
    win.document.body.appendChild(canvas);
    var gl = canvas.getContext("webgl", {
      antialias: false
    }) || canvas.getContext("experimental-webgl", {
      antialias: false
    });
    var floatTextures = gl.getExtension("OES_texture_float");

    function notSupported() {
      console.warn("floating point textures are not supported on your system");
    }

    if (!floatTextures) {
      notSupported();
    }

    gl.disable(gl.DEPTH_TEST);
    var maxTexturesInFragmentShader = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    console.log("".concat(maxTexturesInFragmentShader, " textures max"));

    function GPUMath() {
      this.reset();
    }

    GPUMath.prototype.createProgram = function (programName, vertexShader, fragmentShader) {
      var programs = this.programs;
      var program = programs[programName];

      if (program) {
        gl.useProgram(program.program);
        return;
      }

      program = glBoilerplate.createProgramFromSource(gl, vertexShader, fragmentShader);
      gl.useProgram(program);
      glBoilerplate.loadVertexData(gl, program);
      programs[programName] = {
        program: program,
        uniforms: {}
      };
    };

    GPUMath.prototype.initTextureFromData = function (name, width, height, typeName, data, shouldReplace) {
      var texture = this.textures[name];

      if (texture) {
        if (!shouldReplace) {
          console.warn("already a texture with the name ".concat(name));
          return;
        }

        gl.deleteTexture(texture);
      }

      texture = glBoilerplate.makeTexture(gl, width, height, gl[typeName], data);
      this.textures[name] = texture;
    };

    GPUMath.prototype.initFrameBufferForTexture = function (textureName, shouldReplace) {
      var framebuffer = this.frameBuffers[textureName];

      if (framebuffer) {
        if (!shouldReplace) {
          console.warn("framebuffer already exists for texture ".concat(textureName));
          return;
        }

        gl.deleteFramebuffer(framebuffer);
      }

      var texture = this.textures[textureName];

      if (!texture) {
        console.warn("texture ".concat(textureName, " does not exist"));
        return;
      }

      framebuffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      var check = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

      if (check !== gl.FRAMEBUFFER_COMPLETE) {
        notSupported();
      }

      this.frameBuffers[textureName] = framebuffer;
    };

    GPUMath.prototype.setUniformForProgram = function (programName, name, val, type) {
      if (!this.programs[programName]) {
        console.warn("no program with name " + programName);
        return;
      }

      var uniforms = this.programs[programName].uniforms;
      var location = uniforms[name];

      if (!location) {
        location = gl.getUniformLocation(this.programs[programName].program, name);
        uniforms[name] = location;
      }

      if (type === "1f") gl.uniform1f(location, val);else if (type === "2f") gl.uniform2f(location, val[0], val[1]);else if (type === "3f") gl.uniform3f(location, val[0], val[1], val[2]);else if (type === "1i") gl.uniform1i(location, val);else {
        console.warn("no uniform for type ".concat(type));
      }
    };

    GPUMath.prototype.setSize = function (width, height) {
      gl.viewport(0, 0, width, height);
      canvas.style.width = "".concat(width, "px");
      canvas.style.height = "".concat(height, "px");
    };

    GPUMath.prototype.setProgram = function (programName) {
      var program = this.programs[programName];
      if (program) gl.useProgram(program.program);
    };

    GPUMath.prototype.step = function (programName, inputTextures, outputTexture, time) {
      gl.useProgram(this.programs[programName].program);
      if (time) this.setUniformForProgram(programName, "u_time", time, "1f");
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffers[outputTexture]);

      for (var i = 0; i < inputTextures.length; i += 1) {
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, this.textures[inputTextures[i]]);
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    GPUMath.prototype.swapTextures = function (texture1Name, texture2Name) {
      var temp = this.textures[texture1Name];
      this.textures[texture1Name] = this.textures[texture2Name];
      this.textures[texture2Name] = temp;
      temp = this.frameBuffers[texture1Name];
      this.frameBuffers[texture1Name] = this.frameBuffers[texture2Name];
      this.frameBuffers[texture2Name] = temp;
    };

    GPUMath.prototype.swap3Textures = function (texture1Name, texture2Name, texture3Name) {
      var temp = this.textures[texture3Name];
      this.textures[texture3Name] = this.textures[texture2Name];
      this.textures[texture2Name] = this.textures[texture1Name];
      this.textures[texture1Name] = temp;
      temp = this.frameBuffers[texture3Name];
      this.frameBuffers[texture3Name] = this.frameBuffers[texture2Name];
      this.frameBuffers[texture2Name] = this.frameBuffers[texture1Name];
      this.frameBuffers[texture1Name] = temp;
    };

    GPUMath.prototype.readyToRead = function () {
      return gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    };

    GPUMath.prototype.readPixels = function (xMin, yMin, width, height, array) {
      gl.readPixels(xMin, yMin, width, height, gl.RGBA, gl.UNSIGNED_BYTE, array);
    };

    GPUMath.prototype.reset = function () {
      this.programs = {};
      this.frameBuffers = {};
      this.textures = {};
      this.index = 0;
    };

    return new GPUMath();
  }

  var vertexShader = "attribute vec2 a_position;\nvoid main() {\n   gl_Position = vec4(a_position, 0, 1);\n}\n";

  var positionCalcShader = "precision mediump float;\nuniform vec2 u_textureDim;\nuniform float u_dt;\nuniform sampler2D u_lastPosition;\nuniform sampler2D u_velocity;\nuniform sampler2D u_mass;\n\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDim;\n\n  vec3 lastPosition = texture2D(u_lastPosition, scaledFragCoord).xyz;\n\n  float isFixed = texture2D(u_mass, scaledFragCoord).y;\n  if (isFixed == 1.0){\n    gl_FragColor = vec4(lastPosition, 0.0);\n    return;\n  }\n\n  vec4 velocityData = texture2D(u_velocity, scaledFragCoord);\n  vec3 position = velocityData.xyz*u_dt + lastPosition;\n  gl_FragColor = vec4(position, velocityData.a);//velocity.a has error info\n}\n";

  var velocityCalcVerletShader = "precision mediump float;\nuniform vec2 u_textureDim;\nuniform float u_dt;\nuniform sampler2D u_position;\nuniform sampler2D u_lastPosition;\nuniform sampler2D u_mass;\n\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDim;\n\n  float isFixed = texture2D(u_mass, scaledFragCoord).y;\n  if (isFixed == 1.0){\n    gl_FragColor = vec4(0.0);\n    return;\n  }\n\n  vec3 position = texture2D(u_position, scaledFragCoord).xyz;\n  vec3 lastPosition = texture2D(u_lastPosition, scaledFragCoord).xyz;\n  gl_FragColor = vec4((position-lastPosition)/u_dt,0.0);\n}\n";

  var velocityCalcShader = "precision mediump float;\nuniform vec2 u_textureDim;\nuniform vec2 u_textureDimEdges;\nuniform vec2 u_textureDimFaces;\nuniform vec2 u_textureDimCreases;\nuniform vec2 u_textureDimNodeCreases;\nuniform vec2 u_textureDimNodeFaces;\nuniform float u_creasePercent;\nuniform float u_dt;\nuniform float u_axialStiffness;\nuniform float u_faceStiffness;\nuniform sampler2D u_lastPosition;\nuniform sampler2D u_lastVelocity;\nuniform sampler2D u_originalPosition;\nuniform sampler2D u_externalForces;\nuniform sampler2D u_mass;\nuniform sampler2D u_meta;//[beamsIndex, numBeam, nodeCreaseMetaIndex, numCreases]\nuniform sampler2D u_beamMeta;//[k, d, length, otherNodeIndex]\nuniform sampler2D u_creaseMeta;//[k, d, targetTheta]\nuniform sampler2D u_nodeCreaseMeta;//[creaseIndex, nodeIndex, -, -]\nuniform sampler2D u_normals;\nuniform sampler2D u_theta;//[theta, z, normal1Index, normal2Index]\nuniform sampler2D u_creaseGeo;//[h1, h2, coef1, coef2]\nuniform sampler2D u_meta2;//[nodesFaceIndex, numFaces]\nuniform sampler2D u_nodeFaceMeta;//[faceIndex, a, b, c]\nuniform sampler2D u_nominalTriangles;//[angleA, angleB, angleC]\nuniform bool u_calcFaceStrain;\n\nvec4 getFromArray(float index1D, vec2 dimensions, sampler2D tex){\n  vec2 index = vec2(mod(index1D, dimensions.x)+0.5, floor(index1D/dimensions.x)+0.5);\n  vec2 scaledIndex = index/dimensions;\n  return texture2D(tex, scaledIndex);\n}\n\nvec3 getPosition(float index1D){\n  vec2 index = vec2(mod(index1D, u_textureDim.x)+0.5, floor(index1D/u_textureDim.x)+0.5);\n  vec2 scaledIndex = index/u_textureDim;\n  return texture2D(u_lastPosition, scaledIndex).xyz + texture2D(u_originalPosition, scaledIndex).xyz;\n}\n\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDim;\n\n  vec2 mass = texture2D(u_mass, scaledFragCoord).xy;\n  if (mass[1] == 1.0){//fixed\n    gl_FragColor = vec4(0.0);\n    return;\n  }\n  vec3 force = texture2D(u_externalForces, scaledFragCoord).xyz;\n  vec3 lastPosition = texture2D(u_lastPosition, scaledFragCoord).xyz;\n  vec3 lastVelocity = texture2D(u_lastVelocity, scaledFragCoord).xyz;\n  vec3 originalPosition = texture2D(u_originalPosition, scaledFragCoord).xyz;\n\n  vec4 neighborIndices = texture2D(u_meta, scaledFragCoord);\n  vec4 meta = texture2D(u_meta, scaledFragCoord);\n  vec2 meta2 = texture2D(u_meta2, scaledFragCoord).xy;\n\n  float nodeError = 0.0;\n\n  for (int j=0;j<100;j++){//for all beams (up to 100, had to put a const int in here)\n    if (j >= int(meta[1])) break;\n\n    vec4 beamMeta = getFromArray(meta[0]+float(j), u_textureDimEdges, u_beamMeta);\n\n    float neighborIndex1D = beamMeta[3];\n    vec2 neighborIndex = vec2(mod(neighborIndex1D, u_textureDim.x)+0.5, floor(neighborIndex1D/u_textureDim.x)+0.5);\n    vec2 scaledNeighborIndex = neighborIndex/u_textureDim;\n    vec3 neighborLastPosition = texture2D(u_lastPosition, scaledNeighborIndex).xyz;\n    vec3 neighborLastVelocity = texture2D(u_lastVelocity, scaledNeighborIndex).xyz;\n    vec3 neighborOriginalPosition = texture2D(u_originalPosition, scaledNeighborIndex).xyz;\n\n    vec3 nominalDist = neighborOriginalPosition-originalPosition;\n    vec3 deltaP = neighborLastPosition-lastPosition+nominalDist;\n    float deltaPLength = length(deltaP);\n    deltaP -= deltaP*(beamMeta[2]/deltaPLength);\n    if (!u_calcFaceStrain) nodeError += abs(deltaPLength/length(nominalDist) - 1.0);\n    vec3 deltaV = neighborLastVelocity-lastVelocity;\n\n    vec3 _force = deltaP*beamMeta[0] + deltaV*beamMeta[1];\n    force += _force;\n  }\n  if (!u_calcFaceStrain) nodeError /= meta[1];\n\n  for (int j=0;j<100;j++){//for all creases (up to 100, had to put a const int in here)\n    if (j >= int(meta[3])) break;\n\n    vec4 nodeCreaseMeta = getFromArray(meta[2]+float(j), u_textureDimNodeCreases, u_nodeCreaseMeta);\n\n    float creaseIndex1D = nodeCreaseMeta[0];\n    vec2 creaseIndex = vec2(mod(creaseIndex1D, u_textureDimCreases.x)+0.5, floor(creaseIndex1D/u_textureDimCreases.x)+0.5);\n    vec2 scaledCreaseIndex = creaseIndex/u_textureDimCreases;\n\n    vec4 thetas = texture2D(u_theta, scaledCreaseIndex);\n    vec3 creaseMeta = texture2D(u_creaseMeta, scaledCreaseIndex).xyz;//[k, d, targetTheta]\n    vec4 creaseGeo = texture2D(u_creaseGeo, scaledCreaseIndex);//[h1, h2, coef1, coef2]\n    if (creaseGeo[0]< 0.0) continue;//crease disabled bc it has collapsed too much\n\n    float targetTheta = creaseMeta[2] * u_creasePercent;\n    float angForce = creaseMeta[0]*(targetTheta-thetas[0]);// + creaseMeta[1]*thetas[1];\n\n    float nodeNum = nodeCreaseMeta[1];//1, 2, 3, 4\n\n    if (nodeNum > 2.0){//crease reaction, node is on a crease\n\n      //node #1\n      vec3 normal1 = getFromArray(thetas[2], u_textureDimFaces, u_normals).xyz;\n\n      //node #2\n      vec3 normal2 = getFromArray(thetas[3], u_textureDimFaces, u_normals).xyz;\n\n      float coef1 = creaseGeo[2];\n      float coef2 = creaseGeo[3];\n\n      if (nodeNum == 3.0){\n        coef1 = 1.0-coef1;\n        coef2 = 1.0-coef2;\n      }\n\n      vec3 _force = -angForce*(coef1/creaseGeo[0]*normal1 + coef2/creaseGeo[1]*normal2);\n      force += _force;\n\n    } else {\n\n      float normalIndex1D = thetas[2];//node #1\n      float momentArm = creaseGeo[0];//node #1\n      if (nodeNum == 2.0) {\n        normalIndex1D = thetas[3];//node #2\n        momentArm = creaseGeo[1];//node #2\n      }\n\n      vec3 normal = getFromArray(normalIndex1D, u_textureDimFaces, u_normals).xyz;\n\n      vec3 _force = angForce/momentArm*normal;\n      force += _force;\n    }\n  }\n\n  for (int j=0;j<100;j++){//for all faces (up to 100, had to put a const int in here)\n    if (j >= int(meta2[1])) break;\n\n    vec4 faceMeta = getFromArray(meta2[0]+float(j), u_textureDimNodeFaces, u_nodeFaceMeta);//[face index, a, b, c]\n    vec3 nominalAngles = getFromArray(faceMeta[0], u_textureDimFaces, u_nominalTriangles).xyz;//[angA, angB, angC]\n\n    int faceIndex = 0;\n    if (faceMeta[2] < 0.0) faceIndex = 1;\n    if (faceMeta[3] < 0.0) faceIndex = 2;\n\n    //get node positions\n    vec3 a = faceIndex == 0 ? lastPosition+originalPosition : getPosition(faceMeta[1]);\n    vec3 b = faceIndex == 1 ? lastPosition+originalPosition : getPosition(faceMeta[2]);\n    vec3 c = faceIndex == 2 ? lastPosition+originalPosition : getPosition(faceMeta[3]);\n\n    //calc angles\n    vec3 ab = b-a;\n    vec3 ac = c-a;\n    vec3 bc = c-b;\n\n    float lengthAB = length(ab);\n    float lengthAC = length(ac);\n    float lengthBC = length(bc);\n\n    float tol = 0.0000001;\n    if (abs(lengthAB) < tol || abs(lengthBC) < tol || abs(lengthAC) < tol) continue;\n\n    ab /= lengthAB;\n    ac /= lengthAC;\n    bc /= lengthBC;\n\n    vec3 angles = vec3(acos(dot(ab, ac)),\n      acos(-1.0*dot(ab, bc)),\n      acos(dot(ac, bc)));\n    vec3 anglesDiff = nominalAngles-angles;\n\n    vec3 normal = getFromArray(faceMeta[0], u_textureDimFaces, u_normals).xyz;\n\n    //calc forces\n    anglesDiff *= u_faceStiffness;\n    if (faceIndex == 0){//a\n      vec3 normalCrossAC = cross(normal, ac)/lengthAC;\n      vec3 normalCrossAB = cross(normal, ab)/lengthAB;\n      force -= anglesDiff[0]*(normalCrossAC - normalCrossAB);\n      if (u_calcFaceStrain) nodeError += abs((nominalAngles[0]-angles[0])/nominalAngles[0]);\n      force -= anglesDiff[1]*normalCrossAB;\n      force += anglesDiff[2]*normalCrossAC;\n    } else if (faceIndex == 1){\n      vec3 normalCrossAB = cross(normal, ab)/lengthAB;\n      vec3 normalCrossBC = cross(normal, bc)/lengthBC;\n      force -= anglesDiff[0]*normalCrossAB;\n      force += anglesDiff[1]*(normalCrossAB + normalCrossBC);\n      if (u_calcFaceStrain) nodeError += abs((nominalAngles[1]-angles[1])/nominalAngles[1]);\n      force -= anglesDiff[2]*normalCrossBC;\n    } else if (faceIndex == 2){\n      vec3 normalCrossAC = cross(normal, ac)/lengthAC;\n      vec3 normalCrossBC = cross(normal, bc)/lengthBC;\n      force += anglesDiff[0]*normalCrossAC;\n      force -= anglesDiff[1]*normalCrossBC;\n      force += anglesDiff[2]*(normalCrossBC - normalCrossAC);\n      if (u_calcFaceStrain) nodeError += abs((nominalAngles[2]-angles[2])/nominalAngles[2]);\n    }\n\n  }\n  if (u_calcFaceStrain) nodeError /= meta2[1];\n\n  vec3 velocity = force*u_dt/mass[0] + lastVelocity;\n  gl_FragColor = vec4(velocity,nodeError);\n}\n";

  var positionCalcVerletShader = "precision mediump float;\nuniform vec2 u_textureDim;\nuniform vec2 u_textureDimEdges;\nuniform vec2 u_textureDimFaces;\nuniform vec2 u_textureDimCreases;\nuniform vec2 u_textureDimNodeCreases;\nuniform vec2 u_textureDimNodeFaces;\nuniform float u_creasePercent;\nuniform float u_dt;\nuniform float u_axialStiffness;\nuniform float u_faceStiffness;\nuniform sampler2D u_lastPosition;\nuniform sampler2D u_lastLastPosition;\nuniform sampler2D u_lastVelocity;\nuniform sampler2D u_originalPosition;\nuniform sampler2D u_externalForces;\nuniform sampler2D u_mass;\nuniform sampler2D u_meta;//[beamsIndex, numBeam, nodeCreaseMetaIndex, numCreases]\nuniform sampler2D u_beamMeta;//[k, d, length, otherNodeIndex]\nuniform sampler2D u_creaseMeta;//[k, d, targetTheta]\nuniform sampler2D u_nodeCreaseMeta;//[creaseIndex, nodeIndex, -, -]\nuniform sampler2D u_normals;\nuniform sampler2D u_theta;//[theta, z, normal1Index, normal2Index]\nuniform sampler2D u_creaseGeo;//[h1, h2, coef1, coef2]\nuniform sampler2D u_meta2;//[nodesFaceIndex, numFaces]\nuniform sampler2D u_nodeFaceMeta;//[faceIndex, a, b, c]\nuniform sampler2D u_nominalTriangles;//[angleA, angleB, angleC]\n\nvec4 getFromArray(float index1D, vec2 dimensions, sampler2D tex){\n  vec2 index = vec2(mod(index1D, dimensions.x)+0.5, floor(index1D/dimensions.x)+0.5);\n  vec2 scaledIndex = index/dimensions;\n  return texture2D(tex, scaledIndex);\n}\n\nvec3 getPosition(float index1D){\n  vec2 index = vec2(mod(index1D, u_textureDim.x)+0.5, floor(index1D/u_textureDim.x)+0.5);\n  vec2 scaledIndex = index/u_textureDim;\n  return texture2D(u_lastPosition, scaledIndex).xyz + texture2D(u_originalPosition, scaledIndex).xyz;\n}\n\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDim;\n\n  vec3 lastPosition = texture2D(u_lastPosition, scaledFragCoord).xyz;\n\n  vec2 mass = texture2D(u_mass, scaledFragCoord).xy;\n  if (mass[1] == 1.0){//fixed\n    gl_FragColor = vec4(lastPosition, 0.0);\n    return;\n  }\n  vec3 force = texture2D(u_externalForces, scaledFragCoord).xyz;\n  vec3 lastLastPosition = texture2D(u_lastLastPosition, scaledFragCoord).xyz;\n  vec3 lastVelocity = texture2D(u_lastVelocity, scaledFragCoord).xyz;\n  vec3 originalPosition = texture2D(u_originalPosition, scaledFragCoord).xyz;\n\n  vec4 neighborIndices = texture2D(u_meta, scaledFragCoord);\n  vec4 meta = texture2D(u_meta, scaledFragCoord);\n  vec2 meta2 = texture2D(u_meta2, scaledFragCoord).xy;\n\n  float nodeError = 0.0;\n\n  for (int j=0;j<100;j++){//for all beams (up to 100, had to put a const int in here)\n    if (j >= int(meta[1])) break;\n\n    vec4 beamMeta = getFromArray(meta[0]+float(j), u_textureDimEdges, u_beamMeta);\n\n    float neighborIndex1D = beamMeta[3];\n    vec2 neighborIndex = vec2(mod(neighborIndex1D, u_textureDim.x)+0.5, floor(neighborIndex1D/u_textureDim.x)+0.5);\n    vec2 scaledNeighborIndex = neighborIndex/u_textureDim;\n    vec3 neighborLastPosition = texture2D(u_lastPosition, scaledNeighborIndex).xyz;\n    vec3 neighborLastVelocity = texture2D(u_lastVelocity, scaledNeighborIndex).xyz;\n    vec3 neighborOriginalPosition = texture2D(u_originalPosition, scaledNeighborIndex).xyz;\n\n    vec3 deltaP = neighborLastPosition+neighborOriginalPosition-lastPosition-originalPosition;\n    float deltaPLength = length(deltaP);\n    float nominalLength = beamMeta[2];\n    deltaP *= (1.0-nominalLength/deltaPLength);\n    nodeError += abs(deltaPLength/nominalLength - 1.0);\n    vec3 deltaV = neighborLastVelocity-lastVelocity;\n\n    vec3 _force = deltaP*beamMeta[0] + deltaV*beamMeta[1];\n    force += _force;\n  }\n  nodeError /= meta[1];\n\n  for (int j=0;j<100;j++){//for all creases (up to 100, had to put a const int in here)\n    if (j >= int(meta[3])) break;\n\n    vec4 nodeCreaseMeta = getFromArray(meta[2]+float(j), u_textureDimNodeCreases, u_nodeCreaseMeta);\n\n    float creaseIndex1D = nodeCreaseMeta[0];\n    vec2 creaseIndex = vec2(mod(creaseIndex1D, u_textureDimCreases.x)+0.5, floor(creaseIndex1D/u_textureDimCreases.x)+0.5);\n    vec2 scaledCreaseIndex = creaseIndex/u_textureDimCreases;\n\n    vec4 thetas = texture2D(u_theta, scaledCreaseIndex);\n    vec3 creaseMeta = texture2D(u_creaseMeta, scaledCreaseIndex).xyz;//[k, d, targetTheta]\n    vec4 creaseGeo = texture2D(u_creaseGeo, scaledCreaseIndex);//[h1, h2, coef1, coef2]\n    if (creaseGeo[0]< 0.0) continue;//crease disabled bc it has collapsed too much\n\n    float targetTheta = creaseMeta[2] * u_creasePercent;\n    float angForce = creaseMeta[0]*(targetTheta-thetas[0]);// + creaseMeta[1]*thetas[1];\n\n    float nodeNum = nodeCreaseMeta[1];//1, 2, 3, 4\n\n    if (nodeNum > 2.0){//crease reaction, node is on a crease\n\n      //node #1\n      vec3 normal1 = getFromArray(thetas[2], u_textureDimFaces, u_normals).xyz;\n\n      //node #2\n      vec3 normal2 = getFromArray(thetas[3], u_textureDimFaces, u_normals).xyz;\n\n      float coef1 = creaseGeo[2];\n      float coef2 = creaseGeo[3];\n\n      if (nodeNum == 3.0){\n        coef1 = 1.0-coef1;\n        coef2 = 1.0-coef2;\n      }\n\n      vec3 _force = -angForce*(coef1/creaseGeo[0]*normal1 + coef2/creaseGeo[1]*normal2);\n      force += _force;\n\n    } else {\n\n      float normalIndex1D = thetas[2];//node #1\n      float momentArm = creaseGeo[0];//node #1\n      if (nodeNum == 2.0) {\n        normalIndex1D = thetas[3];//node #2\n        momentArm = creaseGeo[1];//node #2\n      }\n\n      vec3 normal = getFromArray(normalIndex1D, u_textureDimFaces, u_normals).xyz;\n\n      vec3 _force = angForce/momentArm*normal;\n      force += _force;\n    }\n  }\n\n  for (int j=0;j<100;j++){//for all faces (up to 100, had to put a const int in here)\n    if (j >= int(meta2[1])) break;\n\n    vec4 faceMeta = getFromArray(meta2[0]+float(j), u_textureDimNodeFaces, u_nodeFaceMeta);//[face index, a, b, c]\n    vec3 nominalAngles = getFromArray(faceMeta[0], u_textureDimFaces, u_nominalTriangles).xyz;//[angA, angB, angC]\n\n    int faceIndex = 0;\n    if (faceMeta[2] < 0.0) faceIndex = 1;\n    if (faceMeta[3] < 0.0) faceIndex = 2;\n\n    //get node positions\n    vec3 a = faceIndex == 0 ? lastPosition+originalPosition : getPosition(faceMeta[1]);\n    vec3 b = faceIndex == 1 ? lastPosition+originalPosition : getPosition(faceMeta[2]);\n    vec3 c = faceIndex == 2 ? lastPosition+originalPosition : getPosition(faceMeta[3]);\n\n    //calc angles\n    vec3 ab = b-a;\n    vec3 ac = c-a;\n    vec3 bc = c-b;\n\n    float lengthAB = length(ab);\n    float lengthAC = length(ac);\n    float lengthBC = length(bc);\n\n    float tol = 0.0000001;\n    if (abs(lengthAB) < tol || abs(lengthBC) < tol || abs(lengthAC) < tol) continue;\n\n    ab /= lengthAB;\n    ac /= lengthAC;\n    bc /= lengthBC;\n\n    vec3 angles = vec3(acos(dot(ab, ac)),\n      acos(-1.0*dot(ab, bc)),\n      acos(dot(ac, bc)));\n    vec3 anglesDiff = nominalAngles-angles;\n\n    vec3 normal = getFromArray(faceMeta[0], u_textureDimFaces, u_normals).xyz;\n\n    //calc forces\n    anglesDiff *= u_faceStiffness;\n    if (faceIndex == 0){//a\n      vec3 normalCrossAC = cross(normal, ac)/lengthAC;\n      vec3 normalCrossAB = cross(normal, ab)/lengthAB;\n      force -= anglesDiff[0]*(normalCrossAC - normalCrossAB);\n      force -= anglesDiff[1]*normalCrossAB;\n      force += anglesDiff[2]*normalCrossAC;\n    } else if (faceIndex == 1){\n      vec3 normalCrossAB = cross(normal, ab)/lengthAB;\n      vec3 normalCrossBC = cross(normal, bc)/lengthBC;\n      force -= anglesDiff[0]*normalCrossAB;\n      force += anglesDiff[1]*(normalCrossAB + normalCrossBC);\n      force -= anglesDiff[2]*normalCrossBC;\n    } else if (faceIndex == 2){\n      vec3 normalCrossAC = cross(normal, ac)/lengthAC;\n      vec3 normalCrossBC = cross(normal, bc)/lengthBC;\n      force += anglesDiff[0]*normalCrossAC;\n      force -= anglesDiff[1]*normalCrossBC;\n      force += anglesDiff[2]*(normalCrossBC - normalCrossAC);\n    }\n\n  }\n\n  vec3 nextPosition = force*u_dt*u_dt/mass[0] + 2.0*lastPosition - lastLastPosition;\n  gl_FragColor = vec4(nextPosition,nodeError);//position.a has error info\n}\n";

  var thetaCalcShader = "#define TWO_PI 6.283185307179586476925286766559\nprecision mediump float;\nuniform vec2 u_textureDim;\nuniform vec2 u_textureDimFaces;\nuniform vec2 u_textureDimCreases;\nuniform sampler2D u_normals;\nuniform sampler2D u_lastTheta;\nuniform sampler2D u_creaseVectors;\nuniform sampler2D u_lastPosition;\nuniform sampler2D u_originalPosition;\nuniform float u_dt;\n\nvec4 getFromArray(float index1D, vec2 dimensions, sampler2D tex){\n  vec2 index = vec2(mod(index1D, dimensions.x)+0.5, floor(index1D/dimensions.x)+0.5);\n  vec2 scaledIndex = index/dimensions;\n  return texture2D(tex, scaledIndex);\n}\n\nvoid main(){\n\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDimCreases;\n\n  vec4 lastTheta = texture2D(u_lastTheta, scaledFragCoord);\n\n  if (lastTheta[2]<0.0){\n    gl_FragColor = vec4(lastTheta[0], 0.0, -1.0, -1.0);\n    return;\n  }\n\n  vec3 normal1 = getFromArray(lastTheta[2], u_textureDimFaces, u_normals).xyz;\n  vec3 normal2 = getFromArray(lastTheta[3], u_textureDimFaces, u_normals).xyz;\n\n  float dotNormals = dot(normal1, normal2);//normals are already normalized, no need to divide by length\n  if (dotNormals < -1.0) dotNormals = -1.0;\n  else if (dotNormals > 1.0) dotNormals = 1.0;\n\n  vec2 creaseVectorIndices = texture2D(u_creaseVectors, scaledFragCoord).xy;\n  vec2 creaseNodeIndex = vec2(mod(creaseVectorIndices[0], u_textureDim.x)+0.5, floor(creaseVectorIndices[0]/u_textureDim.x)+0.5);\n  vec2 scaledNodeIndex = creaseNodeIndex/u_textureDim;\n  vec3 node0 = texture2D(u_lastPosition, scaledNodeIndex).xyz + texture2D(u_originalPosition, scaledNodeIndex).xyz;\n  creaseNodeIndex = vec2(mod(creaseVectorIndices[1], u_textureDim.x)+0.5, floor(creaseVectorIndices[1]/u_textureDim.x)+0.5);\n  scaledNodeIndex = creaseNodeIndex/u_textureDim;\n  vec3 node1 = texture2D(u_lastPosition, scaledNodeIndex).xyz + texture2D(u_originalPosition, scaledNodeIndex).xyz;\n\n  //https://math.stackexchange.com/questions/47059/how-do-i-calculate-a-dihedral-angle-given-cartesian-coordinates\n  vec3 creaseVector = normalize(node1-node0);\n  float x = dotNormals;\n  float y = dot(cross(normal1, creaseVector), normal2);\n\n  float theta = atan(y, x);\n\n  float diff = theta-lastTheta[0];\n  float origDiff = diff;\n  if (diff < -5.0) {\n    diff += TWO_PI;\n  } else if (diff > 5.0) {\n    diff -= TWO_PI;\n  }\n  theta = lastTheta[0] + diff;\n  gl_FragColor = vec4(theta, diff, lastTheta[2], lastTheta[3]);//[theta, w, normal1Index, normal2Index]\n}\n";

  var normalCalc = "precision mediump float;\nuniform vec2 u_textureDim;\nuniform vec2 u_textureDimFaces;\nuniform sampler2D u_faceVertexIndices;\nuniform sampler2D u_lastPosition;\nuniform sampler2D u_originalPosition;\n\nvec3 getPosition(float index1D){\n  vec2 index = vec2(mod(index1D, u_textureDim.x)+0.5, floor(index1D/u_textureDim.x)+0.5);\n  vec2 scaledIndex = index/u_textureDim;\n  return texture2D(u_lastPosition, scaledIndex).xyz + texture2D(u_originalPosition, scaledIndex).xyz;\n}\n\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDimFaces;\n\n  vec3 indices = texture2D(u_faceVertexIndices, scaledFragCoord).xyz;\n\n  vec3 a = getPosition(indices[0]);\n  vec3 b = getPosition(indices[1]);\n  vec3 c = getPosition(indices[2]);\n\n  vec3 normal = normalize(cross(b-a, c-a));\n\n  gl_FragColor = vec4(normal, 0.0);\n}\n";

  var packToBytesShader = "precision mediump float;\nuniform vec2 u_floatTextureDim;\nuniform sampler2D u_floatTexture;\nuniform float u_vectorLength;\nfloat shift_right (float v, float amt) {\n  v = floor(v) + 0.5;\n  return floor(v / exp2(amt));\n}\nfloat shift_left (float v, float amt) {\n  return floor(v * exp2(amt) + 0.5);\n}\nfloat mask_last (float v, float bits) {\n  return mod(v, shift_left(1.0, bits));\n}\nfloat extract_bits (float num, float from, float to) {\n  from = floor(from + 0.5); to = floor(to + 0.5);\n  return mask_last(shift_right(num, from), to - from);\n}\nvec4 encode_float (float val) {\n  if (val == 0.0) return vec4(0, 0, 0, 0);\n  float sign = val > 0.0 ? 0.0 : 1.0;\n  val = abs(val);\n  float exponent = floor(log2(val));\n  float biased_exponent = exponent + 127.0;\n  float fraction = ((val / exp2(exponent)) - 1.0) * 8388608.0;\n  float t = biased_exponent / 2.0;\n  float last_bit_of_biased_exponent = fract(t) * 2.0;\n  float remaining_bits_of_biased_exponent = floor(t);\n  float byte4 = extract_bits(fraction, 0.0, 8.0) / 255.0;\n  float byte3 = extract_bits(fraction, 8.0, 16.0) / 255.0;\n  float byte2 = (last_bit_of_biased_exponent * 128.0 + extract_bits(fraction, 16.0, 23.0)) / 255.0;\n  float byte1 = (sign * 128.0 + remaining_bits_of_biased_exponent) / 255.0;\n  return vec4(byte4, byte3, byte2, byte1);\n}\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  float textureXcoord = floor((fragCoord.x - 0.5)/u_vectorLength+0.0001) + 0.5;\n  vec4 data = texture2D(u_floatTexture, vec2(textureXcoord, fragCoord.y)/u_floatTextureDim);\n  int textureIndex = int(floor(mod(fragCoord.x-0.5+0.0001, u_vectorLength)));\n  if (textureIndex == 0) gl_FragColor = encode_float(data[0]);\n  else if (textureIndex == 1) gl_FragColor = encode_float(data[1]);\n  else if (textureIndex == 2) gl_FragColor = encode_float(data[2]);\n  else if (textureIndex == 3) gl_FragColor = encode_float(data[3]);\n}\n";

  var zeroTexture = "precision mediump float;\nvoid main(){\n  gl_FragColor = vec4(0.0);\n}\n";

  var zeroThetaTexture = "precision mediump float;\nuniform sampler2D u_theta;\nuniform vec2 u_textureDimCreases;\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDimCreases;\n  vec4 theta = texture2D(u_theta, scaledFragCoord);\n  gl_FragColor = vec4(0.0, 0.0, theta[2], theta[3]);\n}\n";

  var centerTexture = "precision mediump float;\nuniform sampler2D u_lastPosition;\nuniform vec2 u_textureDim;\nuniform vec3 u_center;\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDim;\n  vec3 position = texture2D(u_lastPosition, scaledFragCoord).xyz;\n  gl_FragColor = vec4(position-u_center, 0.0);\n}\n";

  var copyTexture = "precision mediump float;\nuniform sampler2D u_orig;\nuniform vec2 u_textureDim;\nvoid main(){\n  gl_FragColor = texture2D(u_orig, gl_FragCoord.xy/u_textureDim);\n}\n";

  var updateCreaseGeo = "precision mediump float;\nuniform vec2 u_textureDim;\nuniform vec2 u_textureDimCreases;\nuniform sampler2D u_lastPosition;\nuniform sampler2D u_originalPosition;\nuniform sampler2D u_creaseMeta2;\n\nvec3 getPosition(float index1D){\n  vec2 index = vec2(mod(index1D, u_textureDim.x)+0.5, floor(index1D/u_textureDim.x)+0.5);\n  vec2 scaledIndex = index/u_textureDim;\n  return texture2D(u_lastPosition, scaledIndex).xyz + texture2D(u_originalPosition, scaledIndex).xyz;\n}\n\nvoid main(){\n  vec2 fragCoord = gl_FragCoord.xy;\n  vec2 scaledFragCoord = fragCoord/u_textureDimCreases;\n\n  vec4 creaseMeta = texture2D(u_creaseMeta2, scaledFragCoord);\n\n  vec3 node1 = getPosition(creaseMeta[0]);\n  vec3 node2 = getPosition(creaseMeta[1]);\n  vec3 node3 = getPosition(creaseMeta[2]);\n  vec3 node4 = getPosition(creaseMeta[3]);\n\n  float tol = 0.000001;\n\n  vec3 creaseVector = node4-node3;\n  float creaseLength = length(creaseVector);\n\n  if (abs(creaseLength)<tol) {\n    gl_FragColor = vec4(-1);//disable crease\n    return;\n  }\n  creaseVector /= creaseLength;\n\n  vec3 vector1 = node1-node3;\n  vec3 vector2 = node2-node3;\n\n  float proj1Length = dot(creaseVector, vector1);\n  float proj2Length = dot(creaseVector, vector2);\n\n  float dist1 = sqrt(abs(vector1.x*vector1.x+vector1.y*vector1.y+vector1.z*vector1.z-proj1Length*proj1Length));\n  float dist2 = sqrt(abs(vector2.x*vector2.x+vector2.y*vector2.y+vector2.z*vector2.z-proj2Length*proj2Length));\n\n  if (dist1<tol || dist2<tol){\n    gl_FragColor = vec4(-1);//disable crease\n    return;\n  }\n\n  gl_FragColor = vec4(dist1, dist2, proj1Length/creaseLength, proj2Length/creaseLength);\n}";

  var THREE$3 = win.THREE || require("three");

  function initDynamicSolver(globals) {
    var float_type = "FLOAT";
    var nodes;
    var edges;
    var faces;
    var creases;
    var positions;
    var colors;
    var originalPosition;
    var position;
    var lastPosition;
    var lastLastPosition;
    var velocity;
    var lastVelocity;
    var externalForces;
    var mass;
    var meta;
    var meta2;
    var beamMeta;
    var normals;
    var faceVertexIndices;
    var nominalTriangles;
    var nodeFaceMeta;
    var creaseMeta;
    var creaseMeta2;
    var nodeCreaseMeta;
    var creaseGeo;
    var creaseVectors;
    var theta;
    var lastTheta;

    function syncNodesAndEdges() {
      nodes = globals.model.getNodes();
      edges = globals.model.getEdges();
      faces = globals.model.getFaces();
      creases = globals.model.getCreases();
      positions = globals.model.getPositionsArray();
      colors = globals.model.getColorsArray();
      initTypedArrays();
      initTexturesAndPrograms(globals.gpuMath);
      setSolveParams();
    }

    var programsInited = false;
    var textureDim = 0;
    var textureDimEdges = 0;
    var textureDimFaces = 0;
    var textureDimCreases = 0;
    var textureDimNodeCreases = 0;
    var textureDimNodeFaces = 0;

    function reset() {
      globals.gpuMath.step("zeroTexture", [], "u_position");
      globals.gpuMath.step("zeroTexture", [], "u_lastPosition");
      globals.gpuMath.step("zeroTexture", [], "u_lastLastPosition");
      globals.gpuMath.step("zeroTexture", [], "u_velocity");
      globals.gpuMath.step("zeroTexture", [], "u_lastVelocity");
      globals.gpuMath.step("zeroThetaTexture", ["u_lastTheta"], "u_theta");
      globals.gpuMath.step("zeroThetaTexture", ["u_theta"], "u_lastTheta");
      render();
    }

    function solve(_numSteps) {
      if (globals.shouldAnimateFoldPercent) {
        globals.creasePercent = globals.videoAnimator.nextFoldAngle(0);
        globals.controls.updateCreasePercent();
        setCreasePercent(globals.creasePercent);
        globals.shouldChangeCreasePercent = true;
      }

      if (globals.forceHasChanged) {
        updateExternalForces();
        globals.forceHasChanged = false;
      }

      if (globals.fixedHasChanged) {
        updateFixed();
        globals.fixedHasChanged = false;
      }

      if (globals.nodePositionHasChanged) {
        updateLastPosition();
        globals.nodePositionHasChanged = false;
      }

      if (globals.creaseMaterialHasChanged) {
        updateCreasesMeta();
        globals.creaseMaterialHasChanged = false;
      }

      if (globals.materialHasChanged) {
        updateMaterials();
        globals.materialHasChanged = false;
      }

      if (globals.shouldChangeCreasePercent) {
        setCreasePercent(globals.creasePercent);
        globals.shouldChangeCreasePercent = false;
      }

      if (globals.shouldCenterGeo) {
        var avgPosition = getAvgPosition();
        globals.gpuMath.setProgram("centerTexture");
        globals.gpuMath.setUniformForProgram("centerTexture", "u_center", [avgPosition.x, avgPosition.y, avgPosition.z], "3f");
        globals.gpuMath.step("centerTexture", ["u_lastPosition"], "u_position");
        if (globals.integrationType === "verlet") globals.gpuMath.step("copyTexture", ["u_position"], "u_lastLastPosition");
        globals.gpuMath.swapTextures("u_position", "u_lastPosition");
        globals.gpuMath.step("zeroTexture", [], "u_lastVelocity");
        globals.gpuMath.step("zeroTexture", [], "u_velocity");
        globals.shouldCenterGeo = false;
      }

      if (_numSteps === undefined) _numSteps = globals.numSteps;

      for (var j = 0; j < _numSteps; j += 1) {
        solveStep();
      }

      render();
    }

    function solveStep() {
      var gpuMath = globals.gpuMath;
      gpuMath.setProgram("normalCalc");
      gpuMath.setSize(textureDimFaces, textureDimFaces);
      gpuMath.step("normalCalc", ["u_faceVertexIndices", "u_lastPosition", "u_originalPosition"], "u_normals");
      gpuMath.setProgram("thetaCalc");
      gpuMath.setSize(textureDimCreases, textureDimCreases);
      gpuMath.step("thetaCalc", ["u_normals", "u_lastTheta", "u_creaseVectors", "u_lastPosition", "u_originalPosition"], "u_theta");
      gpuMath.setProgram("updateCreaseGeo");
      gpuMath.step("updateCreaseGeo", ["u_lastPosition", "u_originalPosition", "u_creaseMeta2"], "u_creaseGeo");

      if (globals.integrationType === "verlet") {
        gpuMath.setProgram("positionCalcVerlet");
        gpuMath.setSize(textureDim, textureDim);
        gpuMath.step("positionCalcVerlet", ["u_lastPosition", "u_lastLastPosition", "u_lastVelocity", "u_originalPosition", "u_externalForces", "u_mass", "u_meta", "u_beamMeta", "u_creaseMeta", "u_nodeCreaseMeta", "u_normals", "u_theta", "u_creaseGeo", "u_meta2", "u_nodeFaceMeta", "u_nominalTriangles"], "u_position");
        gpuMath.step("velocityCalcVerlet", ["u_position", "u_lastPosition", "u_mass"], "u_velocity");
        gpuMath.swapTextures("u_lastPosition", "u_lastLastPosition");
      } else {
        gpuMath.setProgram("velocityCalc");
        gpuMath.setSize(textureDim, textureDim);
        gpuMath.step("velocityCalc", ["u_lastPosition", "u_lastVelocity", "u_originalPosition", "u_externalForces", "u_mass", "u_meta", "u_beamMeta", "u_creaseMeta", "u_nodeCreaseMeta", "u_normals", "u_theta", "u_creaseGeo", "u_meta2", "u_nodeFaceMeta", "u_nominalTriangles"], "u_velocity");
        gpuMath.step("positionCalc", ["u_velocity", "u_lastPosition", "u_mass"], "u_position");
      }

      gpuMath.swapTextures("u_theta", "u_lastTheta");
      gpuMath.swapTextures("u_velocity", "u_lastVelocity");
      gpuMath.swapTextures("u_position", "u_lastPosition");
    }

    function getAvgPosition() {
      var xavg = 0;
      var yavg = 0;
      var zavg = 0;

      for (var i = 0; i < positions.length; i += 3) {
        xavg += positions[i];
        yavg += positions[i + 1];
        zavg += positions[i + 2];
      }

      var avgPosition = new THREE$3.Vector3(xavg, yavg, zavg);
      avgPosition.multiplyScalar(3 / positions.length);
      return avgPosition;
    }

    function render() {
      var vectorLength = 4;
      globals.gpuMath.setProgram("packToBytes");
      globals.gpuMath.setUniformForProgram("packToBytes", "u_vectorLength", vectorLength, "1f");
      globals.gpuMath.setUniformForProgram("packToBytes", "u_floatTextureDim", [textureDim, textureDim], "2f");
      globals.gpuMath.setSize(textureDim * vectorLength, textureDim);
      globals.gpuMath.step("packToBytes", ["u_lastPosition"], "outputBytes");

      if (globals.gpuMath.readyToRead()) {
        var numPixels = nodes.length * vectorLength;
        var height = Math.ceil(numPixels / (textureDim * vectorLength));
        var pixels = new Uint8Array(height * textureDim * 4 * vectorLength);
        globals.gpuMath.readPixels(0, 0, textureDim * vectorLength, height, pixels);
        var parsedPixels = new Float32Array(pixels.buffer);
        var shouldUpdateColors = globals.colorMode === "axialStrain";

        for (var i = 0; i < nodes.length; i += 1) {
          var rgbaIndex = i * vectorLength;
          var nodeError = parsedPixels[rgbaIndex + 3] * 100;
          var nodePosition = new THREE$3.Vector3(parsedPixels[rgbaIndex], parsedPixels[rgbaIndex + 1], parsedPixels[rgbaIndex + 2]);
          nodePosition.add(nodes[i]._originalPosition);
          positions[3 * i] = nodePosition.x;
          positions[3 * i + 1] = nodePosition.y;
          positions[3 * i + 2] = nodePosition.z;

          if (shouldUpdateColors) {
            if (nodeError > globals.strainClip) nodeError = globals.strainClip;
            var scaledVal = (1 - nodeError / globals.strainClip) * 0.7;
            var color = new THREE$3.Color();
            color.setHSL(scaledVal, 1, 0.5);
            colors[3 * i] = color.r;
            colors[3 * i + 1] = color.g;
            colors[3 * i + 2] = color.b;
          }
        }
      } else {
        console.log("shouldn't be here");
      }
    }

    function setSolveParams() {
      var dt = calcDt();
      globals.gpuMath.setProgram("thetaCalc");
      globals.gpuMath.setUniformForProgram("thetaCalc", "u_dt", dt, "1f");
      globals.gpuMath.setProgram("velocityCalc");
      globals.gpuMath.setUniformForProgram("velocityCalc", "u_dt", dt, "1f");
      globals.gpuMath.setProgram("positionCalcVerlet");
      globals.gpuMath.setUniformForProgram("positionCalcVerlet", "u_dt", dt, "1f");
      globals.gpuMath.setProgram("positionCalc");
      globals.gpuMath.setUniformForProgram("positionCalc", "u_dt", dt, "1f");
      globals.gpuMath.setProgram("velocityCalcVerlet");
      globals.gpuMath.setUniformForProgram("velocityCalcVerlet", "u_dt", dt, "1f");
    }

    function calcDt() {
      var maxFreqNat = 0;
      edges.forEach(function (beam) {
        if (beam.getNaturalFrequency() > maxFreqNat) maxFreqNat = beam.getNaturalFrequency();
      });
      return 1 / (2 * Math.PI * maxFreqNat) * 0.9;
    }

    function initTexturesAndPrograms(gpuMath) {
      gpuMath.initTextureFromData("u_position", textureDim, textureDim, float_type, position, true);
      gpuMath.initTextureFromData("u_lastPosition", textureDim, textureDim, float_type, lastPosition, true);
      gpuMath.initTextureFromData("u_lastLastPosition", textureDim, textureDim, float_type, lastLastPosition, true);
      gpuMath.initTextureFromData("u_velocity", textureDim, textureDim, float_type, velocity, true);
      gpuMath.initTextureFromData("u_lastVelocity", textureDim, textureDim, float_type, lastVelocity, true);
      gpuMath.initTextureFromData("u_theta", textureDimCreases, textureDimCreases, float_type, theta, true);
      gpuMath.initTextureFromData("u_lastTheta", textureDimCreases, textureDimCreases, float_type, lastTheta, true);
      gpuMath.initTextureFromData("u_normals", textureDimFaces, textureDimFaces, float_type, normals, true);
      gpuMath.initFrameBufferForTexture("u_position", true);
      gpuMath.initFrameBufferForTexture("u_lastPosition", true);
      gpuMath.initFrameBufferForTexture("u_lastLastPosition", true);
      gpuMath.initFrameBufferForTexture("u_velocity", true);
      gpuMath.initFrameBufferForTexture("u_lastVelocity", true);
      gpuMath.initFrameBufferForTexture("u_theta", true);
      gpuMath.initFrameBufferForTexture("u_lastTheta", true);
      gpuMath.initFrameBufferForTexture("u_normals", true);
      gpuMath.initTextureFromData("u_meta", textureDim, textureDim, float_type, meta, true);
      gpuMath.initTextureFromData("u_meta2", textureDim, textureDim, float_type, meta2, true);
      gpuMath.initTextureFromData("u_nominalTrinagles", textureDimFaces, textureDimFaces, float_type, nominalTriangles, true);
      gpuMath.initTextureFromData("u_nodeCreaseMeta", textureDimNodeCreases, textureDimNodeCreases, float_type, nodeCreaseMeta, true);
      gpuMath.initTextureFromData("u_creaseMeta2", textureDimCreases, textureDimCreases, float_type, creaseMeta2, true);
      gpuMath.initTextureFromData("u_nodeFaceMeta", textureDimNodeFaces, textureDimNodeFaces, float_type, nodeFaceMeta, true);
      gpuMath.initTextureFromData("u_creaseGeo", textureDimCreases, textureDimCreases, float_type, creaseGeo, true);
      gpuMath.initFrameBufferForTexture("u_creaseGeo", true);
      gpuMath.initTextureFromData("u_faceVertexIndices", textureDimFaces, textureDimFaces, float_type, faceVertexIndices, true);
      gpuMath.initTextureFromData("u_nominalTriangles", textureDimFaces, textureDimFaces, float_type, nominalTriangles, true);
      gpuMath.createProgram("positionCalc", vertexShader, positionCalcShader);
      gpuMath.setUniformForProgram("positionCalc", "u_velocity", 0, "1i");
      gpuMath.setUniformForProgram("positionCalc", "u_lastPosition", 1, "1i");
      gpuMath.setUniformForProgram("positionCalc", "u_mass", 2, "1i");
      gpuMath.setUniformForProgram("positionCalc", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.createProgram("velocityCalcVerlet", vertexShader, velocityCalcVerletShader);
      gpuMath.setUniformForProgram("velocityCalcVerlet", "u_position", 0, "1i");
      gpuMath.setUniformForProgram("velocityCalcVerlet", "u_lastPosition", 1, "1i");
      gpuMath.setUniformForProgram("velocityCalcVerlet", "u_mass", 2, "1i");
      gpuMath.setUniformForProgram("velocityCalcVerlet", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.createProgram("velocityCalc", vertexShader, velocityCalcShader);
      gpuMath.setUniformForProgram("velocityCalc", "u_lastPosition", 0, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_lastVelocity", 1, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_originalPosition", 2, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_externalForces", 3, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_mass", 4, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_meta", 5, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_beamMeta", 6, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_creaseMeta", 7, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_nodeCreaseMeta", 8, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_normals", 9, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_theta", 10, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_creaseGeo", 11, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_meta2", 12, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_nodeFaceMeta", 13, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_nominalTriangles", 14, "1i");
      gpuMath.setUniformForProgram("velocityCalc", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.setUniformForProgram("velocityCalc", "u_textureDimEdges", [textureDimEdges, textureDimEdges], "2f");
      gpuMath.setUniformForProgram("velocityCalc", "u_textureDimFaces", [textureDimFaces, textureDimFaces], "2f");
      gpuMath.setUniformForProgram("velocityCalc", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");
      gpuMath.setUniformForProgram("velocityCalc", "u_textureDimNodeCreases", [textureDimNodeCreases, textureDimNodeCreases], "2f");
      gpuMath.setUniformForProgram("velocityCalc", "u_textureDimNodeFaces", [textureDimNodeFaces, textureDimNodeFaces], "2f");
      gpuMath.setUniformForProgram("velocityCalc", "u_creasePercent", globals.creasePercent, "1f");
      gpuMath.setUniformForProgram("velocityCalc", "u_axialStiffness", globals.axialStiffness, "1f");
      gpuMath.setUniformForProgram("velocityCalc", "u_faceStiffness", globals.faceStiffness, "1f");
      gpuMath.setUniformForProgram("velocityCalc", "u_calcFaceStrain", globals.calcFaceStrain, "1f");
      gpuMath.createProgram("positionCalcVerlet", vertexShader, positionCalcVerletShader);
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_lastPosition", 0, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_lastLastPosition", 1, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_lastVelocity", 2, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_originalPosition", 3, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_externalForces", 4, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_mass", 5, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_meta", 6, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_beamMeta", 7, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_creaseMeta", 8, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_nodeCreaseMeta", 9, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_normals", 10, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_theta", 11, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_creaseGeo", 12, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_meta2", 13, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_nodeFaceMeta", 14, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_nominalTriangles", 15, "1i");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimEdges", [textureDimEdges, textureDimEdges], "2f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimFaces", [textureDimFaces, textureDimFaces], "2f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimNodeCreases", [textureDimNodeCreases, textureDimNodeCreases], "2f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_textureDimNodeFaces", [textureDimNodeFaces, textureDimNodeFaces], "2f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_creasePercent", globals.creasePercent, "1f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_axialStiffness", globals.axialStiffness, "1f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_faceStiffness", globals.faceStiffness, "1f");
      gpuMath.setUniformForProgram("positionCalcVerlet", "u_calcFaceStrain", globals.calcFaceStrain, "1f");
      gpuMath.createProgram("thetaCalc", vertexShader, thetaCalcShader);
      gpuMath.setUniformForProgram("thetaCalc", "u_normals", 0, "1i");
      gpuMath.setUniformForProgram("thetaCalc", "u_lastTheta", 1, "1i");
      gpuMath.setUniformForProgram("thetaCalc", "u_creaseVectors", 2, "1i");
      gpuMath.setUniformForProgram("thetaCalc", "u_lastPosition", 3, "1i");
      gpuMath.setUniformForProgram("thetaCalc", "u_originalPosition", 4, "1i");
      gpuMath.setUniformForProgram("thetaCalc", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.setUniformForProgram("thetaCalc", "u_textureDimFaces", [textureDimFaces, textureDimFaces], "2f");
      gpuMath.setUniformForProgram("thetaCalc", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");
      gpuMath.createProgram("normalCalc", vertexShader, normalCalc);
      gpuMath.setUniformForProgram("normalCalc", "u_faceVertexIndices", 0, "1i");
      gpuMath.setUniformForProgram("normalCalc", "u_lastPosition", 1, "1i");
      gpuMath.setUniformForProgram("normalCalc", "u_originalPosition", 2, "1i");
      gpuMath.setUniformForProgram("normalCalc", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.setUniformForProgram("normalCalc", "u_textureDimFaces", [textureDimFaces, textureDimFaces], "2f");
      gpuMath.createProgram("packToBytes", vertexShader, packToBytesShader);
      gpuMath.initTextureFromData("outputBytes", textureDim * 4, textureDim, "UNSIGNED_BYTE", null, true);
      gpuMath.initFrameBufferForTexture("outputBytes", true);
      gpuMath.setUniformForProgram("packToBytes", "u_floatTextureDim", [textureDim, textureDim], "2f");
      gpuMath.setUniformForProgram("packToBytes", "u_floatTexture", 0, "1i");
      gpuMath.createProgram("zeroTexture", vertexShader, zeroTexture);
      gpuMath.createProgram("zeroThetaTexture", vertexShader, zeroThetaTexture);
      gpuMath.setUniformForProgram("zeroThetaTexture", "u_theta", 0, "1i");
      gpuMath.setUniformForProgram("zeroThetaTexture", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");
      gpuMath.createProgram("centerTexture", vertexShader, centerTexture);
      gpuMath.setUniformForProgram("centerTexture", "u_lastPosition", 0, "1i");
      gpuMath.setUniformForProgram("centerTexture", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.createProgram("copyTexture", vertexShader, copyTexture);
      gpuMath.setUniformForProgram("copyTexture", "u_orig", 0, "1i");
      gpuMath.setUniformForProgram("copyTexture", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.createProgram("updateCreaseGeo", vertexShader, updateCreaseGeo);
      gpuMath.setUniformForProgram("updateCreaseGeo", "u_lastPosition", 0, "1i");
      gpuMath.setUniformForProgram("updateCreaseGeo", "u_originalPosition", 1, "1i");
      gpuMath.setUniformForProgram("updateCreaseGeo", "u_creaseMeta2", 2, "1i");
      gpuMath.setUniformForProgram("updateCreaseGeo", "u_textureDim", [textureDim, textureDim], "2f");
      gpuMath.setUniformForProgram("updateCreaseGeo", "u_textureDimCreases", [textureDimCreases, textureDimCreases], "2f");
      gpuMath.setSize(textureDim, textureDim);
      programsInited = true;
    }

    function calcTextureSize(numNodes) {
      if (numNodes === 1) return 2;

      for (var i = 0; i < numNodes; i += 1) {
        if (Math.pow(2, 2 * i) >= numNodes) {
          return Math.pow(2, i);
        }
      }

      console.warn("no texture size found for " + numNodes + " items");
      return 2;
    }

    function updateMaterials(initing) {
      var index = 0;

      for (var i = 0; i < nodes.length; i += 1) {
        if (initing) {
          meta[4 * i] = index;
          meta[4 * i + 1] = nodes[i].numBeams();
        }

        for (var j = 0; j < nodes[i].beams.length; j += 1) {
          var beam = nodes[i].beams[j];
          beamMeta[4 * index] = beam.getK();
          beamMeta[4 * index + 1] = beam.getD();

          if (initing) {
            beamMeta[4 * index + 2] = beam.getLength();
            beamMeta[4 * index + 3] = beam.getOtherNode(nodes[i]).getIndex();
          }

          index += 1;
        }
      }

      globals.gpuMath.initTextureFromData("u_beamMeta", textureDimEdges, textureDimEdges, float_type, beamMeta, true);

      if (programsInited) {
        globals.gpuMath.setProgram("velocityCalc");
        globals.gpuMath.setUniformForProgram("velocityCalc", "u_axialStiffness", globals.axialStiffness, "1f");
        globals.gpuMath.setUniformForProgram("velocityCalc", "u_faceStiffness", globals.faceStiffness, "1f");
        globals.gpuMath.setProgram("positionCalcVerlet");
        globals.gpuMath.setUniformForProgram("positionCalcVerlet", "u_axialStiffness", globals.axialStiffness, "1f");
        globals.gpuMath.setUniformForProgram("positionCalcVerlet", "u_faceStiffness", globals.faceStiffness, "1f");
        setSolveParams();
      }
    }

    function updateExternalForces() {
      for (var i = 0; i < nodes.length; i += 1) {
        var externalForce = nodes[i].getExternalForce();
        externalForces[4 * i] = externalForce.x;
        externalForces[4 * i + 1] = externalForce.y;
        externalForces[4 * i + 2] = externalForce.z;
      }

      globals.gpuMath.initTextureFromData("u_externalForces", textureDim, textureDim, float_type, externalForces, true);
    }

    function updateFixed() {
      for (var i = 0; i < nodes.length; i += 1) {
        mass[4 * i + 1] = nodes[i].isFixed() ? 1 : 0;
      }

      globals.gpuMath.initTextureFromData("u_mass", textureDim, textureDim, float_type, mass, true);
    }

    function updateOriginalPosition() {
      for (var i = 0; i < nodes.length; i += 1) {
        var origPosition = nodes[i].getOriginalPosition();
        originalPosition[4 * i] = origPosition.x;
        originalPosition[4 * i + 1] = origPosition.y;
        originalPosition[4 * i + 2] = origPosition.z;
      }

      globals.gpuMath.initTextureFromData("u_originalPosition", textureDim, textureDim, float_type, originalPosition, true);
    }

    function updateCreaseVectors() {
      for (var i = 0; i < creases.length; i += 1) {
        var rgbaIndex = i * 4;
        var _nodes = creases[i].edge.nodes;
        creaseVectors[rgbaIndex] = _nodes[0].getIndex();
        creaseVectors[rgbaIndex + 1] = _nodes[1].getIndex();
      }

      globals.gpuMath.initTextureFromData("u_creaseVectors", textureDimCreases, textureDimCreases, float_type, creaseVectors, true);
    }

    function updateCreasesMeta(initing) {
      for (var i = 0; i < creases.length; i += 1) {
        var crease = creases[i];
        creaseMeta[i * 4] = crease.getK();
        if (initing) creaseMeta[i * 4 + 2] = crease.getTargetTheta();
      }

      globals.gpuMath.initTextureFromData("u_creaseMeta", textureDimCreases, textureDimCreases, float_type, creaseMeta, true);
    }

    function updateLastPosition() {
      for (var i = 0; i < nodes.length; i += 1) {
        var _position = nodes[i].getRelativePosition();

        lastPosition[4 * i] = _position.x;
        lastPosition[4 * i + 1] = _position.y;
        lastPosition[4 * i + 2] = _position.z;
      }

      globals.gpuMath.initTextureFromData("u_lastPosition", textureDim, textureDim, float_type, lastPosition, true);
      globals.gpuMath.initFrameBufferForTexture("u_lastPosition", true);
    }

    function setCreasePercent(percent) {
      if (!programsInited) return;
      globals.gpuMath.setProgram("velocityCalc");
      globals.gpuMath.setUniformForProgram("velocityCalc", "u_creasePercent", percent, "1f");
      globals.gpuMath.setProgram("positionCalcVerlet");
      globals.gpuMath.setUniformForProgram("positionCalcVerlet", "u_creasePercent", percent, "1f");
    }

    function initTypedArrays() {
      textureDim = calcTextureSize(nodes.length);
      var numNodeFaces = 0;
      var nodeFaces = [];

      for (var i = 0; i < nodes.length; i += 1) {
        nodeFaces.push([]);

        for (var j = 0; j < faces.length; j += 1) {
          if (faces[j].indexOf(i) >= 0) {
            nodeFaces[i].push(j);
            numNodeFaces += 1;
          }
        }
      }

      textureDimNodeFaces = calcTextureSize(numNodeFaces);
      var numEdges = 0;

      for (var _i = 0; _i < nodes.length; _i += 1) {
        numEdges += nodes[_i].numBeams();
      }

      textureDimEdges = calcTextureSize(numEdges);
      var numCreases = creases.length;
      textureDimCreases = calcTextureSize(numCreases);
      var numNodeCreases = 0;

      for (var _i2 = 0; _i2 < nodes.length; _i2 += 1) {
        numNodeCreases += nodes[_i2].numCreases();
      }

      numNodeCreases += numCreases * 2;
      textureDimNodeCreases = calcTextureSize(numNodeCreases);
      var numFaces = faces.length;
      textureDimFaces = calcTextureSize(numFaces);
      originalPosition = new Float32Array(textureDim * textureDim * 4);
      position = new Float32Array(textureDim * textureDim * 4);
      lastPosition = new Float32Array(textureDim * textureDim * 4);
      lastLastPosition = new Float32Array(textureDim * textureDim * 4);
      velocity = new Float32Array(textureDim * textureDim * 4);
      lastVelocity = new Float32Array(textureDim * textureDim * 4);
      externalForces = new Float32Array(textureDim * textureDim * 4);
      mass = new Float32Array(textureDim * textureDim * 4);
      meta = new Float32Array(textureDim * textureDim * 4);
      meta2 = new Float32Array(textureDim * textureDim * 4);
      beamMeta = new Float32Array(textureDimEdges * textureDimEdges * 4);
      normals = new Float32Array(textureDimFaces * textureDimFaces * 4);
      faceVertexIndices = new Float32Array(textureDimFaces * textureDimFaces * 4);
      creaseMeta = new Float32Array(textureDimCreases * textureDimCreases * 4);
      nodeFaceMeta = new Float32Array(textureDimNodeFaces * textureDimNodeFaces * 4);
      nominalTriangles = new Float32Array(textureDimFaces * textureDimFaces * 4);
      nodeCreaseMeta = new Float32Array(textureDimNodeCreases * textureDimNodeCreases * 4);
      creaseMeta2 = new Float32Array(textureDimCreases * textureDimCreases * 4);
      creaseGeo = new Float32Array(textureDimCreases * textureDimCreases * 4);
      creaseVectors = new Float32Array(textureDimCreases * textureDimCreases * 4);
      theta = new Float32Array(textureDimCreases * textureDimCreases * 4);
      lastTheta = new Float32Array(textureDimCreases * textureDimCreases * 4);

      for (var _i3 = 0; _i3 < faces.length; _i3 += 1) {
        var face = faces[_i3];
        faceVertexIndices[4 * _i3] = face[0];
        faceVertexIndices[4 * _i3 + 1] = face[1];
        faceVertexIndices[4 * _i3 + 2] = face[2];
        var a = nodes[face[0]].getOriginalPosition();
        var b = nodes[face[1]].getOriginalPosition();
        var c = nodes[face[2]].getOriginalPosition();
        var ab = b.clone().sub(a).normalize();
        var ac = c.clone().sub(a).normalize();
        var bc = c.clone().sub(b).normalize();
        nominalTriangles[4 * _i3] = Math.acos(ab.dot(ac));
        nominalTriangles[4 * _i3 + 1] = Math.acos(-1 * ab.dot(bc));
        nominalTriangles[4 * _i3 + 2] = Math.acos(ac.dot(bc));

        if (Math.abs(nominalTriangles[4 * _i3] + nominalTriangles[4 * _i3 + 1] + nominalTriangles[4 * _i3 + 2] - Math.PI) > 0.1) {
          console.warn("bad angles");
        }
      }

      for (var _i4 = 0; _i4 < textureDim * textureDim; _i4 += 1) {
        mass[4 * _i4 + 1] = 1;
      }

      for (var _i5 = 0; _i5 < textureDimCreases * textureDimCreases; _i5 += 1) {
        if (_i5 >= numCreases) {
          lastTheta[_i5 * 4 + 2] = -1;
          lastTheta[_i5 * 4 + 3] = -1;
          continue;
        }

        lastTheta[_i5 * 4 + 2] = creases[_i5].getNormal1Index();
        lastTheta[_i5 * 4 + 3] = creases[_i5].getNormal2Index();
      }

      var index = 0;

      for (var _i6 = 0; _i6 < nodes.length; _i6 += 1) {
        meta2[4 * _i6] = index;
        var num = nodeFaces[_i6].length;
        meta2[4 * _i6 + 1] = num;

        for (var _j = 0; _j < num; _j += 1) {
          var _index = (index + _j) * 4;

          var _face = faces[nodeFaces[_i6][_j]];
          nodeFaceMeta[_index] = nodeFaces[_i6][_j];
          nodeFaceMeta[_index + 1] = _face[0] == _i6 ? -1 : _face[0];
          nodeFaceMeta[_index + 2] = _face[1] == _i6 ? -1 : _face[1];
          nodeFaceMeta[_index + 3] = _face[2] == _i6 ? -1 : _face[2];
        }

        index += num;
      }

      index = 0;

      for (var _i7 = 0; _i7 < nodes.length; _i7 += 1) {
        mass[4 * _i7] = nodes[_i7].getSimMass();
        meta[_i7 * 4 + 2] = index;
        var nodeCreases = nodes[_i7].creases;
        var nodeInvCreases = nodes[_i7].invCreases;
        meta[_i7 * 4 + 3] = nodeCreases.length + nodeInvCreases.length;

        for (var _j2 = 0; _j2 < nodeCreases.length; _j2 += 1) {
          nodeCreaseMeta[index * 4] = nodeCreases[_j2].getIndex();
          nodeCreaseMeta[index * 4 + 1] = nodeCreases[_j2].getNodeIndex(nodes[_i7]);
          index += 1;
        }

        for (var _j3 = 0; _j3 < nodeInvCreases.length; _j3 += 1) {
          nodeCreaseMeta[index * 4] = nodeInvCreases[_j3].getIndex();
          nodeCreaseMeta[index * 4 + 1] = nodeInvCreases[_j3].getNodeIndex(nodes[_i7]);
          index += 1;
        }
      }

      for (var _i8 = 0; _i8 < creases.length; _i8 += 1) {
        var crease = creases[_i8];
        creaseMeta2[_i8 * 4] = crease.node1.getIndex();
        creaseMeta2[_i8 * 4 + 1] = crease.node2.getIndex();
        creaseMeta2[_i8 * 4 + 2] = crease.edge.nodes[0].getIndex();
        creaseMeta2[_i8 * 4 + 3] = crease.edge.nodes[1].getIndex();
        index += 1;
      }

      updateOriginalPosition();
      updateMaterials(true);
      updateFixed();
      updateExternalForces();
      updateCreasesMeta(true);
      updateCreaseVectors();
      setCreasePercent(globals.creasePercent);
    }

    return {
      syncNodesAndEdges: syncNodesAndEdges,
      updateFixed: updateFixed,
      solve: solve,
      render: render,
      reset: reset
    };
  }

  function Beam(globals, nodes) {
    this.type = "beam";
    this.globals = globals;
    nodes[0].addBeam(this);
    nodes[1].addBeam(this);
    this.vertices = [nodes[0]._originalPosition, nodes[1]._originalPosition];
    this.nodes = nodes;
    this.originalLength = this.getLength();
  }

  Beam.prototype.getLength = function () {
    return this.getVector().length();
  };

  Beam.prototype.getOriginalLength = function () {
    return this.originalLength;
  };

  Beam.prototype.recalcOriginalLength = function () {
    this.originalLength = this.getVector().length();
  };

  Beam.prototype.isFixed = function () {
    return this.nodes[0].fixed && this.nodes[1].fixed;
  };

  Beam.prototype.getVector = function (fromNode) {
    if (fromNode === this.nodes[1]) {
      return this.vertices[0].clone().sub(this.vertices[1]);
    }

    return this.vertices[1].clone().sub(this.vertices[0]);
  };

  Beam.prototype.getK = function () {
    return this.globals.axialStiffness / this.getLength();
  };

  Beam.prototype.getD = function () {
    return this.globals.percentDamping * 2 * Math.sqrt(this.getK() * this.getMinMass());
  };

  Beam.prototype.getNaturalFrequency = function () {
    return Math.sqrt(this.getK() / this.getMinMass());
  };

  Beam.prototype.getMinMass = function () {
    var minMass = this.nodes[0].getSimMass();
    if (this.nodes[1].getSimMass() < minMass) minMass = this.nodes[1].getSimMass();
    return minMass;
  };

  Beam.prototype.getOtherNode = function (node) {
    if (this.nodes[0] === node) return this.nodes[1];
    return this.nodes[0];
  };

  Beam.prototype.destroy = function () {
    var self = this;
    this.nodes.forEach(function (node) {
      return node.removeBeam(self);
    });
    this.vertices = null;
    this.nodes = null;
  };

  function Crease(globals, edge, face1Index, face2Index, targetTheta, type, node1, node2, index) {
    this.globals = globals;
    this.edge = edge;

    for (var i = 0; i < edge.nodes.length; i += 1) {
      edge.nodes[i].addInvCrease(this);
    }

    this.face1Index = face1Index;
    this.face2Index = face2Index;
    this.targetTheta = targetTheta;
    this.type = type;
    this.node1 = node1;
    this.node2 = node2;
    this.index = index;
    node1.addCrease(this);
    node2.addCrease(this);
  }

  Crease.prototype.getLength = function () {
    return this.edge.getLength();
  };

  Crease.prototype.getVector = function (fromNode) {
    return this.edge.getVector(fromNode);
  };

  Crease.prototype.getNormal1Index = function () {
    return this.face1Index;
  };

  Crease.prototype.getNormal2Index = function () {
    return this.face2Index;
  };

  Crease.prototype.getTargetTheta = function () {
    return this.targetTheta;
  };

  Crease.prototype.getK = function () {
    var length = this.getLength();
    if (this.type === 0) return this.globals.panelStiffness * length;
    return this.globals.creaseStiffness * length;
  };

  Crease.prototype.getD = function () {
    return this.globals.percentDamping * 2 * Math.sqrt(this.getK());
  };

  Crease.prototype.getIndex = function () {
    return this.index;
  };

  Crease.prototype.getLengthToNode1 = function () {
    return this.getLengthTo(this.node1);
  };

  Crease.prototype.getLengthToNode2 = function () {
    return this.getLengthTo(this.node2);
  };

  Crease.prototype.getCoef1 = function (edgeNode) {
    return this.getCoef(this.node1, edgeNode);
  };

  Crease.prototype.getCoef2 = function (edgeNode) {
    return this.getCoef(this.node2, edgeNode);
  };

  Crease.prototype.getCoef = function (node, edgeNode) {
    var vector1 = this.getVector(edgeNode);
    var creaseLength = vector1.length();
    vector1.normalize();
    var nodePosition = node.getOriginalPosition();
    var vector2 = nodePosition.sub(edgeNode.getOriginalPosition());
    var projLength = vector1.dot(vector2);
    var length = Math.sqrt(vector2.lengthSq() - projLength * projLength);

    if (length <= 0.0) {
      console.warn("bad moment arm");
      length = 0.001;
    }

    return 1 - projLength / creaseLength;
  };

  Crease.prototype.getLengthTo = function (node) {
    var vector1 = this.getVector().normalize();
    var nodePosition = node.getOriginalPosition();
    var vector2 = nodePosition.sub(this.edge.nodes[1].getOriginalPosition());
    var projLength = vector1.dot(vector2);
    var length = Math.sqrt(vector2.lengthSq() - projLength * projLength);

    if (length <= 0.0) {
      console.warn("bad moment arm");
      length = 0.001;
    }

    return length;
  };

  Crease.prototype.getNodeIndex = function (node) {
    if (node === this.node1) return 1;
    if (node === this.node2) return 2;
    if (node === this.edge.nodes[0]) return 3;
    if (node === this.edge.nodes[1]) return 4;
    console.log("unknown node type");
    return 0;
  };

  Crease.prototype.setVisibility = function () {
    var vis = false;
    if (this.type === 0) vis = this.globals.panelsVisible;else {
      vis = this.targetTheta > 0 && this.globals.mtnsVisible || this.targetTheta < 0 && this.globals.valleysVisible;
    }
    this.edge.setVisibility(vis);
  };

  Crease.prototype.destroy = function () {
    this.node1.removeCrease(this);
    this.node2.removeCrease(this);

    if (this.edge && this.edge.nodes) {
      for (var i = 0; i < this.edge.nodes.length; i += 1) {
        this.edge.nodes[i].removeInvCrease(this);
      }
    }

    this.edge = null;
    this.face1Index = null;
    this.face2Index = null;
    this.targetTheta = null;
    this.type = null;
    this.node1 = null;
    this.node2 = null;
    this.index = null;
  };

  var THREE$4 = win.THREE || require("three");

  function initModel(globals) {
    var material;
    var material2;
    var geometry;
    var frontside = new THREE$4.Mesh();
    var backside = new THREE$4.Mesh();
    backside.visible = false;
    var lineMaterial = new THREE$4.LineBasicMaterial({
      color: 0x000000,
      linewidth: 1,
      transparent: true,
      opacity: 0.3
    });
    var hingeLines = new THREE$4.LineSegments(null, lineMaterial);
    var mountainLines = new THREE$4.LineSegments(null, lineMaterial);
    var valleyLines = new THREE$4.LineSegments(null, lineMaterial);
    var cutLines = new THREE$4.LineSegments(null, lineMaterial);
    var facetLines = new THREE$4.LineSegments(null, lineMaterial);
    var borderLines = new THREE$4.LineSegments(null, lineMaterial);
    var lines = {
      U: hingeLines,
      M: mountainLines,
      V: valleyLines,
      C: cutLines,
      F: facetLines,
      B: borderLines
    };
    clearGeometries();
    setMeshMaterial();

    function clearGeometries() {
      if (geometry) {
        frontside.geometry = null;
        backside.geometry = null;
        geometry.dispose();
      }

      geometry = new THREE$4.BufferGeometry();
      frontside.geometry = geometry;
      backside.geometry = geometry;
      geometry.dynamic = true;
      Object.values(lines).forEach(function (line) {
        var lineGeometry = line.geometry;

        if (lineGeometry) {
          line.geometry = null;
          lineGeometry.dispose();
        }

        lineGeometry = new THREE$4.BufferGeometry();
        line.geometry = lineGeometry;
        lineGeometry.dynamic = true;
      });
    }

    globals.threeView.sceneAddModel(frontside);
    globals.threeView.sceneAddModel(backside);
    Object.values(lines).forEach(function (line) {
      globals.threeView.sceneAddModel(line);
    });
    var positions;
    var colors;
    var indices;
    var nodes = [];
    var faces = [];
    var edges = [];
    var creases = [];
    var vertices = [];
    var fold;
    var creaseParams;
    var nextCreaseParams;
    var nextFold;
    var inited = false;

    function setMeshMaterial() {
      var polygonOffset = 0.5;

      if (globals.colorMode === "axialStrain") {
        material = new THREE$4.MeshBasicMaterial({
          vertexColors: THREE$4.VertexColors,
          side: THREE$4.DoubleSide,
          polygonOffset: true,
          polygonOffsetFactor: polygonOffset,
          polygonOffsetUnits: 1
        });
        backside.visible = false;

        if (!globals.threeView.simulationRunning) {
          getSolver().render();
          setGeoUpdates();
        }
      } else {
        material = new THREE$4.MeshPhongMaterial({
          flatShading: true,
          side: THREE$4.FrontSide,
          polygonOffset: true,
          polygonOffsetFactor: polygonOffset,
          polygonOffsetUnits: 1,
          shininess: 1,
          specular: 0xffffff,
          reflectivity: 0
        });
        material2 = new THREE$4.MeshPhongMaterial({
          flatShading: true,
          side: THREE$4.BackSide,
          polygonOffset: true,
          polygonOffsetFactor: polygonOffset,
          polygonOffsetUnits: 1,
          shininess: 1,
          specular: 0xffffff,
          reflectivity: 0
        });
        material.color.setStyle("#".concat(globals.color1));
        material2.color.setStyle("#".concat(globals.color2));
        backside.visible = true;
      }

      frontside.material = material;
      backside.material = material2;
      frontside.material.needsUpdate = true;
      backside.material.needsUpdate = true;
      frontside.castShadow = true;
      frontside.receiveShadow = true;
    }

    function updateEdgeVisibility() {
      mountainLines.visible = globals.edgesVisible && globals.mtnsVisible;
      valleyLines.visible = globals.edgesVisible && globals.valleysVisible;
      facetLines.visible = globals.edgesVisible && globals.panelsVisible;
      hingeLines.visible = globals.edgesVisible && globals.passiveEdgesVisible;
      borderLines.visible = globals.edgesVisible && globals.boundaryEdgesVisible;
      cutLines.visible = false;
    }

    function updateMeshVisibility() {
      frontside.visible = globals.meshVisible;
      backside.visible = globals.colorMode === "color" && globals.meshVisible;
    }

    function getGeometry() {
      return geometry;
    }

    function getMesh() {
      return [frontside, backside];
    }

    function getPositionsArray() {
      return positions;
    }

    function getColorsArray() {
      return colors;
    }

    function pause() {
      globals.threeView.pauseSimulation();
    }

    function resume() {
      globals.threeView.startSimulation();
    }

    function reset() {
      getSolver().reset();
      setGeoUpdates();
    }

    function step(numSteps) {
      getSolver().solve(numSteps);
      setGeoUpdates();
    }

    function setGeoUpdates() {
      geometry.attributes.position.needsUpdate = true;
      if (globals.colorMode === "axialStrain") geometry.attributes.color.needsUpdate = true;
      if (globals.userInteractionEnabled || globals.vrEnabled) geometry.computeBoundingBox();
    }

    function startSolver() {
      globals.threeView.startAnimation();
    }

    function getSolver() {
      if (globals.simType === "dynamic") return globals.dynamicSolver;
      if (globals.simType === "static") return globals.staticSolver;
      return globals.rigidSolver;
    }

    function buildModel(buildFold, buildCreaseParams) {
      if (buildFold.vertices_coords.length === 0) {
        globals.warn("No geometry found.");
        return;
      }

      if (buildFold.faces_vertices.length === 0) {
        globals.warn("No faces found, try adjusting import vertex merge tolerance.");
        return;
      }

      if (buildFold.edges_vertices.length === 0) {
        globals.warn("No edges found.");
        return;
      }

      nextFold = buildFold;
      nextCreaseParams = buildCreaseParams;
      globals.needsSync = true;
      globals.simNeedsSync = true;

      if (!inited) {
        startSolver();
        inited = true;
      }
    }

    function sync() {
      for (var i = 0; i < nodes.length; i += 1) {
        nodes[i].destroy();
      }

      for (var _i = 0; _i < edges.length; _i += 1) {
        edges[_i].destroy();
      }

      for (var _i2 = 0; _i2 < creases.length; _i2 += 1) {
        creases[_i2].destroy();
      }

      fold = nextFold;
      nodes = [];
      edges = [];
      faces = fold.faces_vertices;
      creases = [];
      creaseParams = nextCreaseParams;
      var _edges = fold.edges_vertices;
      var _vertices = [];

      for (var _i3 = 0; _i3 < fold.vertices_coords.length; _i3 += 1) {
        var vertex = fold.vertices_coords[_i3];

        _vertices.push(new THREE$4.Vector3(vertex[0], vertex[1], vertex[2]));
      }

      for (var _i4 = 0; _i4 < _vertices.length; _i4 += 1) {
        nodes.push(new Node(globals, _vertices[_i4].clone(), nodes.length));
      }

      for (var _i5 = 0; _i5 < _edges.length; _i5 += 1) {
        edges.push(new Beam(globals, [nodes[_edges[_i5][0]], nodes[_edges[_i5][1]]]));
      }

      for (var _i6 = 0; _i6 < creaseParams.length; _i6 += 1) {
        var _creaseParams = creaseParams[_i6];
        var type = _creaseParams[5] !== 0 ? 1 : 0;
        creases.push(new Crease(globals, edges[_creaseParams[4]], _creaseParams[0], _creaseParams[2], _creaseParams[5] * Math.PI / 180, type, nodes[_creaseParams[1]], nodes[_creaseParams[3]], creases.length));
      }

      vertices = [];

      for (var _i7 = 0; _i7 < nodes.length; _i7 += 1) {
        vertices.push(nodes[_i7].getOriginalPosition());
      }

      if (globals.noCreasePatternAvailable() && globals.navMode === "pattern") {
        globals.navMode = "simulation";
      }

      positions = new Float32Array(vertices.length * 3);
      colors = new Float32Array(vertices.length * 3);
      indices = new Uint16Array(faces.length * 3);

      for (var _i8 = 0; _i8 < vertices.length; _i8 += 1) {
        positions[3 * _i8] = vertices[_i8].x;
        positions[3 * _i8 + 1] = vertices[_i8].y;
        positions[3 * _i8 + 2] = vertices[_i8].z;
      }

      for (var _i9 = 0; _i9 < faces.length; _i9 += 1) {
        var face = faces[_i9];
        indices[3 * _i9] = face[0];
        indices[3 * _i9 + 1] = face[1];
        indices[3 * _i9 + 2] = face[2];
      }

      clearGeometries();
      var positionsAttribute = new THREE$4.BufferAttribute(positions, 3);
      var lineIndices = {
        U: [],
        V: [],
        M: [],
        B: [],
        F: [],
        C: []
      };

      for (var _i10 = 0; _i10 < fold.edges_assignment.length; _i10 += 1) {
        var edge = fold.edges_vertices[_i10];
        var assignment = fold.edges_assignment[_i10];
        lineIndices[assignment].push(edge[0]);
        lineIndices[assignment].push(edge[1]);
      }

      Object.keys(lines).forEach(function (key) {
        var indicesArray = lineIndices[key];
        var uIndices = new Uint16Array(indicesArray.length);

        for (var _i11 = 0; _i11 < indicesArray.length; _i11 += 1) {
          uIndices[_i11] = indicesArray[_i11];
        }

        lines[key].geometry.addAttribute("position", positionsAttribute);
        lines[key].geometry.setIndex(new THREE$4.BufferAttribute(uIndices, 1));
        lines[key].geometry.computeBoundingBox();
        lines[key].geometry.computeBoundingSphere();
        lines[key].geometry.center();
      });
      geometry.addAttribute("position", positionsAttribute);
      geometry.addAttribute("color", new THREE$4.BufferAttribute(colors, 3));
      geometry.setIndex(new THREE$4.BufferAttribute(indices, 1));
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      geometry.center();
      var scale = 1 / geometry.boundingSphere.radius;
      globals.scale = scale;

      for (var _i12 = 0; _i12 < positions.length; _i12 += 1) {
        positions[_i12] *= scale;
      }

      for (var _i13 = 0; _i13 < vertices.length; _i13 += 1) {
        vertices[_i13].multiplyScalar(scale);
      }

      for (var _i14 = 0; _i14 < vertices.length; _i14 += 1) {
        nodes[_i14].setOriginalPosition(positions[3 * _i14], positions[3 * _i14 + 1], positions[3 * _i14 + 2]);
      }

      for (var _i15 = 0; _i15 < edges.length; _i15 += 1) {
        edges[_i15].recalcOriginalLength();
      }

      updateEdgeVisibility();
      updateMeshVisibility();
      syncSolver();
      globals.needsSync = false;
      if (!globals.simulationRunning) reset();
    }

    function syncSolver() {
      getSolver().syncNodesAndEdges();
      globals.simNeedsSync = false;
    }

    function getNodes() {
      return nodes;
    }

    function getEdges() {
      return edges;
    }

    function getFaces() {
      return faces;
    }

    function getCreases() {
      return creases;
    }

    function getDimensions() {
      geometry.computeBoundingBox();
      return geometry.boundingBox.max.clone().sub(geometry.boundingBox.min);
    }

    return {
      pause: pause,
      resume: resume,
      reset: reset,
      step: step,
      getNodes: getNodes,
      getEdges: getEdges,
      getFaces: getFaces,
      getCreases: getCreases,
      getGeometry: getGeometry,
      getPositionsArray: getPositionsArray,
      getColorsArray: getColorsArray,
      getMesh: getMesh,
      buildModel: buildModel,
      sync: sync,
      syncSolver: syncSolver,
      setMeshMaterial: setMeshMaterial,
      updateEdgeVisibility: updateEdgeVisibility,
      updateMeshVisibility: updateMeshVisibility,
      getDimensions: getDimensions
    };
  }

  var THREE$5 = win.THREE || require("three");

  var earcut = win.earcut || require("earcut");

  var FOLD = win.FOLD || require("fold");

  var SVGLoader = THREE$5.SVGLoader || require("three-svg-loader");

  function initPattern(globals) {
    var foldData = {};
    var rawFold = {};

    function clearFold() {
      foldData.vertices_coords = [];
      foldData.edges_vertices = [];
      foldData.edges_assignment = [];
      foldData.edges_foldAngle = [];
      delete foldData.vertices_vertices;
      delete foldData.faces_vertices;
      delete foldData.vertices_edges;
      rawFold = {};
    }

    var verticesRaw = [];
    var mountainsRaw = [];
    var valleysRaw = [];
    var bordersRaw = [];
    var cutsRaw = [];
    var triangulationsRaw = [];
    var hingesRaw = [];
    var badColors = [];
    var mountains = [];
    var valleys = [];
    var borders = [];
    var hinges = [];
    var triangulations = [];

    function clearAll() {
      clearFold();
      verticesRaw = [];
      mountainsRaw = [];
      valleysRaw = [];
      bordersRaw = [];
      cutsRaw = [];
      triangulationsRaw = [];
      hingesRaw = [];
      mountains = [];
      valleys = [];
      borders = [];
      hinges = [];
      triangulations = [];
      badColors = [];
    }

    clearAll();
    var SVGloader = new SVGLoader();

    function getOpacity(obj) {
      var opacity = obj.getAttribute("opacity");

      if (opacity === undefined) {
        if (obj.style && obj.style.opacity) {
          opacity = obj.style.opacity;
        }

        if (opacity === undefined) {
          opacity = obj.getAttribute("stroke-opacity");

          if (opacity === undefined) {
            if (obj.style && obj.style["stroke-opacity"]) {
              opacity = obj.style["stroke-opacity"];
            }
          }
        }
      }

      opacity = parseFloat(opacity);

      if (isNaN(opacity)) {
        return 1;
      }

      return opacity;
    }

    function getStroke(obj) {
      var stroke = obj.getAttribute("stroke");

      if (stroke === undefined) {
        if (obj.style && obj.style.stroke) {
          stroke = obj.style.stroke.toLowerCase();
          stroke = stroke.replace(/\s/g, "");
          return stroke;
        }

        return null;
      }

      stroke = stroke.replace(/\s/g, "");
      return stroke.toLowerCase();
    }

    function typeForStroke(stroke) {
      if (stroke === "#000000" || stroke === "#000" || stroke === "black" || stroke === "rgb(0,0,0)") return "border";
      if (stroke === "#ff0000" || stroke === "#f00" || stroke === "red" || stroke === "rgb(255,0,0)") return "mountain";
      if (stroke === "#0000ff" || stroke === "#00f" || stroke === "blue" || stroke === "rgb(0,0,255)") return "valley";
      if (stroke === "#00ff00" || stroke === "#0f0" || stroke === "green" || stroke === "rgb(0,255,0)") return "cut";
      if (stroke === "#ffff00" || stroke === "#ff0" || stroke === "yellow" || stroke === "rgb(255,255,0)") return "triangulation";
      if (stroke === "#ff00ff" || stroke === "#f0f" || stroke === "magenta" || stroke === "rgb(255,0,255)") return "hinge";
      badColors.push(stroke);
      return null;
    }

    function colorForAssignment(assignment) {
      if (assignment === "B") return "#000";
      if (assignment === "M") return "#f00";
      if (assignment === "V") return "#00f";
      if (assignment === "C") return "#0f0";
      if (assignment === "F") return "#ff0";
      if (assignment === "U") return "#f0f";
      return "#0ff";
    }

    function opacityForAngle(angle, assignment) {
      if (angle === null || assignment === "F") return 1;
      return Math.abs(angle) / 180;
    }

    var multiply_vector2_matrix2 = function multiply_vector2_matrix2(vector, matrix) {
      return [vector[0] * matrix[0] + vector[1] * matrix[2] + matrix[4], vector[0] * matrix[1] + vector[1] * matrix[3] + matrix[5]];
    };

    function applyTransformation(vertex, transformations) {
      if (transformations === undefined) {
        return;
      }

      transformations = transformations.baseVal;

      for (var i = 0; i < transformations.length; i += 1) {
        var t = transformations[i];
        var m = t.matrix;
        var out = multiply_vector2_matrix2([vertex.x, vertex.z], [m.a, m.b, m.c, m.d, m.e, m.f]);

        var _out = _slicedToArray(out, 2);

        vertex.x = _out[0];
        vertex.z = _out[1];
      }
    }

    function borderFilter(el) {
      var stroke = getStroke(el);
      return typeForStroke(stroke) === "border";
    }

    function mountainFilter(el) {
      var stroke = getStroke(el);

      if (typeForStroke(stroke) === "mountain") {
        var opacity = getOpacity(el);
        el.targetAngle = -opacity * 180;
        return true;
      }

      return false;
    }

    function valleyFilter(el) {
      var stroke = getStroke(el);

      if (typeForStroke(stroke) === "valley") {
        var opacity = getOpacity(el);
        el.targetAngle = opacity * 180;
        return true;
      }

      return false;
    }

    function cutFilter(el) {
      var stroke = getStroke(el);
      return typeForStroke(stroke) === "cut";
    }

    function triangulationFilter(el) {
      var stroke = getStroke(el);
      return typeForStroke(stroke) === "triangulation";
    }

    function hingeFilter(el) {
      var stroke = getStroke(el);
      return typeForStroke(stroke) === "hinge";
    }

    function findType(_verticesRaw, _segmentsRaw, filter, $paths, $lines, $rects, $polygons, $polylines) {
      parsePath(_verticesRaw, _segmentsRaw, $paths.filter(filter));
      parseLine(_verticesRaw, _segmentsRaw, $lines.filter(filter));
      parseRect(_verticesRaw, _segmentsRaw, $rects.filter(filter));
      parsePolygon(_verticesRaw, _segmentsRaw, $polygons.filter(filter));
      parsePolyline(_verticesRaw, _segmentsRaw, $polylines.filter(filter));
    }

    function applyTransformation(vertex, transformations) {
      if (transformations == undefined) return;
      transformations = transformations.baseVal;

      for (var i = 0; i < transformations.length; i += 1) {
        var t = transformations[i];
        var M = [[t.matrix.a, t.matrix.c, t.matrix.e], [t.matrix.b, t.matrix.d, t.matrix.f], [0, 0, 1]];
        var out = numeric.dot(M, [vertex.x, vertex.z, 1]);
        vertex.x = out[0];
        vertex.z = out[1];
      }
    }

    function parsePath(_verticesRaw, _segmentsRaw, $elements) {
      for (var i = 0; i < $elements.length; i += 1) {
        var path = $elements[i];
        var pathVertices = [];

        if (path === undefined || path.getPathData === undefined) {
          var elm = '<div id="coverImg" ' + 'style="background: url(assets/doc/crane.gif) no-repeat center center fixed;' + '-webkit-background-size: cover;' + '-moz-background-size: cover;' + '-o-background-size: cover;' + 'background-size: cover;">' + '</div>';
          $(elm).appendTo($("body"));
          $("#noSupportModal").modal("show");
          console.warn("path parser not supported");
          return;
        }

        var segments = path.getPathData();

        for (var _j = 0; _j < segments.length; _j += 1) {
          var segment = segments[_j];
          var type = segment.type;
          var vertex = void 0;

          switch (type) {
            case "m":
              if (_j === 0) {
                vertex = new THREE$5.Vector3(segment.values[0], 0, segment.values[1]);
              } else {
                vertex = _verticesRaw[_verticesRaw.length - 1].clone();
                vertex.x += segment.values[0];
                vertex.z += segment.values[1];
              }

              _verticesRaw.push(vertex);

              pathVertices.push(vertex);
              break;

            case "l":
              _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length]);

              if (path.targetAngle && _segmentsRaw.length > 0) _segmentsRaw[_segmentsRaw.length - 1].push(path.targetAngle);
              vertex = _verticesRaw[_verticesRaw.length - 1].clone();
              vertex.x += segment.values[0];
              vertex.z += segment.values[1];

              _verticesRaw.push(vertex);

              pathVertices.push(vertex);
              break;

            case "v":
              _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length]);

              if (path.targetAngle && _segmentsRaw.length > 0) _segmentsRaw[_segmentsRaw.length - 1].push(path.targetAngle);
              vertex = _verticesRaw[_verticesRaw.length - 1].clone();
              vertex.z += segment.values[0];

              _verticesRaw.push(vertex);

              pathVertices.push(vertex);
              break;

            case "h":
              _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length]);

              if (path.targetAngle && _segmentsRaw.length > 0) _segmentsRaw[_segmentsRaw.length - 1].push(path.targetAngle);
              vertex = _verticesRaw[_verticesRaw.length - 1].clone();
              vertex.x += segment.values[0];

              _verticesRaw.push(vertex);

              pathVertices.push(vertex);
              break;

            case "M":
              vertex = new THREE$5.Vector3(segment.values[0], 0, segment.values[1]);

              _verticesRaw.push(vertex);

              pathVertices.push(vertex);
              break;

            case "L":
              _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length]);

              if (path.targetAngle && _segmentsRaw.length > 0) _segmentsRaw[_segmentsRaw.length - 1].push(path.targetAngle);

              _verticesRaw.push(new THREE$5.Vector3(segment.values[0], 0, segment.values[1]));

              pathVertices.push(vertex);
              break;

            case "V":
              _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length]);

              if (path.targetAngle && _segmentsRaw.length > 0) _segmentsRaw[_segmentsRaw.length - 1].push(path.targetAngle);
              vertex = _verticesRaw[_verticesRaw.length - 1].clone();
              vertex.z = segment.values[0];

              _verticesRaw.push(vertex);

              pathVertices.push(vertex);
              break;

            case "H":
              _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length]);

              if (path.targetAngle && _segmentsRaw.length > 0) _segmentsRaw[_segmentsRaw.length - 1].push(path.targetAngle);
              vertex = _verticesRaw[_verticesRaw.length - 1].clone();
              vertex.x = segment.values[0];

              _verticesRaw.push(vertex);

              pathVertices.push(vertex);
              break;
          }
        }

        for (var j = 0; j < pathVertices.length; j++) {
          applyTransformation(pathVertices[j], path.transform);
        }
      }
    }

    function parseLine(_verticesRaw, _segmentsRaw, $elements) {
      for (var i = 0; i < $elements.length; i++) {
        var element = $elements[i];

        _verticesRaw.push(new THREE$5.Vector3(element.x1.baseVal.value, 0, element.y1.baseVal.value));

        _verticesRaw.push(new THREE$5.Vector3(element.x2.baseVal.value, 0, element.y2.baseVal.value));

        _segmentsRaw.push([_verticesRaw.length - 2, _verticesRaw.length - 1]);

        if (element.targetAngle) _segmentsRaw[_segmentsRaw.length - 1].push(element.targetAngle);
        applyTransformation(_verticesRaw[_verticesRaw.length - 2], element.transform);
        applyTransformation(_verticesRaw[_verticesRaw.length - 1], element.transform);
      }
    }

    function parseRect(_verticesRaw, _segmentsRaw, $elements) {
      for (var i = 0; i < $elements.length; i++) {
        var element = $elements[i];
        var x = element.x.baseVal.value;
        var y = element.y.baseVal.value;
        var width = element.width.baseVal.value;
        var height = element.height.baseVal.value;

        _verticesRaw.push(new THREE$5.Vector3(x, 0, y));

        _verticesRaw.push(new THREE$5.Vector3(x + width, 0, y));

        _verticesRaw.push(new THREE$5.Vector3(x + width, 0, y + height));

        _verticesRaw.push(new THREE$5.Vector3(x, 0, y + height));

        _segmentsRaw.push([_verticesRaw.length - 4, _verticesRaw.length - 3]);

        _segmentsRaw.push([_verticesRaw.length - 3, _verticesRaw.length - 2]);

        _segmentsRaw.push([_verticesRaw.length - 2, _verticesRaw.length - 1]);

        _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length - 4]);

        for (var j = 1; j <= 4; j++) {
          if (element.targetAngle) _segmentsRaw[_segmentsRaw.length - j].push(element.targetAngle);
          applyTransformation(_verticesRaw[_verticesRaw.length - j], element.transform);
        }
      }
    }

    function parsePolygon(_verticesRaw, _segmentsRaw, $elements) {
      for (var i = 0; i < $elements.length; i++) {
        var element = $elements[i];

        for (var j = 0; j < element.points.length; j++) {
          _verticesRaw.push(new THREE$5.Vector3(element.points[j].x, 0, element.points[j].y));

          applyTransformation(_verticesRaw[_verticesRaw.length - 1], element.transform);
          if (j < element.points.length - 1) _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length]);else _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length - element.points.length]);
          if (element.targetAngle) _segmentsRaw[_segmentsRaw.length - 1].push(element.targetAngle);
        }
      }
    }

    function parsePolyline(_verticesRaw, _segmentsRaw, $elements) {
      for (var i = 0; i < $elements.length; i++) {
        var element = $elements[i];

        for (var j = 0; j < element.points.length; j++) {
          _verticesRaw.push(new THREE$5.Vector3(element.points[j].x, 0, element.points[j].y));

          applyTransformation(_verticesRaw[_verticesRaw.length - 1], element.transform);
          if (j > 0) _segmentsRaw.push([_verticesRaw.length - 1, _verticesRaw.length - 2]);
          if (element.targetAngle) _segmentsRaw[_segmentsRaw.length - 1].push(element.targetAngle);
        }
      }
    }

    function loadSVG(url) {
      SVGloader.load(url, function (svg) {
        var _$svg = svg.xml;
        clearAll();
        var $style = Array.from(_$svg.childNodes).filter(function (n) {
          return n.tagName === "style";
        });

        if ($style.length > 0) {
          globals.warn("Global styling found on SVG, this is currently ignored by the app.  This may cause some lines to be styled incorrectly and missed during import.  Please find a way to save this file without using global style tags.<br/><br/>Global styling:<br/><br/><b>".concat($style.html(), "</b>"));
        }

        var $paths = Array.from(_$svg.getElementsByTagName("path"));
        var $lines = Array.from(_$svg.getElementsByTagName("line"));
        var $rects = Array.from(_$svg.getElementsByTagName("rect"));
        var $polygons = Array.from(_$svg.getElementsByTagName("polygon"));
        var $polylines = Array.from(_$svg.getElementsByTagName("polyline"));

        var wipe = function wipe(a) {
          return a.setAttribute("style", "fill: none; stroke-dasharray: none;");
        };

        $paths.forEach(function (a) {
          return wipe(a);
        });
        $lines.forEach(function (a) {
          return wipe(a);
        });
        $rects.forEach(function (a) {
          return wipe(a);
        });
        $polygons.forEach(function (a) {
          return wipe(a);
        });
        $polylines.forEach(function (a) {
          return wipe(a);
        });
        findType(verticesRaw, bordersRaw, borderFilter, $paths, $lines, $rects, $polygons, $polylines);
        findType(verticesRaw, mountainsRaw, mountainFilter, $paths, $lines, $rects, $polygons, $polylines);
        findType(verticesRaw, valleysRaw, valleyFilter, $paths, $lines, $rects, $polygons, $polylines);
        findType(verticesRaw, cutsRaw, cutFilter, $paths, $lines, $rects, $polygons, $polylines);
        findType(verticesRaw, triangulationsRaw, triangulationFilter, $paths, $lines, $rects, $polygons, $polylines);
        findType(verticesRaw, hingesRaw, hingeFilter, $paths, $lines, $rects, $polygons, $polylines);

        if (badColors.length > 0) {
          var badColorHash = {};
          badColors.forEach(function (c) {
            badColorHash[c] = true;
          });
          badColors = Object.keys(badColorHash);
          var string = "Some objects found with the following stroke colors:<br/><br/>";
          badColors.forEach(function (color) {
            string += "<span style='background:" + color + "' class='colorSwatch'></span>" + color + "<br/>";
          });
          string += "<br/>These objects were ignored.<br/>  Please check that your file is set up correctly, <br/>" + "see <b>File > File Import Tips</b> for more information.";
          globals.warn(string);
        }

        var success = parseSVG(verticesRaw, bordersRaw, mountainsRaw, valleysRaw, cutsRaw, triangulationsRaw, hingesRaw);
        if (!success) return;
        var max = new THREE$5.Vector3(-Infinity, -Infinity, -Infinity);
        var min = new THREE$5.Vector3(Infinity, Infinity, Infinity);

        for (var i = 0; i < rawFold.vertices_coords.length; i += 1) {
          var vertex = new THREE$5.Vector3(rawFold.vertices_coords[i][0], rawFold.vertices_coords[i][1], rawFold.vertices_coords[i][2]);
          max.max(vertex);
          min.min(vertex);
        }

        if (min.x === Infinity) {
          if (badColors.length === 0) globals.warn("no geometry found in file");
          return;
        }

        max.sub(min);
        var border = new THREE$5.Vector3(0.1, 0, 0.1);
        var scale = max.x;
        if (max.z < scale) scale = max.z;
        if (scale === 0) return;
        var strokeWidth = scale / 300;
        border.multiplyScalar(scale);
        min.sub(border);
        max.add(border.multiplyScalar(2));
        var viewBoxTxt = [min.x, min.z, max.x, max.z].join(" ");
        var ns = "http://www.w3.org/2000/svg";
        var newSVG = win.document.createElementNS(ns, "svg");
        newSVG.setAttribute("viewBox", viewBoxTxt);

        for (var _i = 0; _i < rawFold.edges_vertices.length; _i += 1) {
          var line = win.document.createElementNS(ns, "line");
          var edge = rawFold.edges_vertices[_i];
          var _vertex = rawFold.vertices_coords[edge[0]];
          line.setAttribute("stroke", colorForAssignment(rawFold.edges_assignment[_i]));
          line.setAttribute("opacity", opacityForAngle(rawFold.edges_foldAngle[_i], rawFold.edges_assignment[_i]));
          line.setAttribute("x1", _vertex[0]);
          line.setAttribute("y1", _vertex[2]);
          _vertex = rawFold.vertices_coords[edge[1]];
          line.setAttribute("x2", _vertex[0]);
          line.setAttribute("y2", _vertex[2]);
          line.setAttribute("stroke-width", strokeWidth);
          newSVG.appendChild(line);
        }
      }, function () {}, function (error) {
        globals.warn("Error loading SVG " + url + " : " + error);
        console.warn(error);
      });
    }

    function processFold(fold, returnCreaseParams) {
      rawFold = JSON.parse(JSON.stringify(fold));

      for (var i = 0; i < rawFold.vertices_coords.length; i += 1) {
        var vertex = rawFold.vertices_coords[i];

        if (vertex.length === 2) {
          rawFold.vertices_coords[i] = [vertex[0], 0, vertex[1]];
        }
      }

      var cuts = [];

      if (cuts.length > 0) {
        fold = splitCuts(fold);
        fold = FOLD.convert.edges_vertices_to_vertices_vertices_unsorted(fold);
        fold = removeRedundantVertices(fold, 0.01);
      }

      delete fold.vertices_vertices;
      delete fold.vertices_edges;
      foldData = triangulatePolys(fold, true);

      for (var _i2 = 0; _i2 < foldData.vertices_coords.length; _i2 += 1) {
        var _vertex2 = foldData.vertices_coords[_i2];

        if (_vertex2.length === 2) {
          foldData.vertices_coords[_i2] = [_vertex2[0], 0, _vertex2[1]];
        }
      }

      mountains = FOLD.filter.mountainEdges(foldData);
      valleys = FOLD.filter.valleyEdges(foldData);
      borders = FOLD.filter.boundaryEdges(foldData);
      hinges = FOLD.filter.unassignedEdges(foldData);
      triangulations = FOLD.filter.flatEdges(foldData);
      var allCreaseParams = getFacesAndVerticesForEdges(foldData);
      if (returnCreaseParams) return allCreaseParams;
      globals.model.buildModel(foldData, allCreaseParams);
      return foldData;
    }

    function parseSVG(_verticesRaw, _bordersRaw, _mountainsRaw, _valleysRaw, _cutsRaw, _triangulationsRaw, _hingesRaw) {
      _verticesRaw.forEach(function (vertex) {
        foldData.vertices_coords.push([vertex.x, vertex.z]);
      });

      _bordersRaw.forEach(function (edge) {
        foldData.edges_vertices.push([edge[0], edge[1]]);
        foldData.edges_assignment.push("B");
        foldData.edges_foldAngle.push(null);
      });

      _mountainsRaw.forEach(function (edge) {
        foldData.edges_vertices.push([edge[0], edge[1]]);
        foldData.edges_assignment.push("M");
        foldData.edges_foldAngle.push(edge[2]);
      });

      _valleysRaw.forEach(function (edge) {
        foldData.edges_vertices.push([edge[0], edge[1]]);
        foldData.edges_assignment.push("V");
        foldData.edges_foldAngle.push(edge[2]);
      });

      _triangulationsRaw.forEach(function (edge) {
        foldData.edges_vertices.push([edge[0], edge[1]]);
        foldData.edges_assignment.push("F");
        foldData.edges_foldAngle.push(0);
      });

      _hingesRaw.forEach(function (edge) {
        foldData.edges_vertices.push([edge[0], edge[1]]);
        foldData.edges_assignment.push("U");
        foldData.edges_foldAngle.push(null);
      });

      _cutsRaw.forEach(function (edge) {
        foldData.edges_vertices.push([edge[0], edge[1]]);
        foldData.edges_assignment.push("C");
        foldData.edges_foldAngle.push(null);
      });

      if (foldData.vertices_coords.length === 0 || foldData.edges_vertices.length === 0) {
        globals.warn("No valid geometry found in SVG, be sure to ungroup all and remove all clipping masks.");
        return false;
      }

      foldData = FOLD.filter.collapseNearbyVertices(foldData, globals.vertTol);
      FOLD.filter.removeLoopEdges(foldData);
      FOLD.filter.subdivideCrossingEdges_vertices(foldData, globals.vertTol);
      foldData = findIntersections(foldData, globals.vertTol);
      foldData = FOLD.filter.collapseNearbyVertices(foldData, globals.vertTol);
      FOLD.filter.removeLoopEdges(foldData);
      FOLD.filter.removeDuplicateEdges_vertices(foldData);
      foldData = FOLD.convert.edges_vertices_to_vertices_vertices_unsorted(foldData);
      foldData = removeStrayVertices(foldData);
      foldData = removeRedundantVertices(foldData, 0.01);
      FOLD.convert.sort_vertices_vertices(foldData);
      foldData = FOLD.convert.vertices_vertices_to_faces_vertices(foldData);
      foldData = edgesVerticesToVerticesEdges(foldData);
      foldData = removeBorderFaces(foldData);
      foldData = reverseFaceOrder(foldData);
      return processFold(foldData);
    }

    function makeVector(v) {
      if (v.length === 2) return makeVector2(v);
      return makeVector3(v);
    }

    function makeVector2(v) {
      return new THREE$5.Vector2(v[0], v[1]);
    }

    function makeVector3(v) {
      return new THREE$5.Vector3(v[0], v[1], v[2]);
    }

    function getDistFromEnd(t, length, tol) {
      var dist = t * length;
      if (dist < -tol) return null;
      if (dist > length + tol) return null;
      return dist;
    }

    function line_intersect(v1, v2, v3, v4) {
      var x1 = v1.x;
      var y1 = v1.y;
      var x2 = v2.x;
      var y2 = v2.y;
      var x3 = v3.x;
      var y3 = v3.y;
      var x4 = v4.x;
      var y4 = v4.y;
      var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

      if (denom === 0) {
        return null;
      }

      var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
      var ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
      return {
        intersection: new THREE$5.Vector2(x1 + ua * (x2 - x1), y1 + ua * (y2 - y1)),
        t1: ua,
        t2: ub
      };
    }

    function getFoldData(raw) {
      if (raw) return rawFold;
      return foldData;
    }

    function setFoldData(fold, returnCreaseParams) {
      clearAll();
      return processFold(fold, returnCreaseParams);
    }

    function getTriangulatedFaces() {
      return foldData.faces_vertices;
    }

    function reverseFaceOrder(fold) {
      for (var i = 0; i < fold.faces_vertices.length; i += 1) {
        fold.faces_vertices[i].reverse();
      }

      return fold;
    }

    function edgesVerticesToVerticesEdges(fold) {
      var verticesEdges = [];

      for (var i = 0; i < fold.vertices_coords.length; i += 1) {
        verticesEdges.push([]);
      }

      for (var _i3 = 0; _i3 < fold.edges_vertices.length; _i3 += 1) {
        var edge = fold.edges_vertices[_i3];
        verticesEdges[edge[0]].push(_i3);
        verticesEdges[edge[1]].push(_i3);
      }

      fold.vertices_edges = verticesEdges;
      return fold;
    }

    function facesVerticesToVerticesFaces(fold) {
      var verticesFaces = [];

      for (var i = 0; i < fold.vertices_coords.length; i += 1) {
        verticesFaces.push([]);
      }

      for (var _i4 = 0; _i4 < fold.faces_vertices.length; _i4 += 1) {
        var face = fold.faces_vertices[_i4];

        for (var j = 0; j < face.length; j += 1) {
          verticesFaces[face[j]].push(_i4);
        }
      }

      fold.vertices_faces = verticesFaces;
      return fold;
    }

    function sortVerticesEdges(fold) {
      for (var i = 0; i < fold.vertices_vertices.length; i += 1) {
        var verticesVertices = fold.vertices_vertices[i];
        var verticesEdges = fold.vertices_edges[i];
        var sortedVerticesEdges = [];

        for (var j = 0; j < verticesVertices.length; j += 1) {
          var index = -1;

          for (var k = 0; k < verticesEdges.length; k += 1) {
            var edgeIndex = verticesEdges[k];
            var edge = fold.edges_vertices[edgeIndex];

            if (edge.indexOf(verticesVertices[j]) >= 0) {
              index = edgeIndex;
              break;
            }
          }

          if (index < 0) console.warn("no matching edge found, fix this");
          sortedVerticesEdges.push(index);
        }

        fold.vertices_edges[i] = sortedVerticesEdges;
      }

      return fold;
    }

    function splitCuts(fold) {
      fold = sortVerticesEdges(fold);
      fold = facesVerticesToVerticesFaces(fold);

      for (var i = 0; i < fold.vertices_edges.length; i += 1) {
        var groups = [[]];
        var groupIndex = 0;
        var verticesEdges = fold.vertices_edges[i];
        var verticesFaces = fold.vertices_faces[i];

        for (var j = 0; j < verticesEdges.length; j += 1) {
          var edgeIndex = verticesEdges[j];
          var assignment = fold.edges_assignment[edgeIndex];
          groups[groupIndex].push(edgeIndex);

          if (assignment === "C") {
            groups.push([fold.edges_vertices.length]);
            groupIndex += 1;
            var newEdgeIndex = fold.edges_vertices.length;
            var edge = fold.edges_vertices[edgeIndex];
            fold.edges_vertices.push([edge[0], edge[1]]);
            fold.edges_assignment[edgeIndex] = "B";
            fold.edges_foldAngle.push(null);
            fold.edges_assignment.push("B");
            var otherVertex = edge[0];
            if (otherVertex === i) otherVertex = edge[1];
            var otherVertexEdges = fold.vertices_edges[otherVertex];
            var otherVertexEdgeIndex = otherVertexEdges.indexOf(edgeIndex);
            otherVertexEdges.splice(otherVertexEdgeIndex, 0, newEdgeIndex);
          } else if (assignment === "B") {
            if (j === 0 && verticesEdges.length > 1) {
              var nextEdgeIndex = verticesEdges[1];

              if (fold.edges_assignment[nextEdgeIndex] === "B") {
                var _edge = fold.edges_vertices[edgeIndex];
                var _otherVertex = _edge[0];

                if (_otherVertex === i) {
                  _otherVertex = _edge[1];
                }

                var nextEdge = fold.edges_vertices[nextEdgeIndex];
                var nextVertex = nextEdge[0];

                if (nextVertex === i) {
                  nextVertex = nextEdge[1];
                }

                if (connectedByFace(fold, fold.vertices_faces[i], _otherVertex, nextVertex)) ; else {
                  groups.push([]);
                  groupIndex += 1;
                }
              }
            } else if (groups[groupIndex].length > 1) {
              groups.push([]);
              groupIndex += 1;
            }
          }
        }

        if (groups.length <= 1) continue;

        for (var k = groups[groupIndex].length - 1; k >= 0; k -= 1) {
          groups[0].unshift(groups[groupIndex][k]);
        }

        groups.pop();

        for (var _j2 = 1; _j2 < groups.length; _j2 += 1) {
          var currentVertex = fold.vertices_coords[i];
          var vertIndex = fold.vertices_coords.length;
          fold.vertices_coords.push(currentVertex.slice());
          var connectingIndices = [];

          for (var _k = 0; _k < groups[_j2].length; _k += 1) {
            var _edgeIndex = groups[_j2][_k];
            var _edge2 = fold.edges_vertices[_edgeIndex];
            var otherIndex = _edge2[0];

            if (_edge2[0] === i) {
              _edge2[0] = vertIndex;
              otherIndex = _edge2[1];
            } else _edge2[1] = vertIndex;

            connectingIndices.push(otherIndex);
          }

          if (connectingIndices.length < 2) {
            console.warn("problem here");
          } else {
            for (var _k2 = 1; _k2 < connectingIndices.length; _k2 += 1) {
              var thisConnectingVertIndex = connectingIndices[_k2];
              var previousConnectingVertIndex = connectingIndices[_k2 - 1];
              var found = false;

              for (var a = 0; a < verticesFaces.length; a += 1) {
                var face = fold.faces_vertices[verticesFaces[a]];
                var index1 = face.indexOf(thisConnectingVertIndex);
                var index2 = face.indexOf(previousConnectingVertIndex);
                var index3 = face.indexOf(i);

                if (index1 >= 0 && index2 >= 0 && index3 >= 0 && (Math.abs(index1 - index3) === 1 || Math.abs(index1 - index3) === face.length - 1) && (Math.abs(index2 - index3) === 1 || Math.abs(index2 - index3) === face.length - 1)) {
                  found = true;
                  face[index3] = vertIndex;
                  break;
                }
              }

              if (!found) console.warn("problem here");
            }
          }
        }
      }

      delete fold.vertices_faces;
      delete fold.vertices_edges;
      delete fold.vertices_vertices;
      return fold;
    }

    function connectedByFace(fold, verticesFaces, vert1, vert2) {
      if (vert1 === vert2) return false;

      for (var a = 0; a < verticesFaces.length; a += 1) {
        var face = fold.faces_vertices[verticesFaces[a]];

        if (face.indexOf(vert1) >= 0 && face.indexOf(vert2) >= 0) {
          return true;
        }
      }

      return false;
    }

    function removeBorderFaces(fold) {
      for (var i = fold.faces_vertices.length - 1; i >= 0; i -= 1) {
        var face = fold.faces_vertices[i];
        var allBorder = true;

        for (var j = 0; j < face.length; j += 1) {
          var vertexIndex = face[j];
          var nextIndex = j + 1;
          if (nextIndex >= face.length) nextIndex = 0;
          var nextVertexIndex = face[nextIndex];
          var connectingEdgeFound = false;

          for (var k = 0; k < fold.vertices_edges[vertexIndex].length; k += 1) {
            var edgeIndex = fold.vertices_edges[vertexIndex][k];
            var edge = fold.edges_vertices[edgeIndex];

            if (edge[0] === vertexIndex && edge[1] === nextVertexIndex || edge[1] === vertexIndex && edge[0] === nextVertexIndex) {
              connectingEdgeFound = true;
              var assignment = fold.edges_assignment[edgeIndex];

              if (assignment !== "B") {
                allBorder = false;
                break;
              }
            }
          }

          if (!connectingEdgeFound) console.warn("no connecting edge found on face");
          if (!allBorder) break;
        }

        if (allBorder) fold.faces_vertices.splice(i, 1);
      }

      return fold;
    }

    function getFacesAndVerticesForEdges(fold) {
      var allCreaseParams = [];
      var faces = fold.faces_vertices;

      for (var i = 0; i < fold.edges_vertices.length; i += 1) {
        var assignment = fold.edges_assignment[i];

        if (assignment !== "M" && assignment !== "V" && assignment !== "F") {
          continue;
        }

        var edge = fold.edges_vertices[i];
        var v1 = edge[0];
        var v2 = edge[1];
        var creaseParams = [];

        for (var j = 0; j < faces.length; j += 1) {
          var face = faces[j];
          var faceVerts = [face[0], face[1], face[2]];
          var v1Index = faceVerts.indexOf(v1);

          if (v1Index >= 0) {
            var v2Index = faceVerts.indexOf(v2);

            if (v2Index >= 0) {
              creaseParams.push(j);

              if (v2Index > v1Index) {
                faceVerts.splice(v2Index, 1);
                faceVerts.splice(v1Index, 1);
              } else {
                faceVerts.splice(v1Index, 1);
                faceVerts.splice(v2Index, 1);
              }

              creaseParams.push(faceVerts[0]);

              if (creaseParams.length === 4) {
                if (v2Index - v1Index === 1 || v2Index - v1Index === -2) {
                  creaseParams = [creaseParams[2], creaseParams[3], creaseParams[0], creaseParams[1]];
                }

                creaseParams.push(i);
                var angle = fold.edges_foldAngle[i];
                creaseParams.push(angle);
                allCreaseParams.push(creaseParams);
                break;
              }
            }
          }
        }
      }

      return allCreaseParams;
    }

    function removeRedundantVertices(fold, epsilon) {
      var old2new = [];
      var numRedundant = 0;
      var newIndex = 0;

      for (var i = 0; i < fold.vertices_vertices.length; i += 1) {
        var vertex_vertices = fold.vertices_vertices[i];

        if (vertex_vertices.length !== 2) {
          old2new.push(newIndex++);
          continue;
        }

        var vertex_coord = fold.vertices_coords[i];
        var neighbor0 = fold.vertices_coords[vertex_vertices[0]];
        var neighbor1 = fold.vertices_coords[vertex_vertices[1]];
        var threeD = vertex_coord.length === 3;
        var vec0 = [neighbor0[0] - vertex_coord[0], neighbor0[1] - vertex_coord[1]];
        var vec1 = [neighbor1[0] - vertex_coord[0], neighbor1[1] - vertex_coord[1]];
        var magSqVec0 = vec0[0] * vec0[0] + vec0[1] * vec0[1];
        var magSqVec1 = vec1[0] * vec1[0] + vec1[1] * vec1[1];
        var dot = vec0[0] * vec1[0] + vec0[1] * vec1[1];

        if (threeD) {
          vec0.push(neighbor0[2] - vertex_coord[2]);
          vec1.push(neighbor1[2] - vertex_coord[2]);
          magSqVec0 += vec0[2] * vec0[2];
          magSqVec1 += vec1[2] * vec1[2];
          dot += vec0[2] * vec1[2];
        }

        dot /= Math.sqrt(magSqVec0 * magSqVec1);

        if (Math.abs(dot + 1.0) < epsilon) {
          var merged = mergeEdge(fold, vertex_vertices[0], i, vertex_vertices[1]);

          if (merged) {
            numRedundant += 1;
            old2new.push(null);
          } else {
            old2new.push(newIndex++);
            continue;
          }
        } else old2new.push(newIndex++);
      }

      if (numRedundant === 0) {
        return fold;
      }

      console.warn("".concat(numRedundant, " redundant vertices found"));
      fold = FOLD.filter.remapField(fold, "vertices", old2new);

      if (fold.faces_vertices) {
        for (var _i5 = 0; _i5 < fold.faces_vertices.length; _i5 += 1) {
          var face = fold.faces_vertices[_i5];

          for (var j = face.length - 1; j >= 0; j -= 1) {
            if (face[j] === null) face.splice(j, 1);
          }
        }
      }

      return fold;
    }

    function mergeEdge(fold, v1, v2, v3) {
      var angleAvg = 0;
      var avgSum = 0;
      var angles = [];
      var edgeAssignment = null;
      var edgeIndices = [];

      for (var i = fold.edges_vertices.length - 1; i >= 0; i -= 1) {
        var edge = fold.edges_vertices[i];

        if (edge.indexOf(v2) >= 0 && (edge.indexOf(v1) >= 0 || edge.indexOf(v3) >= 0)) {
          if (edgeAssignment === null) edgeAssignment = fold.edges_assignment[i];else if (edgeAssignment !== fold.edges_assignment[i]) {
            console.log(edgeAssignment, fold.edges_assignment[i]);
            console.warn("different edge assignments");
            return false;
          }
          var angle = fold.edges_foldAngle[i];
          if (isNaN(angle)) console.log(i);
          angles.push(angle);

          if (angle) {
            angleAvg += angle;
            avgSum += 1;
          }

          edgeIndices.push(i);
        }
      }

      if (angles[0] !== angles[1]) {
        console.warn("incompatible angles: " + JSON.stringify(angles));
      }

      for (var _i6 = 0; _i6 < edgeIndices.length; _i6 += 1) {
        var _index = edgeIndices[_i6];
        fold.edges_vertices.splice(_index, 1);
        fold.edges_assignment.splice(_index, 1);
        fold.edges_foldAngle.splice(_index, 1);
      }

      fold.edges_vertices.push([v1, v3]);
      fold.edges_assignment.push(edgeAssignment);
      if (avgSum > 0) fold.edges_foldAngle.push(angleAvg / avgSum);else fold.edges_foldAngle.push(null);
      var index = fold.vertices_vertices[v1].indexOf(v2);
      fold.vertices_vertices[v1].splice(index, 1);
      fold.vertices_vertices[v1].push(v3);
      index = fold.vertices_vertices[v3].indexOf(v2);
      fold.vertices_vertices[v3].splice(index, 1);
      fold.vertices_vertices[v3].push(v1);
      return true;
    }

    function removeStrayVertices(fold) {
      if (!fold.vertices_vertices) {
        console.warn("compute vertices_vertices first");
        fold = FOLD.convert.edges_vertices_to_vertices_vertices_unsorted(fold);
      }

      var numStrays = 0;
      var old2new = [];
      var newIndex = 0;

      for (var i = 0; i < fold.vertices_vertices.length; i += 1) {
        if (fold.vertices_vertices[i] === undefined || fold.vertices_vertices[i].length === 0) {
          numStrays++;
          old2new.push(null);
        } else old2new.push(newIndex++);
      }

      if (numStrays === 0) return fold;
      console.warn("".concat(numStrays, " stray vertices found"));
      return FOLD.filter.remapField(fold, "vertices", old2new);
    }

    function triangulatePolys(fold, is2d) {
      var vertices = fold.vertices_coords;
      var faces = fold.faces_vertices;
      var edges = fold.edges_vertices;
      var foldAngles = fold.edges_foldAngle;
      var assignments = fold.edges_assignment;
      var triangulatedFaces = [];

      for (var i = 0; i < faces.length; i += 1) {
        var face = faces[i];

        if (face.length === 3) {
          triangulatedFaces.push(face);
          continue;
        }

        if (face.length === 4) {
          var faceV1 = makeVector(vertices[face[0]]);
          var faceV2 = makeVector(vertices[face[1]]);
          var faceV3 = makeVector(vertices[face[2]]);
          var faceV4 = makeVector(vertices[face[3]]);
          var dist1 = faceV1.clone().sub(faceV3).lengthSq();
          var dist2 = faceV2.clone().sub(faceV4).lengthSq();

          if (dist2 < dist1) {
            edges.push([face[1], face[3]]);
            foldAngles.push(0);
            assignments.push("F");
            triangulatedFaces.push([face[0], face[1], face[3]]);
            triangulatedFaces.push([face[1], face[2], face[3]]);
          } else {
            edges.push([face[0], face[2]]);
            foldAngles.push(0);
            assignments.push("F");
            triangulatedFaces.push([face[0], face[1], face[2]]);
            triangulatedFaces.push([face[0], face[2], face[3]]);
          }

          continue;
        }

        var faceEdges = [];

        for (var j = 0; j < edges.length; j += 1) {
          var edge = edges[j];

          if (face.indexOf(edge[0]) >= 0 && face.indexOf(edge[1]) >= 0) {
            faceEdges.push(j);
          }
        }

        var faceVert = [];

        for (var _j3 = 0; _j3 < face.length; _j3 += 1) {
          var vertex = vertices[face[_j3]];
          faceVert.push(vertex[0]);
          faceVert.push(vertex[1]);
          if (!is2d) faceVert.push(vertex[2]);
        }

        var triangles = earcut(faceVert, null, is2d ? 2 : 3);

        for (var _j4 = 0; _j4 < triangles.length; _j4 += 3) {
          var tri = [face[triangles[_j4 + 1]], face[triangles[_j4 + 2]], face[triangles[_j4]]];
          var foundEdges = [false, false, false];

          for (var k = 0; k < faceEdges.length; k += 1) {
            var _edge3 = edges[faceEdges[k]];

            var aIndex = _edge3.indexOf(tri[0]);

            var bIndex = _edge3.indexOf(tri[1]);

            var cIndex = _edge3.indexOf(tri[2]);

            if (aIndex >= 0) {
              if (bIndex >= 0) {
                foundEdges[0] = true;
                continue;
              }

              if (cIndex >= 0) {
                foundEdges[2] = true;
                continue;
              }
            }

            if (bIndex >= 0) {
              if (cIndex >= 0) {
                foundEdges[1] = true;
                continue;
              }
            }
          }

          for (var _k3 = 0; _k3 < 3; _k3 += 1) {
            if (foundEdges[_k3]) continue;

            if (_k3 === 0) {
              faceEdges.push(edges.length);
              edges.push([tri[0], tri[1]]);
              foldAngles.push(0);
              assignments.push("F");
            } else if (_k3 === 1) {
              faceEdges.push(edges.length);
              edges.push([tri[2], tri[1]]);
              foldAngles.push(0);
              assignments.push("F");
            } else if (_k3 === 2) {
              faceEdges.push(edges.length);
              edges.push([tri[2], tri[0]]);
              foldAngles.push(0);
              assignments.push("F");
            }
          }

          triangulatedFaces.push(tri);
        }
      }

      fold.faces_vertices = triangulatedFaces;
      return fold;
    }

    function saveSVG() {
      if (globals.extension === "fold") {
        globals.warn("No crease pattern available for files imported from FOLD format.");
        return;
      }

      var serializer = new win.XMLSerializer();
      console.log("pattern.js saveSVG needs testing, check out these 2 lines");
      var getSVG = win.document.querySelector("#svgViewer>svg");
      var source = serializer.serializeToString(getSVG);
      var svgBlob = new Blob([source], {
        type: "image/svg+xml;charset=utf-8"
      });
      var svgUrl = URL.createObjectURL(svgBlob);
      var downloadLink = win.document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = "".concat(globals.filename, ".svg");
      win.document.body.appendChild(downloadLink);
      downloadLink.click();
      win.document.body.removeChild(downloadLink);
    }

    function findIntersections(fold, tol) {
      var vertices = fold.vertices_coords;
      var edges = fold.edges_vertices;
      var foldAngles = fold.edges_foldAngle;
      var assignments = fold.edges_assignment;

      for (var i = edges.length - 1; i >= 0; i -= 1) {
        for (var j = i - 1; j >= 0; j -= 1) {
          var v1 = makeVector2(vertices[edges[i][0]]);
          var v2 = makeVector2(vertices[edges[i][1]]);
          var v3 = makeVector2(vertices[edges[j][0]]);
          var v4 = makeVector2(vertices[edges[j][1]]);
          var data = line_intersect(v1, v2, v3, v4);

          if (data) {
            var length1 = v2.clone().sub(v1).length();
            var length2 = v4.clone().sub(v3).length();
            var d1 = getDistFromEnd(data.t1, length1, tol);
            var d2 = getDistFromEnd(data.t2, length2, tol);
            if (d1 === null || d2 === null) continue;
            var seg1Int = d1 > tol && d1 < length1 - tol;
            var seg2Int = d2 > tol && d2 < length2 - tol;
            if (!seg1Int && !seg2Int) continue;
            var vertIndex = void 0;

            if (seg1Int && seg2Int) {
              vertIndex = vertices.length;
              vertices.push([data.intersection.x, data.intersection.y]);
            } else if (seg1Int) {
              if (d2 <= tol) vertIndex = edges[j][0];else vertIndex = edges[j][1];
            } else {
              if (d1 <= tol) vertIndex = edges[i][0];else vertIndex = edges[i][1];
            }

            if (seg1Int) {
              var foldAngle = foldAngles[i];
              var assignment = assignments[i];
              edges.splice(i, 1, [vertIndex, edges[i][0]], [vertIndex, edges[i][1]]);
              foldAngles.splice(i, 1, foldAngle, foldAngle);
              assignments.splice(i, 1, assignment, assignment);
              i += 1;
            }

            if (seg2Int) {
              var _foldAngle = foldAngles[j];
              var _assignment = assignments[j];
              edges.splice(j, 1, [vertIndex, edges[j][0]], [vertIndex, edges[j][1]]);
              foldAngles.splice(j, 1, _foldAngle, _foldAngle);
              assignments.splice(j, 1, _assignment, _assignment);
              j += 1;
              i += 1;
            }
          }
        }
      }

      return fold;
    }

    return {
      loadSVG: loadSVG,
      saveSVG: saveSVG,
      getFoldData: getFoldData,
      getTriangulatedFaces: getTriangulatedFaces,
      setFoldData: setFoldData
    };
  }

  var validateUserOptions = function validateUserOptions(options) {
    if (options == null) {
      return {};
    }

    var validKeys = Object.keys(globalDefaults);
    var validatedOptions = {};
    Object.keys(options).filter(function (key) {
      return validKeys.includes(key);
    }).forEach(function (key) {
      validatedOptions[key] = options[key];
    });
    return validatedOptions;
  };

  var OrigamiSimulator = function OrigamiSimulator(options) {
    var app = Object.assign(JSON.parse(JSON.stringify(globalDefaults)), validateUserOptions(options));

    if (app.append == null) {
      app.append = win.document.body;
    }

    app.threeView = initThreeView(app);
    app.UI3D = init3DUI(app);
    app.model = initModel(app);
    app.gpuMath = initGPUMath();
    app.dynamicSolver = initDynamicSolver(app);
    app.pattern = initPattern(app);

    var loadFOLD = function loadFOLD(foldObject) {
      app.threeView.resetModel();
      return app.pattern.setFoldData(foldObject);
    };

    var loadSVG = function loadSVG(svgAsDomNode) {
      app.threeView.resetModel();
      return app.pattern.loadSVG(svgAsDomNode);
    };

    var loadSVGString = function loadSVGString(svgAsString) {
      app.threeView.resetModel();
      var svg = new DOMParser().parseFromString(svgAsString, "text/xml").childNodes[0];
      return app.pattern.loadSVG(svg);
    };

    var warn = function warn(msg) {
      return console.warn(msg);
    };

    var noCreasePatternAvailable = function noCreasePatternAvailable() {
      return app.extension === "fold";
    };

    var setTouchModeRotate = function setTouchModeRotate() {
      app.touchMode = "rotate";
      app.threeView.enableCameraRotate(true);
      app.UI3D.hideHighlighters();
    };

    var setTouchModeGrab = function setTouchModeGrab() {
      app.touchMode = "grab";
      app.threeView.enableCameraRotate(false);
      app.threeView.resetModel();
    };

    Object.defineProperty(app, "loadFOLD", {
      value: loadFOLD
    });
    Object.defineProperty(app, "loadSVG", {
      value: loadSVG
    });
    Object.defineProperty(app, "loadSVGString", {
      value: loadSVGString
    });
    Object.defineProperty(app, "warn", {
      value: warn
    });
    Object.defineProperty(app, "noCreasePatternAvailable", {
      value: noCreasePatternAvailable
    });
    Object.defineProperty(app, "grab", {
      set: function set(value) {
        return value ? setTouchModeGrab() : setTouchModeRotate();
      },
      get: function get() {
        return app.touchMode === "grab";
      }
    });
    Object.defineProperty(app, "foldPercent", {
      set: function set(value) {
        app.creasePercent = value;
        app.shouldChangeCreasePercent = true;
      },
      get: function get() {
        return app.creasePercent;
      }
    });
    Object.defineProperty(app, "strain", {
      set: function set(value) {
        app.colorMode = value ? "axialStrain" : "color";
        app.model.setMeshMaterial();
      },
      get: function get() {
        return app.colorMode === "axialStrain";
      }
    });
    return app;
  };

  return OrigamiSimulator;

})));
