#1117 VALIDAÇÃO DE NOTA
media = 0
cont_notas_validas = 0

while cont_notas_validas < 2:
    nota = float(input())
    
    if nota >= 0 and nota <= 10:
        media += nota
        cont_notas_validas += 1
    else:
        print("nota invalida")

calculo = media/2
print(f"media = {calculo:.2f}")
