/*Tabuada*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split();

let N = parseInt(lines.shift());
let calculo = 0;

if(N > 1 && N < 1000){
for(let i = 1; i <= 10; i++){
  calculo = i * N;
  console.log(i + " x " + N + " = " + calculo);
}
}