import React from "react";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";

function Game({ wordLength, numOfChances }) {
  const [guessList, setGuessList] = React.useState([]);

  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  };

  return (
    <>
      <Guesses
        guessList={guessList}
        numOfChances={numOfChances}
        wordLength={wordLength}
      />
      <GuessInput addGuess={addGuess} wordLength={wordLength} />
    </>
  );
}

export default Game;
