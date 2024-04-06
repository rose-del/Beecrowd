/*Números Positivos*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

let Positivos = 0;

for(let i = 0.0; i < 6; i++){
  if(lines.shift() > 0){
    Positivos++;
  }
}
console.log(Positivos + " valores positivos");