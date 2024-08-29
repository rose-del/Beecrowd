def soma(n):
    s = str(n)
    if len(s) == 1:
        return n
    else:
        valor = int(s[-1])
        return valor - soma(n)
    
n = int(input())
print(soma(n))