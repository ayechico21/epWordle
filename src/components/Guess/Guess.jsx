import React from "react";
import { styled } from "styled-components";
import { range } from "../../utils";

function Guess({ guess }) {
  const guessLength = guess.length;

  return (
    <Wrapper>
      {range(guessLength).map((_, index) => (
        <Cell key={index}>{guess[index]}</Cell>
      ))}
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
  border: 2px solid grey;
  justify-content: center;
  align-items: center;
`;

export default Guess;
