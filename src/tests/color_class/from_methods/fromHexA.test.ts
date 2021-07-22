import Color from '../../..';

const color1 = '#75342f34';
const expected1 = 'hsla(4, 43%, 32%, 0.2)';

test(`input '${color1}' should make getColour() return '${expected1}'`, () => {
  expect(new Color().fromHexA(color1).getColor()).toBe(expected1);
});

const color2 = '#7882c4a9';
const expected2 = 'hsla(232, 39%, 62%, 0.66)';

test(`input '${color2}' should make getColour() return '${expected2}'`, () => {
  expect(new Color().fromHexA(color2).getColor()).toBe(expected2);
});

const color3 = '#ffffff00';
const expected3 = 'hsla(0, 0%, 100%, 0)';

test(`input '${color3}' should make getColour() return '${expected3}'`, () => {
  expect(new Color().fromHexA(color3).getColor()).toBe(expected3);
});

const invalidColor1 = '#f5ad72';

test(`invalid hexA color should throw`, () => {
  expect(() => new Color().fromHexA(invalidColor1)).toThrow(
    'Provided string is not a valid hexA color'
  );
});

const invalidColor2 = '#687dbf3df';

test(`invalid hexA color should throw`, () => {
  expect(() => new Color().fromHexA(invalidColor2)).toThrow(
    'Provided string is not a valid hexA color'
  );
});

const invalidColor3 = '17af4b44';

test(`invalid hexA color should throw`, () => {
  expect(() => new Color().fromHexA(invalidColor3)).toThrow(
    'Provided string is not a valid hexA color'
  );
});

const invalidColor4 = '#48gke543';

test(`invalid hexA color should throw`, () => {
  expect(() => new Color().fromHexA(invalidColor4)).toThrow(
    'Provided string is not a valid hexA color'
  );
});
