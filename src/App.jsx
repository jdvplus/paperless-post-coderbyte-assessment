import { useState, useEffect } from 'react';

import Tile from './Tile';
import { style } from './style';

const Application = (props) => {
  // TODO: add code here
  // state to represent the string
  // state to track the underscore operations
  const [outputString, setOutputString] = useState('');
  const [letterCounter, setLetterCounter] = useState({});
  const [lastLetter, setLastLetter] = useState('')

  // on click for tiles
  const tileClick = (event) => {
    //prevent rerender
    event.preventDefault();

    // get letter value of button
    const letter = event.target.innerText;

      // clone letterCounter
    const letterCounterClone = {...letterCounter}
    let outputStringClone = outputString;  
    let lastLetterClone = lastLetter;
    
    // check if trend is continuing
    console.log(lastLetter, letter)
    if(lastLetter !== '' && letter !== lastLetter) delete letterCounterClone[lastLetter];
    
    // update letter counter
    if(letterCounterClone[letter] !== undefined) letterCounterClone[letter]++;
    else letterCounterClone[letter] = 1;

    // add new letter
    outputStringClone += letter;

    // handle triple
    if(letterCounterClone[letter] === 3) {
      delete letterCounterClone[letter];
      outputStringClone = outputStringClone.slice(0, (outputStringClone.length - 3));
      outputStringClone += '_'
    }

    // prep letterCounterClone
    lastLetterClone = letter;

    //setters
    setOutputString(outputStringClone);
    setLetterCounter(letterCounterClone);
    setLastLetter(lastLetterClone);
  }

  // set up alphabet
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const tileArr = []

  for(const letter of alphabet) {
    tileArr.push(<Tile letter={letter} click={tileClick} key={letter}/>)
  }

  return (
    <section>
      <aside style={style.letterContainer} id='letterContainer'>
        {tileArr}
      </aside>
      <div id='outputString'>{outputString}</div>
    </section>
  );
};

export default Application;
