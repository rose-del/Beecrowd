/*Lanche*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split(" ");

let Codigo = parseInt(lines.shift());
let Quantia = parseInt(lines.shift());

if(Codigo == 1 && Quantia >= 1){
  let Preco1 = (4.00 * Quantia);
  console.log("Total: R$ " + Preco1.toFixed(2));
}
if(Codigo == 2 && Quantia >= 3){
  let Preco2 = (4.50 * Quantia);
  console.log("Total: R$ " + Preco2.toFixed(2));
}
if(Codigo == 3 && Quantia >= 2){
  let Preco3 = (5.00 * Quantia);
  console.log("Total: R$ " + Preco3.toFixed(2));
}
if(Codigo == 4 && Quantia >= 3){
  let Preco4 = (2.00 * Quantia);
  console.log("Total: R$ " + Preco4.toFixed(2));
}
if(Codigo == 5 && Quantia >= 2){
  let Preco5 = (1.50 * Quantia);
  console.log("Total: R$ " + Preco5.toFixed(2));
}