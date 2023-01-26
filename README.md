# Origami Simulator

This is a fork of Origami Simulator, by Amanda Ghassaei; see the [original repo](https://github.com/amandaghassaei/OrigamiSimulator) for an introduction.

The primary purpose of the rewrite is to uncouple the codebase from its frontend and UI. This allows Origami Simulator to be instanced (multiple times even) inside of a custom Javascript app, including React, Svelte, SolidJS, etc..

# examples

To run the examples, clone this repository and run `npm i` in **two directories**:

- in the root of this project (this installs Origami Simulator's dependencies)
- inside the directory matching the name of your preferred JS app.

`cd` into the app directory and run the app (for example, Svelte or SolidJS start with `npm run dev`)

# installation

create your project in whatever app of choice. install these additional dependencies:

```
npm i three fold earcut numeric
```

see the examples in this repo for getting an app up and running.

# usage

The workflow goes something like this.
You are in charge of setting up and managing three.js.

1. initialize a three.js renderer, scene, camera, and animation loop. (there are hundreds of tutorials for this)
2. initialize this simulator by passing in the renderer, scene, and camera.
3. you are in charge of setting up any lighting or UI controls like trackball.

now the app should run.

- load a CP in FOLD format with: `.load(file)`
- use `.start()` and `.stop()` to start and stop the solver. (origami sim manages its own solver loop, separate from the animation loop)
- set optional strain visualization property (boolean): `.strain = true`
- change fold amount (float, 0.0-1.0): `.foldAmount = 0.5`
- when done, `dealloc()` will free memory.

Todo: currently playing around with what goes in ThreeView and what goes in OrigamiSimulator. currently the user needs to implement this method:

Todo: For now, customize three js materials inside model/materials.js.
Need to expose this as a setter/getter to the user, or
input using an options object, in similar fashion to how three js works.

```js
dragControls.nodePositionsDidChange = () => {
  simulator.modelDidChange();
};
```

# dependencies

- [three](https://www.npmjs.com/package/three)
- [fold](https://www.npmjs.com/package/fold)
- [earcut](https://www.npmjs.com/package/earcut)
- [numeric](https://www.npmjs.com/package/numeric)

and then one bundler-dependent (webpack/vite/...) detail, we need to load raw text (shaders), currently setup to support vite.

# license

amandaghassaei/OrigamiSimulator is licensed under the [MIT License](https://github.com/amandaghassaei/OrigamiSimulator/blob/main/LICENSE)
