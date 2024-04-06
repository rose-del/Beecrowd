#1017 GASTO DE COMBUSTÍVEL
tempoGasto = int(input())
velocidade = int(input())

distancia = velocidade*tempoGasto
litros = distancia/12
print("{:.3f}" .format(litros))