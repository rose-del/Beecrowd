#1114 SENHA FIXA
senha_correta = 2002

while True:
    senha = int(input())

    if senha == senha_correta:
        print("Acesso Permitido")
        break
    elif senha != senha_correta:
        print("Senha Invalida")

#Outra solução sem usar o break
"""senha_correta = 2002
senha = 1

while senha != senha_correta:
    senha = int(input())

    if senha == senha_correta:
        print("Acesso Permitido")
    elif senha != senha_correta:
        print("Senha Invalida")"""