import createHslaString from './util/createHslaString';

import hexToHsla from './util/stringToHsla/hexToHsla';
import hexAToHsla from './util/stringToHsla/hexAToHsla';
import rgbToHsla from './util/stringToHsla/rgbToHsla';
import rgbaToHsla from './util/stringToHsla/rgbaToHsla';
import hslToHsla from './util/stringToHsla/hslToHsla';
import hslaToHsla from './util/stringToHsla/hslaToHsla';

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

  private setColor(hsla: HSLA) {
    this.hue = hsla.hue;
    this.saturation = hsla.saturation;
    this.lightness = hsla.lightness;
    this.alpha = hsla.alpha;
  }

  fromHex(hex: string) {
    this.setColor(hexToHsla(hex));
    return this;
  }

  fromRgb(rgb: string) {
    this.setColor(rgbToHsla(rgb));
    return this;
  }

  fromHsl(hsl: string) {
    this.setColor(hslToHsla(hsl));
    return this;
  }

  fromHexA(hexA: string) {
    this.setColor(hexAToHsla(hexA));
    return this;
  }

  fromRgba(rgba: string) {
    this.setColor(rgbaToHsla(rgba));
    return this;
  }

  fromHsla(hsla: string) {
    this.setColor(hslaToHsla(hsla));
    return this;
  }

  lighten(percent: number) {}

  darken(percent: number) {}

  saturate(percent: number) {}

  desaturate(percent: number) {}

  shift(degrees: number) {}
}
