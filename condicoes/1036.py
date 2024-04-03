#1036 FÓRMULA DE BHASKARA
import math

valores = input().split(" ")

a = float(valores[0])
b = float(valores[1])
c = float(valores[2])

discriminante = math.pow(b,2) - (4*a*c)

if (discriminante >= 0 and a != 0):
    raiz1 = (-b + (math.sqrt(discriminante)))/(2*a)
    raiz2 = (-b - (math.sqrt(discriminante)))/(2*a)
    print("R1 = {:.5f}" .format(raiz1))
    print("R2 = {:.5f}" .format(raiz2))
else:
    print("Impossivel calcular")