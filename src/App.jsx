import React, { useState } from 'react';

import Tile from './Tile';
import { style } from './style';

const Application = () => {
  const [outputString, setOutputString] = useState('');
  const [clickedLetters, setClickedLetters] = useState([]);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleTileClick = (letter) => {
    setClickedLetters([...clickedLetters, letter]);
    setOutputString([...outputString, letter]);
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
