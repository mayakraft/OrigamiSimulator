/**
 * Created by ghassaei on 2/22/17.
 */
import type { FOLD } from "./types.ts";
import * as THREE from "three";
import { Model } from "./model/index.ts";
import { DynamicSolver } from "./dynamicSolver/index.ts";

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
  model: Model;
  solver: DynamicSolver;

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
    this.model = new Model({ scene });
    this.solver = new DynamicSolver();
    this.onCompute = onCompute;
    this.error = 0;
    this.#foldAmount = 0.0;
    this.#strain = false;
    this.#shadows = false;
    this.#active = false;
    console.log("Model", this.model);
    console.log("DynamicSolver", this.solver);
  }

  /**
   * @description this load method can throw an error. wrap it in a try catch
   * and deliver the error to the end user.
   */
  load(fold: FOLD): void {
    this.model.load(fold);
    this.solver.setModel(this.model, { creasePercent: this.#foldAmount });
  }

  set foldAmount(value: number | string) {
    const number = typeof value === "number" ? value : parseFloat(value);
    this.#foldAmount = !Number.isNaN(number) ? number : 0.0;
    this.solver.setCreasePercent(this.#foldAmount);
  }

  get foldAmount(): number {
    return this.#foldAmount;
  }

  set strain(value: boolean) {
    this.#strain = !!value;
    this.model.setStrain(this.#strain);
    console.log("strain", this.#strain);
  }

  get strain(): boolean {
    return this.#strain;
  }

  set shadows(shadows: boolean) {
    this.#shadows = shadows;
    this.model.frontMesh.castShadow = shadows;
    this.model.frontMesh.receiveShadow = shadows;
    // this.model.backMesh.castShadow = shadows;
    this.model.backMesh.receiveShadow = shadows;
  }

  get shadows(): boolean {
    return this.#shadows;
  }

  set scene(newScene: THREE.Scene) {
    console.log("set scene");
    this.model.setScene(newScene);
  }

  /**
   * When the user pulls on a node, call this method,
   * it will relay the information to the solver
   */
  nodeDidMove(): void {
    return this.solver.nodeDidMove();
  }

  /**
   * @description One call to origami simulator's solver
   */
  compute(): void {
    // error is the global error in the folding of the model
    // not a computational error.
    this.error = this.solver.solve(1, this.#strain);
    //this.error = this.solver.solve(100, this.#strain);
    this.model.needsUpdate();
    // reset single loop variables
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

  /**
   * @description Activate origami simulator's compute loop.
   */
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

  /**
   * @description various solver settings
   */
  set integration(value: string) {
    console.log("integration", value);
    this.solver.setIntegration(value);
  }

  set axialStiffness(value: number) {
    console.log("axial stiffness", value);
    this.solver.setAxialStiffness(value);
    this.model.setAxialStiffness(value);
    this.solver.update();
  }

  set faceStiffness(value: number) {
    console.log("face stiffness", value);
    this.solver.setFaceStiffness(value);
    this.solver.update();
  }

  set joinStiffness(value: number) {
    console.log("join stiffness", value);
    this.model.setJoinStiffness(value);
    this.solver.update();
  }

  set creaseStiffness(value: number) {
    console.log("crease stiffness", value);
    this.model.setCreaseStiffness(value);
    this.solver.update();
  }

  set dampingRatio(value: number) {
    console.log("damping ratio", value);
    this.model.setDampingRatio(value);
    this.solver.update();
  }
  /**
   * @description Reset the vertices of the model to their original position
   */
  reset(): number {
    return this.solver.reset();
  }

  /**
   * @description Stop the compute loop and free all associated memory
   */
  dealloc(): void {
    this.active = false;
    this.model.dealloc();
    this.solver.dealloc();
  }

  export() {
    return this.model.export();
  }

  getMaterials() {
    return this.model.materials;
  }
  getLines() {
    return this.model.lines;
  }

  set frontVisible(value: boolean) {
    this.model.frontMesh.visible = value;
  }
  set backVisible(value: boolean) {
    this.model.backMesh.visible = value;
  }

  set frontColor(color: string | number) {
    this.model.materials.front.color.set(color);
  }
  set backColor(color: string | number) {
    this.model.materials.back.color.set(color);
  }
  // set all line assignments to one color
  set lineColor(color: string | number) {
    this.model.setLineColor(color);
  }
  // line colors by assignment type
  set boundaryColor(color: string | number) {
    this.model.setBoundaryColor(color);
  }
  set mountainColor(color: string | number) {
    this.model.setMountainColor(color);
  }
  set valleyColor(color: string | number) {
    this.model.setValleyColor(color);
  }
  set flatColor(color: string | number) {
    this.model.setFlatColor(color);
  }
  set joinColor(color: string | number) {
    this.model.setJoinColor(color);
  }
  set unassignedColor(color: string | number) {
    this.model.setUnassignedColor(color);
  }

  // set the materials directly
  set materialFront(material: THREE.Material) {
    this.model.setMaterialFront(material);
  }
  set materialBack(material: THREE.Material) {
    this.model.setMaterialBack(material);
  }

  setMaterialStrain(material: THREE.Material) {
    return this.model.setMaterialStrain(material);
  }
  setMaterialLine(material: THREE.Material, assignments: string[]) {
    return this.model.setMaterialLine(material, assignments);
  }
}
