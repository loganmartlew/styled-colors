import hslToHsla from './hslToHsla';
import { HSLA } from '../types';

const hslToString = (hsl: HSLA) => {
  return `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
};

const color1 = 'hsl(273, 23%, 56%)';
const hsl1: HSLA = {
  hue: 273,
  saturation: 23,
  lightness: 56,
  alpha: 1,
};

test(`hsl color '${color1} should be ${hslToString(hsl1)}'`, () => {
  expect(hslToHsla(color1)).toEqual(hsl1);
});

const color2 = 'hsl(185, 67%, 47%)';
const hsl2: HSLA = {
  hue: 185,
  saturation: 67,
  lightness: 47,
  alpha: 1,
};

test(`hsl color '${color2} should be ${hslToString(hsl2)}'`, () => {
  expect(hslToHsla(color2)).toEqual(hsl2);
});

const color3 = 'hsl(15, 19%, 17%)';
const hsl3: HSLA = {
  hue: 15,
  saturation: 19,
  lightness: 17,
  alpha: 1,
};

test(`hsl color '${color3} should be ${hslToString(hsl3)}'`, () => {
  expect(hslToHsla(color3)).toEqual(hsl3);
});

const color4 = 'hsl(0, 0%, 100%)';
const hsl4: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 100,
  alpha: 1,
};

test(`hsl color '${color4} should be ${hslToString(hsl4)}'`, () => {
  expect(hslToHsla(color4)).toEqual(hsl4);
});

const color5 = 'hsl(133, 60%, 50%)';
const hsl5: HSLA = {
  hue: 133,
  saturation: 60,
  lightness: 50,
  alpha: 1,
};

test(`hsl color '${color5} should be ${hslToString(hsl5)}'`, () => {
  expect(hslToHsla(color5)).toEqual(hsl5);
});

const colorInvalidHsl1 = '143, 56%, 2%';

test(`invalid hex color should throw`, () => {
  expect(() => hslToHsla(colorInvalidHsl1)).toThrow(
    'Provided string is not a valid hsl color'
  );
});

const colorInvalidHsl2 = 'hsl(220, 45%)';

test(`invalid hex color should throw`, () => {
  expect(() => hslToHsla(colorInvalidHsl2)).toThrow(
    'Provided string is not a valid hsl color'
  );
});

const colorInvalidHsl3 = 'hsl(220, 45 70)';

test(`invalid hex color should throw`, () => {
  expect(() => hslToHsla(colorInvalidHsl3)).toThrow(
    'Provided string is not a valid hsl color'
  );
});
