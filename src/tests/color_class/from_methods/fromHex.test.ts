import Color from '../../..';

const color1 = '#75342f';
const expected1 = 'hsla(4, 43%, 32%, 1)';

test(`input '${color1}' should make getColour() return '${expected1}'`, () => {
  expect(new Color().fromHex(color1).getColor()).toBe(expected1);
});

const color2 = '#7882c4';
const expected2 = 'hsla(232, 39%, 62%, 1)';

test(`input '${color2}' should make getColour() return '${expected2}'`, () => {
  expect(new Color().fromHex(color2).getColor()).toBe(expected2);
});

const color3 = '#ffffff';
const expected3 = 'hsla(0, 0%, 100%, 1)';

test(`input '${color3}' should make getColour() return '${expected3}'`, () => {
  expect(new Color().fromHex(color3).getColor()).toBe(expected3);
});

const invalidColor1 = '#f65ad72';

test(`invalid hex color should throw`, () => {
  expect(() => new Color().fromHex(invalidColor1)).toThrow(
    'Provided string is not a valid hex color'
  );
});

const invalidColor2 = '#687db';

test(`invalid hex color should throw`, () => {
  expect(() => new Color().fromHex(invalidColor2)).toThrow(
    'Provided string is not a valid hex color'
  );
});

const invalidColor3 = '17af4b';

test(`invalid hex color should throw`, () => {
  expect(() => new Color().fromHex(invalidColor3)).toThrow(
    'Provided string is not a valid hex color'
  );
});

const invalidColor4 = '#48gke5';

test(`invalid hex color should throw`, () => {
  expect(() => new Color().fromHex(invalidColor4)).toThrow(
    'Provided string is not a valid hex color'
  );
});
