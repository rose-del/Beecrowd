#2416 Corrida
valores = input().split(" ")
metros_percorrer = int(valores[0])
comprimento_pista = int(valores[1])

calculo = metros_percorrer%comprimento_pista
print(calculo)