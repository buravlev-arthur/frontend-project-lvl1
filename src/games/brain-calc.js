import { countOfRounds, playGame } from '../index.js';

export default () => {
  const operators = ['+', '-', '*'];
  const questions = [];
  const rightAnswers = [];
  const rulesOfGame = 'What is the result of the expression?';

  for (let i = 0; i < countOfRounds; i += 1) {
    const operator = operators[Math.round(Math.random() * 2)];
    const operandOne = Math.round(Math.random() * 100 + 1);
    const operandTwo = Math.round(Math.random() * 100 + 1);

    questions.push(`${operandOne} ${operator} ${operandTwo}`);

    let rightAnswer = 0;

    switch (operator) {
      case '+':
        rightAnswer = String(operandOne + operandTwo);
        break;
      case '-':
        rightAnswer = String(operandOne - operandTwo);
        break;
      case '*':
        rightAnswer = String(operandOne * operandTwo);
        break;
      default:
        rightAnswer = 0;
    }

    rightAnswers.push(rightAnswer);
  }

  playGame(questions, rightAnswers, rulesOfGame);
};
