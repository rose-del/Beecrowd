#1018 CÉDULAS
valor = int(input())
print(valor)

notas100 = valor//100
valor %= 100 

notas50 = valor//50
valor %= 50

notas20 = valor//20
valor %= 20

notas10 = valor//10
valor %= 10

notas5 = valor//5
valor %= 5

notas2 = valor//2
valor %= 2

notas1 = valor//1
valor %= 1

print(notas100, "nota(s) de R$ 100,00")
print(notas50, "nota(s) de R$ 50,00")
print(notas20, "nota(s) de R$ 20,00")
print(notas10, "nota(s) de R$ 10,00")
print(notas5, "nota(s) de R$ 5,00")
print(notas2, "nota(s) de R$ 2,00")
print(notas1, "nota(s) de R$ 1,00")