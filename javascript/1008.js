/*Salário*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");

const Funcionario = parseFloat(lines.shift());
const Horas = parseFloat(lines.shift());
const ValorporHora = parseFloat(lines.shift());

const salario = Horas * ValorporHora;

console.log("NUMBER = " + Funcionario);
console.log("SALARY = U$ " + salario.toFixed(2));