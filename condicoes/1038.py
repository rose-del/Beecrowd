#1038 LANCHE
valores = input().split(" ")

codigo = int(valores[0])
quantidade = int(valores[1])

if codigo == 1:
    calculo = quantidade*4.00
    print("Total: R$ {:.2f}" .format(calculo))
elif codigo == 2:
    calculo = quantidade*4.50
    print("Total: R$ {:.2f}" .format(calculo))
elif codigo == 3:
    calculo = quantidade*5.00
    print("Total: R$ {:.2f}" .format(calculo))
elif codigo == 4:
    calculo = quantidade*2.00
    print("Total: R$ {:.2f}" .format(calculo))
elif codigo == 5:
    calculo = quantidade*1.50
    print("Total: R$ {:.2f}" .format(calculo))