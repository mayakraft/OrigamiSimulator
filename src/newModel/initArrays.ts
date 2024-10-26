import type { GPUMath } from "./GPUMath.ts";
import type { NewModel } from "./NewModel.ts";
import type { GPUMathSettings } from "./initGPU.ts";
import { fitToPow2 } from "./math.ts";

const initArrays = (gpuMath: GPUMath, model: NewModel): GPUMathSettings => {
  //const numNodeFaces = verticesFaces(model).reduce((a, b) => a + b.length, 0);
  const numNodeFaces = model.fold.vertices_faces.reduce((a, b) => a + b.length, 0);
  // this is not the number of edges, rather the number of vertices_edges
  // (individual edges will appear more than once)
  const numEdges = model.nodes
    .map((node) => node.beams.length)
    .reduce((a, b) => a + b, 0);
  const numFaces = model.fold.faces_vertices.length;
  const numCreases = model.creases.length;
  // numNodeCreases + reactions
  const numNodeCreases =
    numCreases * 2 +
    model.nodes.map((node) => node.creases.length).reduce((a, b) => a + b, 0);
  const textureDim = fitToPow2(model.nodes.length);
  const textureDimNodeFaces = fitToPow2(numNodeFaces);
  const textureDimEdges = fitToPow2(numEdges);
  const textureDimCreases = fitToPow2(numCreases);
  const textureDimNodeCreases = fitToPow2(numNodeCreases);
  const textureDimFaces = fitToPow2(numFaces);
  const position = new Float32Array(textureDim * textureDim * 4);
  const lastPosition = new Float32Array(textureDim * textureDim * 4);
  const lastLastPosition = new Float32Array(textureDim * textureDim * 4);
  const velocity = new Float32Array(textureDim * textureDim * 4);
  const lastVelocity = new Float32Array(textureDim * textureDim * 4);
  const meta = new Float32Array(textureDim * textureDim * 4);
  const meta2 = new Float32Array(textureDim * textureDim * 4);
  const normals = new Float32Array(textureDimFaces * textureDimFaces * 4);
  const faceVertexIndices = new Float32Array(textureDimFaces * textureDimFaces * 4);
  const nodeFaceMeta = new Float32Array(textureDimNodeFaces * textureDimNodeFaces * 4);
  const nominalTriangles = new Float32Array(textureDimFaces * textureDimFaces * 4);
  const nodeCreaseMeta = new Float32Array(
    textureDimNodeCreases * textureDimNodeCreases * 4,
  );
  const creaseMeta2 = new Float32Array(textureDimCreases * textureDimCreases * 4);
  const creaseGeo = new Float32Array(textureDimCreases * textureDimCreases * 4);
  const theta = new Float32Array(textureDimCreases * textureDimCreases * 4);
  const lastTheta = new Float32Array(textureDimCreases * textureDimCreases * 4);
  return {
    textureDim,
    textureDimEdges,
    textureDimFaces,
    textureDimCreases,
    textureDimNodeFaces,
    textureDimNodeCreases,
    position,
    lastPosition,
    lastLastPosition,
    velocity,
    lastVelocity,
    meta,
    meta2,
    normals,
    faceVertexIndices,
    nodeFaceMeta,
    nominalTriangles,
    nodeCreaseMeta,
    creaseMeta2,
    creaseGeo,
    theta,
    lastTheta,
  };
};

export default initArrays;
