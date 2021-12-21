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
  const question = questions[0];
  const rightAnswer = rightAnswers[0];

  if (playerName.length === 0) {
    playerName = askName();
    console.log(rules);
  }

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === rightAnswer) {
    console.log('Correct!');

    if (restRounds > 1) {
      questions.shift();
      rightAnswers.shift();

      playGame(questions, rightAnswers, restRounds - 1, '', playerName);
    } else {
      console.log(`Congratulations, ${playerName}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
  }
};
