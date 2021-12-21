#!/usr/bin/env node
import { countOfRounds, playGame } from '../../src/index.js';

const questions = [];
const rightAnswers = [];
const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

for (let i = 0; i < countOfRounds; i += 1) {
  const randomNumber = Math.round(Math.random() * 100 + 1);
  questions.push(randomNumber);

  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  rightAnswers.push(rightAnswer);
}

playGame(questions, rightAnswers, countOfRounds, rulesOfGame);
