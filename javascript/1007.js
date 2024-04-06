/*Diferença*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n").map(item => parseInt(item));

const A = parseFloat(lines.shift()); 
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());
const D = parseFloat(lines.shift());

const media = ((A*B) - (C*D));

console.log("DIFERENCA = " + media);