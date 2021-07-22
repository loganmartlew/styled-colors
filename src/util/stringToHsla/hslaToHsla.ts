import { HSLA } from '../../types';

const hslaToHsla = (hsla: string): HSLA => {
  const hslaColorRegex =
    /^hsla\(\d{1,3}, ?\d{1,3}%, ?\d{1,3}%, ?(1|0|(0?\.\d{1,2}))\)$/;
  if (!hslaColorRegex.test(hsla))
    throw new Error('Provided string is not a valid hsla color');

  const hslValuesString = hsla.slice(5, -1);

  const values = hslValuesString.split(',').map(value => {
    const trimmedValue = value.trim();

    if (trimmedValue.charAt(trimmedValue.length - 1) === '%') {
      return +trimmedValue.slice(0, -1);
    }

    return +trimmedValue;
  });

  if (values[1] > 100 || values[1] < 0)
    throw new Error('Value for saturation is out of bounds');
  if (values[2] > 100 || values[2] < 0)
    throw new Error('Value for lightness is out of bounds');

  return {
    hue: values[0],
    saturation: values[1],
    lightness: values[2],
    alpha: values[3],
  };
};

export default hslaToHsla;
