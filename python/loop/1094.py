#1094 Experiências
n = int(input())

total = 0
coelhos = 0
sapos = 0
ratos = 0

for i in range(n):
    quantia, tipo = input().split()
    quantia = int(quantia)

    total += quantia

    if tipo == "C":
        coelhos += quantia
    elif tipo == "S":
        sapos += quantia
    elif tipo == "R":
        ratos += quantia

percentual_coelhos = (coelhos/total)*100
percentual_ratos = (ratos/total)*100
percentual_sapos = (sapos/total)*100

print(f"Total: {total} cobaias")
print(f"Total de coelhos: {coelhos}")
print(f"Total de ratos: {ratos}")
print(f"Total de sapos: {sapos}")
print(f"Percentual de coelhos: {percentual_coelhos:.2f} % ")
print(f"Percentual de ratos: {percentual_ratos:.2f} %")
print(f"Percentual de sapos: {percentual_sapos:.2f} %")

