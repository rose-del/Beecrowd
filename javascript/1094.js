/*Experiências*/
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let N = Number(lines.shift()); 
let valores = new Array(3); 
valores[0] = 0; 
valores[1] = 0; 
valores[2] = 0;

  for(let i = 0; i< N; i++) {
    let experimento = (lines.shift());
    let quantiaEtipo = experimento.split(' '); 
    let quantia = Number(quantiaEtipo[0]); 
    let tipo = quantiaEtipo[1]; 

    if(tipo == 'C') {
        valores[0] += quantia;
    }else if (tipo == 'R') {
        valores[1] += quantia;
    }else{
        valores[2] += quantia;
    }
   } 

let totalCoelhos = valores[0]; 
let totalRatos = valores[1];
let totalSapos = valores[2];
let totalCobaias = totalCoelhos + totalRatos + totalSapos; 

let percentualCoelhos = totalCoelhos/totalCobaias * 100.0; 
let percentualRatos = totalRatos/totalCobaias * 100.0; 
let percentualSapos = totalSapos/totalCobaias * 100.0; 


console.log('Total: ' + totalCobaias + ' cobaias'); 
console.log('Total de coelhos: ' + totalCoelhos); 
console.log('Total de ratos: ' + totalRatos); 
console.log('Total de sapos: ' + totalSapos); 

console.log('Percentual de coelhos: ' + percentualCoelhos.toFixed(2) + ' %'); 
console.log('Percentual de ratos: ' + percentualRatos.toFixed(2) + ' %'); 
console.log('Percentual de sapos: ' + percentualSapos.toFixed(2) + ' %');

/*2° solução possível*/
/*
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

let casosDeTestes = Number(lines.shift());
let coelho = 0;
let rato = 0;
let sapo = 0;
let total = 0;

for(let i = 0; i < casosDeTestes; i++){
  let linhas = lines.shift().split(" ");
  let quantidade = parseInt(linhas.shift());
  let cobaia = linhas.shift();
     
 total += quantidade;

 if(cobaia == "C"){
    coelho += quantidade;
  }else if(cobaia == "R"){
    rato += quantidade;
  }else if(cobaia == "S"){
    sapo += quantidade;
  }
}
console.log("Total: " + total + " cobaias");
console.log("Total de coelhos: " + coelho);
console.log("Total de ratos: " + rato);
console.log("Total de sapos: " + sapo);

let porcentagemDoC = (coelho/total)*100;
let porcentagemDoR = (rato/total)*100;
let porcentagemDoS = (sapo/total)*100;

console.log("Percentual de coelhos: " + porcentagemDoC.toFixed(2) + " %");
console.log("Percentual de ratos: " + porcentagemDoR.toFixed(2) + " %");
console.log("Percentual de sapos: " + porcentagemDoS.toFixed(2) + " %");
*/