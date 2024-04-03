#2455 GANGORRA
valores = input().split(" ")
p1, c1, p2, c2 = list(map(int, valores))

calculo1 = p1*c1
calculo2 = p2*c2

if calculo1 == calculo2:
    print("0")
elif calculo1 > calculo2:
    print("-1")
else:
    print("1")