import { HSLA } from '../types';
import hexToHsla from './hexToHsla';

const hexAToHsla = (hexA: string): HSLA => {
  const hexColorRegex = /^#([a-fA-F0-9]{8}|[a-fA-F0-9]{4})$/;
  if (!hexColorRegex.test(hexA))
    throw new Error('Provided string is not a valid hexA color');

  const hex = removeAlpha(hexA);
  const hsla = hexToHsla(hex);

  const alphaHex = getAlpha(hexA);
  const alpha = parseInt(alphaHex, 16);
  const scaledAlpha = +(alpha / 255).toPrecision(2);

  return {
    ...hsla,
    alpha: scaledAlpha,
  };
};

const removeAlpha = (hexA: string) => {
  if (hexA.length === 9) {
    return hexA.slice(0, -2);
  }

  if (hexA.length === 5) {
    return hexA.slice(0, -1);
  }

  throw new Error('HexA value is wrong length');
};

const getAlpha = (hexA: string) => {
  if (hexA.length === 9) {
    return hexA.slice(-2);
  }

  if (hexA.length === 5) {
    return hexA.slice(-1);
  }

  throw new Error('HexA value is wrong length');
};

export default hexAToHsla;
