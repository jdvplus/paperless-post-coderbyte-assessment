import { useState } from 'react';

import Tile from './Tile';
import { style } from './style';

const Application = (props) => {
  // TODO: add code here

  return (
    <section>
      <aside style={style.letterContainer} id='letterContainer'>
        <Tile letter='A' />
        <Tile letter='B' />
        <Tile letter='C' />
      </aside>
      <div id='outputString'></div>
    </section>
  );
};

export default Application;
