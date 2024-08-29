x = []

for i in range(10):
    num = int(input())

    if num <= 0:
        num = 1
        x.append(num)
    else:
        x.append(num)
    
for i in range(10):
    print(f'X[{i}] = {x[i]}')

