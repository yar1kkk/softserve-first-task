const readline = require("readline");
const task88 = require("./task88");
const task165 = require("./task165");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

console.log("Input:");

rl.on("line", (line) => {
  lines.push(line);

  if ((lines.length >= 2) &&
  ((lines[lines.length - 1]).trim() === "") &&
  ((lines[lines.length - 2]).trim() === "")) rl.close();
});

rl.on("close", () => {
  lines = lines
    .map(el => parseFloat(el))
    .filter(el => !isNaN(el));

  if (lines.length > 1) {
    console.log(task165.task165(lines));
  } else console.log(task88.task88(lines[0]));
});
