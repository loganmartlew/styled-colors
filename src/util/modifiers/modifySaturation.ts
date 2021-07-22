import { HSLA } from '../../types';

export const saturate = (percent: number, hsla: HSLA): HSLA => {
  const newSaturation = hsla.saturation + percent;
  return clampSaturation(newSaturation, hsla);
};

export const desaturate = (percent: number, hsla: HSLA): HSLA => {
  const newSaturation = hsla.saturation - percent;
  return clampSaturation(newSaturation, hsla);
};

const clampSaturation = (newValue: number, hsla: HSLA): HSLA => {
  if (newValue > 100) {
    return {
      ...hsla,
      saturation: 100,
    };
  }

  if (newValue < 0) {
    return {
      ...hsla,
      saturation: 0,
    };
  }

  return {
    ...hsla,
    saturation: newValue,
  };
};
