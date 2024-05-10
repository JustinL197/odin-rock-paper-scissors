//randomize the computer's selection
function getComputerChoice(){
    resultArray = ['ROCK', 'PAPER','SCISSORS'];
    let randomNumber = Math.floor(Math.random() * 3);

    return resultArray[randomNumber];
}

//ask user to make their selection

function playRound(playerSelection, computerSelection){
    const gameResult = {
        ROCK: 'SCISSORS',
        SCISSORS: 'PAPER',
        PAPER: 'ROCK',
    }

    if (playerSelection === computerSelection){
        return 'Tie game!';
    }

    else if (computerSelection === gameResult[playerSelection]){
        return `Player wins!`;        
    }

    else {
        return `Computer wins!`; 
    }
}

const container = document.querySelector('.selection-box');
const messageBox = document.querySelector('.message-box');

const rockButton = document.createElement('button');
rockButton.className = 'selection-button';
rockButton.innerText = 'ROCK';
rockButton.addEventListener('click', playGame);

const paperButton = document.createElement('button');
paperButton.className = 'selection-button';
paperButton.innerText = 'PAPER';
paperButton.addEventListener('click', playGame);

const scissorsButton = document.createElement('button');
scissorsButton.className = 'selection-button';
scissorsButton.innerText = 'SCISSORS';
scissorsButton.addEventListener('click', playGame);

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);


function playGame(event){
    clearMessage();   

    const playerSelection = event.target.innerText;
    const computerSelection = getComputerChoice();

    const resultMessage = document.createElement('p');
    console.log(playerSelection);
    resultMessage.className = 'message-box__result-message'
    resultMessage.innerText = playRound(playerSelection, computerSelection);
       
    messageBox.append(resultMessage);
}

function clearMessage(){
    while (messageBox.firstChild){
        messageBox.removeChild(messageBox.firstChild);
    }
}
