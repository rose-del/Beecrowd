let valor = 91.01

let n = parseFloat(valor)

let notas = [100, 50, 20, 10, 5, 2]
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
aux = 0

console.log("NOTAS: ")
for (let i = 0; i < notas.length; i++){
    aux = parseInt(valor/notas[i]);
    console.log(`${aux} nota(s) de R$ ${notas[i].toFixed(2)}`);
    valor = valor % notas[i]

}
console.log("MOEDAS: ")
for (let j = 0; j < moedas.length; j++){
    aux = parseInt(valor/moedas[j])
    console.log(`${aux} moeda(s) de R$ ${moedas[j].toFixed(2)}`)
    valor = valor % moedas[j] + 0.00001
}