#1044 MÚLTIPLOS
valores = input().split(" ")
valorA = int(valores[0])
valorB = int(valores[1])

if valorA%valorB == 0 or valorB%valorA == 0:
    print("Sao Multiplos")
else:
    print("Nao sao Multiplos")