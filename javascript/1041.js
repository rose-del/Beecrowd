/*Coordenadas de um Pontos*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split(" ");

let X = Number(lines.shift());
let Y = Number(lines.shift());

if(X === 0.0 && Y === 0.0){
  console.log("Origem");
}else if(X == 0.0){
  console.log("Eixo Y");
}else if(Y == 0.0){
  console.log("Eixo X");
}else if(X > 0.0 && Y > 0.0){
  console.log("Q1");
}else if(X < 0.0 && Y > 0.0){
  console.log("Q2");
}else if(X < 0.0 && Y < 0.0){
  console.log("Q3");
}else if(X > 0.0 && Y < 0.0){
  console.log("Q4");
}