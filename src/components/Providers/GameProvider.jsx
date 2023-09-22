import React from "react";
import { AppContext } from "./AppProvider";
import { checkGuess, getGameStatus, validGuess } from "../../utils";
import { ToastContext } from "./ToastProvider";

export const GameContext = React.createContext();

const INITIAL_KEYBOARD_STATE = {
  A: undefined,
  B: undefined,
  C: undefined,
  D: undefined,
  E: undefined,
  F: undefined,
  G: undefined,
  H: undefined,
  I: undefined,
  J: undefined,
  K: undefined,
  L: undefined,
  M: undefined,
  N: undefined,
  O: undefined,
  P: undefined,
  Q: undefined,
  R: undefined,
  S: undefined,
  T: undefined,
  U: undefined,
  V: undefined,
  W: undefined,
  X: undefined,
  Y: undefined,
  Z: undefined,
};

function GameProvider({ children }) {
  const { wordLength, answer, numOfChances } = React.useContext(AppContext);
  const { addToast } = React.useContext(ToastContext);
  const [guessList, setGuessList] = React.useState([]);
  const [guess, setGuess] = React.useState("");
  const [keyboardStatus, setKeyboardStatus] = React.useState(
    INITIAL_KEYBOARD_STATE
  );

  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
    const gameStatus = getGameStatus(guess, answer);
    if (gameStatus) {
      addToast("Game won", "success");
    } else if (nextGuessList.length >= numOfChances) {
      addToast("Game lost", "error");
    }
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
      addToast("Word not found", "notice");
      setGuess("");
      return;
    }
    addGuess(guess);
    updateKeyboardStatus();
    setGuess("");
  };
  const updateKeyboardStatus = () => {
    const characters = checkGuess(guess, answer);
    const nextKeyboardStatus = { ...keyboardStatus };
    if (characters) {
      Object.values(characters).map(({ letter, status }) => {
        if (
          keyboardStatus[letter] === "correct" ||
          keyboardStatus[letter] === "inCorrect"
        )
          return;
        if (keyboardStatus[letter] === "misplaced" && status === "misplaced")
          return;

        nextKeyboardStatus[letter] = status;
      });
    }
    setKeyboardStatus(nextKeyboardStatus);
  };

  return (
    <GameContext.Provider
      value={{
        guessList,
        guess,
        setGuess,
        handleGuessInput,
        handleSubmit,
        keyboardStatus,
        updateKeyboardStatus,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
