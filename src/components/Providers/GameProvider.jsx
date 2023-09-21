import React from "react";

export const GameContext = React.createContext();

function GameProvider({ children }) {
  const [guessList, setGuessList] = React.useState([]);

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      console.log(e.key);
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("onkeydown", handleKeyPress);
  }, []);

  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  };

  return (
    <GameContext.Provider value={{ guessList, addGuess }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
