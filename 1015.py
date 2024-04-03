#1015 DISTÂNCIA ENTRE DOIS PONTOS
import math

ValoresP1 = input().split(" ")
ValoresP2 = input().split(" ")

p1 = [float(valor) for valor in ValoresP1]
p2 = [float(valor) for valor in ValoresP2]

distancia = math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)
print("{:.4f}" .format(distancia))