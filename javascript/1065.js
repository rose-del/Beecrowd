/*Pares entre cinco números*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

numeros = 0;
cont = 0;

for(let i = 0; i < 5; i++){
  numeros = parseInt(lines.shift());
  if(numeros % 2 === 0)
   cont++;
}
console.log(cont + " valores pares");