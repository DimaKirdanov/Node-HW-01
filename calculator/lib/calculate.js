function calculate(operator, numbersArr) {
  switch (operator) {
    case "sum":
      return numbersArr.reduce((result, item) => result + item);
    case "sub":
      return numbersArr.reduce((result, item) => result - item);
    case "mult":
      return numbersArr.reduce((result, item) => result * item);
    case "div":
      return numbersArr.reduce((result, item) => result / item);

    default:
      return "Unknow operation type";
  }
}
module.exports = calculate;
