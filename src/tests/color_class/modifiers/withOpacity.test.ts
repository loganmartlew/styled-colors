import Color from '../../..';

const baseAlpha = 0.5;
const baseColor = new Color().fromHsla(`hsla(0, 0%, 0%, ${baseAlpha})`);

{
  const modifier = 0.2;

  const upperAlpha = baseAlpha + modifier;
  const lowerAlpha = baseAlpha - modifier;

  const expectedHslaPlus = `hsla(0, 0%, 0%, ${upperAlpha})`;
  const expectedHslaMinus = `hsla(0, 0%, 0%, ${lowerAlpha})`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.withOpacity(upperAlpha)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.withOpacity(lowerAlpha)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 0.5;

  const upperAlpha = baseAlpha + modifier;
  const lowerAlpha = baseAlpha - modifier;

  const expectedHslaPlus = `hsla(0, 0%, 0%, ${upperAlpha})`;
  const expectedHslaMinus = `hsla(0, 0%, 0%, ${lowerAlpha})`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.withOpacity(upperAlpha)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.withOpacity(lowerAlpha)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 0.51;

  const upperAlpha = 1;
  const lowerAlpha = 0;

  const expectedHslaPlus = `hsla(0, 0%, 0%, ${upperAlpha})`;
  const expectedHslaMinus = `hsla(0, 0%, 0%, ${lowerAlpha})`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.withOpacity(baseAlpha + modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.withOpacity(baseAlpha - modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 30;

  const upperAlpha = 1;
  const lowerAlpha = 0;

  const expectedHslaPlus = `hsla(0, 0%, 0%, ${upperAlpha})`;
  const expectedHslaMinus = `hsla(0, 0%, 0%, ${lowerAlpha})`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.withOpacity(baseAlpha + modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.withOpacity(baseAlpha - modifier)).toBe(expectedHslaMinus);
  });
}
