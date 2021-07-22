import rgbaToHsla from '../../../util/stringToHsla/rgbaToHsla';
import { HSLA } from '../../../types';

const hslaToString = (hsla: HSLA) => {
  return `hsla(${hsla.hue}, ${hsla.saturation}%, ${hsla.lightness}%, ${hsla.alpha})`;
};

const color1 = 'rgba(145, 116, 168, 0.3)';
const hsla1: HSLA = {
  hue: 273,
  saturation: 23,
  lightness: 56,
  alpha: 0.3,
};

test(`rgba color '${color1} should be ${hslaToString(hsla1)}'`, () => {
  expect(rgbaToHsla(color1)).toEqual(hsla1);
});

const color2 = 'rgba(40, 188, 201, 1)';
const hsla2: HSLA = {
  hue: 185,
  saturation: 67,
  lightness: 47,
  alpha: 1,
};

test(`rgba color '${color2} should be ${hslaToString(hsla2)}'`, () => {
  expect(rgbaToHsla(color2)).toEqual(hsla2);
});

const color3 = 'rgba(51, 39, 35, 0)';
const hsla3: HSLA = {
  hue: 15,
  saturation: 19,
  lightness: 17,
  alpha: 0,
};

test(`rgba color '${color3} should be ${hslaToString(hsla3)}'`, () => {
  expect(rgbaToHsla(color3)).toEqual(hsla3);
});

const color4 = 'rgba(255, 255, 255, 0.93)';
const hsla4: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 100,
  alpha: 0.93,
};

test(`rgba color '${color4} should be ${hslaToString(hsla4)}'`, () => {
  expect(rgbaToHsla(color4)).toEqual(hsla4);
});

const color5 = 'rgba(51, 205, 85, 0.36)';
const hsla5: HSLA = {
  hue: 133,
  saturation: 60,
  lightness: 50,
  alpha: 0.36,
};

test(`rgba color '${color5} should be ${hslaToString(hsla5)}'`, () => {
  expect(rgbaToHsla(color5)).toEqual(hsla5);
});

const colorInvalidRgba1 = '143, 56, 2, 0.5';

test(`invalid rgba color should throw`, () => {
  expect(() => rgbaToHsla(colorInvalidRgba1)).toThrow(
    'Provided string is not a valid rgba color'
  );
});

const colorInvalidRgba2 = 'rgb(220, 45, 43)';

test(`invalid rgba color should throw`, () => {
  expect(() => rgbaToHsla(colorInvalidRgba2)).toThrow(
    'Provided string is not a valid rgba color'
  );
});
