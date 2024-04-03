#1046 TEMPO DE JOGO
valores = input().split(" ")
HoraInicial = int(valores[0])
HoraFinal = int(valores[1])

if HoraInicial == HoraFinal:
    print("O JOGO DUROU 24 HORA(S)")
else:
    calculo = (24-(24+HoraInicial-HoraFinal)%24)
    print("O JOGO DUROU {} HORA(S)" .format(calculo))