/*Quadrante*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

let linhas = lines.shift();
let valores = linhas.split(" ");
let x = parseInt(valores.shift());
let y = parseInt(valores.shift());

while(x !== 0 && y !== 0){
  if(x > 0 && y > 0){
    console.log("primeiro");
  }else if(x < 0 && y > 0){
    console.log("segundo");
  }else if(x < 0 && y < 0){
    console.log("terceiro");
  }else if(x > 0 && y < 0){
    console.log("quarto");
  }
linhas = lines.shift();
valores = linhas.split(" ");
x = parseInt(valores.shift());
y = parseInt(valores.shift());
}