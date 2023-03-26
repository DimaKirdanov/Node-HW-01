const calculator = require("./CalcClass");
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));

console.log(calculator.init());
