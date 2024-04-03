#1043 TRIÂNGULO
valores = input().split(" ")
valorA = float(valores[0])
valorB = float(valores[1])
valorC = float(valores[2])

if (valorA + valorB) > valorC and (valorB + valorC) > valorA and (valorA + valorC) > valorB:
    perimetro = valorA+valorB+valorC
    print("Perimetro = {:.1f}" .format(perimetro))
else:
    area = ((valorB + valorA)/2)*valorC
    print("Area = {:.1f}" .format(area))