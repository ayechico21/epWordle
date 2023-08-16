import React from "react";
import { styled } from "styled-components";
import { range } from "../../utils";
import { COLORS } from "../../constants";

function Guess({ guess, wordLength }) {
  return (
    <Wrapper>
      {guess &&
        range(wordLength).map((_, index) => (
          <Cell key={index}>{guess[index]}</Cell>
        ))}
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
`;

export default Guess;
