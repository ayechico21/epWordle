import React from "react";
import { styled } from "styled-components";
import { checkGuess, range } from "../../utils";
import { COLORS } from "../../constants";
import { AppContext } from "../../App";
function Guess({ guess }) {
  const { answer, wordLength } = React.useContext(AppContext);

  const characters = checkGuess(guess, answer);
  if (characters) console.log(characters);
  return (
    <Wrapper>
      {guess &&
        range(wordLength).map((_, index) => {
          const color = COLORS[`${characters[index].status}`];
          return (
            <Cell key={index} style={{ "--cell-color": color }}>
              {guess[index]}
            </Cell>
          );
        })}
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
  display: inline-flex;
  height: var(--cell-size);
  width: var(--cell-size);
  border: 2px solid ${COLORS.secondaryTheme};
  justify-content: center;
  align-items: center;
  background-color: var(--cell-color);
`;

export default Guess;
