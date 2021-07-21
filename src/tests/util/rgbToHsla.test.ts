import rgbToHsla from '../../util/rgbToHsla';
import { HSLA } from '../../types';

const hslToString = (hsl: HSLA) => {
  return `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
};

const color1 = 'rgb(145, 116, 168)';
const hsl1: HSLA = {
  hue: 273,
  saturation: 23,
  lightness: 56,
  alpha: 1,
};

test(`rgb color '${color1} should be ${hslToString(hsl1)}'`, () => {
  expect(rgbToHsla(color1)).toEqual(hsl1);
});

const color2 = 'rgb(40, 188, 201)';
const hsl2: HSLA = {
  hue: 185,
  saturation: 67,
  lightness: 47,
  alpha: 1,
};

test(`rgb color '${color2} should be ${hslToString(hsl2)}'`, () => {
  expect(rgbToHsla(color2)).toEqual(hsl2);
});

const color3 = 'rgb(51, 39, 35)';
const hsl3: HSLA = {
  hue: 15,
  saturation: 19,
  lightness: 17,
  alpha: 1,
};

test(`rgb color '${color3} should be ${hslToString(hsl3)}'`, () => {
  expect(rgbToHsla(color3)).toEqual(hsl3);
});

const color4 = 'rgb(255, 255, 255)';
const hsl4: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 100,
  alpha: 1,
};

test(`rgb color '${color4} should be ${hslToString(hsl4)}'`, () => {
  expect(rgbToHsla(color4)).toEqual(hsl4);
});

const color5 = 'rgb(51, 205, 85)';
const hsl5: HSLA = {
  hue: 133,
  saturation: 60,
  lightness: 50,
  alpha: 1,
};

test(`rgb color '${color5} should be ${hslToString(hsl5)}'`, () => {
  expect(rgbToHsla(color5)).toEqual(hsl5);
});

const colorInvalidRgb1 = '143, 56, 2';

test(`invalid hex color should throw`, () => {
  expect(() => rgbToHsla(colorInvalidRgb1)).toThrow(
    'Provided string is not a valid rgb color'
  );
});

const colorInvalidRgb2 = 'rgb(220, 45)';

test(`invalid hex color should throw`, () => {
  expect(() => rgbToHsla(colorInvalidRgb2)).toThrow(
    'Provided string is not a valid rgb color'
  );
});
