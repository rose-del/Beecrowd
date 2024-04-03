#1035 TESTE DE SELEÇÃO 1
valores = input().split(" ")

valorA = int(valores[0])
valorB = int(valores[1])
valorC = int(valores[2])
valorD = int(valores[3])

if (valorB > valorC and 
    (valorD > valorA) and 
    ((valorC+valorD) > (valorA+valorB)) and 
    (valorC >= 0 and valorD >= 0) and 
    (valorA%2 == 0)):
    print("Valores aceitos")
else:
    print("Valores nao aceitos")