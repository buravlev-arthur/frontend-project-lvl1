#!/usr/bin/env node
import { countOfRounds, askName, askQuestions } from '../../src/index.js';

let userName = '';
const operators = ['+', '-', '*'];
const questions = [];
const rightAnswers = [];

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

userName = askName();
console.log('What is the result of the expression?');
askQuestions(questions, rightAnswers, countOfRounds, userName);
