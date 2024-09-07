#Menor e Posição
n = int(input())
lista = []

valores = input().split()

for i in range(n):
    valor = int(valores[i])

    lista.append(valor)

menor = min(lista)
posicao = lista.index(menor)

print(f'Menor valor: {menor}')
print(f'Posicao: {posicao}')
