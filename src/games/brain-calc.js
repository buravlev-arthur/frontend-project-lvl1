import { countOfRounds, playGame } from '../index.js';
import { getRandomNumber, calc } from '../utils.js';

const operators = ['+', '-', '*'];

export default () => {
  const questionsAndAnswers = [];
  const ruleOfGame = 'What is the result of the expression?';

  for (let i = 0; i < countOfRounds; i += 1) {
    const indexOfOperator = getRandomNumber(0, operators.length - 1);
    const operator = operators[indexOfOperator];
    const operandOne = getRandomNumber(1, 100);
    const operandTwo = getRandomNumber(1, 100);

    const question = `${operandOne} ${operator} ${operandTwo}`;
    const rightAnswer = calc(operandOne, operandTwo, operator);

    questionsAndAnswers.push([question, rightAnswer]);
  }

  playGame(questionsAndAnswers, ruleOfGame);
};
