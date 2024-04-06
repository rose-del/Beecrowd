/*Gasto de Combustível*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");
const ViagemH = parseInt(lines.shift());
const VelocidadeM = parseInt(lines.shift());

const Distanciamento = ViagemH * VelocidadeM;
const Litros = Distanciamento/ 12;

console.log(Litros.toFixed(3));