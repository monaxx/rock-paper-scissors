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

function setScore(player){
    let score = player.textContent;
    player.textContent = ++score;
}

function setHandResult(handResult, str){

    handResult.textContent = str;
}

function playRound(playerSelection, computerSelection){
    let playerSelectionUpperCase = playerSelection.toUpperCase();
    let computerSelectionUpperCase = computerSelection.toUpperCase();

    changeHandSelectionIcon(playerSelectionUpperCase, document.querySelector(".playerSelection"));
    changeHandSelectionIcon(computerSelectionUpperCase, document.querySelector(".computerSelection"));

    if(playerSelectionUpperCase == computerSelectionUpperCase){
        setHandResult(document.querySelector(".showHandResult"),`Tie!`);
    }else if((playerSelectionUpperCase == 'ROCK' && computerSelectionUpperCase == 'SCISSORS') ||
            (playerSelectionUpperCase == 'PAPER' && computerSelectionUpperCase == 'ROCK') ||
            (playerSelectionUpperCase == 'SCISSORS' && computerSelectionUpperCase == 'PAPER')){
        setScore(document.querySelector(".playerScore"));
        setHandResult(document.querySelector(".showHandResult"),`You win! ${playerSelectionUpperCase} beats ${computerSelectionUpperCase}`);
    }else{
        setScore(document.querySelector(".computerScore"));
        setHandResult(document.querySelector(".showHandResult"),`You lose! ${computerSelectionUpperCase} beats ${playerSelectionUpperCase}`);
    }
}

function changeHandSelectionIcon(playerChoice, element){
    if(playerChoice === "ROCK"){
        element.textContent = "🤜";
    }else if(playerChoice === "PAPER"){
        element.textContent = "🖐";
    }else if(playerChoice === "SCISSOR"){
        element.textContent = "✌️";
    }
}
function game(buttonValue){
    const playerSelection = buttonValue;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}


const divsPlayerChoice = document.querySelectorAll(".playerChoices > div");

divsPlayerChoice.forEach((div) => {
    div.addEventListener('click', (e) =>{
        game(div.dataset.value);
    });
});
