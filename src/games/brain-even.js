import { countOfRounds, getRandomNumber, playGame } from '../index.js';

const isEven = (n) => n % 2 === 0;

export default () => {
  const questionsAndAnswers = [];
  const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < countOfRounds; i += 1) {
    const question = getRandomNumber(1, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';

    questionsAndAnswers.push([question, rightAnswer]);
  }

  playGame(questionsAndAnswers, ruleOfGame);
};
