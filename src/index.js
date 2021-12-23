import readlineSync from 'readline-sync';

export const countOfRounds = 3;

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askQuestion = (question, rightAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export const playGame = (questions, rightAnswers, rules) => {
  const playerName = askName();

  console.log(rules);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const question = questions.shift();
    const rightAnswer = rightAnswers.shift();

    if (!askQuestion(question, rightAnswer)) {
      console.log(`Let's try again, ${playerName}!`);
      break;
    }

    if (i === countOfRounds) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};
