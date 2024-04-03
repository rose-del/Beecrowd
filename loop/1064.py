#1064 POSITIVOS E MÉDIA
positivos = 0
soma = 0

for _ in range(6):
    i = float(input())
    if i > 0:
        positivos += 1
        soma += i
        media = soma/positivos

print(f"{positivos} valores positivos")
print(f"{media:.1f}")