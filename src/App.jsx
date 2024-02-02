import { useState } from 'react';

import Tile from './Tile';
import { style } from './style';

const Application = () => {
  const [outputString, setOutputString] = useState('');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleTileClick = (letter) => {
    let newOutputString;

    if (
      outputString.length >= 2 &&
      letter === outputString[outputString.length - 1] &&
      letter === outputString[outputString.length - 2]
    ) {
      newOutputString = outputString.slice(0, -2) + '_';
    } else {
      newOutputString = outputString + letter;
    }

    setOutputString(newOutputString);
  };

  return (
    <section>
      <aside style={style.letterContainer} id='letterContainer'>
        {alphabet.map((letter) => {
          return (
            <Tile
              letter={letter}
              key={letter}
              handleTileClick={handleTileClick}
            />
          );
        })}
      </aside>
      <div id='outputString'>{outputString}</div>
    </section>
  );
};

export default Application;
