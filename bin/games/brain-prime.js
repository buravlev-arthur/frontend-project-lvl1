#!/usr/bin/env node
import { askName, askQuestions, countOfRounds } from '../../src/index.js';

let userName = '';
const questions = [];
const rightAnswers = [];

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

for (let i = 0; i < countOfRounds; i += 1) {
  const randomNumber = Math.round(Math.random() * 100 + 1);
  questions.push(String(randomNumber));

  const rightAnswer = isPrimal(randomNumber) ? 'yes' : 'no';
  rightAnswers.push(rightAnswer);
}

userName = askName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
askQuestions(questions, rightAnswers, countOfRounds, userName);
