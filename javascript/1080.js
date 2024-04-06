/*Maior e Posição*/
/*
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

let maior = Number(lines.shift());
let posicao = 1;

for(let i = 2; i <= 100; i++){
  let valores = Number(lines.shift());
   if(valores > maior){
     maior = valores;
     posicao = i;
   }
}
console.log(maior);
console.log(posicao);
*/

/*2° solução possível com array*/
let input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valores = new Array(100);
valores = input.split("\n").map(e => Number(e));

let posicao = 1;
let maior = valores[0];

for(let i = 0; i < 100; i++){
  let valor = valores[i];
   if(valor > maior){
     maior = valor;
     posicao = i+1;
   }
}
console.log(maior);
console.log(posicao);
