import { HSLA } from '../types';
import rgbToHsla from './rgbToHsla';

const rgbaToHsla = (rgba: string): HSLA => {
  const rgbaColorRegex =
    /^rgba\(\d{1,3}, ?\d{1,3}, ?\d{1,3}, ?(1|0|(0?\.\d{1,2}))\)$/;
  if (!rgbaColorRegex.test(rgba))
    throw new Error('Provided string is not a valid rgba color');

  const [red, green, blue, alphaString] = splitRgbAlpha(rgba);

  console.log(`rgb(${red}, ${green}, ${blue})`);
  const hsla = rgbToHsla(`rgb(${red}, ${green}, ${blue})`);
  const alpha = +(+alphaString).toPrecision(2);

  return {
    ...hsla,
    alpha,
  };
};

const splitRgbAlpha = (rgba: string) => {
  const valuesOnly = rgba.slice(5, -1);
  const values = valuesOnly.split(',').map(value => value.trim());

  if (values.length !== 4) throw new Error();

  return values;
};

export default rgbaToHsla;
