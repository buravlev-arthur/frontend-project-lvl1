import { countOfRounds, getRandomNumber, playGame } from '../index.js';

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

export default () => {
  const questionsAndAnswers = [];
  const ruleOfGame = 'What number is missing in the progression? 2';

  for (let i = 0; i < countOfRounds; i += 1) {
    const progression = generateProgression();
    const sectetNumberIndex = getRandomNumber(0, progression.length - 1);

    const numbersRow = [...progression];
    numbersRow[sectetNumberIndex] = '..';

    const question = numbersRow.join(' ');
    const rightAnswer = progression[sectetNumberIndex];

    questionsAndAnswers.push([question, rightAnswer]);
  }

  playGame(questionsAndAnswers, ruleOfGame);
};
