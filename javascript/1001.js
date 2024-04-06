/*Extremamente Básico*/
const input = require("fs").readFileSync("/dev/stdin", "utf8" );

const [A, B] = input.split("\n").map(item => parseInt(item));

const soma = A + B;

console.log("X = " + soma);