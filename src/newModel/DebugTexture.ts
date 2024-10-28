import {
  initializeWebGL,
  createProgramFromSource,
  //loadVertexData,
  makeTexture,
} from "./WebGL.ts";

const vertexShader = `attribute vec4 a_position;
attribute vec2 a_texcoord;
uniform mat4 u_matrix;
varying vec2 v_texcoord;
void main() {
  gl_Position = u_matrix * a_position;
  v_texcoord = a_texcoord;
}`;

const fragmentShader = `precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
void main() {
  vec4 color = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(color.rgb, 1.0);
}`;

export class DebugTexture {
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  program: WebGLProgram;

  texture: WebGLTexture;
  textureWidth: number;
  textureHeight: number;
  type: string = "FLOAT";

  positionLocation: GLint;
  texcoordLocation: GLint;
  matrixLocation: WebGLUniformLocation;
  textureLocation: WebGLUniformLocation;

  positionBuffer: WebGLBuffer;
  texcoordBuffer: WebGLBuffer;

  constructor(canvas: HTMLCanvasElement) {
    const { gl } = initializeWebGL(canvas);
    this.gl = gl;
    this.program = createProgramFromSource(this.gl, vertexShader, fragmentShader);

    const ext = gl.getExtension("OES_texture_float");
    if (!ext) {
      alert("this machine or browser does not support OES_texture_float");
    }
    //var linear =  gl.getExtension("OES_texture_float_linear");
    //if (!linear) {
    //  alert("this machine or browser does not support  OES_texture_float_linear");
    //}

    this.positionLocation = this.gl.getAttribLocation(this.program, "a_position");
    this.texcoordLocation = this.gl.getAttribLocation(this.program, "a_texcoord");
    this.matrixLocation = this.gl.getUniformLocation(this.program, "u_matrix");
    this.textureLocation = this.gl.getUniformLocation(this.program, "u_texture");
    console.log("constructor");
    console.log(this.positionLocation);
    console.log(this.texcoordLocation);
    console.log(this.matrixLocation);
    console.log(this.textureLocation);

    // Put a unit quad in the buffer
    const positions = [-1, -1, -1, 1, 1, -1, 1, -1, -1, 1, 1, 1];
    const texcoords = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];

    this.positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(positions),
      this.gl.STATIC_DRAW,
    );

    // Create a buffer for texture coords
    this.texcoordBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(texcoords),
      this.gl.STATIC_DRAW,
    );
  }

  setPixels(
    data: ArrayBufferView,
    width: number,
    height: number,
    type: string = "FLOAT",
  ) {
    this.textureWidth = width;
    this.textureHeight = height;
    this.type = type;

    this.texture = makeTexture(
      this.gl,
      this.textureWidth,
      this.textureHeight,
      this.gl[this.type],
      data,
    );
  }

  // Unlike images, textures do not have a width and height associated
  // with them so we'll pass in the width and height of the texture
  draw() {
    const matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
    this.gl.useProgram(this.program);

    // Setup the attributes to pull data from our buffers
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.enableVertexAttribArray(this.positionLocation);
    this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, false, 0, 0);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer);
    this.gl.enableVertexAttribArray(this.texcoordLocation);
    this.gl.vertexAttribPointer(this.texcoordLocation, 2, this.gl.FLOAT, false, 0, 0);

    this.gl.uniformMatrix4fv(this.matrixLocation, false, matrix);
    this.gl.uniform1i(this.textureLocation, 0);

    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
  }
}
