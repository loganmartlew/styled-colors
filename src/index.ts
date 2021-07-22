import createHslaString from './util/createHslaString';

import hexToHsla from './util/stringToHsla/hexToHsla';
import hexAToHsla from './util/stringToHsla/hexAToHsla';
import rgbToHsla from './util/stringToHsla/rgbToHsla';
import rgbaToHsla from './util/stringToHsla/rgbaToHsla';
import hslToHsla from './util/stringToHsla/hslToHsla';
import hslaToHsla from './util/stringToHsla/hslaToHsla';

import { lighten, darken } from './util/modifiers/modifyLightness';
import { saturate, desaturate } from './util/modifiers/modifySaturation';
import { shiftHue } from './util/modifiers/modifyHue';

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
    const hsla = this.getHsla();

    return createHslaString(hsla);
  }

  private setColor(hsla: HSLA) {
    this.hue = hsla.hue;
    this.saturation = hsla.saturation;
    this.lightness = hsla.lightness;
    this.alpha = hsla.alpha;
  }

  private getHsla() {
    const hsla: HSLA = {
      hue: this.hue,
      saturation: this.saturation,
      lightness: this.lightness,
      alpha: this.alpha,
    };

    return hsla;
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

  lighten(percent: number) {
    const hsla = lighten(percent, this.getHsla());
    return createHslaString(hsla);
  }

  darken(percent: number) {
    const hsla = darken(percent, this.getHsla());
    return createHslaString(hsla);
  }

  saturate(percent: number) {
    const hsla = saturate(percent, this.getHsla());
    return createHslaString(hsla);
  }

  desaturate(percent: number) {
    const hsla = desaturate(percent, this.getHsla());
    return createHslaString(hsla);
  }

  shiftHue(degrees: number) {
    const hsla = shiftHue(degrees, this.getHsla());
    return createHslaString(hsla);
  }
}
