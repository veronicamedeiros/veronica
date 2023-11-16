import geral
def menu():
    geral.titulo('MENU PRINCIPAL')
    opcmenu = ['MENU', 'Ver pessoas cadastradas', 'Cadastrar novas pessoas', 'Sair do sistema']
    for pos, i in enumerate(opcmenu):
        if pos == 0:
            continue
        print(f'\033[35m{pos}\033[m - \033[34m{i}\033[m')
    while True:
        opc = geral.numerointeiro('Opção: ')
        if len(opcmenu) > opc > 0:
            return opc
        else:
            print('\033[31mValor inválido, escolha um número dentro do menu.\033[m')
            continue
