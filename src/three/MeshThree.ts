import * as THREE from "three";
import * as Materials from "./materials.ts";
import type { Model } from "../model/Model.ts";

// no "cut" assignment. all cuts have now been turned into boundaries
const assignments: string[] = Array.from("BMVFJU");

/**
 * @param {Model} model
 * @param {THREE.Material} material
 * @param {string} key
 */
const setNewFaceMaterial = (model: MeshThree, material: THREE.Material, key: string) => {
  if (model.materials[key]) {
    model.materials[key].dispose();
  }
  model.materials[key] = material;
  model.faceMaterialDidUpdate();
};

export class MeshThree {
  geometry: THREE.BufferGeometry;

  layer: THREE.Object3D;
  frontMesh: THREE.Mesh; // front face of mesh
  backMesh: THREE.Mesh; // back face of mesh (different color)
  lines: { [key: string]: THREE.LineSegments };

  materials: { [key: string]: THREE.Material };
  lineMaterials: { [key: string]: THREE.Material };

  #strain: boolean;

  set strain(strain: boolean) {
    this.#strain = strain;
    this.faceMaterialDidUpdate();
  }

  constructor({ scene }: { scene: THREE.Scene | undefined }) {
    // if the user chooses to export the 3D model, we need to reference
    // the original FOLD data. "this.fold" contains triangulated faces.
    this.geometry = null;
    this.materials = {};
    this.materials.front = Materials.front;
    this.materials.back = Materials.back;
    this.materials.strain = Materials.strain;
    this.lineMaterials = {};
    assignments.forEach((key) => {
      this.lineMaterials[key] = Materials.line.clone();
    });

    this.layer = new THREE.Object3D();
    this.frontMesh = new THREE.Mesh(); // front face of mesh
    this.backMesh = new THREE.Mesh(); // back face of mesh (different color)
    this.lines = {};
    assignments.forEach((key) => {
      this.lines[key] = new THREE.LineSegments(
        new THREE.BufferGeometry(),
        this.lineMaterials[key],
      );
    });

    this.layer.add(this.frontMesh);
    this.layer.add(this.backMesh);
    Object.values(this.lines).forEach((line) => this.layer.add(line));

    // by default, "join" edges (result of triangulation) are not visible
    this.lines.J.visible = false;

    this.frontMesh.castShadow = true;
    this.frontMesh.receiveShadow = true;
    // this.backMesh.castShadow = true;
    this.backMesh.receiveShadow = true;

    this.makeNewGeometries();
    this.materialDidUpdate();
    this.setScene(scene);
  }

  setModel(model: Model): void {
    //this.dealloc();
    const { positions, colors, indices, lineIndices } = model;
    this.setGeometryBuffers({ positions, colors, indices, lineIndices });
    //this.layer.position.set(-model.center[0], -model.center[1], -model.center[2]);
    //this.layer.updateMatrixWorld();
    this.frontMesh.updateMatrixWorld();
    this.backMesh.updateMatrixWorld();
  }

  //sync(model: Model): void {
  sync(): void {
    this.needsUpdate();
  }

  setScene(scene?: THREE.Scene): void {
    this.layer.removeFromParent();
    if (scene) {
      scene.add(this.layer);
    }
    //// remove from previous scene
    //[this.frontMesh, this.backMesh]
    //  .filter((el) => el.removeFromParent)
    //  .forEach((side) => side.removeFromParent());
    //Object.values(this.lines)
    //  .filter((el) => el.removeFromParent)
    //  .forEach((line) => line.removeFromParent());
    //// add to new scene
    //if (scene) {
    //  scene.add(this.frontMesh);
    //  scene.add(this.backMesh);
    //  Object.values(this.lines).forEach((line) => scene.add(line));
    //}
  }

  makeNewGeometries(): void {
    this.geometry = new THREE.BufferGeometry();
    // this.geometry.dynamic = true; // property no longer exists
    this.frontMesh.geometry = this.geometry;
    this.backMesh.geometry = this.geometry;
    // todo: do we need to set frontside/backside dynamic?
    // this.geometry.verticesNeedUpdate = true;
    Object.values(this.lines).forEach((line) => {
      line.geometry = new THREE.BufferGeometry();
      //line.geometry.dynamic = true;
      //line.geometry.verticesNeedUpdate = true;
    });
  }

  faceMaterialDidUpdate(): void {
    this.frontMesh.material = this.#strain ? this.materials.strain : this.materials.front;
    this.backMesh.material = this.materials.back;
    // hide the back mesh if strain is currently enabled
    this.backMesh.visible = !this.#strain;
    // this.frontMesh.material.depthWrite = false;
    // this.backMesh.material.depthWrite = false;
    this.frontMesh.material.needsUpdate = true;
    this.backMesh.material.needsUpdate = true;
  }

  lineMaterialDidUpdate(): void {
    assignments.forEach((key) => {
      this.lines[key].material = this.lineMaterials[key] || Materials.line.clone();
      this.lines[key].material.needsUpdate = true;
    });
  }

  materialDidUpdate(): void {
    this.faceMaterialDidUpdate();
    this.lineMaterialDidUpdate();
  }

  getMesh(): [THREE.Mesh, THREE.Mesh] {
    return [this.frontMesh, this.backMesh];
  }

  needsUpdate(): void {
    this.geometry.attributes.position.needsUpdate = true;
    if (this.#strain) {
      this.geometry.attributes.color.needsUpdate = true;
    }
    // if (vrEnabled) this.geometry.computeBoundingBox();
    // this is needed for the raycaster. even if VR is not enabled.
    this.geometry.computeBoundingBox();
  }

  setGeometryBuffers({
    positions,
    colors,
    indices,
    lineIndices,
  }: {
    positions: Float32Array;
    colors: Float32Array;
    indices: Uint16Array;
    lineIndices: { [key: string]: Uint16Array };
  }): void {
    const positionsAttribute = new THREE.BufferAttribute(positions, 3);
    this.geometry.setAttribute("position", positionsAttribute);
    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    this.geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    assignments.forEach((key) => {
      this.lines[key].geometry.setAttribute("position", positionsAttribute);
      this.lines[key].geometry.setIndex(new THREE.BufferAttribute(lineIndices[key], 1));
      // this.lines[key].geometry.attributes.position.needsUpdate = true;
      // this.lines[key].geometry.index.needsUpdate = true;
      this.lines[key].geometry.computeBoundingBox();
      this.lines[key].geometry.computeBoundingSphere();
      this.lines[key].geometry.center();
    });
    // geometry.attributes.position.needsUpdate = true;
    // geometry.index.needsUpdate = true;
    // geometry.verticesNeedUpdate = true;
    // re-scale object to unit-space and center it at the origin.
    this.geometry.computeVertexNormals();
    this.geometry.computeBoundingBox();
    this.geometry.computeBoundingSphere();
    this.geometry.center();
  }

  dealloc(): void {
    // dispose geometries
    [this.geometry, this.frontMesh.geometry, this.backMesh.geometry]
      .filter((geo) => geo !== undefined)
      .forEach((geo) => geo.dispose());
    this.geometry = null;
    this.frontMesh.geometry = null;
    this.backMesh.geometry = null;
    Object.values(this.lines)
      .filter((line) => line.geometry !== undefined)
      .forEach((line) => line.geometry.dispose());
    // dispose materials
    [this.frontMesh.material, this.backMesh.material]
      .filter((material) => material !== undefined)
      .forEach((material) => material.dispose());
    Object.values(this.lines)
      .filter((line) => line.material !== undefined)
      .forEach((line) => line.material.dispose());
  }

  setFrontColor(color: number | string): void {
    this.materials.front.color.set(color);
    this.frontMesh.material.needsUpdate = true;
  }

  setBackColor(color: number | string): void {
    this.materials.back.color.set(color);
    this.backMesh.material.needsUpdate = true;
  }

  setBoundaryColor(color: number | string): void {
    const material = this.lineMaterials.B as THREE.LineBasicMaterial;
    material?.color.set(color);
    this.lines.B.material.needsUpdate = true;
  }

  setMountainColor(color: number | string): void {
    const material = this.lineMaterials.M as THREE.LineBasicMaterial;
    material?.color.set(color);
    this.lines.M.material.needsUpdate = true;
  }

  setValleyColor(color: number | string): void {
    const material = this.lineMaterials.V as THREE.LineBasicMaterial;
    material?.color.set(color);
    this.lines.V.material.needsUpdate = true;
  }

  setFlatColor(color: number | string): void {
    const material = this.lineMaterials.F as THREE.LineBasicMaterial;
    material?.color.set(color);
    this.lines.F.material.needsUpdate = true;
  }

  setUnassignedColor(color: number | string): void {
    const material = this.lineMaterials.U as THREE.LineBasicMaterial;
    material?.color.set(color);
    this.lines.U.material.needsUpdate = true;
  }

  setJoinColor(color: number | string): void {
    const material = this.lineMaterials.J as THREE.LineBasicMaterial;
    material?.color.set(color);
    this.lines.J.material.needsUpdate = true;
  }

  setLineColor(color: number | string): void {
    assignments.forEach((key) => {
      const material = this.lineMaterials[key] as THREE.LineBasicMaterial;
      material.color.set(color);
    });
    this.lineMaterialDidUpdate();
  }

  setMaterialFront(material: THREE.Material) {
    setNewFaceMaterial(this, material, "front");
  }

  setMaterialBack(material: THREE.Material) {
    setNewFaceMaterial(this, material, "back");
  }

  setMaterialStrain(material: THREE.Material) {
    setNewFaceMaterial(this, material, "strain");
  }

  /**
   * @param {THREE.Material} material a three js material
   * @param {string[]} assignmentsOptions list of assignment keys like ["M"]
   * a list of the assignment(s) you want to apply this material to.
   */
  setMaterialLine(material: THREE.Material, assignmentsOptions: string[] = []) {
    const keys = assignmentsOptions.length
      ? assignmentsOptions
        .filter((a) => typeof a === "string")
        .map((str: string) => str.toUpperCase())
      : assignments;
    keys.forEach((key) => this.lineMaterials[key].dispose());
    keys.forEach((key) => {
      this.lineMaterials[key] = material;
    });
    this.lineMaterialDidUpdate();
  }
}
