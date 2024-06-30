#1873 PEDRA, PAPEL, TESOURA, LAGARTO, SPOCK (Sou muito fã de The Big Bang Theory)
c = int(input())
regras = {
    'tesoura': ["papel", "lagarto"],
    'papel': ["pedra", "spock"],
    'pedra': ["lagarto", "tesoura"],
    'lagarto': ["spock", "papel"],
    'spock': ["tesoura", "pedra"]

}

for i in range(c):
    jogadas = input().split(" ")
    jogadorA = str(jogadas[0])
    jogadorB = str(jogadas[1])

    if jogadorA == jogadorB:
        print("empate")
    # Cada caso de teste tem duas palavras, representando a escolha de Rajesh e de Sheldon, respectivamente.
    elif jogadorB in regras[jogadorA]:
        print("rajesh")
    else:
        print("sheldon")