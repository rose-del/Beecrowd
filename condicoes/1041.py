#1041 COORDENADAS DE UM PONTO
valores = input().split(" ")
valorX = float(valores[0])
valorY = float(valores[1])

if valorX == 0.0 and valorY == 0.0:
    print("Origem")
elif valorX == 0.0:
    print("Eixo Y")
elif valorY == 0.0:
    print("Eixo X")
elif valorX > 0.0 and valorY > 0.0:
    print("Q1")
elif valorX < 0.0 and valorY > 0.0:
    print("Q2")
elif valorX < 0.0 and valorY < 0.0:
    print("Q3")
elif valorX > 0.0 and valorY < 0.0:
    print("Q4")