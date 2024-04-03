#1052 MÊS
meses = [
    "January", "February", 
    "March", "April", 
    "May", "June", 
    "July", "August", 
    "September", "October", 
    "November", "December"
]

valor = int(input())

if valor >= 1 and valor <= 12:
    print(meses[valor - 1])
else:
    print("Valor inválido")