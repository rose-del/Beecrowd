#1101 SEQUÊNCIA DE NÚMEROS E SOMA
while True:
    valores = input().split()
    m = int(valores[0])
    n = int(valores[1])

    if m <= 0 or n <= 0:
        break

    menor = min(m, n)
    maior = max(m, n)
    
    #Obs.: A soma tem que ser declada dentro do while, pois ela precisar reiniciar a cada novo par
    soma = 0 
    for num in range(menor, maior + 1):
        print(num, end=" ")
        soma += num
        
    print(f"Sum={soma}")