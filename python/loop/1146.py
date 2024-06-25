#1146 SEQUÊNCIAS CRESCENTES
while True:
    x = int(input())

    if x == 0:
        break
    
    for i in range(x):
        i += 1
        if i == x:
            print(i) #Se i for igual a x, vai ser impresso o último número sem espaço
        else:
            print(i, end=' ') #Enquanto i não for igual x, vai ser impresso a sequência com espaços