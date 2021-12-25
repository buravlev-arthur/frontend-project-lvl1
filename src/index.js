import readlineSync from 'readline-sync';

export const countOfRounds = 3;

export const getRandomNumber = (min, max) => Math.round(Math.random() * max + min);

export const playGame = (questionsAndAnswers, rule) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(rule);

  for (let i = 0; i < countOfRounds; i += 1) {
    console.log(`Question: ${questionsAndAnswers[i][0]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== questionsAndAnswers[i][1]) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionsAndAnswers[i][1]}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);

  return true;
};
