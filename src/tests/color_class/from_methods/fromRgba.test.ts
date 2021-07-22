import Color from '../../..';

const color1 = 'rgba(117, 52, 47, 1)';
const expected1 = 'hsla(4, 43%, 32%, 1)';

test(`input '${color1}' should make getColour() return '${expected1}'`, () => {
  expect(new Color().fromRgba(color1).getColor()).toBe(expected1);
});

const color2 = 'rgba(120, 130, 196, 0.36)';
const expected2 = 'hsla(232, 39%, 62%, 0.36)';

test(`input '${color2}' should make getColour() return '${expected2}'`, () => {
  expect(new Color().fromRgba(color2).getColor()).toBe(expected2);
});

const color3 = 'rgba(255,255,255,0)';
const expected3 = 'hsla(0, 0%, 100%, 0)';

test(`input '${color3}' should make getColour() return '${expected3}'`, () => {
  expect(new Color().fromRgba(color3).getColor()).toBe(expected3);
});

const invalidColor1 = 'rgba(319, 54, 60, 0.6)';

test(`invalid rgb color should throw`, () => {
  expect(() => new Color().fromRgba(invalidColor1)).toThrow(
    'Value for red is out of bounds'
  );
});

const invalidColor2 = 'rgba(120, 54, 200)';

test(`invalid rgb color should throw`, () => {
  expect(() => new Color().fromRgba(invalidColor2)).toThrow(
    'Provided string is not a valid rgba color'
  );
});

const invalidColor3 = 'rgb(55, 54, 60, 1)';

test(`invalid rgb color should throw`, () => {
  expect(() => new Color().fromRgba(invalidColor3)).toThrow(
    'Provided string is not a valid rgba color'
  );
});

const invalidColor4 = '250, 154, 33, 1';

test(`invalid rgb color should throw`, () => {
  expect(() => new Color().fromRgba(invalidColor4)).toThrow(
    'Provided string is not a valid rgba color'
  );
});
