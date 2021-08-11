import axios from 'axios';
import { ColorItemRaw } from './interfaces';
import { colorItemFactory } from './color-item-factory';
import { ColorItem } from '../entities';

export async function fetchColorItems(url: string): Promise<ColorItem[]> {
  const { data } = await axios.get<ColorItemRaw[]>(url);

  return data.map(colorItemFactory);
}
