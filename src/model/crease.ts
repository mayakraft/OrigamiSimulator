/**
 * Created by amandaghassaei on 2/25/17.
 */

class Crease {
	/**
	 * @param {Beam} edge
	 * @param {number} index
	 * @param {0|1} type either a 0 or 1, where 0 indicates a "join" assignment
	 * (and no folding behavior), and 1 indicates a crease which moves.
	 * @param {[number, number]} faces
	 * @param {[SimulatorNode, SimulatorNode]} nodes
	 * @param {number} targetTheta
	 * @param {{
	 *   joinStiffness: number,
	 *   creaseStiffness: number,
	 *   dampingRatio: number
	 * }} options these options tend to be app-wide, not
	 * specific to any one crease-line.
	 */
	constructor(
		edge,
		index,
		type,
		faces,
		nodes,
		targetTheta,
		{ joinStiffness = 0.7, creaseStiffness = 0.7, dampingRatio = 0.45 },
	) {
		/** @type {number} */
		this.index = index;

		/** @type {0|1} */
		this.type = type;

		/** @type {Beam} */
		this.edge = edge;

		/** @type {[number, number]} */
		this.faces = [faces[0], faces[1]];

		// face[0] corresponds to node[0], face[1] to node[1]
		/** @type {[SimulatorNode, SimulatorNode]} */
		this.nodes = nodes;

		/** @type {number} */
		this.targetTheta = targetTheta;

		/** @type {number} */
		this.joinStiffness = joinStiffness;

		/** @type {number} */
		this.creaseStiffness = creaseStiffness;

		/** @type {number} */
		this.dampingRatio = dampingRatio;

		edge.nodes.forEach(node => node.invCreases.push(this));
		nodes[0].creases.push(this);
		nodes[1].creases.push(this);
	}

	/** @returns {number} */
	getK() {
		const length = this.edge.getLength();
		return (this.type === 0)
			? this.joinStiffness * length
			: this.creaseStiffness * length;
	}

	/** @returns {number} */
	getD() {
		return this.dampingRatio * 2 * Math.sqrt(this.getK());
	}

	/**
	 * @param {SimulatorNode} node
	 * @returns {0|1|2|3|4}
	 */
	getNodeIndex(node) {
		if (node === this.nodes[0]) { return 1; }
		if (node === this.nodes[1]) { return 2; }
		if (node === this.edge.nodes[0]) { return 3; }
		if (node === this.edge.nodes[1]) { return 4; }
		console.log("unknown node type");
		return 0;
	}

	destroy() {
		this.nodes.forEach(node => {
			const index = node.creases.indexOf(this);
			if (index >= 0) node.creases.splice(index, 1);
		});

		if (this.edge && this.edge.nodes) {
			for (let i = 0; i < this.edge.nodes.length; i += 1) {
				const index = this.edge.nodes[i].invCreases.indexOf(this);
				if (index >= 0) this.edge.nodes[i].invCreases.splice(index, 1);
			}
		}
		this.edge = undefined;
		this.nodes = undefined;
	}
}

export default Crease;
