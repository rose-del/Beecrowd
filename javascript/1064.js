/*Positivos e Média*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split('\n');

let valoresPositivos = 0;
let somaNum = 0;
  
for(let i = 1; i <= 6; i++){
  numeros = Number(lines.shift());
      if(numeros > 0.0){
        valoresPositivos++;
        somaNum += numeros;
}
}
media = (somaNum/valoresPositivos);

console.log(valoresPositivos + " valores positivos");
console.log(media.toFixed(1));