
function playerSelection(){
    let playerChoice = prompt("Pick between rock, paper, and scissors");
    playerChoice.toLowerCase();
    console.log(playerChoice);
}

// A function for the computer to pick betweek rock paper scissor
function getComputerChoice(){
    let rps = ['rock', 'paper', 'scissor']; 
    let randNum = Math.floor(Math.random() * rps.length); 
    let computerChoice = rps[randNum];
    console.log(computerChoice);
}

playerSelection();
getComputerChoice();

