const verticesFaces = (model) => {
	const nodeFaces = [];
	for (let i = 0; i < model.nodes.length; i += 1) {
		nodeFaces.push([]);
		for (let j = 0; j < model.faces_vertices.length; j += 1) {
			if (model.faces_vertices[j].indexOf(i) >= 0) {
				nodeFaces[i].push(j);
			}
		}
	}
	return nodeFaces;
};

export default verticesFaces;
