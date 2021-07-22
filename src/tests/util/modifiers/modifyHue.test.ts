import { shiftHue } from '../../../util/modifiers/modifyHue';
import { HSLA } from '../../../types';

const baseHsla: HSLA = {
  hue: 180,
  saturation: 0,
  lightness: 0,
  alpha: 0.5,
};

{
  const hueModifier = 50;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    hue: 230,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    hue: 130,
  };

  test(`expect hue to be ${expectedHslaPlus.hue}`, () => {
    expect(shiftHue(hueModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect hue to be ${expectedHslaMinus.hue}`, () => {
    expect(shiftHue(-hueModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const hueModifier = 180;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    hue: 360,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    hue: 0,
  };

  test(`expect hue to be ${expectedHslaPlus.hue}`, () => {
    expect(shiftHue(hueModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect hue to be ${expectedHslaMinus.hue}`, () => {
    expect(shiftHue(-hueModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const hueModifier = 181;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    hue: 1,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    hue: 359,
  };

  test(`expect hue to be ${expectedHslaPlus.hue} (clamped)`, () => {
    expect(shiftHue(hueModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect hue to be ${expectedHslaMinus.hue} (clamped)`, () => {
    expect(shiftHue(-hueModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}

{
  const hueModifier = 300;

  const expectedHslaPlus: HSLA = {
    ...baseHsla,
    hue: 120,
  };

  const expectedHslaMinus: HSLA = {
    ...baseHsla,
    hue: 240,
  };

  test(`expect hue to be ${expectedHslaPlus.hue} (clamped)`, () => {
    expect(shiftHue(hueModifier, baseHsla)).toEqual(expectedHslaPlus);
  });

  test(`expect hue to be ${expectedHslaMinus.hue} (clamped)`, () => {
    expect(shiftHue(-hueModifier, baseHsla)).toEqual(expectedHslaMinus);
  });
}
