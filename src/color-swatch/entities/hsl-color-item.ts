import { ColorItem } from './color-item';

export class HslColorItem implements ColorItem {
  constructor(public hue: number, public saturation: number, public lightness: number) {}

  get cssColor() {
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  }
}
