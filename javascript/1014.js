/*Consumo*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const [DistanciaX, CombustivelY] = input.split("\n");

const ValorMedio = DistanciaX / CombustivelY;

console.log(ValorMedio.toFixed(3) + " km/l");