import React from "react";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import Keyboard from "../Keyboard";
import styled from "styled-components";

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const addGuess = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  };

  return (
    <Wrapper>
      <Guesses guessList={guessList} />
      <GuessInput addGuess={addGuess} />
      <Keyboard />
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export default Game;
