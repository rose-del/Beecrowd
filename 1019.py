#1019 CONVERSÃO DE TEMPO
valorSegundos = int(input())

TempoPorSegundos = valorSegundos%3600

valorHoras = valorSegundos//3600
valorMinutos = TempoPorSegundos//60
Segundos = TempoPorSegundos%60
print(f"{valorHoras}:{valorMinutos}:{Segundos}")
