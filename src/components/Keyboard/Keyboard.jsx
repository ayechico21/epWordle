import React from "react";
import styled from "styled-components";
import { GameContext } from "../Providers/GameProvider";
import { COLORS } from "../../constants";

function Keyboard() {
  const { keyboardStatus } = React.useContext(GameContext);

  /* React.useEffect(() => {
    const handleKeyPress = (e) => {
      console.log(e.key);
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []); */

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
`;
const XLButton = styled(Button)``;

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default Keyboard;
