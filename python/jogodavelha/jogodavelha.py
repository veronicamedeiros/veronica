#jogo da velha, computador inicia o jogo com 'x' aleatoriamente.
from random import randrange
from time import sleep

def mostrar_jogo(lista):
    for i in range(3):
        for y in range(3):
            if lista[i][y] == 'x':
                print(f'\033[33m{lista[i][y]}\033[m', end='  ')
            elif lista[i][y] == 'o':
                print(f'\033[31m{lista[i][y]}\033[m', end='  ')
            else:
                print(lista[i][y], end='  ')
        print()
    print()

def percorrer_lista(simbolo, posicao_escolhida):
    global contagem
    while True:
        for i in range(3):
            for y in range(3):
                if inicial[i][y] == posicao_escolhida:
                    inicial[i][y] = simbolo
                    contagem += 1
                    mostrar_jogo(inicial)
                    return
        if simbolo == 'o':
            posicao_escolhida = int('posição inválida, escolha outra')
        elif simbolo == 'x':
            posicao_escolhida = randrange(1,10)


def vencedor():
    global contagem
    if inicial[0][0] == inicial[0][1] == inicial[0][2]:
        ganhador = inicial[0][0]
    elif inicial[1][0] == inicial[1][1] == inicial[1][2]:
        ganhador = inicial[1][0]
    elif inicial[2][0] == inicial[2][1] == inicial[2][2]: #até aqui horizontais
        ganhador = inicial[2][0]
    elif inicial[0][0] == inicial[1][0] == inicial[2][0]:
        ganhador = inicial[0][0]
    elif inicial[0][1] == inicial[1][1] == inicial[2][1]:
        ganhador = inicial[0][1]
    elif inicial[2][0] == inicial[2][1] == inicial[2][2]: #até aqui vertical
        ganhador = inicial[2][0]
    elif inicial[0][0] == inicial[1][1] == inicial[2][2]: #atravessado começando do 00
        ganhador = inicial[0][0]
    elif inicial[0][2] == inicial[1][1] == inicial[2][0]: #atravessado começando do 02
        ganhador = inicial[0][2]
    else:
        ganhador = 'em_jogo'

    if ganhador == 'em_jogo' and contagem == 9:
        print('Deu velha, ninguém venceu.')
        return 'velha'
    elif ganhador == 'em_jogo':
        return
    elif ganhador == 'o':
        print('Parabéns! Você ganhou o jogo!')
        return 'o'
    elif ganhador == 'x':
        print('Que pena, computador ganhou o jogo!')
        return 'x'


inicial = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
contagem = 0
computador = ''

print('JOGO DA VELHA\n')
mostrar_jogo(inicial)
sleep(1)
print(f'O computador vai começar o jogo, ele é \033[33mx\033[m e você \033[31mo\33[m.\n')
sleep(1)



while True:
    sleep(1)
    print('O computador está pensando...\n')
    sleep(2)
    computador = randrange(1,10)
    percorrer_lista('x', computador)
    sleep(1)

    vencer = vencedor()
    if vencer == 'velha' or vencer == 'x':
        break
    while True:
        try:
            jogador = int(input('Insira uma posição para inserir: '))
            percorrer_lista('o', jogador)
            break
        except:
            print('Posição inválida, escolha outra.')
    vencer = vencedor()
    if vencer == 'o' or vencer == 'velha':
        break





