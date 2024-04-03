#1040 MÉDIA 3
valores = input().split(" ")
nota = [float(valor) for valor in valores]

n1 = nota[0]*2
n2 = nota[1]*3
n3 = nota[2]*4
n4 = nota[3]*1
media = (n1+n2+n3+n4)/10
print("Media: {:.1f}" .format(media))

if media >= 7.0:
    print("Aluno aprovado.")
elif media < 5.0:
    print("Aluno reprovado.")
else:
    print("Aluno em exame.")

    notaDoExame = float(input("DIGITE A NOTA DO EXAME: "))
    print("Nota do exame:",notaDoExame)
    mediaFinal = (notaDoExame+media)/2

    if mediaFinal >= 5.0:
        print("Aluno aprovado.")
        print("Media final: {:.1f}" .format(mediaFinal))
    else:
        print("Aluno reprovado.")
        print("Media final: {:.1f}" .format(mediaFinal))