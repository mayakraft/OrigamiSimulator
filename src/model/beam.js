/**
 * Created by ghassaei on 9/16/16.
 */
import {
	magnitude,
	subtract,
} from "../general/math.js";

class Beam {
	/**
	 * @param {[SimulatorNode, SimulatorNode]} nodes
	 * @param {{ axialStiffness?: number, dampingRatio?: number}} options
	 */
	constructor(nodes, { axialStiffness, dampingRatio }) {
		/** @type {string} */
		this.type = "beam";

		/** @type {number} */
		this.axialStiffness = axialStiffness;

		/** @type {number} */
		this.dampingRatio = dampingRatio;

		/** @type {[[number, number, number], [number, number, number]]} */
		this.vertices = [nodes[0].originalPosition, nodes[1].originalPosition];

		/** @type {[SimulatorNode, SimulatorNode]} */
		this.nodes = nodes;

		/** @type {number} */
		this.originalLength = this.getLength();

		nodes[0].beams.push(this);
		nodes[1].beams.push(this);
	}

	/**
	 * @returns {[number, number, number]} vector
	 */
	getVector() {
		return subtract(this.vertices[1], this.vertices[0]);
	}

	/**
	 * @returns {number} distance between the original position of the two nodes
	 */
	getLength() {
		return magnitude(this.getVector());
	}

	/** @returns {void} */
	recalcOriginalLength() {
		this.originalLength = magnitude(this.getVector());
	}

	/** @returns {boolean} */
	isFixed() {
		return this.nodes[0].fixed && this.nodes[1].fixed;
	}

	// dynamic solve
	/** @returns {number} */
	getK() {
		return this.axialStiffness / this.getLength();
	}

	/** @returns {number} */
	getD() {
		return this.dampingRatio * 2 * Math.sqrt(this.getK() * this.getMinMass());
	}

	/** @returns {number} */
	getNaturalFrequency() {
		return Math.sqrt(this.getK() / this.getMinMass());
	}

	/** @returns {number} */
	getMinMass() {
		let minMass = this.nodes[0].simMass;
		if (this.nodes[1].simMass < minMass) minMass = this.nodes[1].simMass;
		return minMass;
	}

	/**
	 * @param {SimulatorNode} node a node that is a member of this beam
	 * @returns {SimulatorNode} the other node
	 */
	getOtherNode(node) {
		if (this.nodes[0] === node) return this.nodes[1];
		return this.nodes[0];
	}

	// deallocate
	destroy() {
		const self = this;
		this.nodes.forEach(node => {
			const index = node.beams.indexOf(self);
			if (index >= 0) node.beams.splice(index, 1);
		})
		this.vertices = [[0, 0, 0], [0, 0, 0]];
		this.nodes = undefined;
	}
}

export default Beam;
