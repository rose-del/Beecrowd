/*LED*/
let input = require("fs").readFileSync("/dev/stdin", "utf8");

let lines = input.split("\n");

let leds = lines.shift();
let soma = 0;

for(let i = 0; i < leds; i++){
  let x = lines.shift();
  for(let j = 0; j < x.length; j++){
    if(x[j] == "1"){
      soma += 2;
    }else if(x[j] == "2"){
      soma += 5;
    }else if(x[j] == "3"){
      soma += 5;
    }else if(x[j] == "4"){
      soma += 4;
    }else if(x[j] == "5"){
      soma += 5;
    }else if(x[j] == "6"){
      soma += 6;
    }else if(x[j] == "7"){
      soma += 3;
    }else if(x[j] == "8"){
      soma += 7;
    }else if(x[j] == "9"){
      soma += 6;
    }else if(x[j] == "0"){
      soma += 6;
    }
  }
  console.log(soma + " leds");
    soma = 0;
}