/*Fórmula de Bhaskara*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split(" ");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let Calculo = Math.pow(B, 2) - (4 * A * C);

if(Calculo >= 0 && A !== 0) {
  let Raiz = (-B + Math.sqrt(Calculo)) / (2 * A);
  let RaizQ = (-B - Math.sqrt(Calculo)) / (2 * A);

  console.log("R1 = " + Raiz.toFixed(5));
  console.log("R2 = " + RaizQ.toFixed(5));
}else{
  console.log("Impossivel calcular");
}