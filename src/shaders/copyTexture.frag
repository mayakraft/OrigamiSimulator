precision mediump float;
uniform sampler2D u_orig;
uniform vec2 u_textureDimNodes;
void main(){
  gl_FragColor = texture2D(u_orig, gl_FragCoord.xy/u_textureDimNodes);
}
