/*Pares,Ímpares, Positivos e Negativos*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

valores = 0;
numPar = 0;
numImpar = 0;
numPositivo = 0;
numNegativo = 0;

for(let i = 0; i < 5; i++){
  valores = parseInt(lines.shift());
   if(valores % 2 === 0){
    numPar++;
  }else{
    numImpar++;
  }
    if(valores > 0){
    numPositivo++;
  }else if(valores < 0){
    numNegativo++;
  } 
}
console.log(numPar + " valor(es) par(es)");
console.log(numImpar + " valor(es) impar(es)");
console.log(numPositivo + " valor(es) positivo(s)");
console.log(numNegativo + " valor(es) negativo(s)");