#2791 FEIJÃO
valores = input().split(" ")
valoresInt = list(map(int, valores))

for i in range(4):
    if valoresInt[i] == 1:
        print(i+1)