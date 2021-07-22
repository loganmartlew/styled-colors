import Color from '../../..';

const baseHue = 180;
const baseColor = new Color().fromHsla(`hsla(${baseHue}, 0%, 0%, 1)`);

{
  const modifier = 20;

  const expectedHslaPlus = `hsla(${baseHue + modifier}, 0%, 0%, 1)`;
  const expectedHslaMinus = `hsla(${baseHue - modifier}, 0%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.shiftHue(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.shiftHue(-modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 180;

  const expectedHslaPlus = `hsla(${baseHue + modifier}, 0%, 0%, 1)`;
  const expectedHslaMinus = `hsla(${baseHue - modifier}, 0%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.shiftHue(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.shiftHue(-modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 181;

  const plusHue = 1;
  const minusHue = 359;

  const expectedHslaPlus = `hsla(${plusHue}, 0%, 0%, 1)`;
  const expectedHslaMinus = `hsla(${minusHue}, 0%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus} (clamped)`, () => {
    expect(baseColor.shiftHue(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus} (clamped)`, () => {
    expect(baseColor.shiftHue(-modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 329;

  const plusHue = 149;
  const minusHue = 211;

  const expectedHslaPlus = `hsla(${plusHue}, 0%, 0%, 1)`;
  const expectedHslaMinus = `hsla(${minusHue}, 0%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus} (clamped)`, () => {
    expect(baseColor.shiftHue(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus} (clamped)`, () => {
    expect(baseColor.shiftHue(-modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 1000;

  const plusHue = 100;
  const minusHue = 260;

  const expectedHslaPlus = `hsla(${plusHue}, 0%, 0%, 1)`;
  const expectedHslaMinus = `hsla(${minusHue}, 0%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus} (clamped)`, () => {
    expect(baseColor.shiftHue(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus} (clamped)`, () => {
    expect(baseColor.shiftHue(-modifier)).toBe(expectedHslaMinus);
  });
}
