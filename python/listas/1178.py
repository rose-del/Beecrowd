#Preenchimento de Vetor III
x = float(input())
n = [0]*10

for i in range(100):
    n[i] = x
    x = x/2
    n.append(x)

for i in range(100):
    print(f"N{[i]} = {n[i]:.4f}")