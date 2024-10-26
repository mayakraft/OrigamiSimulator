/**
 * Created by amandaghassaei on 2/25/17.
 */

import type { FOLDMesh } from "../types.ts";

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

type CreaseParam = {
  faces: [number, number];
  vertices: [number, number];
  edge: number;
  foldAngle: number;
};

const creaseAssignments: { [key: string]: boolean } = {
  "M": true, "V": true, "F": true, "J": true,
  "m": true, "v": true, "f": true, "j": true,
};

export const makeCreasesParams = (fold: FOLDMesh): CreaseParam[] => {
  const result: (CreaseParam | undefined)[] = fold.edges_faces.map((faces, edge) => {
    const [v1, v2] = fold.edges_vertices[edge];
    if (faces.length !== 2) { return undefined; }
    if (!creaseAssignments[fold.edges_assignment[edge]]) { return undefined; }

    // this is the face vertex across from the edge
    const vertices = faces
      .map(face => fold.faces_vertices[face]
        .filter(v => v !== v1 && v !== v2)
        .shift());

    // we might need to flip the order... for some reason I still don't know
    const v1Index = fold.faces_vertices[faces[1]].indexOf(v1);
    const v2Index = fold.faces_vertices[faces[1]].indexOf(v2);
    const flipOrder = (v2Index - v1Index === 1 || v2Index - v1Index === -2);
    return {
      faces: flipOrder ? [faces[1], faces[0]] : [faces[0], faces[1]],
      vertices: flipOrder ? [vertices[1], vertices[0]] : [vertices[0], vertices[1]],
      edge,
      foldAngle: fold.edges_foldAngle[edge],
    };
  });
  return result.filter(a => a !== undefined);
};

//export const makeCreasesParams = (fold: FOLDMesh): CreaseParam[] => {
//  const allCreaseParams: CreaseParam[] = [];
//  const faces = fold.faces_vertices;
//
//  for (let i = 0; i < fold.edges_vertices.length; i += 1) {
//    const assignment = fold.edges_assignment[i];
//    if (
//      assignment !== "M" &&
//      assignment !== "V" &&
//      assignment !== "F" &&
//      assignment !== "J"
//    ) {
//      continue;
//    }
//
//    const edge = fold.edges_vertices[i];
//    const v1 = edge[0];
//    const v2 = edge[1];
//    let creaseParams: number[] = [];
//    //const params: CreaseParam = {};
//
//    // iterate over every face
//    for (let j = 0; j < faces.length; j += 1) {
//      const face = faces[j];
//      const faceVerts = [face[0], face[1], face[2]];
//      // test if this edge (both vertices) are a member of this face
//      const v1Index = faceVerts.indexOf(v1);
//      if (v1Index >= 0) {
//        const v2Index = faceVerts.indexOf(v2);
//
//        if (v2Index >= 0) {
//          // the index of the face
//          creaseParams.push(j);
//          if (v2Index > v1Index) {
//            faceVerts.splice(v2Index, 1);
//            faceVerts.splice(v1Index, 1);
//          } else {
//            faceVerts.splice(v1Index, 1);
//            faceVerts.splice(v2Index, 1);
//          }
//          // this is the face vertex across from the edge
//          creaseParams.push(faceVerts[0]);
//
//          // if this is 4, this means we have found two vertices from a single edge's
//          // two adjacent faces, the two vertices that are not a part of this edge.
//          if (creaseParams.length === 4) {
//            if (v2Index - v1Index === 1 || v2Index - v1Index === -2) {
//              creaseParams = [
//                creaseParams[2],
//                creaseParams[3],
//                creaseParams[0],
//                creaseParams[1],
//              ];
//            }
//            creaseParams.push(i);
//            const angle = fold.edges_foldAngle[i];
//            creaseParams.push(angle);
//            // new model instead
//            const params: CreaseParam = {
//              faces: [creaseParams[0], creaseParams[2]],
//              vertices: [creaseParams[1], creaseParams[3]],
//              edge: creaseParams[4],
//              foldAngle: creaseParams[5],
//            };
//            params.faces = [creaseParams[0], creaseParams[2]];
//            params.vertices = [creaseParams[1], creaseParams[3]];
//            params.edge = creaseParams[4];
//            params.foldAngle = creaseParams[5];
//            // allCreaseParams.push(creaseParams);
//            allCreaseParams.push(params);
//            break;
//          }
//        }
//      }
//    }
//  }
//  return allCreaseParams;
//};
//
