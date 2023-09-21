import React from "react";
import { AppContext } from "./AppProvider";
import { validGuess } from "../../utils";
import { ToastContext } from "./ToastProvider";

export const GameContext = React.createContext();

function GameProvider({ children }) {
  const { wordLength } = React.useContext(AppContext);
  const [guessList, setGuessList] = React.useState([]);
  const [guess, setGuess] = React.useState("");
  const { addToast } = React.useContext(ToastContext);

  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  };

  const handleGuessInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length < wordLength) {
      addToast("Check guess length", "warning");
      return; /**Word limit not yet met */
    }
    if (!validGuess(guess)) {
      addToast("Word not found", "error");
      setGuess("");
      return;
    }
    addGuess(guess);
    setGuess("");
  };

  return (
    <GameContext.Provider
      value={{ guessList, guess, handleGuessInput, handleSubmit }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
