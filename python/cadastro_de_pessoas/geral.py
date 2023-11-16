def titulo(msg):
    print('-' * 40)
    print(f'{msg:^40}'.upper())
    print('-' * 40)


def numerointeiro(msg):
    while True:
        try:
            numero = int(input(msg))
        except KeyboardInterrupt:
            print('\033[31mUsuário optou por não digitar a informação.\033[m')
        except (ValueError, TypeError):
            print('\033[31mDigite um valor inteiro inválido.\033[m')
        else:
            return numero