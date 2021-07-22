import { HSLA } from '../types';

const rgbToHsla = (rgb: string): HSLA => {
  const rgbColorRegex = /^rgb\(\d{1,3}, ?\d{1,3}, ?\d{1,3}\)$/;
  if (!rgbColorRegex.test(rgb))
    throw new Error('Provided string is not a valid rgb color');

  const [redString, greenString, blueString] = getValuesFromRgbString(rgb);

  if (+redString > 255 || +redString < 0)
    throw new Error('Value for red is out of bounds');
  if (+greenString > 255 || +greenString < 0)
    throw new Error('Value for green is out of bounds');
  if (+blueString > 255 || +blueString < 0)
    throw new Error('Value for blue is out of bounds');

  const red = +redString / 255;
  const green = +greenString / 255;
  const blue = +blueString / 255;

  const colorArr = [red, green, blue];

  const min = Math.min(...colorArr);
  const max = Math.max(...colorArr);

  const lightness = +((min + max) / 2).toPrecision(2);
  const saturation = calculateSaturation(min, max, lightness);
  const hue = saturation === 0 ? 0 : calculateHue(red, green, blue, min, max); // If no saturation, hue is 0

  const roundedLightness = Math.round(lightness * 100);
  const roundedSaturation = Math.round(saturation * 100);
  const roundedHue = Math.round(hue);

  return {
    hue: roundedHue,
    saturation: roundedSaturation,
    lightness: roundedLightness,
    alpha: 1,
  };
};

const getValuesFromRgbString = (rgb: string) => {
  const valuesOnly = rgb.slice(4, -1);
  const values = valuesOnly.split(',');

  if (values.length !== 3) throw new Error();

  return values;
};

const calculateSaturation = (min: number, max: number, lightness: number) => {
  // If min and max are equal, color is shade of grey, 0 saturation
  if (min === max) return 0;

  if (lightness <= 0.5) {
    return (max - min) / (max + min);
  } else {
    return (max - min) / (2.0 - max - min);
  }
};

const calculateHue = (
  red: number,
  green: number,
  blue: number,
  min: number,
  max: number
) => {
  let hue: number;

  switch (max) {
    case red: {
      hue = (green - blue) / (max - min);
      break;
    }
    case green: {
      hue = 2.0 + (blue - red) / (max - min);
      break;
    }
    case blue: {
      hue = 4.0 + (red - green) / (max - min);
      break;
    }
    default: {
      throw new Error();
    }
  }

  const scaledHue = hue * 60;

  if (scaledHue < 0) return scaledHue + 360;
  return scaledHue;
};

export default rgbToHsla;
