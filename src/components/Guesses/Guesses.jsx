import { styled } from "styled-components";
import Guess from "../Guess";
import { range } from "../../utils";

function Guesses({ guessList, numOfChances, wordLength }) {
  const guessListLength = guessList.length;
  return (
    <Wrapper>
      {range(guessListLength).map((_, index) => (
        <Guess key={index} guess={guessList[index]} wordLength={wordLength} />
      ))}
      {range(guessListLength, numOfChances).map((_, index) => (
        <Guess key={index} guess="" wordLength={wordLength} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 40px 0;
`;
export default Guesses;
