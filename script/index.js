//randomize the computer's selection
function getComputerChoice(){
    resultArray = ['rock', 'paper','scissors'];
    let randomNumber = Math.floor(Math.random() * 3);

    return resultArray[randomNumber];
}

//ask user to make their selection

function playRound(playerSelection, computerSelection){
    const gameResult = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock',
    }

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return 'Tie game!';
    }

    else if (computerSelection.toLowerCase() === gameResult[playerSelection.toLowerCase()].toLowerCase()){
        return `Player wins!`;        
    }

    else {
        return `Computer wins!`; 
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        const computerSelection = getComputerChoice();
        const game = playRound(playerSelection, computerSelection);

        console.log(game);

        if (game === 'Player wins!'){
            playerScore += 1;
        } else if (game === 'Computer wins!'){
            computerScore += 1;
        }
    }

    if (playerScore > computerScore){
        console.log(`Player wins with a score of ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore){
        console.log(`Computer wins with a score of ${computerScore} to ${playerScore}`);
    } else{
        console.log('Tie Game!')
    }
}

playGame();