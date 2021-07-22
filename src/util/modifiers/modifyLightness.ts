import { HSLA } from '../../types';

export const lighten = (percent: number, hsla: HSLA): HSLA => {
  const newLightness = hsla.lightness + percent;
  return clampLightness(newLightness, hsla);
};

export const darken = (percent: number, hsla: HSLA): HSLA => {
  const newLightness = hsla.lightness - percent;
  return clampLightness(newLightness, hsla);
};

const clampLightness = (newValue: number, hsla: HSLA): HSLA => {
  if (newValue > 100) {
    return {
      ...hsla,
      lightness: 100,
    };
  }

  if (newValue < 0) {
    return {
      ...hsla,
      lightness: 0,
    };
  }

  return {
    ...hsla,
    lightness: newValue,
  };
};
