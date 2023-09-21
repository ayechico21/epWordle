import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const examplesWords = [
  ["H", "O", "P", "E"],
  ["Y", "O", "U"],
  ["E", "N", "J", "O", "Y"],
];
const exampleStatus = [
  "H is in the word and in the correct spot.",
  "U is in the word but in the wrong spot.",
  "E is not in the word in any spot.",
];

function InfoModal() {
  return (
    <Wrapper>
      <h2>How to Play</h2>
      <h4>Guess the wordle in minimum tries</h4>
      <ul>
        <li>Each guess must be a valid word.</li>
        <li>
          The color of the tiles will change to show how close your guess was to
          the word.
        </li>
        <li>
          You can customize the number of letters and tries in this version.
        </li>
        <li>You can play infinitely in this version.</li>
      </ul>
      <h5>Examples</h5>
      {examplesWords.map((example, index) => (
        <Example key={index}>
          {example.map((character) => {
            let color;
            if (character === "H") color = COLORS.correct;
            else if (character === "U") color = COLORS.misplaced;
            else if (character === "E" && index === 2) color = COLORS.incorrect;

            return (
              <Cell key={character} style={{ "--cell-color": color }}>
                {character}
              </Cell>
            );
          })}
          <p>{exampleStatus[index]}</p>
        </Example>
      ))}

      <Footnote>
        This is a customizable version of Wordle built by{" "}
        <Link href="https://github.com/ayechico21">Chico</Link>.
      </Footnote>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Example = styled.div``;
const Cell = styled.span`
  --cell-size: 3rem;
  --border-color: ${COLORS.secondaryTheme}; /**default border color */
  display: inline-flex;
  height: var(--cell-size);
  width: var(--cell-size);
  border: 2px solid var(--border-color);
  justify-content: center;
  align-items: center;
  background-color: var(--cell-color);
  margin-bottom: 5px;
  margin-right: 5px;
`;
const Footnote = styled.footer`
  margin: 0 auto;
`;
const Link = styled.a`
  text-decoration: none;
  color: ${COLORS.primaryTheme};
`;
export default InfoModal;
