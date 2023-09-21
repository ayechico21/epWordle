import React from "react";
import styled from "styled-components";

function Keyboard() {
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      console.log(e.key);
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <Wrapper>
      {keys.map((row, rowIndex) => (
        <KeyRow key={rowIndex}>
          {rowIndex === 2 && <XLButton>Enter</XLButton>}
          {row.map((key) => (
            <Button key={key}>{key}</Button>
          ))}
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
  padding: 5px 10px;
`;
const XLButton = styled(Button)``;

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default Keyboard;
