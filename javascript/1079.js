/*Médias ponderadas*/
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let testes = lines.shift();

for(i = 0; i < testes; i++){
    let linhas = lines.shift();
    let valores = linhas.split(" ");
    let a = Number(valores.shift());
    let b = Number(valores.shift());
    let c = Number(valores.shift());

 let calculo = (a*2 + b*3 + c*5);
 let media = calculo/10;
 console.log(media.toFixed(1));
}

/*2° solução possível com array*/
/* 
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n");

let N = Number(lines.shift()); 
 for(let i = 0; i < N; i++){
    let valoresAAA = lines.shift().split(' ');
    let valores = new Array(3)
  for(let a = 0; a < 3; a++){
        valores[a] = Number(valoresAAA[a])
    }
let mediaPonderada = (valores[0] * 2 + valores[1] * 3 + valores[2] * 5) / 10.0
    console.log(mediaPonderada.toFixed(1))
}
*/