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

  // check for triplicate when string changes
  // use effect can run twice, once on unmount and once on mount
  useEffect(() => {
    // everything in the base function block will run ON MOUNT
    console.log('mounting new output string:', outputString)
    if(letterCounter[lastLetter] !== undefined && letterCounter[lastLetter] === 3) {
      console.log('triple found and being replaced');
      // clone state
      const letterCounterClone = {...letterCounter}
      let outputStringClone = outputString;  
      
      // handle changes
      delete letterCounterClone[lastLetter];
      outputStringClone = outputStringClone.slice(0, (outputStringClone.length - 3));
      outputStringClone += '_'
      
      // invoke setters
      setOutputString(outputStringClone);
      setLetterCounter(letterCounterClone);
    }
    // if you return a function THIS will run on UNMOUNT
    return () => console.log('unmounting old output string:', outputString)
  }, [outputString])

  // on click for tiles
  const tileClick = (event) => {
    //prevent rerender
    event.preventDefault();

    // get letter value of clicked button
    const letter = event.target.innerText;

    // clone state
    const letterCounterClone = {...letterCounter}
    let outputStringClone = outputString;  
    
    // reset letterCounter if needed
    if(lastLetter !== '' && letter !== lastLetter) delete letterCounterClone[lastLetter];
    
    // handle letter changes
    if(letterCounterClone[letter] !== undefined) letterCounterClone[letter]++;
    else letterCounterClone[letter] = 1;
    outputStringClone += letter;

    // setters
    setOutputString(outputStringClone);
    setLetterCounter(letterCounterClone);
    setLastLetter(letter);
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
