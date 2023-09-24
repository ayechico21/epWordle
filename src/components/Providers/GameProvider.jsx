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
  const [guessList, setGuessList] = React.useState(
    []
  ); /**store all the guesses */
  const [guess, setGuess] = React.useState(""); /**current user guess */
  const [keyboardStatus, setKeyboardStatus] = React.useState(
    INITIAL_KEYBOARD_STATE
  ); /**virtual keys status */

  /**Reset Game State if new game ended and new game to be started*/
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
    const isGameWon = checkGuess(guess, answer); /**compare guess and answer */
    if (isGameWon) {
      addToast(`Game won in ${guessList.length + 1} tries`, "success", true);
      setGameStatus("won");
    } else if (nextGuessList.length >= numOfChances) {
      addToast(`Correct word is "${answer}"`, "error", true);
      setGameStatus("lost");
    }
  };

  /**user input guess in GuessInput */
  const handleGuessInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  /**User tries to add guess, check if guess meets requirements */
  const handleSubmit = () => {
    if (guess.length < wordLength) {
      addToast("Check word length", "warning");
      return; /**Word limit not yet met */
    }

    /**guess word not a valid word */
    if (!validGuess(guess)) {
      addToast("Word not found", "notice");
      setGuess("");
      return;
    }

    addGuess(guess);
    updateKeyboardStatus();
    setGuess("");
  };
  /**update virtual keyboard based on guess character status */
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
