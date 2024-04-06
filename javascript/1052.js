/*Mês*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split();

let Mes = parseInt(lines.shift());

if(Mes == 1){
  console.log("January");
}else if(Mes == 2){
  console.log("February");
}else if(Mes == 3){
  console.log("March");
}else if(Mes == 4){
   console.log("April");
}else if(Mes == 5){
   console.log("May");
}else if(Mes == 6){
   console.log("June");
}else if(Mes == 7){
   console.log("July");
}else if(Mes == 8){
   console.log("August");
}else if(Mes == 9){
   console.log("September");
}else if(Mes == 10){
   console.log("October");
}else if(Mes == 11){
   console.log("November");
}else if(Mes == 12){
   console.log("December");
}