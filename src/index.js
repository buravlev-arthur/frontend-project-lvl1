import readlineSync from 'readline-sync';

export const countOfRounds = 3;

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const playGame = (questions, rightAnswers, restRounds, rules, name = '') => {
  let playerName = name;
  const [question, ...restQuestions] = questions;
  const [rightAnswer, ...restRightAnswers] = rightAnswers;

  if (playerName.length === 0) {
    playerName = askName();
    console.log(rules);
  }

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === rightAnswer) {
    console.log('Correct!');

    if (restRounds > 1) {
      playGame(restQuestions, restRightAnswers, restRounds - 1, '', playerName);
    } else {
      console.log(`Congratulations, ${playerName}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
  }
};
