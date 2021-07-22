import { modifyAlpha } from '../../../util/modifiers/modifyAlpha';
import { HSLA } from '../../../types';

const baseHsla: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 0,
  alpha: 0.5,
};

{
  const alpha = 0.2;

  const expectedHsla: HSLA = {
    ...baseHsla,
    alpha,
  };

  test(`expect alpha to be ${alpha}`, () => {
    expect(modifyAlpha(alpha, baseHsla)).toEqual(expectedHsla);
  });
}

{
  const alpha = 1;

  const expectedHsla: HSLA = {
    ...baseHsla,
    alpha,
  };

  test(`expect alpha to be ${alpha}`, () => {
    expect(modifyAlpha(alpha, baseHsla)).toEqual(expectedHsla);
  });
}

{
  const alpha = 1.4;

  const expectedHsla: HSLA = {
    ...baseHsla,
    alpha: 1,
  };

  test(`expect alpha to be 1 (clamped)`, () => {
    expect(modifyAlpha(alpha, baseHsla)).toEqual(expectedHsla);
  });
}

{
  const alpha = 14;

  const expectedHsla: HSLA = {
    ...baseHsla,
    alpha: 1,
  };

  test(`expect alpha to be 1 (clamped)`, () => {
    expect(modifyAlpha(alpha, baseHsla)).toEqual(expectedHsla);
  });
}

{
  const alpha = 0;

  const expectedHsla: HSLA = {
    ...baseHsla,
    alpha,
  };

  test(`expect alpha to be ${alpha}`, () => {
    expect(modifyAlpha(alpha, baseHsla)).toEqual(expectedHsla);
  });
}

{
  const alpha = -0.4;

  const expectedHsla: HSLA = {
    ...baseHsla,
    alpha: 0,
  };

  test(`expect alpha to be 0 (clamped)`, () => {
    expect(modifyAlpha(alpha, baseHsla)).toEqual(expectedHsla);
  });
}

{
  const alpha = -14;

  const expectedHsla: HSLA = {
    ...baseHsla,
    alpha: 0,
  };

  test(`expect alpha to be 0 (clamped)`, () => {
    expect(modifyAlpha(alpha, baseHsla)).toEqual(expectedHsla);
  });
}
