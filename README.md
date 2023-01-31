# Origami Simulator

This is a fork of Origami Simulator, by Amanda Ghassaei; see the [original repo](https://github.com/amandaghassaei/OrigamiSimulator) for an introduction.

The primary purpose of the rewrite is to uncouple the codebase from its frontend and UI. This allows Origami Simulator to be instanced (multiple times even) inside of a custom Javascript framework, React, Svelte, SolidJS, etc..

# examples

This repo contains simple example apps implemented in a few Javascript frameworks.

|   |   |   |
|---|---|---|
| ✅ | Svelte | [svelte/](https://github.com/robbykraft/OrigamiSimulator/tree/master/svelte) |
| ✅ | Solid JS | [solidjs/](https://github.com/robbykraft/OrigamiSimulator/tree/master/solidjs) |
| ⚠️ | React JS | [reactjs/](https://github.com/robbykraft/OrigamiSimulator/tree/master/react) |
| ✅ | Vanilla JS | [vanillajs/](https://github.com/robbykraft/OrigamiSimulator/tree/master/vanilla) |

To run the examples, clone this repository and run `npm i` **twice, in two directories**:

- in the root of this project (this installs Origami Simulator's dependencies)
- choose a framework (Svelte, SolidJS...), cd into that directory and run `npm i` again.

Everything should be installed. Run the app using the standard command according to whichever framework you chose (`npm run dev` for Svelte/SolidJS).

> **React JS** might be complete, but it is suffering webpack issues (['fs' polyfill](https://stackoverflow.com/questions/70591567/module-not-found-error-cant-resolve-fs-in-react), [outside src dir](https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory), I just don't care enough to fix it. *if anyone else wants to...*)
>
> **Vanilla JS** example is *extremely* bare bones

# installation

To incorporate Origami Simulator into your existing project, copy the `src/` directory in the root of this repository, and install Origami Simulator's dependencies:

```
npm i three fold earcut
```

Now you can create an instance of OrigamiSimulator. Getting an instance up and running is simple, if you want some of the more advanced features like the vertex-grab UI, maybe check the framework examples for an implementation example.

# usage

The workflow goes something like this.

You are in charge of setting up and managing three.js, you get to decorate the scene as you like, including lighting, but OrigamiSimulator will add and manage the origami model.

1. initialize a three.js renderer, scene, camera, and animation loop. (there are hundreds of tutorials for this)
2. initialize origami simulator by passing in the three.js scene.
3. setup up any lighting or UI controls like trackball.

```js
import OrigamiSimulator from "./src/index";

const origamiSimulator = OrigamiSimulator({ scene });
```

now the app should run. Interface with your `origamiSimulator` instance:

- `load()` load in an origami model in FOLD format
- `setActive(boolean)` turn on/off origami simulator's compute loop
- `setFoldAmount(float)` set the current fold angle between 0 and 1
- `setStrain(boolean)` override the material to visualize strain forces
- `setShadows(boolean)` turn on three.js shadows
- `dealloc()` deallocate origami simulator when done,
- `nodeDidMove()` if you implement a UI for grabbing vertices, call this when a vertex is pulled

Todo: expose materials as setters and getters too, or perhaps more simply colors of the material. currently you need to modify the source code for this.

# dependencies

- [three](https://www.npmjs.com/package/three)
- [fold](https://www.npmjs.com/package/fold)
- [earcut](https://www.npmjs.com/package/earcut)

and then one bundler-dependent (webpack/vite/...) detail, we need to load raw text (shaders), currently setup to support vite.

# dev notes

### shader files

Loading the raw text shader files (`.frag`, `.vert`) has been a persistent source of half-solutions. All shader file references are confined to one file inside the DynamicSolver and currently their path is suffixed with `?raw`. This syntax is specific to the [Vite bundler](https://vitejs.dev/), used by both Svelte and SolidJS.

```js
import vertexShader from "../shaders/vertexShader.vert?raw";
```

Note that this is a current limitation across all JS frameworks, and this particular work around is currently hard-coded into the source.

# license

amandaghassaei/OrigamiSimulator is licensed under the [MIT License](https://github.com/amandaghassaei/OrigamiSimulator/blob/main/LICENSE)
