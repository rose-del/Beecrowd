def jogo(jogadorA, jogadorB):

    regras = {
        'tesoura': ['papel','largato'],
        'papel': ['pedra', 'spock'],
        'pedra': ['lagarto', 'tesoura'],
        'lagarto': ['spock', 'papel'],
        'spock': ['tesoura', 'pedra'],

    }
    
    if jogadorA == jogadorB:
        print('empate')
    elif jogadorB in regras[jogadorA]:
        print('rajesh')
    else:
        print('sheldon')



n = int(input())

for i in range(n):
    jogadas = input().split()
    jogadorA = str(jogadas[0])
    jogadorB = str(jogadas[1])
    
    jogo(jogadorA, jogadorB)