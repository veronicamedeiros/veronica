console.log('JavaScript carregado')

function validaCPF(cpf){
    if (cpf.length != 11) {
        return false
    } else{

        var numeros = cpf.substring(0, 9) /* substring: a partir de um ponto inicial e um ponto final, ela vai quebrar o texto e retornar somente aquilo que vc pediu. O zero no exemplo significa a primeira posição do CPF. E o (posição) 9 significa quantos caracteres se quer pegar. A partir da posição 0 serão pegos 9 caractéres */

        var digitos = cpf.substring(9) /*Depois da posição 9 ainda tem mais dois caracteres no CPF, então coloca-se o 9 para poder pegar os próximos dois dígitos */

        var soma = 0;
        for (var i = 10; i > 1; i--){
            soma = soma + numeros.charAt(10 - i) * i
        }
        console.log(soma)

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)
        /* Usou <2 para saber se o resultado é 0 ou 1.
        Se a resposta da pergunta for positivo, a variável resultado vai receber 0, se não, a variável vai receber o valor da continha */

        if(resultado != digitos.charAt(0)){
            /**A posição 0 é da parte do dígito apenas (os dois últimos números) */
            return false
        }
        return true
        /*console.log(digitos.toString().charAt(0) + ' é o primeiro número do dígito')* Aqui exibe o primeriro número da apte do dígito*/

            //Validação do segundo dígito
        soma = 0
        numeros = cpf.substring(0, 10)

        for (var k = 11; k > 1; k--){
            soma = soma + numeros.charAt(11 - k) * k
        }

        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11)

        if(resultado != digitos.charAt(1)){
            return false
        }

        return true
    }
}

function validacao() {
    console.log('Iniciando validação CPF')
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'
    
    var cpf = document.getElementById('cpf_digitado').value
    
    var resultadoValidacao = validaCPF(cpf)

    if (resultadoValidacao){
        document.getElementById('success').style.display = 'block'
    } else{
        document.getElementById('error').style.display = 'block'
    }
    //no HTML o display estava none, portanto não estava funcionando
}