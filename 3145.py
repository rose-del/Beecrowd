#3145 UMA JOTNADA INESPERADA
lista = input().split(" ")
listaInteiros = [int(i) for i in lista]

dias = (listaInteiros[1]/(listaInteiros[0]+2))
print("{:.2f}" .format(dias))