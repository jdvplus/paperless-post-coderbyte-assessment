import { style } from './style';

const Tile = (props) => {
  const { letter, click } = props;
  return <button style={style.letter} onClick={click}>{letter}</button>;
};

export default Tile;
