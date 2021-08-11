import { ColorItemRaw } from './interfaces';
import { ColorItem, RgbColorItem, HslColorItem } from '../entities';
import { ColorSpaceName, RgbColor, HslColor } from './interfaces';

function toRgb({ red, green, blue }: RgbColor): RgbColorItem {
  return new RgbColorItem(red, green, blue);
}

function toHsl({ hue, saturation, lightness }: HslColor): HslColorItem {
  return new HslColorItem(hue, saturation, lightness);
}

export function colorItemFactory({ kind, components }: ColorItemRaw): ColorItem {
  switch (kind) {
    case ColorSpaceName.rgb:
      return toRgb(components as RgbColor);
    case ColorSpaceName.hsl:
      return toHsl(components as HslColor);
    default:
      throw new Error(`Undefined color space: ${kind}`);
  }
}
