import React from "react";
import { AppContext } from "./AppProvider";
import { checkGuess, getGuessStatus, validGuess } from "../../utils";
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
  const { wordLength, answer, numOfChances, gameStatus, setGameStatus } =
    React.useContext(AppContext);
  const { addToast } = React.useContext(ToastContext);
  const [guessList, setGuessList] = React.useState([]);
  const [guess, setGuess] = React.useState("");
  const [keyboardStatus, setKeyboardStatus] = React.useState(
    INITIAL_KEYBOARD_STATE
  );

  /**Reset Game State */
  React.useEffect(() => {
    if (gameStatus === "end") {
      setGuessList([]); /**initial guessList state => empty */
      setGuess(""); /**initial guessstate => empty */
      setKeyboardStatus(INITIAL_KEYBOARD_STATE);
    }
  }, [gameStatus]);

  /**add new guess to guess list */
  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
    const isGameWon = checkGuess(guess, answer);
    if (isGameWon) {
      addToast(`Game won in ${guessList.length + 1} tries`, "success", true);
      setGameStatus("won");
    } else if (nextGuessList.length >= numOfChances) {
      addToast(`Correct word is "${answer}"`, "error", true);
      setGameStatus("lost");
    }
  };
  const handleGuessInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };
  const handleSubmit = () => {
    if (guess.length < wordLength) {
      addToast("Check word length", "warning");
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
    const characters = getGuessStatus(guess, answer);
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
