import hslaToHsla from '../../../util/stringToHsla/hslaToHsla';
import { HSLA } from '../../../types';

const hslaToString = (hsla: HSLA) => {
  return `hsla(${hsla.hue}, ${hsla.saturation}%, ${hsla.lightness}%, ${hsla.alpha})`;
};

const color1 = 'hsla(273, 23%, 56%, 0.3)';
const hsla1: HSLA = {
  hue: 273,
  saturation: 23,
  lightness: 56,
  alpha: 0.3,
};

test(`hsla color '${color1} should be ${hslaToString(hsla1)}'`, () => {
  expect(hslaToHsla(color1)).toEqual(hsla1);
});

const color2 = 'hsla(185, 67%, 47%, 1)';
const hsla2: HSLA = {
  hue: 185,
  saturation: 67,
  lightness: 47,
  alpha: 1,
};

test(`hsla color '${color2} should be ${hslaToString(hsla2)}'`, () => {
  expect(hslaToHsla(color2)).toEqual(hsla2);
});

const color3 = 'hsla(15, 19%, 17%, 0)';
const hsla3: HSLA = {
  hue: 15,
  saturation: 19,
  lightness: 17,
  alpha: 0,
};

test(`hsla color '${color3} should be ${hslaToString(hsla3)}'`, () => {
  expect(hslaToHsla(color3)).toEqual(hsla3);
});

const color4 = 'hsla(0, 0%, 100%, 0.87)';
const hsla4: HSLA = {
  hue: 0,
  saturation: 0,
  lightness: 100,
  alpha: 0.87,
};

test(`hsla color '${color4} should be ${hslaToString(hsla4)}'`, () => {
  expect(hslaToHsla(color4)).toEqual(hsla4);
});

const color5 = 'hsla(133, 60%, 50%, 0.1)';
const hsla5: HSLA = {
  hue: 133,
  saturation: 60,
  lightness: 50,
  alpha: 0.1,
};

test(`hsla color '${color5} should be ${hslaToString(hsla5)}'`, () => {
  expect(hslaToHsla(color5)).toEqual(hsla5);
});

const colorInvalidHsla1 = '143, 56%, 2%, 1';

test(`invalid hex color should throw`, () => {
  expect(() => hslaToHsla(colorInvalidHsla1)).toThrow(
    'Provided string is not a valid hsla color'
  );
});

const colorInvalidHsla2 = 'hsla(220, 45%, 60%)';

test(`invalid hex color should throw`, () => {
  expect(() => hslaToHsla(colorInvalidHsla2)).toThrow(
    'Provided string is not a valid hsla color'
  );
});

const colorInvalidHsla3 = 'hsla(220, 45 70, 0)';

test(`invalid hex color should throw`, () => {
  expect(() => hslaToHsla(colorInvalidHsla3)).toThrow(
    'Provided string is not a valid hsla color'
  );
});
