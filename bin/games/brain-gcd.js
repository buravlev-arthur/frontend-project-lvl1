#!/usr/bin/env node
import { askName, askQuestions, countOfRounds } from '../../src/index.js';

let userName = '';
const questions = [];
const rightAnswers = [];

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

for (let i = 0; i < countOfRounds; i += 1) {
  const randomNumberOne = Math.round(Math.random() * 100 + 1);
  const randomNumberTwo = Math.round(Math.random() * 100 + 1);

  questions.push(`${randomNumberOne} ${randomNumberTwo}`);
  rightAnswers.push(getGCD(randomNumberOne, randomNumberTwo));
}

userName = askName();
console.log('Find the greatest common divisor of given numbers.');
askQuestions(questions, rightAnswers, countOfRounds, userName);
