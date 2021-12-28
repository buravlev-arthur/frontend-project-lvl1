import { countOfRounds, playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getGCD = (n1, n2) => {
  let n = 1;
  let gcd = 0;
  const min = Math.min(Math.abs(n1), Math.abs(n2));

  while (n <= min) {
    if (n1 % n === 0 && n2 % n === 0) {
      gcd = n;
    }

    n += 1;
  }

  return gcd;
};

export default () => {
  const questionsAndAnswers = [];
  const ruleOfGame = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < countOfRounds; i += 1) {
    const numberOne = getRandomNumber(1, 100);
    const numberTwo = getRandomNumber(1, 100);

    const question = `${numberOne} ${numberTwo}`;
    const rightAnswer = String(getGCD(numberOne, numberTwo));

    questionsAndAnswers.push([question, rightAnswer]);
  }

  playGame(questionsAndAnswers, ruleOfGame);
};
