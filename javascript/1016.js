/*Distância*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split();

const Y = 60;
const Distancia = (lines * Y) / 30;

console.log(Distancia + " minutos");