import { ColorItem } from './color-item';

export class RgbColorItem implements ColorItem {
  constructor(public red: number, public green: number, public blue: number) {}

  get cssColor() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }
}
