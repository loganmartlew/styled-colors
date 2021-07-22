import Color from '../../..';

const color1 = 'hsl(154, 44%, 100%)';
const expected1 = 'hsla(154, 44%, 100%, 1)';

test(`input '${color1}' should make getColour() return '${expected1}'`, () => {
  expect(new Color().fromHsl(color1).getColor()).toBe(expected1);
});

const color2 = 'hsl(0, 100%, 50%)';
const expected2 = 'hsla(0, 100%, 50%, 1)';

test(`input '${color2}' should make getColour() return '${expected2}'`, () => {
  expect(new Color().fromHsl(color2).getColor()).toBe(expected2);
});

const color3 = 'hsl(359,0%,57%)';
const expected3 = 'hsla(359, 0%, 57%, 1)';

test(`input '${color3}' should make getColour() return '${expected3}'`, () => {
  expect(new Color().fromHsl(color3).getColor()).toBe(expected3);
});

const invalidColor1 = 'hsl(319, 54, 60)';

test(`invalid hsl color should throw`, () => {
  expect(() => new Color().fromHsl(invalidColor1)).toThrow(
    'Provided string is not a valid hsl color'
  );
});

const invalidColor2 = 'hsl(319, 54%)';

test(`invalid hsl color should throw`, () => {
  expect(() => new Color().fromHsl(invalidColor2)).toThrow(
    'Provided string is not a valid hsl color'
  );
});

const invalidColor3 = 'hsl(319, 54%, 60%, 1)';

test(`invalid hsl color should throw`, () => {
  expect(() => new Color().fromHsl(invalidColor3)).toThrow(
    'Provided string is not a valid hsl color'
  );
});

const invalidColor4 = '319, 54%, 33%';

test(`invalid hsl color should throw`, () => {
  expect(() => new Color().fromHsl(invalidColor4)).toThrow(
    'Provided string is not a valid hsl color'
  );
});
