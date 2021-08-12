import React from 'react';
import style from './App.module.css';
import { ColorSwatch } from './color-swatch';

const sourceUrl = 'https://challenge.structrs.com/rest/colors/list';

function App() {
  return (
    <div>
      <div className={style.title}>Random colors from remote</div>
      <ColorSwatch sourceUrl={sourceUrl} />

      <div className={style.title}>Default colors in RGB</div>
      <ColorSwatch
        sourceUrl={sourceUrl}
        defaultColors={[
          'rgb(255, 0, 0)',
          'rgb(200, 0, 0)',
          'rgb(150, 0, 0)',
          'rgb(100, 0, 0)',
          'rgb(50, 0, 0)',
        ]}
      />

      <div className={style.title}>Default colors in HSL</div>
      <ColorSwatch
        sourceUrl={sourceUrl}
        defaultColors={[
          'hsl(100, 100%, 90%)',
          'hsl(100, 100%, 70%)',
          'hsl(100, 100%, 50%)',
          'hsl(100, 100%, 30%)',
          'hsl(100, 100%, 10%)',
        ]}
      />
    </div>
  );
}

export default App;
