import { countOfRounds, playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const getResultOfExpression = (operandOne, operandTwo, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = String(operandOne + operandTwo);
      break;
    case '-':
      result = String(operandOne - operandTwo);
      break;
    case '*':
      result = String(operandOne * operandTwo);
      break;
    default:
      throw new Error(`Selecting operator error. Selected operator is '${operator}'. Expected '+', '-' or '*'`);
  }

  return result;
};

export default () => {
  const questionsAndAnswers = [];
  const ruleOfGame = 'What is the result of the expression?';

  for (let i = 0; i < countOfRounds; i += 1) {
    const operator = operators[getRandomNumber(0, 2)];
    const operandOne = getRandomNumber(1, 100);
    const operandTwo = getRandomNumber(1, 100);

    const question = `${operandOne} ${operator} ${operandTwo}`;
    const rightAnswer = getResultOfExpression(operandOne, operandTwo, operator);

    questionsAndAnswers.push([question, rightAnswer]);
  }

  playGame(questionsAndAnswers, ruleOfGame);
};
