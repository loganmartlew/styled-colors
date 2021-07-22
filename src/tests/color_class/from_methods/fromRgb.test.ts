import Color from '../../..';

const color1 = 'rgb(117, 52, 47)';
const expected1 = 'hsla(4, 43%, 32%, 1)';

test(`input '${color1}' should make getColour() return '${expected1}'`, () => {
  expect(new Color().fromRgb(color1).getColor()).toBe(expected1);
});

const color2 = 'rgb(120, 130, 196)';
const expected2 = 'hsla(232, 39%, 62%, 1)';

test(`input '${color2}' should make getColour() return '${expected2}'`, () => {
  expect(new Color().fromRgb(color2).getColor()).toBe(expected2);
});

const color3 = 'rgb(255,255,255)';
const expected3 = 'hsla(0, 0%, 100%, 1)';

test(`input '${color3}' should make getColour() return '${expected3}'`, () => {
  expect(new Color().fromRgb(color3).getColor()).toBe(expected3);
});

const invalidColor1 = 'rgb(319, 54, 60)';

test(`invalid rgb color should throw`, () => {
  expect(() => new Color().fromRgb(invalidColor1)).toThrow(
    'Value for red is out of bounds'
  );
});

const invalidColor2 = 'rgb(120, 54)';

test(`invalid rgb color should throw`, () => {
  expect(() => new Color().fromRgb(invalidColor2)).toThrow(
    'Provided string is not a valid rgb color'
  );
});

const invalidColor3 = 'rgb(55, 54, 60, 1)';

test(`invalid rgb color should throw`, () => {
  expect(() => new Color().fromRgb(invalidColor3)).toThrow(
    'Provided string is not a valid rgb color'
  );
});

const invalidColor4 = '250, 154, 33';

test(`invalid rgb color should throw`, () => {
  expect(() => new Color().fromRgb(invalidColor4)).toThrow(
    'Provided string is not a valid rgb color'
  );
});
