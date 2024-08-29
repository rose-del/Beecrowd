#Troca em Vetor I
n = []

for i in range(20):
    num = int(input())

    n.append(num)

lista = reversed(n)
l = list(lista)

for i in range(20):
    print(f'N[{i}] = {l[i]}')