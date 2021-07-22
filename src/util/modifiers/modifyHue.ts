import { HSLA } from '../../types';

export const shiftHue = (degrees: number, hsla: HSLA) => {
  const newHue = hsla.hue + degrees;
  return clampHue(newHue, hsla);
};

const clampHue = (newValue: number, hsla: HSLA) => {
  if (newValue > 360) {
    return {
      ...hsla,
      hue: newValue - 360,
    };
  }

  if (newValue < 0) {
    return {
      ...hsla,
      hue: newValue + 360,
    };
  }

  return {
    ...hsla,
    hue: newValue,
  };
};
