#1009 SALÁRIO COM BÔNUS
nome = input()
salarioFixo = float(input())
totalVendas = float(input())

comissão = totalVendas*0.15
total = salarioFixo+comissão
print("TOTAL = R$ {:.2f}" .format(total))