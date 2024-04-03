#1067 NÚMEROS ÍMPARES
#1° Solução com for
x = int(input())

for i in range(x+1):
    if i%2 != 0:
        print(i)
        i += 1

#2° Solução com while
"""
x = int(input())
i = 1

while i <= x:
    if i%2 != 0:
        print(i)
    i += 1
"""