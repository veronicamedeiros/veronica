var board = [];

var savedGame = [];

var state = {board: [], currentGame: [], savedGame: []}

function start(){
readLocalStorage()
createBoard()
newGame()
}

function readLocalStorage(){
    if (!window.localStorage){
        return
    }

    var savedGameFromLocalStorage = window.localStorage.getItem('saved-games')

    if (savedGameFromLocalStorage){
        state.savedGame = JSON.parse(savedGameFromLocalStorage)
    }
}

function writeToLocalStorage(){
    window.localStorage.setItem('saved-games', JSON.stringify(state.savedGame))
}

function createBoard(){
    state.board = []

    for (var i = 1; i <=60; i++){
        state.board.push(i)
    }
}

function newGame(){
    resetGame()
    render()
}

function render(){
    renderBoard()
    renderButtons()
    renderSavedGame()
}

function renderBoard(){
    var divBoard = document.querySelector('#megasena-board')
    divBoard.innerHTML = ''

    var ulNumbers = document.createElement('ul')
    ulNumbers.classList.add('numbers')
    

    for (var i = 0; i < state.board.length; i++){
        var currentNumber = state.board[i]

        var liNumber = document.createElement('li')
        liNumber.classList.add('number')

        liNumber.addEventListener('click', handleNumberClick) // handleNumberClick é a função

        if (isNumberInGame(currentNumber)){
            liNumber.classList.add('selected-number')
        }

        liNumber.textContent = currentNumber 

        ulNumbers.appendChild(liNumber)
    }
    divBoard.appendChild(ulNumbers)
}

function handleNumberClick(event){
    var value = Number(event.currentTarget.textContent)

    if (isNumberInGame(value)){
        removeNumberFromGame(value)
    }
    else {
        addNumberToGame(value)
    }
    render()
    
}

function renderButtons(){
    var divButtons = document.querySelector('#megasena-buttons')
    divButtons.innerHTML = ''
    var buttonNewGame = createNewGameButton()
    var buttonRandomGame = createRandomGameButtom()
    var buttonSaveGame = createSaveGameButtom()

    divButtons.appendChild(buttonNewGame)
    divButtons.appendChild(buttonRandomGame)
    divButtons.appendChild(buttonSaveGame)
}

function createRandomGameButtom (){
    var button = document.createElement('button')
    button.textContent = 'Jogo Aleatório'

    button.addEventListener('click', RandomGame)

    return button
}

function createNewGameButton (){
    var button = document.createElement('button')
    button.textContent = 'Novo Jogo'

    button.addEventListener('click', newGame)

    return button
}

function createSaveGameButtom (){
    var button = document.createElement('button')
    button.textContent = 'Salvar Jogo'
    button.disabled = !isGameComplete()

    button.addEventListener('click', saveGame)

    return button
}
function renderSavedGame(){
    var divSavedGames = document.querySelector('#megasena-saved-games')
    divSavedGames.innerHTML = ''

    if (state.savedGame.length === 0){
        divSavedGames.innerHTML = '<p>Jogo vazio.</p>'
    }
    else{
        var ulSavedGames = document.createElement('li')

        for (var i = 0; i < state.savedGame.length; i++){
            var currentGame = state.savedGame[i]

            var liGame = document.createElement('li')
            liGame.textContent = currentGame.join('  ')

            ulSavedGames.appendChild(liGame)
        }
        
        divSavedGames.appendChild(ulSavedGames)
    }
    
}

function addNumberToGame(numberToAdd){
    if (numberToAdd < 1 || numberToAdd > 60){
        console.error(numberToAdd,' é um número inválido');
        return;
    }

    if (state.currentGame.length >= 6){
        console.error("O jogo já está completo.")
        return;
    }
    if (isNumberInGame(numberToAdd)){
        console.error(numberToAdd, ' já está no jogo.')
        return
    }
    state.currentGame.push(numberToAdd)

}

function isNumberInGame(numberToCheck){
        // if(state.currentGame.includes(numberToCheck)){
        //    return true 
        // }
        // return false
        return state.currentGame.includes(numberToCheck)
}

function removeNumberFromGame(numberToRemove){
    var newGame = [];

    if (numberToRemove < 1 || numberToRemove > 60){
        console.error(numberToRemove,' é um número inválido');
        return;
    }

    for (var i = 0; i < state.currentGame.length; i++){
      
        var currentNumber = state.currentGame[i]

        if (currentNumber === numberToRemove){
            continue;
        }
        newGame.push(currentNumber)
    }
    state.currentGame = newGame;
}

function saveGame(){
    if (!isGameComplete()){
        console.error('O jogo não está completo.')
        return
    }

    state.savedGame.push(state.currentGame)
    writeToLocalStorage()
    newGame()
}

function isGameComplete(){
    return state.currentGame.length === 6
}

function resetGame(){
    return state.currentGame = []
}

function RandomGame(){
    resetGame()

    while(!isGameComplete()){
        var randomNumber = Math.ceil(Math.random() * 60)
        addNumberToGame(randomNumber)
    }
    
    render()
}

start()


