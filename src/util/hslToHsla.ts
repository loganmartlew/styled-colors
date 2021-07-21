import { HSLA } from '../types';

const hslToHsla = (hsl: string): HSLA => {
  const hslColorRegex = /^hsl\(\d{1,3}, ?\d{1,3}%, ?\d{1,3}%\)$/;
  if (!hslColorRegex.test(hsl))
    throw new Error('Provided string is not a valid hsl color');

  const hslValuesString = hsl.slice(4, -1);

  const values = hslValuesString.split(',').map(value => {
    const trimmedValue = value.trim();

    if (trimmedValue.charAt(trimmedValue.length - 1) === '%') {
      return +trimmedValue.slice(0, -1);
    }

    return +trimmedValue;
  });

  return {
    hue: values[0],
    saturation: values[1],
    lightness: values[2],
    alpha: 1,
  };
};

export default hslToHsla;
