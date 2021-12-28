import { countOfRounds, playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrimal = (n) => {
  if (n === 1) return false;

  let divisor = 2;

  while (divisor < n) {
    if (n % divisor === 0) {
      return false;
    }

    divisor += 1;
  }

  return true;
};

export default () => {
  const questionsAndAnswers = [];
  const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let i = 0; i < countOfRounds; i += 1) {
    const question = getRandomNumber(1, 100);
    const rightAnswer = isPrimal(question) ? 'yes' : 'no';

    questionsAndAnswers.push([String(question), rightAnswer]);
  }

  playGame(questionsAndAnswers, ruleOfGame);
};
