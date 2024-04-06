/*Quadrado de pares*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split();

let N = parseInt(lines.shift());

for(let i = 1; i <= N; i++){
  if(i % 2 === 0)
  console.log(i + "^2 = " + (i * i));
}