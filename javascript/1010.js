/*Cálculo Simples*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");

const Peca1 = lines.shift().split(" ");
const Peca2 = lines.shift().split(" ");

const ItemP1 = Peca1.shift();
const QuantidadeP1 = Peca1.shift();
const UnitarioP1 = Peca1.shift();

const TotalP1 = QuantidadeP1 * UnitarioP1;

const ItemP2 = Peca2.shift();
const QuantidadeP2 = Peca2.shift();
const UnitarioP2 = Peca2.shift();

const TotalP2 = QuantidadeP2 * UnitarioP2;

const ValorTotal = TotalP1 + TotalP2;

console.log("VALOR A PAGAR: R$ " + ValorTotal.toFixed(2));