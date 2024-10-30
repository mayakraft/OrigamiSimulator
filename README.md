# Origami Simulator

This is a fork of Origami Simulator, by Amanda Ghassaei; see the [original repo](https://github.com/amandaghassaei/OrigamiSimulator) for an introduction.

The purpose of the rewrite is to uncouple the backend from the frontend and UI. Additionally, Three.js is no longer a required dependency for the solver. You can use the Three.js Mesh renderer, or use a different library, or run the solver with no front end. Also, the library has been ported from Javascript to Typescript.

The input file format is [FOLD](https://github.com/edemaine/FOLD/). The original Origami Simulator repo contains an SVG to FOLD converter which is not present here.

# source

the `src/` folder contains all of Origami Simulator's source code. the examples are in the various other directories.

- `src/fold/` methods pertaining to the FOLD file format.
- `src/shaders/` all shader files, including the python script to bundle (read below).
- `src/simulator/` origami simulator
- `src/three/` all three.js files, mesher, raytracer.

# examples

A few examples have been written using some popular Javascript front-ends.

|   |   |   |
|---|---|---|
| ✅ | [Svelte](https://svelte.dev) | svelte/ |
| ⚠️  | [Solid JS](https://www.solidjs.com/) | solidjs/ |
| ⚠️  | [React JS](https://reactjs.org/) | reactjs/ |

(sorry, I only maintain the Svelte package. The others are in need of updating.)

To run an example:

1. `npm i` in the root directory
2. `npm i` *again* inside of one of the examples, `cd svelte/` (or solidjs/ or reactjs/)
3. `npm run dev` in the example dir to start the app

# known issues

- the Raycasters() class (Raycasters.ts) "mouseup" event is not firing, this is potentially due to [a known Three.js issue](https://discourse.threejs.org/t/mouseup-event-does-not-work-along-with-orbitcontrols/20432). The result is when switching tools to "pull", there is a momentary jerking of the mesh due to the raycasterPullVertex still containing a vertex instead of being cleared.

# ! all information below here is out of date and in need of an update !

# installation

To incorporate Origami Simulator into your existing project, copy the `src/` directory in the root of this repository, and install Origami Simulator's dependencies:

```bash
npm i three earcut
```

Now you can create an instance of Origami Simulator. Getting an instance up and running is simple, if you want some of the more advanced features like the vertex-grab UI, maybe check the framework examples for an implementation example.

# usage

The workflow goes something like this.

You are in charge of setting up and managing three.js, you get to decorate the scene as you like, including lighting, but Origami Simulator will add and manage the origami model.

1. initialize a three.js renderer, scene, camera, and animation loop. (there are hundreds of tutorials for this)
2. initialize origami simulator by passing in the three.js scene.
3. setup up any lighting or UI controls like trackball.

```js
import OrigamiSimulator from "./src/index";
const origamiSimulator = OrigamiSimulator({ scene });
```

now the app should run. Interface with your `origamiSimulator` instance with these object methods:

### api

- `load(object)` load in an origami model in FOLD format
- `setActive(boolean)` turn on/off origami simulator's compute loop
- `setFoldAmount(float)` set the current fold angle between 0 and 1
- `reset()` reset the vertices back to their initial position
- `dealloc()` deallocate origami simulator when done
- `nodeDidMove()` if you implement a UI for grabbing vertices, call this when a vertex is pulled

style

- `setStrain(boolean)` override the material to visualize strain forces
- `setShadows(boolean)` turn on three.js shadows
- `setFrontColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setBackColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setLineColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setBoundaryColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setMountainColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setValleyColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setFlatColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setJoinColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setUnassignedColor(color)` color hex (0xFF00FF) or string "#FF00FF"
- `setMaterialFront(material)` three.js material
- `setMaterialBack(material)` three.js material
- `setMaterialStrain(material)` three.js material
- `setMaterialLine(material, assignments)` three.js material, array of assignments like ["B", "F"]
- `getMaterials()` get the three.js materials in an object sorted by type

advanced solver settings

- `setIntegration(string)` "euler" or "verlet"
- `setAxialStiffness(number)` default 20
- `setFaceStiffness(number)` default 0.2
- `setJoinStiffness(number)` default 0.7
- `setCreaseStiffness(number)` default 0.7
- `setDampingRatio(number)` default 0.45

for example,

```js
const sim = OrigamiSimulator({ scene });
sim.load(FOLD);
sim.setActive(true);
sim.setFoldAmount(0.5);
```

# dependencies

- [three](https://www.npmjs.com/package/three)
- [earcut](https://www.npmjs.com/package/earcut)

# dev notes

### shader files

This project bundles the shader files (`.frag`, `.vert`) into string type variables in a single javascript file. Javascript projects otherwise have inconsistent solutions to loading a raw text file. This is a nice work around. **If you modify the shader files, you must recompile the bundle**, run:

```bash
cd src/dynamicSolver/shaders
python bundle.py
```

# license

amandaghassaei/OrigamiSimulator is licensed under the [MIT License](https://github.com/amandaghassaei/OrigamiSimulator/blob/main/LICENSE)
