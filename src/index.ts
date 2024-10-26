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
    //meshThree.setModel(newModel);
  }

  set foldAmount(value: number | string) {
    const number = typeof value === "number" ? value : parseFloat(value);
    this.#foldAmount = !Number.isNaN(number) ? number : 0.0;
    this.newModel?.setCreasePercent(this.foldAmount);
  }

  get foldAmount(): number {
    return this.#foldAmount;
  }

  set strain(value: boolean) {
    this.#strain = !!value;
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
    this.newModel?.setIntegration(value);
  }

  set axialStiffness(value: number) {
    this.newModel?.setAxialStiffness(value);
    //newModel.update();
  }

  set faceStiffness(value: number) {
    this.newModel?.setFaceStiffness(value);
    //solver.update();
  }

  set joinStiffness(value: number) {
    this.newModel?.setJoinStiffness(value);
    //solver.update();
  }

  set creaseStiffness(value: number) {
    this.newModel?.setCreaseStiffness(value);
    //solver.update();
  }

  set dampingRatio(value: number) {
    this.newModel?.setDampingRatio(value);
    //solver.update();
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

  //export: () => newModel.export(),

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
  //setFrontColor(color: string | number) meshThree.materials.front.color.set(color),
  //setBackColor(color: string | number) meshThree.materials.back.color.set(color),
  //// set all line assignments to one color
  //setLineColor(color: string | number) meshThree.setLineColor(color),
  //// line colors by assignment type
  //setBoundaryColor(color: string | number) meshThree.setBoundaryColor(color),
  //setMountainColor(color: string | number) meshThree.setMountainColor(color),
  //setValleyColor(color: string | number) meshThree.setValleyColor(color),
  //setFlatColor(color: string | number) meshThree.setFlatColor(color),
  //setJoinColor(color: string | number) meshThree.setJoinColor(color),
  //setUnassignedColor: (color: string | number) meshThree.setUnassignedColor(color),
  //// set the materials directly
  //setMaterialFront(material: THREE.Material) meshThree.setMaterialFront(material),
  //setMaterialBack(material: THREE.Material) meshThree.setMaterialBack(material),
  setMaterialStrain(material: THREE.Material) {
    return this.meshThree.setMaterialStrain(material);
  }
  setMaterialLine(material: THREE.Material, assignments: string[]) {
    return this.meshThree.setMaterialLine(material, assignments);
  }

  // getters and setters
  //Object.defineProperty(app, "active", { get: () => active, set: setActive });
  //Object.defineProperty(app, "foldAmount", { get: () => foldAmount, set: setFoldAmount });
  //Object.defineProperty(app, "strain", { get: () => strain, set: setStrain });
  //Object.defineProperty(app, "shadows", { get: () => shadows, set: setShadows });
  //Object.defineProperty(app, "materials", { get: () => meshThree.materials });
}
