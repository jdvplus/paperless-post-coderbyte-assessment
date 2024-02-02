import { style } from './style';

const Tile = (props) => {
  return <button style={style.letter}>{props.letter}</button>;
};

export default Tile;
