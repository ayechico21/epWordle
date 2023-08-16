import GuessInput from "./components/GuessInput";
import Guesses from "./components/Guesses";
import Header from "./components/Header";
import React from "react";
function App() {
  const [guessList, setGuessList] = React.useState([]);
  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  };
  return (
    <>
      <Header />
      <Guesses guessList={guessList} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default App;
