#3465 CIMBA
import math

valores = input().split(" ")

a = int(valores[0])
b = int(valores[1])
c = int(valores[2])

SemiP = (a+b+c)/2
calculo = math.sqrt(SemiP*(SemiP-a)*(SemiP-b)*(SemiP-c))
print("{:.3f} m2" .format(calculo))