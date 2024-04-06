/*Um, Dois, Três*/
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let palavras = lines.shift();

do{
  if(palavras.length == 5){
     console.log(3);
  }else{
      if((palavras[0] == "o" && palavras[2] == "e") ||
      (palavras[1] == "n" && palavras[2] == "e") ||
      (palavras[0] == "o" && palavras[1] == "n")){
         console.log(1);
      }else{
        if((palavras[0] == "t" && palavras[2] == "o") || 
        (palavras[1] == "w" && palavras[2] == "o") ||
        (palavras[0] == "t" && palavras[1] == "w")){
          console.log(2);
        }
      }
   }
palavras = lines.shift();
}while(palavras);