#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

let userName = '';
let countOfQuestions = 3;

const askNumber = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

userName = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (countOfQuestions > 0) {
  const randomNumber = Math.round(Math.random() * 100 + 1);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  const answer = askNumber(randomNumber);

  if (answer === rightAnswer) {
    console.log('Correct!');
    countOfQuestions -= 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (countOfQuestions === 0) {
  console.log(`Congratulations, ${userName}!`);
}
