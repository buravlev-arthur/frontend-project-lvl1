#!/usr/bin/env node
import { askName, askQuestions, countOfRounds } from '../../src/index.js';

let userName = '';
const questions = [];
const rightAnswers = [];

const generateProgression = () => {
  const progressionLength = Math.round(Math.random() * 15 + 5);
  const startNumber = Math.round(Math.random() * 100 + 1);
  const progressionStep = Math.round(Math.random() * 10 + 2);
  const progression = [];

  let currNumber = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(String(currNumber));
    currNumber += progressionStep;
  }

  return progression;
};

const makeQuestionAndAnswer = (progression) => {
  const sectetNumberIndex = Math.round(Math.random() * (progression.length - 1));
  rightAnswers.push(progression[sectetNumberIndex]);

  const question = [...progression];
  question[sectetNumberIndex] = '..';
  questions.push(question.join(' '));
};

for (let i = 0; i < countOfRounds; i += 1) {
  makeQuestionAndAnswer(generateProgression());
}

userName = askName();
console.log('What number is missing in the progression?');
askQuestions(questions, rightAnswers, countOfRounds, userName);
