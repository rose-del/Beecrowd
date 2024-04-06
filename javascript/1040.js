/*Média 3*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let nota = input.split("\n");
let linhas = nota.shift();
let lines = linhas.split(" ");

let N1 = parseFloat(lines.shift());
let N2 = parseFloat(lines.shift());
let N3 = parseFloat(lines.shift());
let N4 = parseFloat(lines.shift());

let Media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) /10;
console.log("Media: " + Media.toFixed(1));

if(Media >= 7.0){
  console.log("Aluno aprovado.");
}else if(Media < 5.0){
  console.log("Aluno reprovado.");  
}else{
  console.log("Aluno em exame.");
  let Exame = parseFloat(nota.shift());
  console.log("Nota do exame: " + Exame.toFixed(1));
  let Final = (Exame + Media) /2;

if(Final >= 5.0){
  console.log("Aluno aprovado.");
  console.log("Media final: " + Final.toFixed(1));
}else{
  console.log("Aluno reprovado.");
  console.log("Media final: " + Final.toFixed(1));
}
}