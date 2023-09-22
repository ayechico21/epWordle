import React, { useEffect } from "react";
import styled from "styled-components";
import { GameContext } from "../Providers/GameProvider";
import { COLORS } from "../../constants";
import { AppContext } from "../Providers/AppProvider";

function Keyboard() {
  const { keyboardStatus, handleSubmit, setGuess } =
    React.useContext(GameContext);
  const { wordLength } = React.useContext(AppContext);
  const handleKeyPress = React.useCallback(
    (e) => {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        const key = e.key.toUpperCase();
        setGuess((cur) => {
          if (cur && cur.length === wordLength) return cur;
          return cur + key;
        });
      }
      if (e.key === "Enter") {
        handleSubmit(e);
      }
      if (e.key === "Backspace") {
        setGuess((cur) => {
          const nextGuess = cur.slice(0, -1);
          return nextGuess;
        });
      }
    },
    [handleSubmit, setGuess, wordLength]
  );
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <Wrapper>
      {keys.map((row, rowIndex) => (
        <KeyRow key={rowIndex}>
          {rowIndex === 2 && <XLButton>Enter</XLButton>}
          {row.map((key) => {
            const bgColor = keyboardStatus[key]
              ? COLORS[keyboardStatus[key]]
              : "";
            return (
              <Button key={key} style={{ "--color-bg": bgColor }}>
                {key}
              </Button>
            );
          })}
          {rowIndex === 2 && <XLButton>❌</XLButton>}
        </KeyRow>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const KeyRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 8px;
`;
const Button = styled.button`
  padding: 6px 12px;
  font-weight: 500;
  background-color: var(--color-bg);
  transition: All 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
const XLButton = styled(Button)``;

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default Keyboard;
