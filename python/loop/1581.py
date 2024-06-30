#1581 CONVERSA INTERNACIONAL
n = int(input())

for i in range(n):
    k = int(input())
    idiomas = []

    for pessoa in range(k):
        idioma = str(input())
        idiomas.append(idioma)
    
    # A função all retorna True se todos os elementos de um iterável forem verdadeiros. Caso contrário, retorna False.
    if all(idioma == idiomas[0] for idioma in idiomas):
        print(idiomas[0])
    else:
        print("ingles")
