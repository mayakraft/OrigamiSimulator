# Origami Simulator

This is a fork of Origami Simulator, by Amanda Ghassaei; see the [original repo](https://github.com/amandaghassaei/OrigamiSimulator) for an introduction.

The primary purpose of the rewrite is to uncouple the codebase from its frontend and UI. This allows Origami Simulator to be instanced (multiple times even) inside of a custom Javascript framework, React, Svelte, SolidJS, etc..

# this repo

the `src/` folder contains all of Origami Simulator's source code.

there are 4 example apps which demo Origami Simulator, each implementation in a different framework:

- `reactjs/`
- `solidjs/`
- `svelte/`
- `vanilla/`

the `fold/` folder contains an example origami model, models are in [FOLD file format](https://github.com/edemaine/FOLD/).

# examples

This repo contains one simple example app implemented across a few Javascript frameworks.

|   |   |   |
|---|---|---|
| ✅ | [Svelte](https://svelte.dev) | svelte/ |
| ✅ | [Solid JS](https://www.solidjs.com/) | solidjs/ |
| ⚠️ | [React JS](https://reactjs.org/) | reactjs/ |
| ✅ | Vanilla JS \* | vanillajs/ |

To run an example:

1. `npm i` in the root directory
2. `cd svelte/` (or solidjs/ or reactjs/) and run `npm i` again
3. `npm run dev` to start the app

**Vanilla JS** only requires you run a local server, then open `index.html` [more details](#vanilla-js).

> \* the Vanilla JS example is the odd one out, it is much more simple compared to the others.
>
> the React example is buggy; use Svelte or Solid if you can.

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

Loading the raw text shader files (`.frag`, `.vert`) has been a persistent source of pain. Because these shader files are rarely modified, a Python script has been added which bundles all shader files into one `.js` file with named exports. If you ever modify the shader files, re-bundle them:

```bash
cd src/dynamicSolver/shaders
python bundle.py
```

### vanilla js

ES6 modules are finally supported natively on the browser (yay!) so the Origami Simulator source code can run directly without any bundling. However the technology is still very new, for example `index.html` makes use of an [importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) which is [only recently supported](https://caniuse.com/?search=importmap) on all major browsers. So, there may be some hiccups with this example (I always have to refresh one time after the initial page load).

# license

amandaghassaei/OrigamiSimulator is licensed under the [MIT License](https://github.com/amandaghassaei/OrigamiSimulator/blob/main/LICENSE)

# more dev notes

it's possible that we can remove this method `geometry.computeBoundingBox`, boundingBox is no longer being used by the shader, although, raycaster might still be using it.
