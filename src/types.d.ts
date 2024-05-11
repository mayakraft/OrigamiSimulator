// from THREE.js
type BufferGeometry = import("@types/three").BufferGeometry
type Material = import("@types/three").Material
type Mesh = import("@types/three").Mesh
type LineSegments = import("@types/three").LineSegments


type FOLDFrame = {
    frame_author?: string;
    frame_title?: string;
    frame_description?: string;
    frame_classes?: string[];
    frame_attributes?: string[];
    frame_unit?: string;
    vertices_coords?: [number, number][] | [number, number, number][];
    vertices_vertices?: number[][];
    vertices_edges?: number[][];
    vertices_faces?: (number | null | undefined)[][];
    edges_vertices?: [number, number][];
    edges_faces?: (number | null | undefined)[][];
    edges_assignment?: string[];
    edges_foldAngle?: number[];
    edges_length?: number[];
    faces_vertices?: number[][];
    faces_edges?: number[][];
    faces_faces?: (number | null | undefined)[][];
    faceOrders?: [number, number, number][];
    edgeOrders?: [number, number, number][];
};

type FOLDInternalFrame = FOLDFrame & {
    frame_parent?: number;
    frame_inherit?: boolean;
};

type FOLDFileMetadata = {
    file_frames?: FOLDInternalFrame[];
    file_spec?: number;
    file_creator?: string;
    file_author?: string;
    file_title?: string;
    file_description?: string;
    file_classes?: string[];
};

type FOLD = FOLDFileMetadata & FOLDFrame;

type SimulatorNode = {
	originalPosition: [number, number, number],
	index: number,
	beams: Beam[],
	creases: Crease[],
	invCreases: Crease[],
	externalForce: [number, number, number],
	fixed: boolean,
	simMass: number,
};

declare class Beam {
	constructor(
		nodes: [SimulatorNode, SimulatorNode],
		options:{ axialStiffness?: number, dampingRatio?: number })
	type: string;
	axialStiffness: number;
	dampingRatio: number;
	vertices: [[number, number, number], [number, number, number]];
	nodes: [SimulatorNode, SimulatorNode];
	originalLength: number;
	getVector(): [number, number, number]
	getLength(): number;
	recalcOriginalLength(): void;
	isFixed(): boolean;
	getK(): number;
	getD(): number;
	getNaturalFrequency(): number;
	getMinMass(): number
	getOtherNode(node: SimulatorNode): SimulatorNode;
	destroy(): void;
}

declare class Model {
	// if the user chooses to export the 3D model, we need to reference
	// the original FOLD data. "this.fold" contains triangulated faces.
	fold: FOLD;
	foldUnmodified: FOLD;
	geometry: BufferGeometry;
	materials: {[key: string]: (Material|({[key: string]: Material})) };
	frontMesh: Mesh;
	backMesh: Mesh;
	lines: {[key: string]: LineSegments};
	strain: boolean;
	axialStiffness: number;
	joinStiffness: number;
	creaseStiffness: number;
	dampingRatio: number;
	// vertex / color buffer arrays for GPU
	positions: Float32Array;
	colors: Float32Array;
	// these contain a bunch of information for the solver.
	/** @type {SimulatorNode[]} */
	nodes: SimulatorNode[];
	edges: Beam[];
	creases: Crease[];
	faces_vertices: number[][];
}

declare class GPUMath {
	canvas: HTMLCanvasElement;
	gl: WebGLRenderingContext|WebGL2RenderingContext;
	version: number;
	programs: object;
	frameBuffers: object;
	textures: object;
	index: number;

	createProgram(programName: string, vertexShader: string, fragmentShader: string): void
	initTextureFromData(name: string, width: number, height: number, typeName: string, data:ArrayBufferView, shouldReplace: boolean): void
	initFrameBufferForTexture(textureName: string, shouldReplace: boolean): void
	setUniformForProgram(programName: string, name: string, val: any, type: string): void
	setSize(width:number, height:number): void
	setProgram(programName: string): void
	step(programName: string, inputTextures: string[], outputTexture: string, time?: number): void
	swapTextures2(texture1Name: string, texture2Name: string): void
	swapTextures3(texture1Name: string, texture2Name: string, texture3Name: string): void
	readyToRead(): boolean
	readPixels(xMin: number, yMin: number, width: number, height: number, array: ArrayBufferView): void
	dealloc(): void
}
