/**
 * @description compute the magnitude a 3D vector.
 * @param {[number, number, number]} v one 3D vector
 * @returns {number} one scalar
 */
export const magnitude = v => Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);

/**
 * @description compute the square-magnitude a 3D vector.
 * @param {[number, number, number]} v one 3D vector
 * @returns {number} one scalar
 */
export const magSquared = v => v[0] * v[0] + v[1] * v[1] + v[2] * v[2];

/**
 * @description normalize the input vector and return a new vector as a copy.
 * @param {[number, number, number]} v one 3D vector
 * @returns {[number, number, number]} one 3D vector
 */
export const normalize = (v) => {
	const m = magnitude(v);
	return m === 0 ? v : [v[0] / m, v[1] / m, v[2] / m];
};

/**
 * @description scale an input vector by one number, return a copy.
 * @param {[number, number, number]} v one 3D vector
 * @param {number} s one scalar
 * @returns {[number, number, number]} one 3D vector
 */
export const scale = (v, s) => [v[0] * s, v[1] * s, v[2] * s];

/**
 * @description add two vectors and return the sum as another vector,
 * do not modify the input vectors.
 * @param {[number, number, number]} v one 3D vector
 * @param {[number, number, number]} u one 3D vector
 * @returns {[number, number, number]} one 3D vector
 */
export const add = (v, u) => [v[0] + u[0], v[1] + u[1], v[2] + u[2]];

/**
 * @description subtract the second vector from the first,
 * return the result as a copy.
 * @param {[number, number, number]} v one 3D vector
 * @param {[number, number, number]} u one 3D vector
 * @returns {[number, number, number]} one 3D vector
 */
export const subtract = (v, u) => [v[0] - u[0], v[1] - u[1], v[2] - u[2]];

/**
 * @description compute the dot product of two 3D vectors.
 * @param {[number, number, number]} v one 3D vector
 * @param {[number, number, number]} u one 3D vector
 * @returns {number} one scalar
 */
export const dot = (v, u) => v[0] * u[0] + v[1] * u[1] + v[2] * u[2];

/**
 * @description compute the midpoint of two 3D vectors.
 * @param {[number, number, number]} v one 3D vector
 * @param {[number, number, number]} u one 3D vector
 * @returns {[number, number, number]} one 3D vector
 */
export const midpoint = (v, u) => scale(add(v, u), 0.5);

/**
 * @description the 3D cross product of two 3D vectors
 * @param {[number, number, number]} v one 3D vector
 * @param {[number, number, number]} u one 3D vector
 * @returns {[number, number, number]} one 3D vector
 */
export const cross = (v, u) => [
	v[1] * u[2] - v[2] * u[1],
	v[2] * u[0] - v[0] * u[2],
	v[0] * u[1] - v[1] * u[0],
];

/**
 * @description compute the distance between two 3D vectors
 * @param {[number, number, number]} v one 3D vector
 * @param {[number, number, number]} u one 3D vector
 * @returns {number} one scalar
 */
export const distance = (v, u) => {
	const a = v[0] - u[0];
	const b = v[1] - u[1];
	const c = v[2] - u[2];
	return Math.sqrt((a * a) + (b * b) + (c * c));
};

/**
 * @description return a copy of the input vector where
 * each element's sign flipped
 * @param {[number, number, number]} v one 3D vector
 * @returns {[number, number, number]} one 3D vector
 */
export const flip = v => [-v[0], -v[1], -v[2]];

/**
 * @description Convert hue-saturation-lightness values into
 * three RGB values, each between 0 and 1 (not 0-255).
 * @param {number} hue value between 0 and 360
 * @param {number} saturation value between 0 and 100
 * @param {number} lightness value between 0 and 100
 * @param {number | undefined} alpha the alpha component from 0 to 1
 * @returns {number[]} three values between 0 and 255, or four
 * if an alpha value is provided, where the fourth is between 0 and 1.
 * @linkcode Origami ./src/convert/svgParsers/colors/hexToRGB.js 10
 */
export const hslToRgb = (hue, saturation, lightness, alpha) => {
	const s = saturation / 100;
	const l = lightness / 100;
	/** @param {number} n */
	const k = n => (n + hue / 30) % 12;
	const a = s * Math.min(l, 1 - l);
	/** @param {number} n */
	const f = n => (
		l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
	);
	return alpha === undefined
		? [f(0) * 255, f(8) * 255, f(4) * 255]
		: [f(0) * 255, f(8) * 255, f(4) * 255, alpha];
};
