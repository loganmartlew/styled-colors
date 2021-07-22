import Color from '../../..';

const color1 = 'hsla(154, 44%, 100%, 1)';
const expected1 = 'hsla(154, 44%, 100%, 1)';

test(`input '${color1}' should make getColour() return '${expected1}'`, () => {
  expect(new Color().fromHsla(color1).getColor()).toBe(expected1);
});

const color2 = 'hsla(0, 100%, 50%, 0.65)';
const expected2 = 'hsla(0, 100%, 50%, 0.65)';

test(`input '${color2}' should make getColour() return '${expected2}'`, () => {
  expect(new Color().fromHsla(color2).getColor()).toBe(expected2);
});

const color3 = 'hsla(359,0%,57%,0)';
const expected3 = 'hsla(359, 0%, 57%, 0)';

test(`input '${color3}' should make getColour() return '${expected3}'`, () => {
  expect(new Color().fromHsla(color3).getColor()).toBe(expected3);
});

const invalidColor1 = 'hsla(319, 54, 60, 1)';

test(`invalid hsl color should throw`, () => {
  expect(() => new Color().fromHsla(invalidColor1)).toThrow(
    'Provided string is not a valid hsla color'
  );
});

const invalidColor2 = 'hsla(319, 54%, 54%)';

test(`invalid hsl color should throw`, () => {
  expect(() => new Color().fromHsla(invalidColor2)).toThrow(
    'Provided string is not a valid hsla color'
  );
});

const invalidColor3 = 'hsl(319, 54%, 60%, 1)';

test(`invalid hsl color should throw`, () => {
  expect(() => new Color().fromHsla(invalidColor3)).toThrow(
    'Provided string is not a valid hsla color'
  );
});

const invalidColor4 = '319, 54%, 33%, 0.5';

test(`invalid hsl color should throw`, () => {
  expect(() => new Color().fromHsla(invalidColor4)).toThrow(
    'Provided string is not a valid hsla color'
  );
});
