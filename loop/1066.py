#1066 PARES, ÍMPARES, POSITIVOS E NEGATIVOS
pares = 0
impares = 0
positivos = 0
negativos = 0

for _ in range(5):
    i = float(input())
    if i%2 == 0:
        pares += 1
    elif i%2 != 0:
        impares += 1

    if i > 0:
        positivos += 1
    elif i < 0:
        negativos += 1

print(f"{pares} valor(es) par(es)")
print(f"{impares} valor(es) impar(es)")
print(f"{positivos} valor(es) positivo(s)")
print(f"{negativos} valor(es) negativo(s)")