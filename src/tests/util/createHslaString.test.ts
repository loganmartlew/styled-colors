import createHslaString from '../../util/createHslaString';
import { HSLA } from '../../types';

const colorDefault: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 0,
  alpha: 1,
};

const colorDefaultHsla = 'hsla(0, 0%, 0%, 1)';

test(`convert colorDefault to string, should be '${colorDefaultHsla}'`, () => {
  expect(createHslaString(colorDefault)).toBe(colorDefaultHsla);
});

const colorRed: HSLA = {
  hue: 0,
  saturation: 100,
  lightness: 50,
  alpha: 1,
};

const colorRedHsla = 'hsla(0, 100%, 50%, 1)';

test(`convert colorRed to string, should be '${colorRedHsla}'`, () => {
  expect(createHslaString(colorRed)).toBe(colorRedHsla);
});

const colorGreen: HSLA = {
  hue: 120,
  saturation: 100,
  lightness: 50,
  alpha: 1,
};

const colorGreenHsla = 'hsla(120, 100%, 50%, 1)';

test(`convert colorGreen to string, should be '${colorGreenHsla}'`, () => {
  expect(createHslaString(colorGreen)).toBe(colorGreenHsla);
});

const colorBlue: HSLA = {
  hue: 240,
  saturation: 100,
  lightness: 50,
  alpha: 1,
};

const colorBlueHsla = 'hsla(240, 100%, 50%, 1)';

test(`convert colorBlue to string, should be '${colorBlueHsla}'`, () => {
  expect(createHslaString(colorBlue)).toBe(colorBlueHsla);
});

const colorTransparent: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 0,
  alpha: 0,
};

const colorTransparentHsla = 'hsla(0, 0%, 0%, 0)';

test(`convert colorTransparent to string, should be '${colorTransparentHsla}'`, () => {
  expect(createHslaString(colorTransparent)).toBe(colorTransparentHsla);
});

const colorMissingSaturation = {
  hue: 0,
  lightness: 100,
  alpha: 1,
};

test(`color with missing property should throw`, () => {
  expect(() => createHslaString(colorMissingSaturation as HSLA)).toThrow(
    'Saturation was not provided'
  );
});

const colorLightnessOutOfRange = {
  hue: 0,
  saturation: 50,
  lightness: 361,
  alpha: 1,
};

test(`color with invalid property should throw`, () => {
  expect(() => createHslaString(colorLightnessOutOfRange as HSLA)).toThrow(
    'Lightness was not in range 0-100'
  );
});

type CreateHslaStringAny = (hsla?: HSLA) => string;
const createHslaStringAny: CreateHslaStringAny =
  createHslaString as CreateHslaStringAny;

test(`providing no arguments should throw`, () => {
  expect(() => createHslaStringAny()).toThrow('HSLA color was not provided');
});
