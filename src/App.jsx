import Header from "./components/Header";
import Game from "./components/Game";
import React from "react";
import { words } from "./constants";

function App() {
  const [wordLength, setWordLength] = React.useState(5);
  const [numOfChances, setNumofChances] = React.useState(5);

  const wordle = words[wordLength];

  /**Random answer */
  const answer = wordle[Math.floor(Math.random() * wordle.length)];
  console.log(answer);

  return (
    <>
      <Header />
      <Game wordLength={wordLength} numOfChances={numOfChances} />
    </>
  );
}

export default App;
