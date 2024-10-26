/**
 * Created by ghassaei on 2/24/16.
 */
import {
  createProgramFromSource,
  loadVertexData,
  makeTexture,
  initializeWebGL,
} from "./WebGL.ts";

function notSupported() {
  console.warn("floating point textures are not supported on your system");
}

export type GPUMathOptions = {
  creasePercent?: number;
  axialStiffness?: number;
  faceStiffness?: number;
  calcFaceStrain?: boolean;
};

// default settings for origami simulator
export const defaults: GPUMathOptions = Object.freeze({
  creasePercent: 0.0,
  axialStiffness: 20,
  faceStiffness: 0.2,
  calcFaceStrain: false,
});

export class GPUMath {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  version: number;
  programs: {
    [key: string]: {
      program: WebGLProgram;
      uniforms: { [key: string]: WebGLUniformLocation };
    };
  };
  frameBuffers: { [key: string]: WebGLFramebuffer };
  textures: { [key: string]: WebGLTexture };
  index: number;

  constructor() {
    this.canvas = window.document.createElement("canvas");
    this.canvas.setAttribute("style", "display:none;");
    this.canvas.setAttribute("class", "gpu-canvas");
    window.document.body.appendChild(this.canvas);
    const { gl, version } = initializeWebGL(this.canvas);
    this.gl = gl;
    this.version = version;
    console.log(`initializing webgl version ${version}`);
    if (version === 1) {
      if (!gl.getExtension("OES_texture_float")) {
        notSupported();
      }
    }
    this.programs = {};
    this.frameBuffers = {};
    this.textures = {};
    this.index = 0;

    gl.disable(gl.DEPTH_TEST);

    // const maxTexturesInFragmentShader = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    // console.log(`${maxTexturesInFragmentShader} textures max`);
  }

  /**
   * @param {string} programName
   * @param {string} vertexShader
   * @param {string} fragmentShader
   */
  createProgram(programName: string, vertexShader: string, fragmentShader: string) {
    const programs = this.programs;
    const existing = programs[programName];
    if (existing) {
      this.gl.useProgram(existing.program);
      // console.warn("already a program with the name " + programName);
      return;
    }
    const program = createProgramFromSource(this.gl, vertexShader, fragmentShader);
    this.gl.useProgram(program);
    loadVertexData(this.gl, program);
    programs[programName] = {
      program,
      uniforms: {},
    };
  }

  /**
   * @param {string} name
   * @param {number} width
   * @param {number} height
   * @param {string} typeName
   * @param {ArrayBufferView} data
   * @param {boolean} shouldReplace
   */
  initTextureFromData(
    name: string,
    width: number,
    height: number,
    typeName: string,
    data: ArrayBufferView,
    shouldReplace: boolean,
  ) {
    let texture = this.textures[name];

    if (texture) {
      if (!shouldReplace) {
        console.warn(`already a texture with the name ${name}`);
        return;
      }
      this.gl.deleteTexture(texture);
    }
    texture = makeTexture(this.gl, width, height, this.gl[typeName], data);
    this.textures[name] = texture;
  }

  /**
   * @param {string} textureName
   * @param {boolean} shouldReplace
   */
  initFrameBufferForTexture(textureName: string, shouldReplace: boolean) {
    let framebuffer = this.frameBuffers[textureName];
    if (framebuffer) {
      if (!shouldReplace) {
        console.warn(`framebuffer already exists for texture ${textureName}`);
        return;
      }
      this.gl.deleteFramebuffer(framebuffer);
    }
    const texture = this.textures[textureName];
    if (!texture) {
      console.warn(`texture ${textureName} does not exist`);
      return;
    }

    framebuffer = this.gl.createFramebuffer();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      texture,
      0,
    );

    // not sure what to do with this line, but it suppresses a
    // warning having to do with checkFramebufferStatus
    this.gl.getExtension("WEBGL_color_buffer_float");
    const check = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);
    if (check !== this.gl.FRAMEBUFFER_COMPLETE) {
      notSupported();
    }

    this.frameBuffers[textureName] = framebuffer;
  }

  /**
   * @param {string} programName
   * @param {string} name
   * @param {any} val
   * @param {string} type
   */
  setUniformForProgram(programName: string, name: string, val: unknown, type: string) {
    if (!this.programs[programName]) {
      console.log(programName, this.programs, this.programs[programName]);
      console.warn(`no program with name ${programName}`);
      return;
    }
    const uniforms = this.programs[programName].uniforms;
    let location = uniforms[name];
    if (!location) {
      location = this.gl.getUniformLocation(this.programs[programName].program, name);
      uniforms[name] = location;
    }
    switch (type) {
      case "1f":
        this.gl.uniform1f(location, val as number);
        break;
      case "2f":
        {
          const [a, b]: [number, number] = val as [number, number];
          this.gl.uniform2f(location, a, b);
        }
        break;
      case "3f":
        {
          const [a, b, c]: [number, number, number] = val as [number, number, number];
          this.gl.uniform3f(location, a, b, c);
        }
        break;
      case "1i":
        this.gl.uniform1i(location, val as number);
        break;
      default:
        console.warn(`no uniform for type ${type}`);
        break;
    }
  }

  /**
   * @param {number} width
   * @param {number} height
   */
  setSize(width: number, height: number) {
    this.gl.viewport(0, 0, width, height);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
  }

  /**
   * @param {string} programName
   */
  setProgram(programName: string) {
    const program = this.programs[programName];
    if (program) {
      this.gl.useProgram(program.program);
    }
  }

  /**
   * @param {string} programName
   * @param {string[]} inputTextures
   * @param {string} outputTexture
   * @param {number} [time]
   */
  step(
    programName: string,
    inputTextures: string[],
    outputTexture: string,
    time?: number,
  ) {
    this.gl.useProgram(this.programs[programName].program);
    // todo: are we passing time 0 to bypass this, or can we write if (time === undefined)
    if (time) {
      this.setUniformForProgram(programName, "u_time", time, "1f");
    }
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffers[outputTexture]);
    for (let i = 0; i < inputTextures.length; i += 1) {
      this.gl.activeTexture(this.gl.TEXTURE0 + i);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[inputTextures[i]]);
    }
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4); // draw to framebuffer
  }

  /**
   * @param {string} texture1Name
   * @param {string} texture2Name
   */
  swapTextures2(texture1Name: string, texture2Name: string) {
    let temp = this.textures[texture1Name];
    this.textures[texture1Name] = this.textures[texture2Name];
    this.textures[texture2Name] = temp;
    temp = this.frameBuffers[texture1Name];
    this.frameBuffers[texture1Name] = this.frameBuffers[texture2Name];
    this.frameBuffers[texture2Name] = temp;
  }

  /**
   * @param {string} texture1Name
   * @param {string} texture2Name
   * @param {string} texture3Name
   */
  swapTextures3(texture1Name: string, texture2Name: string, texture3Name: string) {
    let temp = this.textures[texture3Name];
    this.textures[texture3Name] = this.textures[texture2Name];
    this.textures[texture2Name] = this.textures[texture1Name];
    this.textures[texture1Name] = temp;
    temp = this.frameBuffers[texture3Name];
    this.frameBuffers[texture3Name] = this.frameBuffers[texture2Name];
    this.frameBuffers[texture2Name] = this.frameBuffers[texture1Name];
    this.frameBuffers[texture1Name] = temp;
  }

  /**
   * @returns {boolean}
   */
  readyToRead() {
    return (
      this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) === this.gl.FRAMEBUFFER_COMPLETE
    );
  }

  /**
   * @param {number} xMin
   * @param {number} yMin
   * @param {number} width
   * @param {number} height
   * @param {ArrayBufferView} array
   */
  readPixels(
    xMin: number,
    yMin: number,
    width: number,
    height: number,
    array: ArrayBufferView,
  ) {
    this.gl.readPixels(
      xMin,
      yMin,
      width,
      height,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      array,
    );
  }

  dealloc() {
    Object.values(this.programs)
      .map((el) => el.program)
      .forEach((prog) => this.gl.deleteProgram(prog));
    Object.values(this.frameBuffers).forEach((buf) => this.gl.deleteFramebuffer(buf));
    Object.values(this.textures).forEach((texture) => this.gl.deleteTexture(texture));
    this.programs = {};
    this.frameBuffers = {};
    this.textures = {};
    this.setSize(1, 1);
    window.document.body.removeChild(this.canvas);

    // var buf = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    // var numAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
    // for (var attrib = 0; attrib < numAttributes; ++attrib) {
    //   gl.vertexAttribPointer(attrib, 1, gl.FLOAT, false, 0, 0);
    // }
  }
}
