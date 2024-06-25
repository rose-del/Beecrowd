#1134 TIPO DE COMBUSTÍVEL
def tipo_combustivel():
    cont_alcool = 0
    cont_gasolina = 0
    cont_diesel = 0

    while True:
        numero = int(input())
        
        if numero == 1:
            cont_alcool += 1
        elif numero == 2:
            cont_gasolina += 1
        elif numero == 3:
            cont_diesel += 1
        elif numero == 4:
            break
        else:
            continue
    
    print("MUITO OBRIGADO")
    print(f"Alcool: {cont_alcool}")
    print(f"Gasolina: {cont_gasolina}")
    print(f'Diesel: {cont_diesel}')

if __name__ == "__main__":
    tipo_combustivel()