const moduleA = require("./moduleA.js");
const interestCalculator = require("./interestCalculator");
console.log('Node.js 실행 테스트');

const a = 10;
const b = 100;

console.log(moduleA.sum(a, b));
console.log(interestCalculator.calcSimpleInterest(100, 10, 3));
console.log(interestCalculator.calcCompoundInterest(100, 10, 3));