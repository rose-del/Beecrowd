/*Zero vale Zero*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");
let [m, n] = lines.shift().split(" ").map(Number);

do{
 let soma = m + n;
 let number = soma + "";
 let semZero = "";

for(let i of number){
  if(i !== "0"){
    semZero += i;
  }
}
 console.log(semZero);
 [m, n] = lines.shift().split(" ").map(Number);
}while(m !== 0 && n !== 0);