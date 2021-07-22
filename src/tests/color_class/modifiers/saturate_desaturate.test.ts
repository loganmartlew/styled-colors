import Color from '../../..';

const baseSaturation = 50;
const baseColor = new Color().fromHsla(`hsla(0, ${baseSaturation}%, 0%, 1)`);

{
  const modifier = 20;

  const plusSaturation = baseSaturation + modifier;
  const minusSaturation = baseSaturation - modifier;

  const expectedHslaPlus = `hsla(0, ${plusSaturation}%, 0%, 1)`;
  const expectedHslaMinus = `hsla(0, ${minusSaturation}%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.saturate(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.desaturate(modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 50;

  const plusSaturation = baseSaturation + modifier;
  const minusSaturation = baseSaturation - modifier;

  const expectedHslaPlus = `hsla(0, ${plusSaturation}%, 0%, 1)`;
  const expectedHslaMinus = `hsla(0, ${minusSaturation}%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.saturate(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.desaturate(modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 51;

  const plusSaturation = 100;
  const minusSaturation = 0;

  const expectedHslaPlus = `hsla(0, ${plusSaturation}%, 0%, 1)`;
  const expectedHslaMinus = `hsla(0, ${minusSaturation}%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus} (clamped)`, () => {
    expect(baseColor.saturate(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus} (clamped)`, () => {
    expect(baseColor.desaturate(modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 75;

  const plusSaturation = 100;
  const minusSaturation = 0;

  const expectedHslaPlus = `hsla(0, ${plusSaturation}%, 0%, 1)`;
  const expectedHslaMinus = `hsla(0, ${minusSaturation}%, 0%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus} (clamped)`, () => {
    expect(baseColor.saturate(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus} (clamped)`, () => {
    expect(baseColor.desaturate(modifier)).toBe(expectedHslaMinus);
  });
}
