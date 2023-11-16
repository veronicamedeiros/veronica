import geral
def arquivoExiste(nome):
    try:
        a = open(nome, 'rt') #rt, r de read e t de texto, para ver se ele abre para leitura
        a.close()
    except FileNotFoundError:
        return False
    else:
        return True


def criarArquivo(nome):
    try:
        a = open(nome, 'wt+')
        a.close()
    except:
        print('Houve um erro na criação do arquivo.')
    else:
        print(f'Arquivo {nome} criado com sucesso.')


def lerArquivo(nome):
    try:
        a = open(nome, 'rt')
    except:
        print('Erro ao ler arquivo.')
    else:
        geral.titulo('PESSOAS CADASTRADAS')
        #print(a.readlines())
        #print(a.read())
        for linha in a:
            dado = linha.split(';') #dado vai ser uma lista?
            dado[1] = dado[1].replace('\n', '')
            print(f'{dado[0]:30}{dado[1]:>3} anos')
    finally:
        a.close()

def cadastrar(arquivo,nome='desconhecido', idade=0):
    try:
        a = open(arquivo, 'at') # a de append (abrir para colocar coisas dentro do arquivo.)
    except:
        print('Houve um erro na abertura do arquivo.')
    else:
        try:
            a.write(f'{nome};{idade}\n')
        except:
            print('Houve um erro no momento de escrever os dados.')
        else:
            print(f'Novo registro de {nome} adicionado.')
            a.close()

