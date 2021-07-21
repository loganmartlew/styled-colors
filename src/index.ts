import createHslaString from './util/createHslaString';
import { HSLA } from './types';

export default class Color {
  private hue: number;
  private saturation: number;
  private lightness: number;
  private alpha: number;

  constructor() {
    this.hue = 0;
    this.saturation = 0;
    this.lightness = 0;
    this.alpha = 1;
  }

  getColor() {
    const hslaColor: HSLA = {
      hue: this.hue,
      saturation: this.saturation,
      lightness: this.lightness,
      alpha: this.alpha,
    };

    return createHslaString(hslaColor);
  }
}
