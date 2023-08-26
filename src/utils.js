export const range = (start, end, step = 1) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const output = [];
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export function checkGuess(guess, answer) {
  if (!guess || !answer) return null;

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.toUpperCase().split("");
  const guessStatus = [];

  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      guessStatus[i] = { letter: guessChars[i], status: "correct" };
    } else {
      guessStatus[i] = { letter: guessChars[i], status: "incorrect" };
    }
  }

  guessChars.map((char, index) => {
    const findIndex = answerChars.findIndex((val) => val === char);
    console.log(findIndex);
    if (findIndex < 0) return; /**character not present */
    if (findIndex === index || answerChars[index] === guessChars[index])
      return; /**correctly placed element */
    guessStatus[index].status = "misplaced";
  });

  return guessStatus;
}
