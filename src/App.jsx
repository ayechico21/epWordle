import Header from "./components/Header";
import Game from "./components/Game";
import React from "react";
import { words } from "./constants";
import { styled } from "styled-components";
import { useToggle } from "./hooks";

function App() {
  const [wordLength, setWordLength] = React.useState(5);
  const [numOfChances, setNumofChances] = React.useState(5);

  const wordle = words[wordLength];

  /**Random answer */
  const answer = wordle[Math.floor(Math.random() * wordle.length)];
  console.log(answer);

  return (
    <Wrapper>
      <Header />
      <Game wordLength={wordLength} numOfChances={numOfChances} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
