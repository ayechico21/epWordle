import React from "react";
import { styled } from "styled-components";
import { getGuessStatus, range } from "../../utils";
import { COLORS } from "../../constants";
import { AppContext } from "../Providers/AppProvider";

function Guess({ guess }) {
  const { answer, wordLength, gameStatus } = React.useContext(AppContext);
  const characters = getGuessStatus(
    guess,
    answer
  ); /**get status for each character of guess */

  return (
    <Wrapper>
      {/**If guess is present && game is not over */}
      {guess &&
        gameStatus !== "end" &&
        range(wordLength).map((_, index) => {
          const color = COLORS[`${characters[index].status}`];
          return (
            <Cell
              key={index}
              style={{ "--cell-color": color, "--border-color": color }}
            >
              {guess[index]}
            </Cell>
          );
        })}
      {/**If not guess word */}
      {!guess && range(wordLength).map((_, index) => <Cell key={index} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Cell = styled.span`
  --cell-size: 3rem;
  --font-color: hsl(0, 0%, 100%);
  --border-color: ${COLORS.secondaryTheme}; /**default border color */
  display: inline-flex;
  height: var(--cell-size);
  width: var(--cell-size);
  border: 2px solid var(--border-color);
  justify-content: center;
  align-items: center;
  background-color: var(--cell-color);
  color: var(--font-color);
  font-size: 1.5rem;
  font-weight: 600;
`;

export default Guess;
