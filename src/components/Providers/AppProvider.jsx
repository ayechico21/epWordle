import React from "react";
import { words } from "../../constants";
export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [wordLength, setWordLength] = React.useState(5);
  const [numOfChances, setNumofChances] = React.useState(5);
  const [answer, setAnswer] = React.useState("");
  const [isGameOn, setIsGameOn] = React.useState(true);

  React.useEffect(() => {
    const wordle = words[wordLength];
    /**Random answer */
    const nextAnswer = wordle[Math.floor(Math.random() * wordle.length)];
    setAnswer(nextAnswer);
    console.log(nextAnswer);

    if (isGameOn) return /**avoid infinite re-renders */;
    else setIsGameOn(true); /**let the game begin!!! */
  }, [wordLength, isGameOn]);

  return (
    <AppContext.Provider
      value={{
        wordLength,
        numOfChances,
        answer,
        isGameOn,
        setWordLength,
        setNumofChances,
        setIsGameOn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
