#1113 CRESCENTE E DECRESCENTE
while True:
    valores = input().split()
    x = int(valores[0])
    y = int(valores[1])

    if x == y or y == x:
        break
    elif x > y:
        print("Decrescente")
    elif x < y:
        print("Crescente")