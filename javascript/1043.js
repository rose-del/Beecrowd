/*Triângulo*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split(" ");

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());

if(A > B && A > C){
  Maior = A;
}else if(B > C){
  Maior = B;
}else{
  Maior = C;
}
if(Maior == A){
  Soma = B + C;
}else if(Maior == B){
  Soma = A + C;
}else{
  Soma = A + B;
}
if(Soma > Maior){
  Valor = (A + B + C);
  console.log("Perimetro = " + Valor.toFixed(1));
}else{
  Resultado = ((A + B) * C) /2;
  console.log("Area = " + Resultado.toFixed(1));
}