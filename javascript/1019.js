/*Conversão de Tempo*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split();

const TempoPorS = parseInt(lines.shift());

const TempoS = TempoPorS % 3600;
const S = TempoS % 60;
const Horas = parseInt(TempoPorS / 3600);
const Minutos = parseInt(TempoS / 60);
const Segundos = parseInt(S);

console.log(Horas + ":" + Minutos + ":" + Segundos);