#1110 JOGANDO CARTAS FORA (Não fui eu quem escrevi)
while True:
    n = int(input())
    
    if n == 0:
        break

    # Inicializa a lista com as cartas de 1 a n
    inicial = list(range(1, n + 1))
    resultado = []

    # Enquanto houver mais de uma carta na lista
    while len(inicial) > 1:
        # Remove a carta do topo e adiciona à lista de descartadas
        resultado.append(inicial.pop(0))
        # Move a próxima carta do topo para a base da lista
        inicial.append(inicial.pop(0))

    # Formata a saída conforme o exemplo
    print("Discarded cards: " + ", ".join(map(str, resultado)))
    print("Remaining card: " + str(inicial[0]))

