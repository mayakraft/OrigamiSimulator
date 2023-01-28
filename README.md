# Origami Simulator

This is a fork of Origami Simulator, by Amanda Ghassaei; see the [original repo](https://github.com/amandaghassaei/OrigamiSimulator) for an introduction.

The primary purpose of the rewrite is to uncouple the codebase from its frontend and UI. This allows Origami Simulator to be instanced (multiple times even) inside of a custom Javascript framework, React, Svelte, SolidJS, etc..

# examples

To run the examples, clone this repository and run `npm i` **twice, in two directories**:

- in the root of this project (this installs Origami Simulator's dependencies)
- choose a framework (Svelte, SolidJS...), cd into that directory and run `npm i` again.

Everything should be installed. Run the app using the standard command according to whichever framework you chose (`npm run dev` for Svelte/SolidJS).

# installation

To incorporate Origami Simulator into your existing project, copy the `src/` directory in the root of this repository, and install Origami Simulator's dependencies:

```
npm i three fold earcut numeric
```

Now you can create an instance of OrigamiSimulator. Getting an instance up and running is simple, if you want some of the more advanced features like the vertex-grab UI, maybe check the framework examples for an implementation example.

# usage

The workflow goes something like this.

You are in charge of setting up and managing three.js, meaning, you get to decorate the scene as you like, including lighting, but OrigamiSimulator will add and manage/update the origami model.

1. initialize a three.js renderer, scene, camera, and animation loop. (there are hundreds of tutorials for this)
2. initialize this simulator by passing in the renderer, scene, and camera.
3. you are in charge of setting up any lighting or UI controls like trackball.

now the app should run. Interface with your origamiSimulator instance:

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
- [numeric](https://www.npmjs.com/package/numeric)

and then one bundler-dependent (webpack/vite/...) detail, we need to load raw text (shaders), currently setup to support vite.

# license

amandaghassaei/OrigamiSimulator is licensed under the [MIT License](https://github.com/amandaghassaei/OrigamiSimulator/blob/main/LICENSE)
