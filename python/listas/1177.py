#Preenchimento de Vetor II
t = int(input())
n = []

for i in range(1000):
    i %= t
    n.append(i)

for i in range(1000):
    print(f"N{[i]} = {n[i]}")

