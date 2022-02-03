const task88 = require("./task88");
const task165 = require("./task165");

const arr = process.argv
  .filter(el => el !== process.argv[0] && el !== process.argv[1])
  .map(el => parseFloat(el));

const number = process.argv[2];

if (arr.length > 1) {
  console.log(task165.task165(arr));
} else console.log(task88.task88(number));
