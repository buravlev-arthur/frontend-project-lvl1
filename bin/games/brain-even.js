#!/usr/bin/env node
import { countOfRounds, askName, askQuestions } from '../../src/index.js';

let userName = '';
const questions = [];
const rightAnswers = [];

for (let i = 0; i < countOfRounds; i += 1) {
  const randomNumber = Math.round(Math.random() * 100 + 1);
  questions.push(randomNumber);

  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  rightAnswers.push(rightAnswer);
}

userName = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
askQuestions(questions, rightAnswers, countOfRounds, userName);
