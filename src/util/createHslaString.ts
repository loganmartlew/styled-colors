import { HSLA } from '../types';

/**
 * Function that converts an HSLA object to an HSLA string to be used in CSS
 * eg: 'hsla(240, 50%, 100%, 1)'
 *
 * - Hue between 0 and 360
 * - Saturation between 0 and 100
 * - Lightness between 0 and 100
 * - Alpha between 0 and 1
 *
 * @param hsla - Object containing hue, saturation, lightness, alpha
 * @returns hsla string in the format 'hsla(hue, saturation%, lightness%, alpha)
 */
const createHslaString = (hsla: HSLA) => {
  if (!hsla) throw new Error('HSLA color was not provided');

  if (hsla.hue == null) throw new Error('Hue was not provided');
  if (hsla.saturation == null) throw new Error('Saturation was not provided');
  if (hsla.lightness == null) throw new Error('Lightness was not provided');
  if (hsla.alpha == null) throw new Error('Alpha was not provided');

  if (hsla.hue < 0 || hsla.hue > 360)
    throw new Error('Hue was not in range 0-360');
  if (hsla.saturation < 0 || hsla.saturation > 100)
    throw new Error('Saturation was not in range 0-100');
  if (hsla.lightness < 0 || hsla.lightness > 100)
    throw new Error('Lightness was not in range 0-100');
  if (hsla.alpha < 0 || hsla.alpha > 1)
    throw new Error('Alpha was not in range 0-1');

  const string = `hsla(${hsla.hue}, ${hsla.saturation}%, ${hsla.lightness}%, ${hsla.alpha})`;
  return string;
};

export default createHslaString;
