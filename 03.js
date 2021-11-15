"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'count_down' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER x as parameter.
 */
// Shared Content to CodeReview
// Credits : https://github.com/engnogueira
function count_down(x) {
  let contagemRegressiva = "";
  for (i = x; i >= 0; i -= 1) {
    if (i == 0) {
      contagemRegressiva += i + "!!!";
      return contagemRegressiva;
    }
    contagemRegressiva += i + "...";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const x = parseInt(readLine().trim(), 10);

  const result = count_down(x);

  ws.write(result + "\n");

  ws.end();
}
