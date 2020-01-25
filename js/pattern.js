/**
 * Created by amandaghassaei on 2/25/17.
 */

// import * as THREE from "../import/three.module";
// import earcut from "../import/earcut";
// import FOLD from "../import/fold";
import window from "./environment/window";

const THREE = window.THREE || require("three");
const earcut = window.earcut || require("earcut");
const FOLD = window.FOLD || require("fold");
const SVGLoader = THREE.SVGLoader || require("three-svg-loader");

function initPattern(globals) {
  let foldData = {};
  let rawFold = {};

  function clearFold() {
    foldData.vertices_coords = [];
    foldData.edges_vertices = [];
    // B = boundary, M = mountain, V = valley, C = cut, F = facet, U = hinge
    foldData.edges_assignment = [];
    foldData.edges_foldAngle = []; // target angles
    delete foldData.vertices_vertices;
    delete foldData.faces_vertices;
    delete foldData.vertices_edges;
    rawFold = {};
  }

  let verticesRaw = [];
  // refs to vertex indices
  let mountainsRaw = [];
  let valleysRaw = [];
  let bordersRaw = [];
  let cutsRaw = [];
  let triangulationsRaw = [];
  let hingesRaw = [];

  let badColors = [];// store any bad colors in svg file to show user

  let mountains = [];
  let valleys = [];
  let borders = [];
  let hinges = [];
  let triangulations = [];

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

  const SVGloader = new SVGLoader();

  function getOpacity(obj) {
    let opacity = obj.getAttribute("opacity");
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
    if (isNaN(opacity)) { return 1; }
    return opacity;
  }

  function getStroke(obj) {
    let stroke = obj.getAttribute("stroke");
    // let stroke = obj.attr("stroke");
    if (stroke === undefined) {
      if (obj.style && obj.style.stroke) {
        stroke = obj.style.stroke.toLowerCase();
        stroke = stroke.replace(/\s/g, ""); // remove all whitespace
        return stroke;
      }
      return null;
    }
    stroke = stroke.replace(/\s/g, ""); // remove all whitespace
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
    if (assignment === "B") return "#000"; // border
    if (assignment === "M") return "#f00"; // mountain
    if (assignment === "V") return "#00f"; // valley
    if (assignment === "C") return "#0f0"; // cut
    if (assignment === "F") return "#ff0"; // facet
    if (assignment === "U") return "#f0f"; // hinge
    return "#0ff";
  }
  function opacityForAngle(angle, assignment) {
    if (angle === null || assignment === "F") return 1;
    return Math.abs(angle) / 180;
  }

  const multiply_vector2_matrix2 = function (vector, matrix) {
    return [
      vector[0] * matrix[0] + vector[1] * matrix[2] + matrix[4],
      vector[0] * matrix[1] + vector[1] * matrix[3] + matrix[5],
    ];
  };

  function applyTransformation(vertex, transformations) {
    if (transformations === undefined) { return; }
    transformations = transformations.baseVal;
    for (let i = 0; i < transformations.length; i += 1) {
      const t = transformations[i];
      // const M = [[t.matrix.a, t.matrix.c, t.matrix.e],
      //   [t.matrix.b, t.matrix.d, t.matrix.f], [0, 0, 1]];
      // const out = numeric.dot(M, [vertex.x, vertex.z, 1]);
      // vertex.x = out[0];
      // vertex.z = out[1];
      const m = t.matrix;
      const out = multiply_vector2_matrix2(
        [vertex.x, vertex.z],
        [m.a, m.b, m.c, m.d, m.e, m.f]
      );
      [vertex.x, vertex.z] = out;
    }
  }

  // filter for svg parsing
  function borderFilter(el) {
    const stroke = getStroke(el);
    return typeForStroke(stroke) === "border";
  }
  function mountainFilter(el) {
    const stroke = getStroke(el);
    if (typeForStroke(stroke) === "mountain") {
      const opacity = getOpacity(el);
      el.targetAngle = -opacity * 180;
      return true;
    }
    return false;
  }
  function valleyFilter(el) {
    const stroke = getStroke(el);
    if (typeForStroke(stroke) === "valley") {
      const opacity = getOpacity(el);
      el.targetAngle = opacity * 180;
      return true;
    }
    return false;
  }
  function cutFilter(el) {
    const stroke = getStroke(el);
    return typeForStroke(stroke) === "cut";
  }
  function triangulationFilter(el) {
    const stroke = getStroke(el);
    return typeForStroke(stroke) === "triangulation";
  }
  function hingeFilter(el) {
    const stroke = getStroke(el);
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
    for (let i = 0; i < transformations.length; i += 1) {
      const t = transformations[i];
      const M = [[t.matrix.a, t.matrix.c, t.matrix.e], [t.matrix.b, t.matrix.d, t.matrix.f], [0,0,1]];
      const out = numeric.dot(M, [vertex.x, vertex.z, 1]);
      vertex.x = out[0];
      vertex.z = out[1];
    }
  }

  function parsePath(_verticesRaw, _segmentsRaw, $elements) {
    for (let i = 0; i < $elements.length; i += 1) {
      let path = $elements[i];
      let pathVertices = [];
      if (path === undefined || path.getPathData === undefined) {//mobile problem
        let elm = '<div id="coverImg" ' +
          'style="background: url(assets/doc/crane.gif) no-repeat center center fixed;' +
          '-webkit-background-size: cover;' +
          '-moz-background-size: cover;' +
          '-o-background-size: cover;' +
          'background-size: cover;">'+
          '</div>';
        $(elm).appendTo($("body"));
        $("#noSupportModal").modal("show");
        console.warn("path parser not supported");
        return;
      }
      const segments = path.getPathData();
      for (let j = 0; j < segments.length; j += 1) {
        const segment = segments[j];
        const { type } = segment;
        let vertex;
        switch (type) {
          case "m": // dx, dy
            if (j === 0) { //problem with inkscape files
              vertex = new THREE.Vector3(segment.values[0], 0, segment.values[1]);
            } else {
              vertex = _verticesRaw[_verticesRaw.length-1].clone();
              vertex.x += segment.values[0];
              vertex.z += segment.values[1];
            }
            _verticesRaw.push(vertex);
            pathVertices.push(vertex);
            break;

          case "l": // dx, dy
            _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length]);
            if (path.targetAngle && _segmentsRaw.length>0) _segmentsRaw[_segmentsRaw.length-1].push(path.targetAngle);
            vertex = _verticesRaw[_verticesRaw.length-1].clone();
            vertex.x += segment.values[0];
            vertex.z += segment.values[1];
            _verticesRaw.push(vertex);
            pathVertices.push(vertex);
            break;

          case "v": // dy
            _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length]);
            if (path.targetAngle && _segmentsRaw.length>0) _segmentsRaw[_segmentsRaw.length-1].push(path.targetAngle);
            vertex = _verticesRaw[_verticesRaw.length-1].clone();
            vertex.z += segment.values[0];
            _verticesRaw.push(vertex);
            pathVertices.push(vertex);
            break;

          case "h": // dx
            _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length]);
            if (path.targetAngle && _segmentsRaw.length>0) _segmentsRaw[_segmentsRaw.length-1].push(path.targetAngle);
            vertex = _verticesRaw[_verticesRaw.length-1].clone();
            vertex.x += segment.values[0];
            _verticesRaw.push(vertex);
            pathVertices.push(vertex);
            break;

          case "M": // x, y
            vertex = new THREE.Vector3(segment.values[0], 0, segment.values[1]);
            _verticesRaw.push(vertex);
            pathVertices.push(vertex);
            break;

          case "L": // x, y
            _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length]);
            if (path.targetAngle && _segmentsRaw.length>0) _segmentsRaw[_segmentsRaw.length-1].push(path.targetAngle);
            _verticesRaw.push(new THREE.Vector3(segment.values[0], 0, segment.values[1]));
            pathVertices.push(vertex);
            break;

          case "V": // y
            _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length]);
            if (path.targetAngle && _segmentsRaw.length>0) _segmentsRaw[_segmentsRaw.length-1].push(path.targetAngle);
            vertex = _verticesRaw[_verticesRaw.length-1].clone();
            vertex.z = segment.values[0];
            _verticesRaw.push(vertex);
            pathVertices.push(vertex);
            break;

          case "H": // x
            _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length]);
            if (path.targetAngle && _segmentsRaw.length>0) _segmentsRaw[_segmentsRaw.length-1].push(path.targetAngle);
            vertex = _verticesRaw[_verticesRaw.length-1].clone();
            vertex.x = segment.values[0];
            _verticesRaw.push(vertex);
            pathVertices.push(vertex);
            break;
        }
      }
      for (var j=0;j<pathVertices.length;j++) {
        applyTransformation(pathVertices[j], path.transform);
      }
    }
  }

  function parseLine(_verticesRaw, _segmentsRaw, $elements) {
    for (var i=0;i<$elements.length;i++) {
      var element = $elements[i];
      _verticesRaw.push(new THREE.Vector3(element.x1.baseVal.value, 0, element.y1.baseVal.value));
      _verticesRaw.push(new THREE.Vector3(element.x2.baseVal.value, 0, element.y2.baseVal.value));
      _segmentsRaw.push([_verticesRaw.length-2, _verticesRaw.length-1]);
      if (element.targetAngle) _segmentsRaw[_segmentsRaw.length-1].push(element.targetAngle);
      applyTransformation(_verticesRaw[_verticesRaw.length-2], element.transform);
      applyTransformation(_verticesRaw[_verticesRaw.length-1], element.transform);
    }
  }

  function parseRect(_verticesRaw, _segmentsRaw, $elements) {
    for (var i=0;i<$elements.length;i++) {
      var element = $elements[i];
      var x = element.x.baseVal.value;
      var y = element.y.baseVal.value;
      var width = element.width.baseVal.value;
      var height = element.height.baseVal.value;
      _verticesRaw.push(new THREE.Vector3(x, 0, y));
      _verticesRaw.push(new THREE.Vector3(x+width, 0, y));
      _verticesRaw.push(new THREE.Vector3(x+width, 0, y+height));
      _verticesRaw.push(new THREE.Vector3(x, 0, y+height));
      _segmentsRaw.push([_verticesRaw.length-4, _verticesRaw.length-3]);
      _segmentsRaw.push([_verticesRaw.length-3, _verticesRaw.length-2]);
      _segmentsRaw.push([_verticesRaw.length-2, _verticesRaw.length-1]);
      _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length-4]);
      for (var j=1;j<=4;j++) {
        if (element.targetAngle) _segmentsRaw[_segmentsRaw.length-j].push(element.targetAngle);
        applyTransformation(_verticesRaw[_verticesRaw.length-j], element.transform);
      }
    }
  }

  function parsePolygon(_verticesRaw, _segmentsRaw, $elements) {
    for (var i=0;i<$elements.length;i++) {
      var element = $elements[i];
      for (var j=0;j<element.points.length;j++) {
        _verticesRaw.push(new THREE.Vector3(element.points[j].x, 0, element.points[j].y));
        applyTransformation(_verticesRaw[_verticesRaw.length-1], element.transform);

        if (j<element.points.length-1) _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length]);
        else _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length-element.points.length]);

        if (element.targetAngle) _segmentsRaw[_segmentsRaw.length-1].push(element.targetAngle);
      }
    }
  }

  function parsePolyline(_verticesRaw, _segmentsRaw, $elements) {
    for (var i=0;i<$elements.length;i++) {
      var element = $elements[i];
      for (var j=0;j<element.points.length;j++) {
        _verticesRaw.push(new THREE.Vector3(element.points[j].x, 0, element.points[j].y));
        applyTransformation(_verticesRaw[_verticesRaw.length-1], element.transform);
        if (j>0) _segmentsRaw.push([_verticesRaw.length-1, _verticesRaw.length-2]);
        if (element.targetAngle) _segmentsRaw[_segmentsRaw.length-1].push(element.targetAngle);
      }
    }
  }

  function loadSVG(url) {
    SVGloader.load(url, (svg) => {
      // var _$svg = $(svg);
      const _$svg = svg.xml;

      clearAll();

      // warn of global styling
      const $style = Array.from(_$svg.childNodes).filter(n => n.tagName === "style");
      if ($style.length > 0) {
        globals.warn(`Global styling found on SVG, this is currently ignored by the app.  This may cause some lines to be styled incorrectly and missed during import.  Please find a way to save this file without using global style tags.<br/><br/>Global styling:<br/><br/><b>${$style.html()}</b>`);
      }

      // warn of groups
      // var $groups = _$svg.children("g");
      // if ($groups.length>0) {
      //     globals.warn("Grouped elements found in SVG, these are currently ignored by the app.  " +
      //         "Please ungroup all elements before importing.");
      // }

      // format all appropriate svg elements
      const $paths = Array.from(_$svg.getElementsByTagName("path"));
      const $lines = Array.from(_$svg.getElementsByTagName("line"));
      const $rects = Array.from(_$svg.getElementsByTagName("rect"));
      const $polygons = Array.from(_$svg.getElementsByTagName("polygon"));
      const $polylines = Array.from(_$svg.getElementsByTagName("polyline"));

      // var $paths = _$svg.find("path");
      // var $lines = _$svg.find("line");
      // var $rects = _$svg.find("rect");
      // var $polygons = _$svg.find("polygon");
      // var $polylines = _$svg.find("polyline");
      const wipe = a => a.setAttribute("style", "fill: none; stroke-dasharray: none;");
      $paths.forEach(a => wipe(a));
      $lines.forEach(a => wipe(a));
      $rects.forEach(a => wipe(a));
      $polygons.forEach(a => wipe(a));
      $polylines.forEach(a => wipe(a));
      // $paths.css({fill:"none", 'stroke-dasharray':"none"});
      // $lines.css({fill:"none", 'stroke-dasharray':"none"});
      // $rects.css({fill:"none", 'stroke-dasharray':"none"});
      // $polygons.css({fill:"none", 'stroke-dasharray':"none"});
      // $polylines.css({fill:"none", 'stroke-dasharray':"none"});

      findType(verticesRaw, bordersRaw, borderFilter, $paths, $lines, $rects, $polygons, $polylines);
      findType(verticesRaw, mountainsRaw, mountainFilter, $paths, $lines, $rects, $polygons, $polylines);
      findType(verticesRaw, valleysRaw, valleyFilter, $paths, $lines, $rects, $polygons, $polylines);
      findType(verticesRaw, cutsRaw, cutFilter, $paths, $lines, $rects, $polygons, $polylines);
      findType(verticesRaw, triangulationsRaw, triangulationFilter, $paths, $lines, $rects, $polygons, $polylines);
      findType(verticesRaw, hingesRaw, hingeFilter, $paths, $lines, $rects, $polygons, $polylines);

      if (badColors.length > 0) {
        // badColors = _.uniq(badColors);
        const badColorHash = {};
        badColors.forEach((c) => { badColorHash[c] = true; });
        badColors = Object.keys(badColorHash);
        let string = "Some objects found with the following stroke colors:<br/><br/>";
        badColors.forEach(function (color) {
          string += "<span style='background:" + color + "' class='colorSwatch'></span>" + color + "<br/>";
        });
        string +=  "<br/>These objects were ignored.<br/>  Please check that your file is set up correctly, <br/>" +
          "see <b>File > File Import Tips</b> for more information.";
        globals.warn(string);
      }

      // todo revert back to old pattern if bad import
      const success = parseSVG(verticesRaw, bordersRaw, mountainsRaw, valleysRaw, cutsRaw, triangulationsRaw, hingesRaw);
      if (!success) return;

      // find max and min vertices
      const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
      const min = new THREE.Vector3(Infinity, Infinity, Infinity);
      for (let i = 0; i < rawFold.vertices_coords.length; i += 1) {
        const vertex = new THREE.Vector3(
          rawFold.vertices_coords[i][0],
          rawFold.vertices_coords[i][1],
          rawFold.vertices_coords[i][2]
        );
        max.max(vertex);
        min.min(vertex);
      }
      if (min.x === Infinity) {
        if (badColors.length === 0) globals.warn("no geometry found in file");
        return;
      }
      max.sub(min);
      const border = new THREE.Vector3(0.1, 0, 0.1);
      let scale = max.x;
      if (max.z < scale) scale = max.z;
      if (scale === 0) return;

      const strokeWidth = scale / 300;
      border.multiplyScalar(scale);
      min.sub(border);
      max.add(border.multiplyScalar(2));
      const viewBoxTxt = [min.x, min.z, max.x, max.z].join(" ");

      const ns = "http://www.w3.org/2000/svg";
      const newSVG = window.document.createElementNS(ns, "svg");
      newSVG.setAttribute("viewBox", viewBoxTxt);
      for (let i = 0; i < rawFold.edges_vertices.length; i += 1) {
        const line = window.document.createElementNS(ns, "line");
        const edge = rawFold.edges_vertices[i];
        let vertex = rawFold.vertices_coords[edge[0]];
        line.setAttribute("stroke", colorForAssignment(rawFold.edges_assignment[i]));
        line.setAttribute("opacity", opacityForAngle(rawFold.edges_foldAngle[i], rawFold.edges_assignment[i]));
        line.setAttribute("x1", vertex[0]);
        line.setAttribute("y1", vertex[2]);
        vertex = rawFold.vertices_coords[edge[1]];
        line.setAttribute("x2", vertex[0]);
        line.setAttribute("y2", vertex[2]);
        line.setAttribute("stroke-width", strokeWidth);
        newSVG.appendChild(line);
      }
      // $("#svgViewer").html(svg);

      },
      function() {},
      function(error) {
        globals.warn("Error loading SVG " + url + " : " + error);
        console.warn(error);
    });
  }

  // function loadSVG(svg) {
  //   const segmentized = Segmentize(svg, { svg: true, string: false });
  //   // const segmentized = new DOMParser().parseFromString(segmentizedString, "text/xml").childNodes[0];
  //   loadSegmentedSVG(segmentized);
  // }

  function processFold(fold, returnCreaseParams) {

    rawFold = JSON.parse(JSON.stringify(fold)); // save pre-triangulated for for save later
    // make 3d
    for (let i = 0; i < rawFold.vertices_coords.length; i += 1) {
      const vertex = rawFold.vertices_coords[i];
      if (vertex.length === 2) { // make vertices_coords 3d
        rawFold.vertices_coords[i] = [vertex[0], 0, vertex[1]];
      }
    }
    // const cuts = FOLD.filter.cutEdges(fold);
    const cuts = [];
    if (cuts.length > 0) {
      fold = splitCuts(fold);
      fold = FOLD.convert.edges_vertices_to_vertices_vertices_unsorted(fold);
      fold = removeRedundantVertices(fold, 0.01); // remove vertices that split edge
    }
    delete fold.vertices_vertices;
    delete fold.vertices_edges;

    foldData = triangulatePolys(fold, true);

    for (let i = 0; i < foldData.vertices_coords.length; i += 1) {
      const vertex = foldData.vertices_coords[i];
      if (vertex.length === 2) { // make vertices_coords 3d
        foldData.vertices_coords[i] = [vertex[0], 0, vertex[1]];
      }
    }

    mountains = FOLD.filter.mountainEdges(foldData);
    valleys = FOLD.filter.valleyEdges(foldData);
    borders = FOLD.filter.boundaryEdges(foldData);
    hinges = FOLD.filter.unassignedEdges(foldData);
    triangulations = FOLD.filter.flatEdges(foldData);

    // $("#numMtns").html("(" + mountains.length + ")");
    // $("#numValleys").html("(" + valleys.length + ")");
    // $("#numFacets").html("(" + triangulations.length + ")");
    // $("#numBoundary").html("(" + borders.length + ")");
    // $("#numPassive").html("(" + hinges.length + ")");

    const allCreaseParams = getFacesAndVerticesForEdges(foldData); // todo precompute vertices_faces
    if (returnCreaseParams) return allCreaseParams;

    globals.model.buildModel(foldData, allCreaseParams);
    return foldData;
  }


  function parseSVG(_verticesRaw, _bordersRaw, _mountainsRaw, _valleysRaw, _cutsRaw, _triangulationsRaw, _hingesRaw) {

    _verticesRaw.forEach((vertex) => {
      foldData.vertices_coords.push([vertex.x, vertex.z]);
    });
    _bordersRaw.forEach((edge) => {
      foldData.edges_vertices.push([edge[0], edge[1]]);
      foldData.edges_assignment.push("B");
      foldData.edges_foldAngle.push(null);
    });
    _mountainsRaw.forEach((edge) => {
      foldData.edges_vertices.push([edge[0], edge[1]]);
      foldData.edges_assignment.push("M");
      foldData.edges_foldAngle.push(edge[2]);
    });
    _valleysRaw.forEach((edge) => {
      foldData.edges_vertices.push([edge[0], edge[1]]);
      foldData.edges_assignment.push("V");
      foldData.edges_foldAngle.push(edge[2]);
    });
    _triangulationsRaw.forEach((edge) => {
      foldData.edges_vertices.push([edge[0], edge[1]]);
      foldData.edges_assignment.push("F");
      foldData.edges_foldAngle.push(0);
    });
    _hingesRaw.forEach((edge) => {
      foldData.edges_vertices.push([edge[0], edge[1]]);
      foldData.edges_assignment.push("U");
      foldData.edges_foldAngle.push(null);
    });
    _cutsRaw.forEach((edge) => {
      foldData.edges_vertices.push([edge[0], edge[1]]);
      foldData.edges_assignment.push("C");
      foldData.edges_foldAngle.push(null);
    });

    if (foldData.vertices_coords.length === 0 || foldData.edges_vertices.length === 0) {
      globals.warn("No valid geometry found in SVG, be sure to ungroup all and remove all clipping masks.");
      return false;
    }

    foldData = FOLD.filter.collapseNearbyVertices(foldData, globals.vertTol);
    // foldData = FOLD.filter.removeLoopEdges(foldData); // remove edges that points to same vertex
    FOLD.filter.removeLoopEdges(foldData); // remove edges that points to same vertex
    // foldData = FOLD.filter.removeDuplicateEdges_vertices(foldData); // remove duplicate edges
    // foldData = FOLD.filter.subdivideCrossingEdges_vertices(foldData, globals.vertTol);
    // find intersections and add vertices/edges
    FOLD.filter.subdivideCrossingEdges_vertices(foldData, globals.vertTol);
    foldData = findIntersections(foldData, globals.vertTol);
     // cleanup after intersection operation
    foldData = FOLD.filter.collapseNearbyVertices(foldData, globals.vertTol);
    // foldData = FOLD.filter.removeLoopEdges(foldData); // remove edges that points to same vertex
    FOLD.filter.removeLoopEdges(foldData); // remove edges that points to same vertex
    // foldData = FOLD.filter.removeDuplicateEdges_vertices(foldData); // remove duplicate edges
    FOLD.filter.removeDuplicateEdges_vertices(foldData); // remove duplicate edges
    foldData = FOLD.convert.edges_vertices_to_vertices_vertices_unsorted(foldData);
    foldData = removeStrayVertices(foldData); // delete stray anchors
    foldData = removeRedundantVertices(foldData, 0.01); // remove vertices that split edge
    FOLD.convert.sort_vertices_vertices(foldData);
    foldData = FOLD.convert.vertices_vertices_to_faces_vertices(foldData);
    foldData = edgesVerticesToVerticesEdges(foldData);
    foldData = removeBorderFaces(foldData); // expose holes surrounded by all border edges
    foldData = reverseFaceOrder(foldData); // set faces to counter clockwise
    return processFold(foldData);
  }

  function makeVector(v) {
    if (v.length === 2) return makeVector2(v);
    return makeVector3(v);
  }
  function makeVector2(v) {
    return new THREE.Vector2(v[0], v[1]);
  }
  function makeVector3(v) {
    return new THREE.Vector3(v[0], v[1], v[2]);
  }

  function getDistFromEnd(t, length, tol) {
    const dist = t * length;
    if (dist < -tol) return null;
    if (dist > length + tol) return null;
    return dist;
  }

  // http://paulbourke.net/geometry/pointlineplane/
  function line_intersect(v1, v2, v3, v4) {
    const x1 = v1.x;
    const y1 = v1.y;
    const x2 = v2.x;
    const y2 = v2.y;
    const x3 = v3.x;
    const y3 = v3.y;
    const x4 = v4.x;
    const y4 = v4.y;
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom === 0) {
      return null;
    }
    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
    return {
      intersection: new THREE.Vector2(x1 + ua * (x2 - x1), y1 + ua * (y2 - y1)),
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
    for (let i = 0; i < fold.faces_vertices.length; i += 1) {
      fold.faces_vertices[i].reverse();
    }
    return fold;
  }

  function edgesVerticesToVerticesEdges(fold) {
    const verticesEdges = [];
    for (let i = 0; i < fold.vertices_coords.length; i += 1) {
      verticesEdges.push([]);
    }
    for (let i = 0; i < fold.edges_vertices.length; i += 1) {
      const edge = fold.edges_vertices[i];
      verticesEdges[edge[0]].push(i);
      verticesEdges[edge[1]].push(i);
    }
    fold.vertices_edges = verticesEdges;
    return fold;
  }

  function facesVerticesToVerticesFaces(fold) {
    const verticesFaces = [];
    for (let i = 0; i < fold.vertices_coords.length; i += 1) {
      verticesFaces.push([]);
    }
    for (let i = 0; i < fold.faces_vertices.length; i += 1) {
      const face = fold.faces_vertices[i];
      for (let j = 0; j < face.length; j += 1) {
        verticesFaces[face[j]].push(i);
      }
    }
    fold.vertices_faces = verticesFaces;
    return fold;
  }

  function sortVerticesEdges(fold) {
    for (let i = 0; i < fold.vertices_vertices.length; i += 1) {
      const verticesVertices = fold.vertices_vertices[i];
      const verticesEdges = fold.vertices_edges[i];
      const sortedVerticesEdges = [];
      for (let j = 0; j < verticesVertices.length; j += 1) {
        let index = -1;
        for (let k = 0; k < verticesEdges.length; k += 1) {
          const edgeIndex = verticesEdges[k];
          const edge = fold.edges_vertices[edgeIndex];
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
    // go around each vertex and split cut in clockwise order
    for (let i = 0; i < fold.vertices_edges.length; i += 1) {
      const groups = [[]];
      let groupIndex = 0;
      const verticesEdges = fold.vertices_edges[i];
      const verticesFaces = fold.vertices_faces[i];
      for (let j = 0; j < verticesEdges.length; j += 1) {
        const edgeIndex = verticesEdges[j];
        const assignment = fold.edges_assignment[edgeIndex];
        groups[groupIndex].push(edgeIndex);
        if (assignment === "C") {
          // split cut edge into two boundary edges
          groups.push([fold.edges_vertices.length]);
          groupIndex += 1;
          const newEdgeIndex = fold.edges_vertices.length;
          const edge = fold.edges_vertices[edgeIndex];
          fold.edges_vertices.push([edge[0], edge[1]]);
          fold.edges_assignment[edgeIndex] = "B";
          fold.edges_foldAngle.push(null);
          fold.edges_assignment.push("B");
          // add new boundary edge to other vertex
          let otherVertex = edge[0];
          if (otherVertex === i) otherVertex = edge[1];
          const otherVertexEdges = fold.vertices_edges[otherVertex];
          const otherVertexEdgeIndex = otherVertexEdges.indexOf(edgeIndex);
          otherVertexEdges.splice(otherVertexEdgeIndex, 0, newEdgeIndex);
        } else if (assignment === "B") {
          if (j === 0 && verticesEdges.length > 1) {
            // check if next edge is also boundary
            const nextEdgeIndex = verticesEdges[1];
            if (fold.edges_assignment[nextEdgeIndex] === "B") {
              // check if this edge shares a face with the next
              const edge = fold.edges_vertices[edgeIndex];
              let otherVertex = edge[0];
              if (otherVertex === i) { otherVertex = edge[1]; }
              const nextEdge = fold.edges_vertices[nextEdgeIndex];
              let nextVertex = nextEdge[0];
              if (nextVertex === i) { nextVertex = nextEdge[1]; }
              if (connectedByFace(fold, fold.vertices_faces[i], otherVertex, nextVertex)) {
              } else {
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
      for (let k = groups[groupIndex].length - 1; k >= 0; k -= 1) {
        // put remainder of last group in first group
        groups[0].unshift(groups[groupIndex][k]);
      }
      groups.pop();
      for (let j = 1; j < groups.length; j += 1) { // for each extra group, assign new vertex
        const currentVertex = fold.vertices_coords[i];
        const vertIndex = fold.vertices_coords.length;
        fold.vertices_coords.push(currentVertex.slice()); // make a copy
        const connectingIndices = [];
        for (let k = 0; k < groups[j].length; k += 1) { // update edges_vertices
          const edgeIndex = groups[j][k];
          const edge = fold.edges_vertices[edgeIndex];
          let otherIndex = edge[0];
          if (edge[0] === i) {
            edge[0] = vertIndex;
            otherIndex = edge[1];
          } else edge[1] = vertIndex;
          connectingIndices.push(otherIndex);
        }
        if (connectingIndices.length < 2) {
          console.warn("problem here");
        } else {
          for (let k = 1; k < connectingIndices.length; k += 1) { // update faces_vertices
            // i, k-1, k
            const thisConnectingVertIndex = connectingIndices[k];
            const previousConnectingVertIndex = connectingIndices[k - 1];
            let found = false;
            for (let a = 0; a < verticesFaces.length; a += 1) {
              const face = fold.faces_vertices[verticesFaces[a]];
              const index1 = face.indexOf(thisConnectingVertIndex);
              const index2 = face.indexOf(previousConnectingVertIndex);
              const index3 = face.indexOf(i);
              if (index1 >= 0 && index2 >= 0 && index3 >= 0
                && (Math.abs(index1 - index3) === 1
                  || Math.abs(index1 - index3) === face.length - 1)
                && (Math.abs(index2 - index3) === 1
                  || Math.abs(index2 - index3) === face.length - 1)) {
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
    // these are all incorrect now
    delete fold.vertices_faces;
    delete fold.vertices_edges;
    delete fold.vertices_vertices;
    return fold;
  }

  function connectedByFace(fold, verticesFaces, vert1, vert2) {
    if (vert1 === vert2) return false;
    for (let a = 0; a < verticesFaces.length; a += 1) {
      const face = fold.faces_vertices[verticesFaces[a]];
      if (face.indexOf(vert1) >= 0 && face.indexOf(vert2) >= 0) {
        return true;
      }
    }
    return false;
  }

  function removeBorderFaces(fold) {
    for (let i = fold.faces_vertices.length - 1; i >= 0; i -= 1) {
      const face = fold.faces_vertices[i];
      let allBorder = true;

      for (let j = 0; j < face.length; j += 1) {
        const vertexIndex = face[j];
        let nextIndex = j + 1;
        if (nextIndex >= face.length) nextIndex = 0;
        const nextVertexIndex = face[nextIndex];
        let connectingEdgeFound = false;
        for (let k = 0; k < fold.vertices_edges[vertexIndex].length; k += 1) {
          const edgeIndex = fold.vertices_edges[vertexIndex][k];
          const edge = fold.edges_vertices[edgeIndex];
          if ((edge[0] === vertexIndex && edge[1] === nextVertexIndex)
            || (edge[1] === vertexIndex && edge[0] === nextVertexIndex)) {
            connectingEdgeFound = true;
            const assignment = fold.edges_assignment[edgeIndex];
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
    const allCreaseParams = []; // face1Ind, vertInd, face2Ind, ver2Ind, edgeInd, angle
    const faces = fold.faces_vertices;
    for (let i = 0; i < fold.edges_vertices.length; i += 1) {
      const assignment = fold.edges_assignment[i];
      if (assignment !== "M" && assignment !== "V" && assignment !== "F") {
        continue;
      }
      const edge = fold.edges_vertices[i];
      const v1 = edge[0];
      const v2 = edge[1];
      let creaseParams = [];
      for (let j = 0; j < faces.length; j += 1) {
        const face = faces[j];
        const faceVerts = [face[0], face[1], face[2]];
        const v1Index = faceVerts.indexOf(v1);
        if (v1Index >= 0) {
          const v2Index = faceVerts.indexOf(v2);
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
              const angle = fold.edges_foldAngle[i];
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
    const old2new = [];
    let numRedundant = 0;
    let newIndex = 0;
    for (let i = 0; i < fold.vertices_vertices.length; i += 1) {
      const vertex_vertices = fold.vertices_vertices[i];
      if (vertex_vertices.length !== 2) {
        old2new.push(newIndex++);
        continue;
      }
      const vertex_coord = fold.vertices_coords[i];
      const neighbor0 = fold.vertices_coords[vertex_vertices[0]];
      const neighbor1 = fold.vertices_coords[vertex_vertices[1]];
      const threeD = vertex_coord.length === 3;
      const vec0 = [neighbor0[0] - vertex_coord[0], neighbor0[1] - vertex_coord[1]];
      const vec1 = [neighbor1[0] - vertex_coord[0], neighbor1[1] - vertex_coord[1]];
      let magSqVec0 = vec0[0] * vec0[0] + vec0[1] * vec0[1];
      let magSqVec1 = vec1[0] * vec1[0] + vec1[1] * vec1[1];
      let dot = vec0[0] * vec1[0] + vec0[1] * vec1[1];
      if (threeD) {
        vec0.push(neighbor0[2] - vertex_coord[2]);
        vec1.push(neighbor1[2] - vertex_coord[2]);
        magSqVec0 += vec0[2] * vec0[2];
        magSqVec1 += vec1[2] * vec1[2];
        dot += vec0[2] * vec1[2];
      }
      dot /= Math.sqrt(magSqVec0 * magSqVec1);
      if (Math.abs(dot + 1.0) < epsilon) {
        let merged = mergeEdge(fold, vertex_vertices[0], i, vertex_vertices[1]);
        if (merged) {
          numRedundant += 1;
          old2new.push(null);
        } else {
          old2new.push(newIndex++);
          continue;
        }
      } else old2new.push(newIndex++);
    }
    if (numRedundant === 0) { return fold; }
    console.warn(`${numRedundant} redundant vertices found`);
    fold = FOLD.filter.remapField(fold, "vertices", old2new);
    if (fold.faces_vertices) {
      for (let i = 0; i < fold.faces_vertices.length; i += 1) {
        const face = fold.faces_vertices[i];
        for (let j = face.length - 1; j >= 0; j -= 1) {
          if (face[j] === null) face.splice(j, 1);
        }
      }
    }
    return fold;
  }

  function mergeEdge(fold, v1, v2, v3) { // v2 is center vertex
    let angleAvg = 0;
    let avgSum = 0;
    const angles = [];
    let edgeAssignment = null;
    const edgeIndices = [];
    for (let i = fold.edges_vertices.length - 1; i >= 0; i -= 1) {
      const edge = fold.edges_vertices[i];
      if (edge.indexOf(v2) >= 0 && (edge.indexOf(v1) >= 0 || edge.indexOf(v3) >= 0)) {
        if (edgeAssignment === null) edgeAssignment = fold.edges_assignment[i];
        else if (edgeAssignment !== fold.edges_assignment[i]) {
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
        edgeIndices.push(i);//larger index in front
      }
    }
    if (angles[0] !== angles[1]) {
      console.warn("incompatible angles: " + JSON.stringify(angles));
    }
    for (let i = 0; i < edgeIndices.length; i += 1) {
      const index = edgeIndices[i];
      fold.edges_vertices.splice(index, 1);
      fold.edges_assignment.splice(index, 1);
      fold.edges_foldAngle.splice(index, 1);
    }
    fold.edges_vertices.push([v1, v3]);
    fold.edges_assignment.push(edgeAssignment);
    if (avgSum > 0) fold.edges_foldAngle.push(angleAvg / avgSum);
    else fold.edges_foldAngle.push(null);
    let index = fold.vertices_vertices[v1].indexOf(v2);
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
    let numStrays = 0;
    const old2new = [];
    let newIndex = 0;
    for (let i = 0; i < fold.vertices_vertices.length; i += 1) {
      if (fold.vertices_vertices[i] === undefined || fold.vertices_vertices[i].length === 0) {
        numStrays++;
        old2new.push(null);
      } else old2new.push(newIndex++);
    }
    if (numStrays === 0) return fold;
    console.warn(`${numStrays} stray vertices found`);
    return FOLD.filter.remapField(fold, "vertices", old2new);
  }

  function triangulatePolys(fold, is2d) {
    const vertices = fold.vertices_coords;
    const faces = fold.faces_vertices;
    const edges = fold.edges_vertices;
    const foldAngles = fold.edges_foldAngle;
    const assignments = fold.edges_assignment;
    const triangulatedFaces = [];
    for (let i = 0; i < faces.length; i += 1) {

      const face = faces[i];

      if (face.length === 3) {
        triangulatedFaces.push(face);
        continue;
      }

      // check for quad and solve manually
      if (face.length === 4) {
        const faceV1 = makeVector(vertices[face[0]]);
        const faceV2 = makeVector(vertices[face[1]]);
        const faceV3 = makeVector(vertices[face[2]]);
        const faceV4 = makeVector(vertices[face[3]]);
        const dist1 = (faceV1.clone().sub(faceV3)).lengthSq();
        const dist2 = (faceV2.clone().sub(faceV4)).lengthSq();
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

      const faceEdges = [];
      for (let j = 0; j < edges.length; j += 1) {
        const edge = edges[j];
        if (face.indexOf(edge[0]) >= 0 && face.indexOf(edge[1]) >= 0) {
          faceEdges.push(j);
        }
      }

      const faceVert = [];
      for (let j = 0; j < face.length; j += 1) {
        const vertex = vertices[face[j]];
        faceVert.push(vertex[0]);
        faceVert.push(vertex[1]);
        if (!is2d) faceVert.push(vertex[2]);
      }

      const triangles = earcut(faceVert, null, is2d ? 2 : 3);

      for (let j = 0; j < triangles.length; j += 3) {
        // this fixes the bug where triangles from earcut() have backwards winding
        // const tri = [face[triangles[j + 2]], face[triangles[j + 1]], face[triangles[j]]];
        const tri = [face[triangles[j + 1]], face[triangles[j + 2]], face[triangles[j]]];
        const foundEdges = [false, false, false]; // ab, bc, ca

        for (let k = 0; k < faceEdges.length; k += 1) {
          const edge = edges[faceEdges[k]];

          const aIndex = edge.indexOf(tri[0]);
          const bIndex = edge.indexOf(tri[1]);
          const cIndex = edge.indexOf(tri[2]);

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

        for (let k = 0; k < 3; k += 1) {
          if (foundEdges[k]) continue;
          if (k === 0) {
            faceEdges.push(edges.length);
            edges.push([tri[0], tri[1]]);
            foldAngles.push(0);
            assignments.push("F");
          } else if (k === 1) {
            faceEdges.push(edges.length);
            edges.push([tri[2], tri[1]]);
            foldAngles.push(0);
            assignments.push("F");
          } else if (k === 2) {
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
      // todo solve for crease pattern
      globals.warn("No crease pattern available for files imported from FOLD format.");
      return;
    }
    const serializer = new window.XMLSerializer();
    console.log("pattern.js saveSVG needs testing, check out these 2 lines");
    const getSVG = window.document.querySelector("#svgViewer>svg");
    const source = serializer.serializeToString(getSVG);
    // const source = serializer.serializeToString(getSVG[0]);
    
    // const source = serializer.serializeToString($("#svgViewer>svg").get(0));
    const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = window.document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = `${globals.filename}.svg`;
    window.document.body.appendChild(downloadLink);
    downloadLink.click();
    window.document.body.removeChild(downloadLink);
  }

  function findIntersections(fold, tol) {
    const vertices = fold.vertices_coords;
    const edges = fold.edges_vertices;
    const foldAngles = fold.edges_foldAngle;
    const assignments = fold.edges_assignment;
    for (let i = edges.length - 1; i >= 0; i -= 1) {
      for (let j = i - 1; j >= 0; j -= 1) {
        const v1 = makeVector2(vertices[edges[i][0]]);
        const v2 = makeVector2(vertices[edges[i][1]]);
        const v3 = makeVector2(vertices[edges[j][0]]);
        const v4 = makeVector2(vertices[edges[j][1]]);
        const data = line_intersect(v1, v2, v3, v4);
        if (data) {
          const length1 = (v2.clone().sub(v1)).length();
          const length2 = (v4.clone().sub(v3)).length();
          const d1 = getDistFromEnd(data.t1, length1, tol);
          const d2 = getDistFromEnd(data.t2, length2, tol);
          if (d1 === null || d2 === null) continue; // no crossing

          const seg1Int = d1 > tol && d1 < length1 - tol;
          const seg2Int = d2 > tol && d2 < length2 - tol;
          if (!seg1Int && !seg2Int) continue; // intersects at endpoints only

          let vertIndex;
          if (seg1Int && seg2Int) {
            vertIndex = vertices.length;
            vertices.push([data.intersection.x, data.intersection.y]);
          } else if (seg1Int) {
            if (d2 <= tol) vertIndex = edges[j][0];
            else vertIndex = edges[j][1];
          } else {
            if (d1 <= tol) vertIndex = edges[i][0];
            else vertIndex = edges[i][1];
          }

          if (seg1Int) {
            let foldAngle = foldAngles[i];
            let assignment = assignments[i];
            edges.splice(i, 1, [vertIndex, edges[i][0]], [vertIndex, edges[i][1]]);
            foldAngles.splice(i, 1, foldAngle, foldAngle);
            assignments.splice(i, 1, assignment, assignment);
            i += 1;
          }
          if (seg2Int) {
            let foldAngle = foldAngles[j];
            let assignment = assignments[j];
            edges.splice(j, 1, [vertIndex, edges[j][0]], [vertIndex, edges[j][1]]);
            foldAngles.splice(j, 1, foldAngle, foldAngle);
            assignments.splice(j, 1, assignment, assignment);
            j += 1;
            i += 1;
          }
        }
      }
    }
    return fold;
  }

  return {
    loadSVG,
    saveSVG,
    getFoldData,
    getTriangulatedFaces,
    setFoldData
  };
}

export default initPattern;
