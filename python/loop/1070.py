#1070 SEIS NÚMEROS ÍMPARES
x = int(input())
quantidadeImpares = 0

while quantidadeImpares < 6:
    if x%2 != 0:
        print(x)
        quantidadeImpares += 1
    x += 1