/*Múltiplos*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split(" ");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

if(A % B == 0 || B % A == 0){
  console.log("Sao Multiplos");
}else{
  console.log("Nao sao Multiplos");
}