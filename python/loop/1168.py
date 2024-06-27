#1168 LED
leds_digito = {
    '0': 6,
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6
}

n = int(input())

for i in range(n):
    total = 0
    valor = input().strip()

    for digito in valor:
        total += leds_digito[digito]

    print(f'{total} leds')