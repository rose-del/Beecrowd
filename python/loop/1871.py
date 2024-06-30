#1871 ZERO VALE ZERO
while True:
    valores = input().split()

    m = int(valores[0])
    n = int(valores[1])

    if m == 0 and n == 0:
        break

    soma = m + n
    sem_zero = str(soma).replace('0', '')
    print(sem_zero)