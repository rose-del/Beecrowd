#Seleçao em Vetor I
x = []

for i in range(100):
    valor = float(input())

    x.append(valor)

for i in range(100):
    if x[i] <= 10:
        print(f'A[{i}] = {x[i]}')