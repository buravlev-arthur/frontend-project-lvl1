import { countOfRounds, playGame } from '../index.js';

const isPrimal = (n) => {
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
  const questions = [];
  const rightAnswers = [];
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let i = 0; i < countOfRounds; i += 1) {
    const randomNumber = Math.round(Math.random() * 100 + 1);
    questions.push(String(randomNumber));

    const rightAnswer = isPrimal(randomNumber) ? 'yes' : 'no';
    rightAnswers.push(rightAnswer);
  }

  playGame(questions, rightAnswers, rulesOfGame);
};
