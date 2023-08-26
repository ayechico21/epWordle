import Header from "./components/Header";
import Game from "./components/Game";
import React from "react";
import { words } from "./constants";
import { styled } from "styled-components";

export const AppContext = React.createContext();

function App() {
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
      <Wrapper>
        <Header />
        <Game />
      </Wrapper>
    </AppContext.Provider>
  );
}
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
