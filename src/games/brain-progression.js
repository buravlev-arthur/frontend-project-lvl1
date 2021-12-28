import { countOfRounds, playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const generateProgression = (progressionLength, startNumber, progressionStep) => {
  const progression = [];
  let currNumber = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(currNumber);
    currNumber += progressionStep;
  }

  return progression;
};

export default () => {
  const questionsAndAnswers = [];
  const ruleOfGame = 'What number is missing in the progression?';

  for (let i = 0; i < countOfRounds; i += 1) {
    const progressionLength = getRandomNumber(5, 15);
    const startNumber = getRandomNumber(1, 100);
    const progressionStep = getRandomNumber(2, 10);

    const progression = generateProgression(progressionLength, startNumber, progressionStep);

    const sectetNumberIndex = getRandomNumber(0, progression.length - 1);

    const numbersRow = [...progression];
    numbersRow[sectetNumberIndex] = '..';

    const question = numbersRow.join(' ');
    const rightAnswer = progression[sectetNumberIndex];

    questionsAndAnswers.push([question, rightAnswer]);
  }

  playGame(questionsAndAnswers, ruleOfGame);
};
