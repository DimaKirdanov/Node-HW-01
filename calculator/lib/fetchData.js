const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));

module.exports = {
  operator,
  numbers,
};
