/*Salário com Bônus*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");

const Nome = lines.shift();
const SalarioFixo = parseFloat(lines.shift());
const Vendas = parseFloat(lines.shift());

const Valor = Vendas * 0.15;

const ValorF = SalarioFixo + Valor;

console.log("TOTAL = R$ " + ValorF.toFixed(2));