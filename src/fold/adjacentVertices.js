/**
 * Rabbit Ear (c) Kraft
 */
const subtract2 = (a, b) => [a[0] - b[0], a[1] - b[1]];
/**
 * @description This is a subroutine for building vertices_vertices. This will
 * take a set of vertices indices and a vertex index to be the center point, and
 * sort the indices radially counter-clockwise.
 * @param {FOLD} graph a FOLD object
 * @param {number[]} vertices an array of vertex indices to be sorted
 * @param {number} vertex the origin vertex, around which the vertices will be sorted
 * @returns {number[]} indices of vertices, in sorted order
 */
const sortVerticesCounterClockwise = ({ vertices_coords }, vertices, vertex) => (
	vertices
		.map(v => vertices_coords[v])
		.map(coord => subtract2(coord, vertices_coords[vertex]))
		.map(vec => Math.atan2(vec[1], vec[0]))
		// optional line, this makes the cycle loop start/end along the +X axis
		.map(angle => (angle > -1e-6 ? angle : angle + Math.PI * 2))
		.map((a, i) => ({ a, i }))
		.sort((a, b) => a.a - b.a)
		.map(el => el.i)
		.map(i => vertices[i])
);
/**
 * @description Make `vertices_edges` from `edges_vertices`, unsorted, which should
 * be used sparingly. Prefer makeVerticesEdges().
 * @param {FOLD} graph a FOLD object, containing edges_vertices
 * @returns {number[][]} array of array of numbers, where each row corresponds to a
 * vertex index and the values in the inner array are edge indices.
 */
const makeVerticesEdgesUnsorted = ({ edges_vertices }) => {
	const vertices_edges = [];
	// iterate over edges_vertices and swap the index for each of the contents
	// each edge (index 0: [3, 4]) will be converted into (index 3: [0], index 4: [0])
	// repeat. append to each array.
	edges_vertices.forEach((ev, i) => ev
		.forEach((v) => {
			if (vertices_edges[v] === undefined) {
				vertices_edges[v] = [];
			}
			vertices_edges[v].push(i);
		}));
	return vertices_edges;
};
/**
 * @description Make an object which answers the question: "which edge connects
 * these two vertices?". This is accomplished by building an object with keys
 * containing vertex pairs (space separated string), and the value is the edge index.
 * This is bidirectional, so "7 15" and "15 7" are both keys that point to the same edge.
 * @param {FOLD} graph a FOLD object, containing edges_vertices
 * @returns {object} space-separated vertex pair keys, edge indices values
 */
const makeVerticesToEdgeBidirectional = ({ edges_vertices }) => {
	const map = {};
	edges_vertices
		.map(ev => ev.join(" "))
		.forEach((key, i) => { map[key] = i; });
	edges_vertices
		.map(ev => `${ev[1]} ${ev[0]}`)
		.forEach((key, i) => { map[key] = i; });
	return map;
};
/**
 * @description Make `vertices_edges` sorted, so that the edges are sorted
 * radially around the vertex, corresponding with the order in `vertices_vertices`.
 * @param {FOLD} graph a FOLD object, containing edges_vertices, vertices_vertices
 * @returns {number[][]} array of array of numbers, where each row corresponds to a
 * vertex index and the values in the inner array are edge indices.
 */
export const makeVerticesEdges = ({ edges_vertices, vertices_vertices }) => {
	const edge_map = makeVerticesToEdgeBidirectional({ edges_vertices });
	return vertices_vertices
		.map((verts, i) => verts
			.map(v => edge_map[`${i} ${v}`]));
};
/**
 * @description Make `vertices_vertices` sorted radially counter-clockwise.
 * @param {FOLD} graph a FOLD object, containing vertices_coords, vertices_edges, edges_vertices
 * @returns {number[][]} array of array of numbers, where each row corresponds to a
 * vertex index and the values in the inner array are vertex indices.
 */
export const makeVerticesVertices = ({ vertices_coords, edges_vertices }) => {
	// use adjacent edges to find adjacent vertices
	const vertices_vertices = makeVerticesEdgesUnsorted({ edges_vertices })
		.map((edges, v) => edges
			// the adjacent edge's edges_vertices also contains this vertex,
			// filter it out and we're left with the adjacent vertices
			.flatMap(edge => edges_vertices[edge]
				.filter(i => i !== v)));
	return vertices_coords === undefined
		? vertices_vertices
		: vertices_vertices
			.map((verts, i) => sortVerticesCounterClockwise({ vertices_coords }, verts, i));
};
