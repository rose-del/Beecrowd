/*Seis números Impares*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

let x = parseInt(lines.shift());
let i = 0;

while(i < 6){
  if(x % 2 == 1){
    console.log(x);
    i++;
  }
  x++;
}