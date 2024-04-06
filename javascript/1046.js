/*Tempo de Jogo*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split(" ");

let Inicio = parseInt(lines.shift());
let Fim = parseInt(lines.shift());

let Hora = 24 - (24 + Inicio - Fim) %24;

if(Inicio == Fim){
  console.log("O JOGO DUROU 24 HORA(S)");
}else{
  console.log("O JOGO DUROU " + Hora + " HORA(S)");
}