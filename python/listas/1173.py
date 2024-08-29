#Preenchimento de Vetor I
valor = int(input())
n = []

n.append(valor)
for i in range(1, 10):
    num = n[i - 1]*2
    n.append(num)

for i in range(10):
    print(f'N[{i}] = {n[i]}')
