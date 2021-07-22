import rgbToHsla from './rgbToHsla';
import { HSLA } from '../../types';

/**
 *
 * @param hex - Hex color string in format '#rrggbb'
 */
const hexToHsla = (hex: string): HSLA => {
  const hexColorRegex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  if (!hexColorRegex.test(hex))
    throw new Error('Provided string is not a valid hex color');

  const slicedHex = hex.slice(1);

  const redHex = getHexSlice(slicedHex, HexColor.R);
  const greenHex = getHexSlice(slicedHex, HexColor.G);
  const blueHex = getHexSlice(slicedHex, HexColor.B);

  const red = parseInt(redHex, 16);
  const green = parseInt(greenHex, 16);
  const blue = parseInt(blueHex, 16);

  return rgbToHsla(`rgb(${red}, ${green}, ${blue})`);
};

enum HexColor {
  R = 0,
  G = 1,
  B = 2,
}

const getHexSlice = (hex: string, modifier: HexColor) => {
  const startIdx = modifier;
  const endIdx = startIdx + 1;

  if (hex.length === 3) {
    const hexSlice = hex.slice(startIdx, endIdx);
    return hexSlice + hexSlice;
  }

  if (hex.length === 6) {
    return hex.slice(startIdx * 2, endIdx * 2); // Double indexes for doubled string length
  }

  throw new Error('Hex value is wrong length');
};

export default hexToHsla;
