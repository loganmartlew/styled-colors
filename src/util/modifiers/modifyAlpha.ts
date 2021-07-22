import { HSLA } from '../../types';

export const modifyAlpha = (alpha: number, hsla: HSLA): HSLA => {
  const clampedAlpha = clampAlpha(alpha);

  return {
    ...hsla,
    alpha: clampedAlpha,
  };
};

const clampAlpha = (alpha: number) => {
  const truncatedAlpha = +alpha.toPrecision(2);

  if (truncatedAlpha > 1) return 1;
  if (truncatedAlpha < 0) return 0;
  return truncatedAlpha;
};
