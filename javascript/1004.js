/*Produto Simples*/
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [A, B] = input.split("\n").map(item => parseInt(item));
const PROD = A * B;

console.log("PROD = " + PROD);