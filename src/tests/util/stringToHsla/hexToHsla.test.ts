import hexToHsla from '../../../util/stringToHsla/hexToHsla';
import { HSLA } from '../../../types';

const hslToString = (hsl: HSLA) => {
  return `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
};

const color1 = '#9174a8';
const hsl1: HSLA = {
  hue: 273,
  saturation: 23,
  lightness: 56,
  alpha: 1,
};

test(`hex color '${color1} should be ${hslToString(hsl1)}'`, () => {
  expect(hexToHsla(color1)).toEqual(hsl1);
});

const color2 = '#28bcc9';
const hsl2: HSLA = {
  hue: 185,
  saturation: 67,
  lightness: 47,
  alpha: 1,
};

test(`hex color '${color2} should be ${hslToString(hsl2)}'`, () => {
  expect(hexToHsla(color2)).toEqual(hsl2);
});

const color3 = '#332723';
const hsl3: HSLA = {
  hue: 15,
  saturation: 19,
  lightness: 17,
  alpha: 1,
};

test(`hex color '${color3} should be ${hslToString(hsl3)}'`, () => {
  expect(hexToHsla(color3)).toEqual(hsl3);
});

const color4 = '#fff';
const hsl4: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 100,
  alpha: 1,
};

test(`hex color '${color4} should be ${hslToString(hsl4)}'`, () => {
  expect(hexToHsla(color4)).toEqual(hsl4);
});

const color5 = '#3c5';
const hsl5: HSLA = {
  hue: 133,
  saturation: 60,
  lightness: 50,
  alpha: 1,
};

test(`hex color '${color5} should be ${hslToString(hsl5)}'`, () => {
  expect(hexToHsla(color5)).toEqual(hsl5);
});

const colorInvalidHex1 = '264f6a';

test(`invalid hex color should throw`, () => {
  expect(() => hexToHsla(colorInvalidHex1)).toThrow(
    'Provided string is not a valid hex color'
  );
});

const colorInvalidHex2 = '#264f6g';

test(`invalid hex color should throw`, () => {
  expect(() => hexToHsla(colorInvalidHex2)).toThrow(
    'Provided string is not a valid hex color'
  );
});
