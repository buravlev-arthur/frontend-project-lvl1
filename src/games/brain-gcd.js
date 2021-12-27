import { countOfRounds, playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (n1, n2) => {
  let n = 1;
  let nod = 0;
  const min = Math.min(Math.abs(n1), Math.abs(n2));

  while (n <= min) {
    if (n1 % n === 0 && n2 % n === 0) {
      nod = n;
    }

    n += 1;
  }

  return String(nod);
};

export default () => {
  const questionsAndAnswers = [];
  const ruleOfGame = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < countOfRounds; i += 1) {
    const numberOne = getRandomNumber(1, 100);
    const numberTwo = getRandomNumber(1, 100);

    const question = `${numberOne} ${numberTwo}`;
    const rightAnswer = getGCD(numberOne, numberTwo);

    questionsAndAnswers.push([question, rightAnswer]);
  }

  playGame(questionsAndAnswers, ruleOfGame);
};
