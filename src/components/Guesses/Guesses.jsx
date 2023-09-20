import React from "react";
import { styled } from "styled-components";
import Guess from "../Guess";
import { range } from "../../utils";
import { AppContext } from "../../App";

function Guesses({ guessList }) {
  const { numOfChances } = React.useContext(AppContext);
  const guessListLength = guessList.length;
  return (
    <Wrapper>
      {range(guessListLength).map((_, index) => (
        <Guess key={index} guess={guessList[index]} />
      ))}
      {range(guessListLength, numOfChances).map((_, index) => (
        <Guess key={index} guess="" />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`;
export default Guesses;
