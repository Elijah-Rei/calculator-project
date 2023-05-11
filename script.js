// A function to ask the user between rock paper and scissor
/*
function playerSelection(){
    let playerChoice = 'rock'; //prompt("Pick between rock, paper, and scissors");
    playerChoice.toLowerCase();
    return playerChoice;
}*/
let playerScore = 0;
let computerScore = 0;
let roundsCounter = 0;

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
    playRound('scissor', getComputerChoice());
    });

function getComputerChoice(){
    let rps = ['rock', 'paper', 'scissor']; 
    let randNum = Math.floor(Math.random() * rps.length);
    let computerChoice = rps[randNum];
    return computerChoice;
}

function playRound(playerPick, computerPick){
    console.log("You chose: " + playerPick + " and Opponent chose: " + computerPick);
    
    if (playerPick == computerPick){
        console.log("Tie");
        roundsCounter++;
    }else if(playerPick == 'rock' && computerPick == 'scissor' || playerPick == 'paper' && computerPick == 'rock' || playerPick == 'scissor' && computerPick == 'paper'){
        console.log("You won!");
        roundsCounter++;
    }else{
        console.log("You lost!");
        roundsCounter++;
    }
    
    if(roundsCounter === 5){
        if(playerScore > computerScore){
            console.log("Score is " + playerScore + " - " + computerScore + " you won!");
        }else if(computerScore > playerScore){
            console.log("Score is " + playerScore + " - " + computerScore+ " you lost!");
        }else   
            console.log("Score is " + playerScore + " - " + computerScore+ " its a tie!")
    }
}