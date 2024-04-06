/*Aumento de Salário*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

let Money = parseFloat(lines.shift());

if(Money <= 400.00){
  Salario = (Money * 1.15);
  console.log("Novo salario: " + Salario.toFixed(2));
  Reajuste = (Money * 0.15);
  console.log("Reajuste ganho: " + Reajuste.toFixed(2));
  console.log("Em percentual: " + '15 %');
}else if(Money <= 800.00){
  Salario = (Money * 1.12);
  console.log("Novo salario: " + Salario.toFixed(2));
  Reajuste = (Money * 0.12);
  console.log("Reajuste ganho: " + Reajuste.toFixed(2));
  console.log("Em percentual: " + "12 %");
}else if(Money <= 1200.00){
  Salario = (Money * 1.10);
  console.log("Novo salario: " + Salario.toFixed(2));
  Reajuste = (Money * 0.10);
  console.log("Reajuste ganho: " + Reajuste.toFixed(2));
  console.log("Em percentual: " + "10 %");
}else if(Money <= 2000.00){
  Salario = (Money * 1.07);
  console.log("Novo salario: " + Salario.toFixed(2));
  Reajuste = (Money * 0.07);
  console.log("Reajuste ganho: " + Reajuste.toFixed(2));
  console.log("Em percentual: " + "7 %");
}else if(Money > 2000.00){
  Salario = (Money * 1.04);
  console.log("Novo salario: " + Salario.toFixed(2));
  Reajuste = (Money * 0.04);
  console.log("Reajuste ganho: " + Reajuste.toFixed(2));
  console.log("Em percentual: " + "4 %");
}