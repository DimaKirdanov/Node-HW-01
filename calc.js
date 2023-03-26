// node calc.js sum 3 4 5
// node calc.js sub 100 50 25
// node calc.js mult 10 2 3
// node calc.js div 100 2 5
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));

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

console.log(calculate(operator, numbers));
