/*Intervalo*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split();

const Valor = parseFloat(lines.shift());

if(Valor >= 0 && Valor <= 25){
  console.log("Intervalo [0,25]");

}else if(Valor > 25 && Valor <= 50){
  console.log("Intervalo (25,50]");

}else if(Valor > 50 && Valor <= 75){
  console.log("Intervalo (50,75]");

}else if(Valor >= 75 && Valor <= 100){
  console.log("Intervalo (75,100]");
}else{
  console.log("Fora de intervalo");
}