import React, { useState, useEffect } from 'react';
import ColorCell from './ColorCell';
import { useRemoteColors } from './hooks';
import style from './ColorSwatch.module.css';

interface ColorSwatchProps {
  sourceUrl: string;
  onSelect?: (color: string) => void;
  defaultColors?: string[];
}

function ColorSwatch({ defaultColors, sourceUrl, onSelect }: ColorSwatchProps) {
  const [colors, refreshColors] = useRemoteColors(sourceUrl);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    refreshColors(defaultColors);
  }, [defaultColors]);

  const selectCell = (i: number) => {
    setSelectedIndex(i);
    onSelect && onSelect(colors[i]);
  };

  return (
    <div className={style.root}>
      <div className={style.refreshAnochor} onClick={() => refreshColors()}>
        Refresh
      </div>
      <div className={style.swatchContainer}>
        {colors.map((color, i) => (
          <div className={style.cellContainer} key={i} onClick={() => selectCell(i)}>
            <ColorCell color={color} selected={i === selectedIndex}></ColorCell>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorSwatch;
