import { useState } from 'react';
import { fetchColorItems } from '../dao';

export function useRemoteColors(url: string): [string[], (i?: string[]) => void] {
  const [colors, setColors] = useState<string[]>([]);

  const refreshColors = async (inputColors?: string[]) => {
    if (inputColors) {
      setColors(inputColors);
      return;
    }
    const items = await fetchColorItems(url);
    const colors = items.map(item => item.cssColor);
    setColors(colors);
  };

  return [colors, refreshColors];
}
