/**
 * Created by amandaghassaei on 2/25/17.
 */

import {
	makeEdgesFacesUnsorted,
} from "./edgesFaces.js";

/**
 * @description this has been refactored from a method which returned
 * its elements in an array, where each item required knowing the
 * indices encoded: face1Ind, vertInd, face2Ind, ver2Ind, edgeInd, angle.
 * Now, it returns the same data, just inside a more descriptive object:
 * {
 *   edge: edge_index,
 *   foldAngle: foldAngle,
 *   faces: [face0, face1],
 *   vertices: [vert0, vert1],
 * }
 * Additionally, this method used to be hidden inside of the method
 * which currently resides in "prepare.js", activated by sending along
 * an optional second parameter. Now it is called directly from model/index.
 */

/**
 * @param {FOLD} graph a FOLD object
 */
// export const makeCreasesParams = ({
// 	edges_vertices, edges_assignment, edges_foldAngle,
// 	faces_vertices, faces_edges,
// }) => {
// 	const edges_faces = makeEdgesFacesUnsorted({
// 		edges_vertices, faces_vertices, faces_edges,
// 	});
// 	return edges_vertices
// 		.map((_, i) => i)
// 		.filter(i => (edges_assignment[i] === "M"
// 			|| edges_assignment[i] === "V"
// 			|| edges_assignment[i] === "F"
// 			|| edges_assignment[i] === "J"))
// 		.map(edge => ({
// 			edge,
// 			faces: edges_faces[edge],
// 			foldAngle: edges_foldAngle[edge],
// 			vertices: edges_faces[edge]
// 				.map(face => faces_vertices[face])
// 				.map(vertices => vertices.slice(0, 3)
// 					.filter(v => !edges_vertices[edge].includes(v))
// 					.shift()),
// 		}))
// 		.filter(({ vertices }) => !vertices.includes(undefined))
// 		.map(({ edge, faces, foldAngle, vertices }) => {
// 			// const diff = faces_vertices[faces[0]].indexOf(vertices[1])
// 			// 	- faces_vertices[faces[0]].indexOf(vertices[0]);
// 			// const diff = faces_vertices[faces[1]].indexOf(vertices[1])
// 			// 	- faces_vertices[faces[1]].indexOf(vertices[0]);
// 			// const flip = diff === 1 || diff === -2;

// 			const face = faces_vertices[faces[1]];
// 			const faceVerts = [face[0], face[1], face[2]];
// 			const v1Index = faceVerts.indexOf(vertices[0]);
// 			const v2Index = faceVerts.indexOf(vertices[1]);

// 			if (v2Index - v1Index === 1 || v2Index - v1Index === -2) {
// 				faces.reverse();
// 				vertices.reverse();
// 			}
// 			console.log("diff", v2Index - v1Index);

// 			return ({
// 				edge,
// 				faces,
// 				vertices,
// 				// faces: flip ? [faces[1], faces[0]] : faces,
// 				// vertices: flip ? [vertices[1], vertices[0]] : vertices,
// 				foldAngle,
// 			});
// 		});
// };

export const makeCreasesParams = (fold) => {
	const allCreaseParams = [];
	const faces = fold.faces_vertices;
	for (let i = 0; i < fold.edges_vertices.length; i += 1) {
		const assignment = fold.edges_assignment[i];
		if (assignment !== "M"
			&& assignment !== "V"
			&& assignment !== "F"
			&& assignment !== "J") {
			continue;
		}
		const edge = fold.edges_vertices[i];
		const v1 = edge[0];
		const v2 = edge[1];
		let creaseParams = [];
		const params = {};
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
						// new model instead
						params.faces = [creaseParams[0], creaseParams[2]];
						params.vertices = [creaseParams[1], creaseParams[3]];
						params.edge = creaseParams[4];
						params.foldAngle = creaseParams[5];
						// allCreaseParams.push(creaseParams);
						allCreaseParams.push(params);
						break;
					}
				}
			}
		}
	}
	return allCreaseParams;
};
