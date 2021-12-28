export const getRandomNumber = (min, max) => Math.round(Math.random() * max + min);

export const calc = (operandOne, operandTwo, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = operandOne + operandTwo;
      break;
    case '-':
      result = operandOne - operandTwo;
      break;
    case '*':
      result = operandOne * operandTwo;
      break;
    default:
      throw new Error(`Selecting operator error. Selected operator is '${operator}'. Expected '+', '-' or '*'`);
  }

  return result;
};
