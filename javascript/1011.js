/*Esfera*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");

const R = parseFloat(input);
const PI = 3.14159;
const ValorRaio = (4/3) * PI * R;

const ValorReal = ValorRaio*Math.pow(R, 2);

console.log("VOLUME = " + ValorReal.toFixed(3));