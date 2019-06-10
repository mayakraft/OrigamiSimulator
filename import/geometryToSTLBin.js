// Written by Paul Kaplan

import * as THREE from "./three.module";

export default function (geometryArray) {
  const isLittleEndian = true; // STL files assume little endian, see wikipedia page
  const writeFloat = function (dataview, bufferIndex, float, isLittleEndianF) {
    dataview.setFloat32(bufferIndex, float, isLittleEndianF);
    return bufferIndex + 4;
  };
  const writeVector = function (dataview, bufferIndex, vector,
    offset, orientation, isLittleEndianF) {
    vector = vector.clone();
    if (orientation) vector.applyQuaternion(orientation);
    if (offset) vector.add(offset);
    bufferIndex = writeFloat(dataview, bufferIndex, vector.x, isLittleEndianF);
    bufferIndex = writeFloat(dataview, bufferIndex, vector.y, isLittleEndianF);
    return writeFloat(dataview, bufferIndex, vector.z, isLittleEndianF);
  };

  const floatData = [];

  for (let index = 0; index < geometryArray.length; index += 1) {
    const geometry = geometryArray[index].geo;
    const { orientation } = geometryArray[index];
    const { offset } = geometryArray[index];

    if (geometry instanceof THREE.BufferGeometry) {
      const normals = geometry.attributes.normal.array;
      const vertices = geometry.attributes.position.array;
      for (let n = 0; n < vertices.length; n += 9) {
        const normal = new THREE.Vector3(normals[n], normals[n + 1], normals[n + 2]);
        const verta = new THREE.Vector3(vertices[n], vertices[n + 1], vertices[n + 2]);
        const vertb = new THREE.Vector3(vertices[n + 3], vertices[n + 4], vertices[n + 5]);
        const vertc = new THREE.Vector3(vertices[n + 6], vertices[n + 7], vertices[n + 8]);
        floatData.push([normal, verta, vertb, vertc, offset, orientation]);
      }
    } else {
      const tris = geometry.faces;
      const verts = geometry.vertices;

      for (let n = 0; n < tris.length; n += 1) {
        floatData.push([tris[n].normal, verts[tris[n].a], verts[tris[n].b],
          verts[tris[n].c], offset, orientation]);
      }
    }
  }
  if (floatData.length === 0) {
    console.warn("no data to write to stl");
    return null;
  }
  // write to DataView
  const bufferSize = 84 + (50 * floatData.length);
  const buffer = new ArrayBuffer(bufferSize);
  const dv = new DataView(buffer);
  let bufferIndex = 0;

  bufferIndex += 80; // Header is empty

  dv.setUint32(bufferIndex, floatData.length, isLittleEndian);
  bufferIndex += 4;

  for (let i = 0; i < floatData.length; i += 1) {
    bufferIndex = writeVector(dv, bufferIndex, floatData[i][0],
      null, floatData[i][5], isLittleEndian);
    for (let j = 1; j < 4; j += 1) {
      bufferIndex = writeVector(dv, bufferIndex, floatData[i][j],
        floatData[i][4], floatData[i][5], isLittleEndian);
    }
    bufferIndex += 2; // unused 'attribute byte count' is a Uint16
  }
  return dv;
}
