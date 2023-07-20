function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    switch(computerChoice){
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    let playerSelectionUpperCase = playerSelection.toUpperCase();
    let computerSelectionUpperCase = computerSelection.toUpperCase();

    if(playerSelectionUpperCase == computerSelectionUpperCase){
        return 'Tie!'
    }else if((playerSelectionUpperCase == 'ROCK' && computerSelectionUpperCase == 'SCISSORS') ||
            (playerSelectionUpperCase == 'PAPER' && computerSelectionUpperCase == 'ROCK') ||
            (playerSelectionUpperCase == 'SCISSORS' && computerSelectionUpperCase == 'PAPER')){
        return `You win! ${playerSelectionUpperCase} beats ${computerSelectionUpperCase}`;
    }else{
        return `You lose! ${computerSelectionUpperCase} beats ${playerSelectionUpperCase}`;
    }
}

function game(){
    const playerSelection = window.prompt('Player choice:');
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

game();
game();
game();
game();
game();