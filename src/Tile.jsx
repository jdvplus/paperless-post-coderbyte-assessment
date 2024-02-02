import React from 'react';

import { style } from './style';

export default function Tile({ letter, handleTileClick }) {
  return (
    <button style={style.letter} onClick={() => handleTileClick(letter)}>
      {letter}
    </button>
  );
}
