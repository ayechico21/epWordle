import React from "react";
import { styled } from "styled-components";
import Guess from "../Guess";
import { range } from "../../utils";

function Guesses({ guessList }) {
  console.log(guessList);
  const guessListLength = guessList.length;
  return (
    <Wrapper>
      {range(guessListLength).map((_, index) => (
        <Guess key={index} guess={guessList[index]} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export default Guesses;
