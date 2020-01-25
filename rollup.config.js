import { string } from "rollup-plugin-string";
import cleanup from "rollup-plugin-cleanup";
import babel from "rollup-plugin-babel";
import minify from "rollup-plugin-babel-minify";

module.exports = [{
  input: "js/main.js",
  output: {
    name: "OrigamiSimulator",
    file: "origami-simulator.js",
    format: "umd",
    banner: "/* Origami Simulator (c) Amanda Ghassaei, MIT License */"
  },
  plugins: [
    cleanup({
      comments: "none",
      maxEmptyLines: 0,
    }),
    babel({
      babelrc: false,
      presets: [["@babel/env", { modules: false }]],
    }),
    string({
      include: ["**/*.frag", "**/*.vert"], // import shaders files
    }),
  ],
},
{
  input: "js/main.js",
  output: {
    name: "OrigamiSimulator",
    file: "origami-simulator.min.js",
    format: "umd",
    banner: "/* Origami Simulator (c) Amanda Ghassaei, MIT License */"
  },
  plugins: [
    cleanup({ comments: "none" }),
    babel({
      babelrc: false,
      presets: [["@babel/env", { modules: false }]],
    }),
    minify({ mangle: { names: false } }),
    string({
      include: ["**/*.frag", "**/*.vert"], // import shaders files
    }),
  ],
}
];
