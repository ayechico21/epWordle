import GuessInput from "./components/GuessInput";
import Guesses from "./components/Guesses";
import Header from "./components/Header";
import React from "react";

function App() {
  const [wordLength, setWordLength] = React.useState(5);
  const [numOfChances, setNumofChances] = React.useState(5);
  const [guessList, setGuessList] = React.useState([]);

  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  };
  return (
    <>
      <Header />
      <Guesses
        guessList={guessList}
        numOfChances={numOfChances}
        wordLength={wordLength}
      />
      <GuessInput addGuess={addGuess} wordLength={wordLength} />
    </>
  );
}

export default App;
