import Color from '../../..';

const baseLightness = 50;
const baseColor = new Color().fromHsla(`hsla(0, 0%, ${baseLightness}%, 1)`);

{
  const modifier = 20;

  const plusLightness = baseLightness + modifier;
  const minusLightness = baseLightness - modifier;

  const expectedHslaPlus = `hsla(0, 0%, ${plusLightness}%, 1)`;
  const expectedHslaMinus = `hsla(0, 0%, ${minusLightness}%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.lighten(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.darken(modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 50;

  const plusLightness = baseLightness + modifier;
  const minusLightness = baseLightness - modifier;

  const expectedHslaPlus = `hsla(0, 0%, ${plusLightness}%, 1)`;
  const expectedHslaMinus = `hsla(0, 0%, ${minusLightness}%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus}`, () => {
    expect(baseColor.lighten(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus}`, () => {
    expect(baseColor.darken(modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 51;

  const plusLightness = 100;
  const minusLightness = 0;

  const expectedHslaPlus = `hsla(0, 0%, ${plusLightness}%, 1)`;
  const expectedHslaMinus = `hsla(0, 0%, ${minusLightness}%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus} (clamped)`, () => {
    expect(baseColor.lighten(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus} (clamped)`, () => {
    expect(baseColor.darken(modifier)).toBe(expectedHslaMinus);
  });
}

{
  const modifier = 75;

  const plusLightness = 100;
  const minusLightness = 0;

  const expectedHslaPlus = `hsla(0, 0%, ${plusLightness}%, 1)`;
  const expectedHslaMinus = `hsla(0, 0%, ${minusLightness}%, 1)`;

  test(`expect hsla to be ${expectedHslaPlus} (clamped)`, () => {
    expect(baseColor.lighten(modifier)).toBe(expectedHslaPlus);
  });

  test(`expect hsla to be ${expectedHslaMinus} (clamped)`, () => {
    expect(baseColor.darken(modifier)).toBe(expectedHslaMinus);
  });
}
