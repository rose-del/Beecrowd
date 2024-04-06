/*Par ou Ímpar*/
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n = lines.shift();
let valores = 0;

for(let i = 1; i <= n; i++){
  valores = Number(lines.shift());
  if(valores === 0){
    console.log("NULL");
  }else if(valores <= 0 && valores % 2 === 0){
    console.log("EVEN NEGATIVE");
  }else if(valores >= 0 && valores % 2 === 0){
    console.log("EVEN POSITIVE");
  }else if(valores <= 0 && valores % 2 === -1){
    console.log("ODD NEGATIVE");
  }else if(valores >= 0 && valores % 2 === 1){
    console.log("ODD POSITIVE");
  }
}