/*Distância Entre Dois Pontos*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");

const [x1, y1] = lines[0].split(" ");
const [x2, y2] = lines[1].split(" ");

const calculo = (((x2 - x1)**2) + ((y2 - y1)**2))
const Distancia = Math.sqrt(calculo, 2);

console.log(Distancia.toFixed(4));