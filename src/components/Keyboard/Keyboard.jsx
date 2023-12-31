import React from "react";
import styled from "styled-components";
import { GameContext } from "../Providers/GameProvider";
import { COLORS } from "../../constants";
import { AppContext } from "../Providers/AppProvider";

function Keyboard() {
  const { keyboardStatus, handleSubmit, setGuess } =
    React.useContext(GameContext);
  const { wordLength, gameStatus } = React.useContext(AppContext);

  /** action to be done after keyboard key is  presses*/
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
        handleSubmit();
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

  /** action to be done for virtually keyboard key press */
  const handleOnClick = (key) => {
    setGuess((cur) => {
      if (cur && cur.length === wordLength) return cur;
      return cur + key;
    });
  };

  /** action to be done after backspace key is pressed on virtual keyboard */
  const handleBackspace = () => {
    setGuess((cur) => {
      const nextGuess = cur.slice(0, -1);
      return nextGuess;
    });
  };

  React.useEffect(() => {
    /**If game is over, remove keylistener */
    if (gameStatus !== "running") {
      window.removeEventListener("keydown", handleKeyPress);
      return;
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress, gameStatus]);

  return (
    <Wrapper>
      {keys.map((row, rowIndex) => (
        <KeyRow key={rowIndex}>
          {rowIndex === 2 && (
            <XLButton
              style={{ "--color": COLORS.primaryTheme }}
              onClick={handleSubmit}
              disabled={
                gameStatus !== "running"
              } /**disable button if game is over */
            >
              Enter
            </XLButton>
          )}
          {row.map((key) => {
            /**Choose color of keyboard key using status of  key */
            const bgColor = keyboardStatus[key]
              ? COLORS[keyboardStatus[key]]
              : "";
            return (
              <Button
                key={key}
                style={{ "--color-bg": bgColor }}
                onClick={() => {
                  handleOnClick(key);
                }}
                disabled={gameStatus !== "running"}
              >
                {key}
              </Button>
            );
          })}
          {rowIndex === 2 && (
            <XLButton
              style={{ "--color": COLORS.primaryTheme }}
              onClick={handleBackspace}
              disabled={gameStatus !== "running"}
            >
              X
            </XLButton>
          )}
        </KeyRow>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%; /**take as much screen space as possible */
  max-width: 550px; /**clamp maximum width of keyboard*/
`;
const KeyRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin: 8px 0;
`;
const Button = styled.button`
  --size: 48px;
  height: var(--size);
  width: var(--size);
  font-weight: 500;
  background-color: var(--color-bg);
  transition: All 0.2s;
  overflow: hidden; /**avoid overflow to show on smaller screens */

  /**hover effect on button which are not disabled */
  &:hover:not[disabled] {
    transform: scale(1.1);
  }

  @media (max-width: 450px) {
    --size: 34px;
  }
`;
const XLButton = styled(Button)`
  flex-grow: 1; /**increase size by using extra space */
  color: var(--color);
  border: 3px solid var(--color);
  font-weight: 500;
`;
/**virtual keyboard keys */
const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default Keyboard;
