function start(){
    var buttonCalculateImc = document.querySelector('#button-calculate-imc')
    buttonCalculateImc.addEventListener('click', handleButtonClick)
    
}

function calculateIMC(weight, height){
    var imc = weight / (height * height)
        return imc
}

function calculateGrau(imc){
   
    if (imc < 16) {
        return "Inválido."
    }

    else if (imc >= 16 && imc < 17) {
        return "Muito abaixo do peso."
    }

    else if (imc >= 17 && imc <= 18.4){
            return "Abaixo do peso."
        }

    else if (imc >= 18.5 && imc <= 24.9){
            return "Peso normal."
        }
    else if (imc >= 25 && imc <= 29.9){
            return "Acima do peso."
        }
    else if (imc >= 30 && imc <= 34.9){
            return "Obesidade classe I."
        }
    else if (imc >= 35 && imc <= 40){
            return "Obesidade classe II."
        }
    else if (imc > 40){
            return "Obesidade classe III"
        }
       
}

function handleButtonClick (){
    var inputWeight = document.querySelector('#input-weight')
    var inputHeight = document.querySelector('#input-height')
    console.log(inputWeight)
    var imcResult = document.querySelector('#imc-Result')
    var grauDeObesidade = document.querySelector('#grau-Result')

    var weight = Number(inputWeight.value)
    var height = Number(inputHeight.value)
    var imc = (calculateIMC(weight, height))
    var grau = (calculateGrau(imc))

    imcResult.textContent = imc.toFixed(2).replace('.', ',')

    grauDeObesidade.textContent = grau
    
   
}

start()