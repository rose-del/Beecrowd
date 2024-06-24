#1118 VÁRIAS NOTAS COM VALIDAÇÃO
def calcular_media():
    media = 0
    cont_notas_validas = 0

    while cont_notas_validas < 2:
        nota = float(input())
        
        if nota >= 0 and nota <= 10:
            media += nota
            cont_notas_validas += 1
        else:
            print("nota invalida")

    calculo = media/2
    print(f"media = {calculo:.2f}")

def main():
    while True:
        calcular_media()
        while True:
            print("novo calculo (1-sim 2-nao)")
            x = int(input())
            if x == 1:
                break
            elif x == 2:
                return

if __name__ == "__main__":
    main()
