#1065 PARES ENTRE CINCO NÚMEROS
pares = 0

for _ in range(5):
    i = int(input())
    if i%2 == 0:
        pares += 1

print(f"{pares} valores pares")
