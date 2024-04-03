#1010 CÁLCULO SIMPLES
produto1 = input().split(" ")
produto2 = input().split(" ")

codigoP1 = int(produto1[0])
numeroP1 = int(produto1[1])
valorUnitarioP1 = float(produto1[2])

codigoP2 = int(produto2[0])
numeroP2 = int(produto2[1])
valorUnitarioP2 = float(produto2[2])

calculoP1 = numeroP1*valorUnitarioP1
calculoP2 = numeroP2*valorUnitarioP2

total = calculoP1+calculoP2
print("VALOR A PAGAR: R$ {:.2f}" .format(total))