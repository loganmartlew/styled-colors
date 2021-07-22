import hexAToHsla from '../../../util/stringToHsla/hexAToHsla';
import { HSLA } from '../../../types';

const hslToString = (hsl: HSLA) => {
  return `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
};

const color1 = '#9174a834';
const hsl1: HSLA = {
  hue: 273,
  saturation: 23,
  lightness: 56,
  alpha: 0.2,
};

test(`hexA color '${color1} should be ${hslToString(hsl1)}'`, () => {
  expect(hexAToHsla(color1)).toEqual(hsl1);
});

const color2 = '#28bcc9a9';
const hsl2: HSLA = {
  hue: 185,
  saturation: 67,
  lightness: 47,
  alpha: 0.66,
};

test(`hexA color '${color2} should be ${hslToString(hsl2)}'`, () => {
  expect(hexAToHsla(color2)).toEqual(hsl2);
});

const color3 = '#33272300';
const hsl3: HSLA = {
  hue: 15,
  saturation: 19,
  lightness: 17,
  alpha: 0,
};

test(`hexA color '${color3} should be ${hslToString(hsl3)}'`, () => {
  expect(hexAToHsla(color3)).toEqual(hsl3);
});

const color4 = '#fff0';
const hsl4: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 100,
  alpha: 0,
};

test(`hexA color '${color4} should be ${hslToString(hsl4)}'`, () => {
  expect(hexAToHsla(color4)).toEqual(hsl4);
});

const color5 = '#3c5c';
const hsl5: HSLA = {
  hue: 133,
  saturation: 60,
  lightness: 50,
  alpha: 0.8,
};

test(`hexA color '${color5} should be ${hslToString(hsl5)}'`, () => {
  expect(hexAToHsla(color5)).toEqual(hsl5);
});

const colorInvalidHexA1 = '264f6a';

test(`invalid hexA color should throw`, () => {
  expect(() => hexAToHsla(colorInvalidHexA1)).toThrow(
    'Provided string is not a valid hexA color'
  );
});

const colorInvalidHexA2 = '#264f6g';

test(`invalid hexA color should throw`, () => {
  expect(() => hexAToHsla(colorInvalidHexA2)).toThrow(
    'Provided string is not a valid hexA color'
  );
});

const colorInvalidHexA3 = '#264f6f';

test(`invalid hexA color should throw`, () => {
  expect(() => hexAToHsla(colorInvalidHexA3)).toThrow(
    'Provided string is not a valid hexA color'
  );
});
