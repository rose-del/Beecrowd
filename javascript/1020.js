/*Idade em dias*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split();

const Day = parseInt(lines.shift());

const Anos = parseInt(Day / 365);
const Dia = Day % 365;

const Meses = parseInt(Dia / 30);
const Dias = Dia % 30;

console.log(Anos.toFixed(0) + " ano(s)");
console.log(Meses.toFixed(0) + " mes(es)");
console.log(Dias + " dia(s)");