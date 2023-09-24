import React from "react";
import { words } from "../../constants";
export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [wordLength, setWordLength] = React.useState(5);
  const [numOfChances, setNumofChances] = React.useState(5);
  const [answer, setAnswer] = React.useState("");

  /** || running || won || lost || end || */
  const [gameStatus, setGameStatus] = React.useState("running");

  React.useEffect(() => {
    /**If game over but not yet ended, maintain game state  */
    if (gameStatus === "won" || gameStatus === "lost") return;
    const wordle = words[wordLength];
    /**Random answer */
    const nextAnswer = wordle[Math.floor(Math.random() * wordle.length)];
    setAnswer(nextAnswer);
    console.log(nextAnswer);

    if (gameStatus !== "end") return; /**avoid infinite re-renders */
    setGameStatus("running"); /**let the next game begin!!! */
  }, [wordLength, gameStatus]);

  return (
    <AppContext.Provider
      value={{
        wordLength,
        setWordLength,
        numOfChances,
        setNumofChances,
        gameStatus,
        setGameStatus,
        answer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
