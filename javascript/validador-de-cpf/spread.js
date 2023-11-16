/* Incluir itens de uma lista em outra em ordem, primeira forma:

let lista = [1, 2, 5]
let listaIncluir = [3, 4]

//console.log(lista)
//console.log(listaIncluir)

for (let i = 0; i < listaIncluir.length; i++){
    for (let j = 0; j < lista.length; j++){
        if (lista[j] >= listaIncluir[i]){
        lista.splice(j, 0, listaIncluir[i])
        j++
        }
    }
}
console.log(lista)


Segunda forma (modo não ideal, mas anotado para registro do que não fazer):

let arr = ['a', 'b', 'c']

let arr2 = arr

arr2.push('d') //fazendo assim como a linha acima, o arr também vai receber o 'd', então não é forma ideal de fazer

console.log(arr)
console.log(arr2)

Terceira forma:
*/

let arr = ['a', 'b', 'c']

let arr2 = [...arr] //Spread operator

arr2.push('d')

console.log(arr)
console.log(arr2)