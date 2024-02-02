import { ReactPropTypes } from 'react';

import { style } from './style';

const Tile = ({ letter, handleTileClick }) => {
  return (
    <button style={style.letter} onClick={() => handleTileClick(letter)}>
      {letter}
    </button>
  );
};

export default Tile;

Tile.propTypes = {
  letter: ReactPropTypes.string,
  handleTileClick: ReactPropTypes.func,
};
