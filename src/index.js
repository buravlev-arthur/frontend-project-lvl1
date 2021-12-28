import readlineSync from 'readline-sync';

export const countOfRounds = 3;

export const playGame = (questionsAndAnswers, ruleOfGame) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(ruleOfGame);

  for (let i = 0; i < countOfRounds; i += 1) {
    const [question, rightAnswer] = questionsAndAnswers[i];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== String(rightAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};
