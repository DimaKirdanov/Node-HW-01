class CalcClass {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }
  init() {
    return this.calculate(this.operator, this.numbers);
  }
  calculate(operator, numbersArr) {
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
}
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));

module.exports = new CalcClass(operator, numbers);
