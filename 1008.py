#1008 SALÁRIO
numeroFuncionario = int(input())
horasTrabalhadas = int(input())
valorPorHora = float(input())

calculo = horasTrabalhadas*valorPorHora
print("NUMBER =",numeroFuncionario)
print("SALARY = U$ {:.2F}" .format(calculo))