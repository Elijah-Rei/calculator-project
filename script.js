// A function to ask the user between rock paper and scissor
/*
function playerSelection(){
    let playerChoice = 'rock'; //prompt("Pick between rock, paper, and scissors");
    playerChoice.toLowerCase();
    return playerChoice;
}*/

// A function for the computer to pick between rock paper scissor
const btn1 = document.querySelector('#btnRck');
    btn1.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

const btn2 = document.querySelector('#btnPpr');
    btn2.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

const btn3 = document.querySelector('#btnSci');
    btn3.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

function getComputerChoice(){
    let rps = ['rock', 'paper', 'scissor']; 
    let randNum = Math.floor(Math.random() * rps.length);
    let computerChoice = rps[randNum];
    return computerChoice;
}

function playRound(playerPick, computerPick){
    console.log("You chose: " + playerPick + " and Opponent chose: " + computerPick);
    game(playerPick, computerPick);
}

function game(playerPick, computerPick){ // game() function that calls the playerSelection() and getComputerChoice() and loops it 5 times
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;

    while (i < 5){
        if (playerPick == computerPick){
            console.log("Tie");
        }else if(playerPick == 'rock' && computerPick == 'scissor' || playerPick == 'paper' && computerPick == 'rock' || playerPick == 'scissor' && computerPick == 'paper'){
            console.log("You won!");
            playerScore++;
        }else{
            console.log("You lost!");
            computerScore++;
        }
        i++
    }

    if(playerScore > computerScore){
        console.log("Score is " + playerScore + " - " + computerScore + " you won!");
    }else if(computerScore > playerScore){
        console.log("Score is " + playerScore + " - " + computerScore+ " you lost!");
    }else   
        console.log("Score is " + playerScore + " - " + computerScore+ " its a tie!")
}

//game();