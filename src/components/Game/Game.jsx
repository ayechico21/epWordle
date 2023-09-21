import React from "react";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import styled from "styled-components";
import GameProvider from "../Providers/GameProvider";
import Toast from "../Toaster/Toast";

function Game() {
  return (
    <Wrapper>
      <GameProvider>
        <Guesses />
        <GuessInput />
        <Toast />
      </GameProvider>
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
