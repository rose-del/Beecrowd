/*Números Ímpares*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

x = parseInt(lines.shift());

i = 1;
while(i <= x){
  if(i % 2 !== 0)
   console.log(i);
   i++;
}