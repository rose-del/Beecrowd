#1020 IDADE EM DIAS
idadeDias = int(input())

calculoAnos = idadeDias//365
calculoMeses = ((idadeDias%365)//30)
calculoDias = ((idadeDias%365)%30)

print(calculoAnos, "ano(s)")
print(calculoMeses, "mes(es)")
print(calculoDias, "dia(s)")