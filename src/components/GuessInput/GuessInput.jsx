import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { AppContext } from "../Providers/AppProvider";
import { GameContext } from "../Providers/GameProvider";

function GuessInput() {
  const { wordLength } = React.useContext(AppContext);
  const { guess, handleGuessInput, handleSubmit } =
    React.useContext(GameContext);

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
