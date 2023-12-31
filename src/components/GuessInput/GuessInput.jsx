import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { GameContext } from "../Providers/GameProvider";
import { AppContext } from "../Providers/AppProvider";

function GuessInput() {
  const { gameStatus } = React.useContext(AppContext);
  const { guess, handleGuessInput } = React.useContext(GameContext);

  return (
    <Wrapper>
      <p>Your Guess: </p>
      <Input
        type="text"
        value={guess}
        onChange={(e) => {
          handleGuessInput(e);
        }}
        onKeyDown={(event) =>
          event.preventDefault()
        } /**avoid keydown event causing guess updated twice */
        autoFocus={true} /**input is focused when component is rendered */
        disabled={gameStatus !== "running"} /**disable input if game is over */
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
  width: 300px;
  height: 3.5rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 5px;
  margin-top: 10px;
  text-align: center;
  border: 2px solid ${COLORS.primaryTheme};
`;

export default GuessInput;
