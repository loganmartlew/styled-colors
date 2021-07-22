import { lighten, darken } from '../../../util/modifiers/modifyLightness';
import { HSLA } from '../../../types';

const baseHsla: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 50,
  alpha: 1,
};

{
  const lightnessModifier = 20;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    lightness: 70,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    lightness: 30,
  };

  test(`expect lightness to be ${expectedHslaPlus.lightness}`, () => {
    expect(lighten(lightnessModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect lightness to be ${expectedHslaMinus.lightness}`, () => {
    expect(darken(lightnessModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const lightnessModifier = 50;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    lightness: 100,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    lightness: 0,
  };

  test(`expect lightness to be ${expectedHslaPlus.lightness}`, () => {
    expect(lighten(lightnessModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect lightness to be ${expectedHslaMinus.lightness}`, () => {
    expect(darken(lightnessModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const lightnessModifier = 51;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    lightness: 100,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    lightness: 0,
  };

  test(`expect lightness to be ${expectedHslaPlus.lightness} (clamped)`, () => {
    expect(lighten(lightnessModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect lightness to be ${expectedHslaMinus.lightness} (clamped)`, () => {
    expect(darken(lightnessModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const lightnessModifier = 75;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    lightness: 100,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    lightness: 0,
  };

  test(`expect lightness to be ${expectedHslaPlus.lightness} (clamped)`, () => {
    expect(lighten(lightnessModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect lightness to be ${expectedHslaMinus.lightness} (clamped)`, () => {
    expect(darken(lightnessModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}
