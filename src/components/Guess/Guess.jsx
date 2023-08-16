import React from "react";
import { styled } from "styled-components";

function Guess() {
  return (
    <Wrapper>
      <GuessWrapper>
        <Cell>A</Cell>
        <Cell>A</Cell>
        <Cell>A</Cell>
        <Cell>A</Cell>
        <Cell>A</Cell>
      </GuessWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
`;
const GuessWrapper = styled.div`
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
