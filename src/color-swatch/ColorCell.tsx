import React from 'react';
import chroma from 'chroma-js';
import style from './ColorCell.module.css';

interface ColorCellProps {
  color: string;
  selected?: boolean;
}

function ColorCell({ color, selected }: ColorCellProps) {
  const cssRgb = chroma(color).css();

  return (
    <div className={style.cell} style={{ backgroundColor: color }}>
      {selected && <div className={style.label}>{cssRgb}</div>}
    </div>
  );
}

export default ColorCell;
