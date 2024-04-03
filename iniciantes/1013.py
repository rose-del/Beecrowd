#1013 O MAIOR
import math
valores = input().split(" ")

a = int(valores[0])
b = int(valores[1])
c = int(valores[2])

maiorAB = (a + b + (abs(a - b)))//2
maiorC = (c + maiorAB + (abs(c-maiorAB)))//2
print(maiorC, "eh o maior")