#1048 AUMENTO DE SALÁRIO
salario = float(input())

if salario <= 400.00:
    percentual = 15
elif salario <= 800.00:
    percentual = 12
elif salario <= 1200.00:
    percentual = 10
elif salario <= 2000.00:
    percentual = 7
else:
    percentual = 4

reajuste = (percentual / 100)*salario
calculo = salario + reajuste

print("Novo salario: {:.2f}".format(calculo))
print("Reajuste ganho: {:.2f}".format(reajuste))
print("Em percentual: {} %".format(percentual))