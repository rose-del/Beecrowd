/*Combinador*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

let n = parseInt(lines.shift());

for(let i = 1; i <= n; i++){
 let linhas = lines.shift().split(" ");
 let palavra1 = linhas.shift();
 let palavra2 = linhas.shift();

 let concatenar = palavra1.length + palavra2.length;
 let combinador = "";

for(let a = 0; a < concatenar; a++){
  combinador += palavra1.substring(a,a + 1) + palavra2.substring(a,a + 1);
}
console.log(combinador);
}