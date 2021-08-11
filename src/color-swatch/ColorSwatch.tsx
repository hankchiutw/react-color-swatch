import React, { useEffect } from 'react';
import ColorCell from './ColorCell';
import { useRemoteColors } from './hooks';
import style from './ColorSwatch.module.css';

interface ColorSwatchProps {
  sourceUrl: string;
  defaultColors?: string[];
}

function ColorSwatch({ defaultColors, sourceUrl }: ColorSwatchProps) {
  const [colors, refreshColors] = useRemoteColors(sourceUrl);

  useEffect(() => {
    refreshColors(defaultColors);
  }, [defaultColors]);

  return (
    <div className={style.root}>
      <div className={style.refreshAnochor} onClick={() => refreshColors()}>
        Refresh
      </div>
      <div className={style.swatchContainer}>
        {colors.map((color, i) => (
          <ColorCell color={color} key={i}></ColorCell>
        ))}
      </div>
    </div>
  );
}

export default ColorSwatch;
