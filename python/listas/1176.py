#Fibonacci em Vetor
t = int(input())
n = []

def fib(num):
    if num == 1 or num == 2:
        return f"Fib({num}) = {1}"
    
    anterior = 1
    corrente = 1

    for j in range(num - 2):
        proximo = anterior + corrente
        anterior = corrente
        corrente = proximo

    n.append(corrente)
    return f"Fib({num}) = {corrente}"

for i in range(t):
    num = int(input())

    if num == 0:
        print(f"Fib({num}) = {0}")
    else:    
        print(fib(num))
    