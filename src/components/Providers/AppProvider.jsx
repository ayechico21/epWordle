import React from "react";
import { words } from "../../constants";
export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [wordLength, setWordLength] = React.useState(5);
  const [numOfChances, setNumofChances] = React.useState(5);
  const [answer, setAnswer] = React.useState();

  React.useEffect(() => {
    const wordle = words[wordLength];
    /**Random answer */
    const nextAnswer = wordle[Math.floor(Math.random() * wordle.length)];
    setAnswer(nextAnswer);
    console.log(nextAnswer);
  }, [wordLength]);

  return (
    <AppContext.Provider value={{ wordLength, numOfChances, answer }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
