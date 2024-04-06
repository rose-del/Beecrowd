#2339 AVIÕES DE PAPEL
valores = input().split(" ")
c, p, f = list(map(int, valores))

calculo = c*f
if calculo <= p:
    print("S")
else:
    print("N")