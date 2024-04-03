#1012 ÁREA
valores = input().split(" ")
valoresDouble = [float(valor) for valor in valores]

pi = 3.14159

a = (valoresDouble[0] * valoresDouble[2])/2
b = (pi*(valoresDouble[2]**2))
c = ((valoresDouble[0]+valoresDouble[1])*valoresDouble[2])/2
d = valoresDouble[1]**2
e = valoresDouble[0]*valoresDouble[1]

print("TRIANGULO: {:.3f}" .format(a))
print("CIRCULO: {:.3f}" .format(b))
print("TRAPEZIO: {:.3f}" .format(c))
print("QUADRADO: {:.3f}" .format(d))
print("RETANGULO: {:.3f}" .format(e))
