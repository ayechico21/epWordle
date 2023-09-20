import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { AppContext } from "../../App";

function GuessInput({ addGuess }) {
  const { wordLength } = React.useContext(AppContext);
  const [guess, setGuess] = React.useState("");

  const handleGuessInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length < wordLength) return; /**Word limit not yet met */
    addGuess(guess);
    setGuess("");
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Your Guess </label>
      <Input
        type="text"
        id="guess-input"
        value={guess}
        onChange={handleGuessInput}
        maxLength={wordLength} /*max valid guess length */
      />
    </FormWrapper>
  );
}
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  max-width: 300px;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 5px;
  margin-top: 10px;
  border: 2px solid ${COLORS.primaryTheme};
`;

export default GuessInput;
