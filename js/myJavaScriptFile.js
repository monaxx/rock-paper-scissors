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

function getScore(player){
    return +(player.textContent);
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
        setHandResult(document.querySelector(".showHandResult"),`Player scores! ${playerSelectionUpperCase} beats ${computerSelectionUpperCase}`);
    }else{
        setScore(document.querySelector(".computerScore"));
        setHandResult(document.querySelector(".showHandResult"),`Computer scores! ${computerSelectionUpperCase} beats ${playerSelectionUpperCase}`);
    }
}

function changeHandSelectionIcon(playerChoice, element){
    if(playerChoice === "ROCK"){
        element.textContent = "🤜";
    }else if(playerChoice === "PAPER"){
        element.textContent = "🖐";
    }else if(playerChoice === "SCISSORS"){
        element.textContent = "✌️";
    }
}
function game(event){
    const playerSelection = event.srcElement.dataset.value;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    let computerScore = getScore(document.querySelector(".computerScore"));
    let playerScore = getScore(document.querySelector(".playerScore"));

    declareWinner(playerScore, computerScore);
}

function declareWinner(playerScore, computerScore){
    if(playerScore === 5){
        document.querySelector(".showWinner").textContent = "Player wins!";
    }else if(computerScore === 5){
        document.querySelector(".showWinner").textContent = "Sorry, computer wins!";
    }else{
        return;
    }
    divsPlayerChoice.forEach((div) => {
        div.removeEventListener('click', startGame);
    });
    appendRestartGameButton();
}

function appendRestartGameButton(){
   
    let divRestartButton = document.createElement("div");
    divRestartButton.classList.toggle("restartButton");

    document.querySelector(".restartButtonContainer").appendChild(divRestartButton);
    
    divRestartButton.textContent = "Restart";
    divRestartButton.addEventListener("click", () => {
        document.querySelector(".showHandResult").textContent = "First to score 5 points wins the game!";
        document.querySelector(".playerScore").textContent = 0;
        document.querySelector(".computerScore").textContent = 0;
        document.querySelector(".showWinner").textContent = "Choose your hand:";
        document.querySelector(".playerSelection").textContent = "✖️";
        document.querySelector(".computerSelection").textContent = "✖️";
        document.querySelector(".restartButtonContainer").textContent = "";
        runGame();
    });

    document.querySelector(".restartButtonContainer").appendChild(divRestartButton);
}

let startGame = game;
const divsPlayerChoice = document.querySelectorAll(".playerChoices > div");

// divsPlayerChoice.forEach((div) => {
//     div.addEventListener('click', (e) =>{
//         game(div.dataset.value);
//     });
// });

function runGame(){
    divsPlayerChoice.forEach((div) => {
        div.addEventListener('click', startGame);
    });
}

runGame();
