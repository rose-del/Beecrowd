#1047 TEMPO DE JOGO COM MINUTOS
valores = input().split(" ")
HoraInicial = int(valores[0])
MinutoInicial = int(valores[1])
HoraFinal = int(valores[2])
MinutoFinal = int(valores[3])

calculoH = HoraFinal-HoraInicial  
calculoM = MinutoFinal-MinutoInicial

if calculoM < 0:
    calculoM += 60
    calculoH -= 1
if calculoH < 0:
    calculoH += 24

if HoraInicial == HoraFinal and MinutoInicial == MinutoFinal:
    print("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
else:
    print(f"O JOGO DUROU {calculoH} HORA(S) E {calculoM} MINUTO(S)")