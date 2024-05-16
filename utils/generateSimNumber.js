const convertWithAssci = require("./converterWithAssci");
module.exports = (number1, number2, number3) => {
  let simNumber = "";
  if (number3) simNumber += convertWithAssci(number3);
  if (number2) simNumber += convertWithAssci(number2);
  if (number1) simNumber += convertWithAssci(number1);
  return simNumber;
};
