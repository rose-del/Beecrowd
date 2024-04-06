#1016 DISTÂNCIA
distanciaKm = int(input())

carroX = 60

distanciaM = (distanciaKm*carroX)/30
format_DistanciaM = "{:.0f}" .format(distanciaM)
print(format_DistanciaM,"minutos")