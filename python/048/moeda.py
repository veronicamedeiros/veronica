def metade(valor = 0, format = False):
    r = valor/2
    return r if format is False else moeda(r)


def dobro(valor = 0, format = False):
    r = valor*2
    return r if format is False else moeda(r)


def aumentar(valor = 0, porcentagem = 10, format = False):
    porcentagem = porcentagem / 100
    r = (porcentagem * valor) + valor
    return r if format is False else moeda(r)


def reduzir(valor = 0, porcentagem = 13, format = False):
    porcentagem = porcentagem/100
    r = valor - (porcentagem * valor)
    return r if format is False else moeda(r)


def moeda(valor=0, moeda='R$', format = True):
        return f'{moeda} {valor:>.2f}'.replace('.', ',')


def resumo(r=0, aumento=10, reducao=10):
    print(f'{"RESUMO DO VALOR":^40}')
    print(f'{"Preço analisado:":20} {moeda(r):>}')
    print(f'{"Metade do preço:":20} {metade(r, True):>}')
    print(f'{"Dobro dO preço":20} {dobro(r, True):>}')
    print(f'{aumento}% de aumento: {aumentar(r, aumento, True):<13}')
    print(f'{reducao}% de redução: {reduzir(r, reducao, True):>13}')