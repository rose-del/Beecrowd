#1042 SORT SIMPLES
valores = input().split(" ")
valoresInt = [int(valor) for valor in valores]

valoresInt.sort()

for valor in valoresInt:
    print(valor)

print()

for i in valores:
    print(i)