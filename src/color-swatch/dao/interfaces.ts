export interface RgbColor {
  red: number;
  green: number;
  blue: number;
}

export interface HslColor {
  hue: number;
  saturation: number;
  lightness: number;
}

export enum ColorSpaceName {
  rgb = 'rgb',
  hsl = 'hsl',
}

export interface ColorItemRaw {
  kind: ColorSpaceName;
  components: RgbColor | HslColor;
}
