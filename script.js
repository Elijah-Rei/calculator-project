
function playerSelection(){
    let playerChoice = prompt("Pick between rock, paper, and scissors");
    playerChoice.toLowerCase();
    return playerChoice;
}

// A function for the computer to pick betweek rock paper scissor
function getComputerChoice(){
    let rps = ['rock', 'paper', 'scissor']; 
    let randNum = Math.floor(Math.random() * rps.length); 
    let computerChoice = rps[randNum];
    return computerChoice;
}

function playRound(playerPick, computerPick){
    console.log("You chose: " + playerPick + "and Opponent chose: " + computerPick);
}

let playerPick = playerSelection();
let computerPick = getComputerChoice();

playRound(playerPick, computerPick);