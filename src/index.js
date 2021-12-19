import readlineSync from 'readline-sync';

export const countOfRounds = 3;

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestions = (questions, rightAnswers, restRounds, userName) => {
  const [question, ...restQuestions] = questions;
  const [rightAnswer, ...restRightAnswers] = rightAnswers;

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === rightAnswer) {
    console.log('Correct!');

    if (restRounds > 1) {
      askQuestions(restQuestions, restRightAnswers, restRounds - 1, userName);
    } else {
      console.log(`Congratulations, ${userName}`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};
