import { HSLA } from '../types';

const createHslaString = (hsla: HSLA) => {
  const string = `hsla(${hsla.hue}, ${hsla.saturation}%, ${hsla.lightness}%, ${hsla.alpha})`;
  return string;
};

export default createHslaString;
