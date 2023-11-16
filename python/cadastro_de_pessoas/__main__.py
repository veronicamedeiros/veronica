#  menu em Python com 2 opções: cadastrar uma pessoa e listas as pessoas cadastradas, usando modularização.
from time import sleep
import menu
import arquivo
import geral

arq = 'pessoas_cadastradas.txt'

if not arquivo.arquivoExiste(arq):
    arquivo.criarArquivo(arq)

arquivo.lerArquivo(arq)


while True:
    resp = menu.menu()
    if resp == 1:
        arquivo.lerArquivo(arq)
    elif resp == 2:
        nome = str(input('nome: '))
        idade = geral.numerointeiro('idade: ')
        arquivo.cadastrar(arq, nome, idade)
    elif resp == 3:
        print('Encerrando o programa...')
        sleep(1)
        break



