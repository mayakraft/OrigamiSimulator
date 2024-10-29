import * as THREE from "three";

// positive value pushes polygon further away
const polygonOffsetFactor = 0.5;

export const front = new THREE.MeshPhongMaterial({
  flatShading: true,
  side: THREE.FrontSide,
  polygonOffset: true,
  polygonOffsetFactor,
  polygonOffsetUnits: 1,
  color: 0xffffff,
  emissive: 0x000000,
  specular: 0x111111,
  shininess: 20,
  reflectivity: 0,
  refractionRatio: 0,
});

export const back = new THREE.MeshPhongMaterial({
  flatShading: true,
  side: THREE.BackSide,
  polygonOffset: true,
  polygonOffsetFactor,
  polygonOffsetUnits: 1,
  color: 0xec008b,
  emissive: 0x000000,
  specular: 0x111111,
  shininess: 20,
  reflectivity: 0,
  refractionRatio: 0,
});

export const line = new THREE.LineBasicMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.5,
});

export const strain = new THREE.MeshBasicMaterial({
  vertexColors: true,
  side: THREE.DoubleSide,
  polygonOffset: true,
  polygonOffsetFactor,
  polygonOffsetUnits: 1,
});
