def verificaParentes(expressao):
    cont = 0
    for c in expressao:
        if c == '(':
            cont += 1
        elif c == ')':
            cont -= 1
        
        if cont < 0:
            return False
        
    return cont == 0