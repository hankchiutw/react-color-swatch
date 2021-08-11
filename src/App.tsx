import React from 'react';
import './App.css';
import { ColorSwatch } from './color-swatch';

const sourceUrl = 'https://challenge.structrs.com/rest/colors/list';

function App() {
  return (
    <div className="App">
      <ColorSwatch sourceUrl={sourceUrl} />

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
