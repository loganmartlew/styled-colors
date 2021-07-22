import { saturate, desaturate } from '../../../util/modifiers/modifySaturation';
import { HSLA } from '../../../types';

const baseHsla: HSLA = {
  hue: 0,
  saturation: 50,
  lightness: 0,
  alpha: 1,
};

{
  const saturationModifier = 20;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    saturation: 70,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    saturation: 30,
  };

  test(`expect saturation to be ${expectedHslaPlus.saturation}`, () => {
    expect(saturate(saturationModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect saturation to be ${expectedHslaMinus.saturation}`, () => {
    expect(desaturate(saturationModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const saturationModifier = 50;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    saturation: 100,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    saturation: 0,
  };

  test(`expect saturation to be ${expectedHslaPlus.saturation}`, () => {
    expect(saturate(saturationModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect saturation to be ${expectedHslaMinus.saturation}`, () => {
    expect(desaturate(saturationModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const saturationModifier = 51;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    saturation: 100,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    saturation: 0,
  };

  test(`expect saturation to be ${expectedHslaPlus.saturation} (clamped)`, () => {
    expect(saturate(saturationModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect saturation to be ${expectedHslaMinus.saturation} (clamped)`, () => {
    expect(desaturate(saturationModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const saturationModifier = 75;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    saturation: 100,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    saturation: 0,
  };

  test(`expect saturation to be ${expectedHslaPlus.saturation} (clamped)`, () => {
    expect(saturate(saturationModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect saturation to be ${expectedHslaMinus.saturation} (clamped)`, () => {
    expect(desaturate(saturationModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}
