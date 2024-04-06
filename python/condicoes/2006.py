#2006 IDENTIFICANDO O CHÁ
tipo = int(input())
votos = input().split(" ")

respostas = list(map(int, votos))

acertos = respostas.count(tipo)
print(acertos)