import React from "react";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  };

  return (
    <>
      <Guesses guessList={guessList} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
