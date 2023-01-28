/**
 * Created by amandaghassaei on 5/6/17.
 */
// try to get rid of this import
import * as THREE from "three";
/**
 * @description Merge the new computed vertices coordinates back into
 * the original FOLD graph, update the edges_foldAngle to their current
 * fold angle as well, and if the user chooses, replace the faces with
 * their triangulated counterparts, creating additional "J" (join) edges.
 */
const exportFOLD = ({ model }) => {
	// todo. all of this
	const geo = new THREE.Geometry().fromBufferGeometry(model.getGeometry());

	if (geo.vertices.length === 0 || geo.faces.length === 0) {
		globals.warn("No geometry to save.");
		return;
	}
	const FOLD = {};
	FOLD.vertices_coords = geo.vertices.map(v => [v.x, v.y, v.z]);
	FOLD.frame_classes = ["singleModel"];
	FOLD.frame_attributes = ["3D"];

	const useTriangulated = globals.triangulateFOLDexport;
	const fold = globals.pattern.getFoldData(!useTriangulated);
	json.edges_vertices = fold.edges_vertices;
	const assignment = [];
	for (let i = 0; i < fold.edges_assignment.length; i += 1) {
		if (fold.edges_assignment[i] === "C") assignment.push("B");
		else assignment.push(fold.edges_assignment[i]);
	}
	json.edges_assignment = assignment;
	json.faces_vertices = fold.faces_vertices;

	if (globals.exportFoldAngle) {
		json.edges_foldAngle = fold.edges_foldAngle;
	}

	const json = {
		file_spec: 1.1,
		file_creator: "Origami Simulator: http://git.amandaghassaei.com/OrigamiSimulator/",
		file_author: $("#foldAuthor").val(),
		frame_title: filename,
		frame_classes: ["singleModel"],
		frame_attributes: ["3D"],
		frame_unit: globals.foldUnits,
		vertices_coords: [],
		edges_vertices: [],
		edges_assignment: [],
		faces_vertices: []
	};

	const blob = new Blob([JSON.stringify(json, null, 4)], { type: "application/octet-binary" });
	saveAs(blob, filename + ".fold");
};

export default exportFOLD;
