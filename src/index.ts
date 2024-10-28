/**
 * Created by ghassaei on 2/22/17.
 */
import type { FOLD } from "./types.ts";
import * as THREE from "three";
import { NewModel } from "./newModel/NewModel.ts";
import { MeshThree } from "./newModel/MeshThree.ts";

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
  meshThree: MeshThree;
  newModel: NewModel | undefined;

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
    this.meshThree = new MeshThree({ scene });
    this.error = 0;
    this.#foldAmount = 0.0;
    this.#strain = false;
    this.#shadows = false;
    this.#active = false;
  }

  /**
   * @description this load method can throw an error. wrap it in a try catch
   * and deliver the error to the end user.
   */
  load(fold: FOLD): void {
    console.log("load() new NewModel");
    this.newModel = new NewModel(fold, { creasePercent: this.foldAmount });
    console.log(this.newModel);
    this.meshThree.setModel(this.newModel);
  }

  set foldAmount(value: number | string) {
    const number = typeof value === "number" ? value : parseFloat(value);
    this.#foldAmount = !Number.isNaN(number) ? number : 0.0;
    console.log("fold amount", this.#foldAmount);
    this.newModel?.setCreasePercent(this.foldAmount);
  }

  get foldAmount(): number {
    return this.#foldAmount;
  }

  set strain(value: boolean) {
    this.#strain = !!value;
    console.log("strain", this.#strain);
    //model.setStrain(strain);
  }

  get strain(): boolean {
    return this.#strain;
  }

  set shadows(shadows: boolean) {
    this.#shadows = shadows;
    this.meshThree.frontMesh.castShadow = shadows;
    this.meshThree.frontMesh.receiveShadow = shadows;
    // this.meshThree.backMesh.castShadow = shadows;
    this.meshThree.backMesh.receiveShadow = shadows;
  }

  get shadows(): boolean {
    return this.#shadows;
  }

  set scene(newScene: THREE.Scene) {
    console.log("set scene");
    this.meshThree.setScene(newScene);
  }

  // When the user pulls on a node, call this method
  // it will relay the information to the solver
  nodeDidMove(): void {
    //return this.newModel.nodeDidMove();
  }

  // One call to origami simulator's solver
  compute(): void {
    // error is the global error in the folding of the model
    // not a computational error.
    this.error = this.newModel?.solve(100, this.strain);
    this.meshThree.sync(this.newModel);
    //meshThree.needsUpdate();
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
    console.log("set active");
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
    console.log("integration", value);
    this.newModel?.setIntegration(value);
  }

  set axialStiffness(value: number) {
    console.log("axial stiffness", value);
    this.newModel?.setAxialStiffness(value);
  }

  set faceStiffness(value: number) {
    console.log("face stiffness", value);
    this.newModel?.setFaceStiffness(value);
  }

  set joinStiffness(value: number) {
    console.log("join stiffness", value);
    this.newModel?.setJoinStiffness(value);
  }

  set creaseStiffness(value: number) {
    console.log("crease stiffness", value);
    this.newModel?.setCreaseStiffness(value);
  }

  set dampingRatio(value: number) {
    console.log("damping ratio", value);
    this.newModel?.setDampingRatio(value);
  }

  /**
   * @description Reset the vertices of the model to their original position
   */
  reset(): number {
    return this.newModel.reset();
  }

  /**
   * @description Stop the compute loop and free all associated memory
   */
  dealloc(): void {
    this.active = false;
    this.newModel.dealloc();
  }

  //export() { return newModel.export(); }
  export() {
    return {};
  }

  getMesh() {
    return this.meshThree;
  }
  getModel() {
    return this.newModel;
  }
  getMaterials() {
    return this.meshThree.materials;
  }
  getLines() {
    return this.meshThree.lines;
  }

  set frontVisible(value: boolean) {
    this.meshThree.frontMesh.visible = value;
  }
  set backVisible(value: boolean) {
    this.meshThree.backMesh.visible = value;
  }

  set frontColor(color: string | number) {
    this.meshThree.materials.front.color.set(color);
  }
  set backColor(color: string | number) {
    this.meshThree.materials.back.color.set(color);
  }

  // set all line assignments to one color
  set lineColor(color: string | number) {
    this.meshThree.setLineColor(color);
  }

  // line colors by assignment type
  set boundaryColor(color: string | number) {
    this.meshThree.setBoundaryColor(color);
  }
  set mountainColor(color: string | number) {
    this.meshThree.setMountainColor(color);
  }
  set valleyColor(color: string | number) {
    this.meshThree.setValleyColor(color);
  }
  set flatColor(color: string | number) {
    this.meshThree.setFlatColor(color);
  }
  set joinColor(color: string | number) {
    this.meshThree.setJoinColor(color);
  }
  set unassignedColor(color: string | number) {
    this.meshThree.setUnassignedColor(color);
  }

  // set the materials directly
  set materialFront(material: THREE.Material) {
    this.meshThree.setMaterialFront(material);
  }
  set materialBack(material: THREE.Material) {
    this.meshThree.setMaterialBack(material);
  }

  setMaterialStrain(material: THREE.Material) {
    return this.meshThree.setMaterialStrain(material);
  }
  setMaterialLine(material: THREE.Material, assignments: string[]) {
    return this.meshThree.setMaterialLine(material, assignments);
  }
}
