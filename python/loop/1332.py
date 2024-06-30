#1332 UM-DOIS-TRÊS
n = int(input())

for i in range(n):
    palavra = input().strip()

    if len(palavra) > 3:
        print(3)
    else:
        soma = 0
        if palavra[0] == 'o':
            soma += 1
        if palavra[1] == 'n':
            soma += 1
        if palavra[2] == 'e':
            soma += 1

        if soma >= 2:
            print(1)
        else:
            print(2)

