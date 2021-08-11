import React from 'react';
import style from './ColorCell.module.css';

interface ColorCellProps {
  color: string;
}

function ColorCell({ color }: ColorCellProps) {
  return <div className={style.cell} style={{ backgroundColor: color }}></div>;
}

export default ColorCell;
