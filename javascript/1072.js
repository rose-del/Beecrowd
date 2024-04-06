/*Intervalo 2*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

let N = parseInt(lines.shift());
let M = 0;
let P = 0;

for(let i = 0; i < N; i++){
  let x = lines.shift();
   if(x >= 10 && x <= 20){
     M++;
   }else{
    P++;
   }
}
console.log(M + " in");
console.log(P + " out");