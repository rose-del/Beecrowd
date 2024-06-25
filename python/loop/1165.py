#1165 NÚMERO PRIMO
n = int(input())

for i in range(n):
    x = int(input())
    soma = 0

    for valor in range(1, x):
        if x%valor == 0:
            soma += valor

    if soma > 2:
        print(f'{x} nao eh primo')
    else:
        print(f'{x} eh primo')

