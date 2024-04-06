/*Tempo de Jogo com Minuto*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split(" ");

let Hora = Number(lines.shift());
let Minuto = Number(lines.shift());
let HoraFinal = Number(lines.shift());
let MinutoFinal = Number(lines.shift());

let Calculo = (HoraFinal - Hora);
let Calculation = (MinutoFinal - Minuto);

if(Calculation < 0){
  Calculation += 60;
  Calculo -= 1;
}
if(Calculo < 0){
  Calculo += 24;
}
if(Calculation == 0 && Calculo == 0){
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}else{
  console.log("O JOGO DUROU " + Calculo + " HORA(S) E " + Calculation + " MINUTO(S)");
}