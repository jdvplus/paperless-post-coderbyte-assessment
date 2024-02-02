import { style } from './style';

const Tile = ({ letter, handleTileClick }) => {
  return (
    <button style={style.letter} onClick={() => handleTileClick(letter)}>
      {letter}
    </button>
  );
};

export default Tile;
