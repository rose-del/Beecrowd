/*Área do Círculo*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n").map(item => parseInt(item));

const Raio = parseFloat(input);
const PI = 3.14159;
const Area = PI * Math.pow(Raio, 2);

console.log ("A=" + Area.toFixed(4));