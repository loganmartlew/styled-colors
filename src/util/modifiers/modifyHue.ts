import { HSLA } from '../../types';

export const shiftHue = (degrees: number, hsla: HSLA): HSLA => {
  const newHue = hsla.hue + degrees;
  const clampedHue = clampHue(newHue);
  return {
    ...hsla,
    hue: clampedHue,
  };
};

const clampHue = (newValue: number): number => {
  if (newValue > 360) {
    return clampHue(newValue - 360);
  }

  if (newValue < 0) {
    return clampHue(newValue + 360);
  }

  return newValue;
};
