/**
 * Created by ghassaei on 2/22/17.
 */
import * as THREE from "three";
import type { FOLD } from "./types.ts";
import { Model } from "./model/Model.ts";
import { MeshThree } from "./three/MeshThree.ts";

/**
 * @description Origami Simulator by Amanda Ghassaei.
 * refactored so that:
 * - encapsulate global variables to allow for multiple simultaneous instances
 * - ability to dealloc() and reinitialize, memory will properly free itself.
 * - rewrite in ES6 module format to work in popular JS frameworks.
 *
 * This will create an instance of an Origami Simulator, which is meant to
 * be created just after you create a ThreeJS canvas, so that this can
 * bind itself to the ThreeJS instance.
 * @param {{ scene: THREE.Scene, onCompute: Function }} options
 * where scene is a pre-initialized three.js scene (THREE.Scene).
 */
export class OrigamiSimulator {
  mesh: MeshThree;
  model: Model | undefined;

  #active: boolean;

  // Fold the origami, between 0.0 and 1.0.
  #foldAmount: number;

  // Override the material with the strain forces visualization.
  #strain: boolean;

  // the error from strain in the folding
  error: number = 0;

  // Activate three.js shadows on the materials.
  #shadows: boolean = false;

  computeLoopID: number | undefined;

  onCompute?: ({ error }: { error: number }) => void;

  constructor({
    scene,
    onCompute,
  }: { scene?: THREE.Scene; onCompute?: () => void } = {}) {
    this.onCompute = onCompute;
    this.mesh = new MeshThree({ scene });
    this.error = 0;
    this.#foldAmount = 0.0;
    this.#strain = false;
    this.#shadows = false;
    this.#active = false;
    console.log("MeshThree", this.mesh);
  }

  /**
   * @description this load method can throw an error. wrap it in a try catch
   * and deliver the error to the end user.
   */
  load(fold: FOLD): void {
    this.model = new Model(fold, { creasePercent: this.foldAmount });
    this.mesh.setModel(this.model);
  }

  set foldAmount(value: number | string) {
    const number = typeof value === "number" ? value : parseFloat(value);
    this.#foldAmount = !Number.isNaN(number) ? number : 0.0;
    this.model?.setCreasePercent(this.foldAmount);
  }

  get foldAmount(): number {
    return this.#foldAmount;
  }

  set strain(value: boolean) {
    this.#strain = !!value;
    this.model.strain = this.#strain;
    this.mesh.strain = this.#strain;
  }

  get strain(): boolean {
    return this.#strain;
  }

  set shadows(shadows: boolean) {
    this.#shadows = shadows;
    this.mesh.frontMesh.castShadow = shadows;
    this.mesh.frontMesh.receiveShadow = shadows;
    // this.mesh.backMesh.castShadow = shadows;
    this.mesh.backMesh.receiveShadow = shadows;
  }

  get shadows(): boolean {
    return this.#shadows;
  }

  set scene(newScene: THREE.Scene) {
    this.mesh.setScene(newScene);
  }

  // When the user pulls on a node, call this method
  // it will relay the information to the solver
  nodeDidMove(): void {
    return this.model.nodeDidMove();
  }

  // One call to origami simulator's solver
  compute(): void {
    // error is the global error in the folding of the model
    // not a computational error.
    this.error = this.model?.solve(100, this.strain);
    this.mesh.sync();
    //mesh.needsUpdate();
  }

  /**
   * @description Start a loop with window.requestAnimationFrame
   * which will call the compute method on every frame.
   */
  computeLoop(): void {
    this.computeLoopID = window.requestAnimationFrame(this.computeLoop.bind(this));
    this.compute();
    if (this.onCompute) {
      this.onCompute({ error: this.error });
    }
  }

  // Activate origami simulator's compute loop.
  set active(active: boolean) {
    // no matter the new state, ensure that no loop is (already) running
    if (this.computeLoopID) {
      window.cancelAnimationFrame(this.computeLoopID);
      this.computeLoopID = undefined;
    }
    this.#active = active;
    if (this.#active) {
      this.computeLoop();
    }
  }

  set integration(value: string) {
    this.model?.setIntegration(value);
  }

  set axialStiffness(value: number) {
    this.model?.setAxialStiffness(value);
  }

  set faceStiffness(value: number) {
    this.model?.setFaceStiffness(value);
  }

  set joinStiffness(value: number) {
    this.model?.setJoinStiffness(value);
  }

  set creaseStiffness(value: number) {
    this.model?.setCreaseStiffness(value);
  }

  set dampingRatio(value: number) {
    this.model?.setDampingRatio(value);
  }

  /**
   * @description Reset the vertices of the model to their original position
   */
  reset(): number {
    return this.model.reset();
  }

  /**
   * @description Stop the compute loop and free all associated memory
   */
  dealloc(): void {
    this.active = false;
    this.model.dealloc();
    this.mesh.dealloc();
  }

  export(options?: { triangulated: boolean }) {
    return this.model.export(options);
  }

  getMesh() {
    return this.mesh;
  }
  getModel() {
    return this.model;
  }
  getMaterials() {
    return this.mesh.materials;
  }
  getLines() {
    return this.mesh.lines;
  }

  set frontVisible(value: boolean) {
    this.mesh.frontMesh.visible = value;
  }
  set backVisible(value: boolean) {
    this.mesh.backMesh.visible = value;
  }

  set frontColor(color: string | number) {
    this.mesh.materials.front.color.set(color);
  }
  set backColor(color: string | number) {
    this.mesh.materials.back.color.set(color);
  }

  // set all line assignments to one color
  set lineColor(color: string | number) {
    this.mesh.setLineColor(color);
  }

  // line colors by assignment type
  set boundaryColor(color: string | number) {
    this.mesh.setBoundaryColor(color);
  }
  set mountainColor(color: string | number) {
    this.mesh.setMountainColor(color);
  }
  set valleyColor(color: string | number) {
    this.mesh.setValleyColor(color);
  }
  set flatColor(color: string | number) {
    this.mesh.setFlatColor(color);
  }
  set joinColor(color: string | number) {
    this.mesh.setJoinColor(color);
  }
  set unassignedColor(color: string | number) {
    this.mesh.setUnassignedColor(color);
  }

  // set the materials directly
  set materialFront(material: THREE.Material) {
    this.mesh.setMaterialFront(material);
  }
  set materialBack(material: THREE.Material) {
    this.mesh.setMaterialBack(material);
  }

  setMaterialStrain(material: THREE.Material) {
    return this.mesh.setMaterialStrain(material);
  }
  setMaterialLine(material: THREE.Material, assignments: string[]) {
    return this.mesh.setMaterialLine(material, assignments);
  }
}
