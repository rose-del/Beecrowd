#1060 NÚMEROS POSITIVOS
positivos = 0

for _ in range(6):
    i = float(input())
    if i > 0:
        positivos += 1

print(f"{positivos} valores positivos")
