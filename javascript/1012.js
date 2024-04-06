/*Área*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split(" ");

const [A, B, C] = input.split(" ");
const PI = 3.14159;

const TrianguloR = (A * C) / 2.0;
const CirculoR = PI * Math.pow(C, 2);
const Trapezio = (parseFloat(A) + parseFloat(B))*C/2.0;
const Quadrado = B*B;
const Retangulo = A*B;

console.log("TRIANGULO: " + TrianguloR.toFixed(3));
console.log("CIRCULO: " + CirculoR.toFixed(3));
console.log("TRAPEZIO: " + Trapezio.toFixed(3));
console.log("QUADRADO: " + Quadrado.toFixed(3));
console.log("RETANGULO: " + Retangulo.toFixed(3));