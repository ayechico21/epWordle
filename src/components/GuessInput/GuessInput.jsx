import React from "react";
import { styled } from "styled-components";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleGuessInput = (event) => {
    setGuess(event.target.value);
  };
  const handleGuessSubmit = (event) => {
    if (event.key === "Enter") {
      addGuess(guess);
      setGuess("");
    }
  };
  return (
    <Wrapper>
      <label htmlFor="guess-input">Your Guess </label>
      <Input
        type="text"
        id="guess-input"
        value={guess}
        onChange={handleGuessInput}
        onKeyDown={handleGuessSubmit}
      />
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  max-width: 300px;
  border: 2px solid hsl(240, 100%, 90%);
`;

export default GuessInput;
