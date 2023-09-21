import React from "react";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import styled from "styled-components";
import GameProvider from "../Providers/GameProvider";

import ToastProvider from "../Providers/ToastProvider";
import ToastShelf from "../Toaster/ToastShelf";

function Game() {
  return (
    <Wrapper>
      <ToastProvider>
        <GameProvider>
          <Guesses />
          <GuessInput />
        </GameProvider>
        <ToastShelf />
      </ToastProvider>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border: 2px dotted red;
`;
export default Game;
