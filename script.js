// A function to ask the user between rock paper and scissor
function playerSelection(){
    let playerChoice = prompt("Pick between rock, paper, and scissors");
    playerChoice.toLowerCase();
    return playerChoice;
}

// A function for the computer to pick between rock paper scissor
function getComputerChoice(){
    let rps = ['rock', 'paper', 'scissor']; 
    let randNum = Math.floor(Math.random() * rps.length); 
    let computerChoice = rps[randNum];
    return computerChoice;
}

function playRound(playerPick, computerPick){
    console.log("You chose: " + playerPick + " and Opponent chose: " + computerPick);
}

function game(){ // game() function that calls the playerSelection() and getComputerChoice() and loops it 5 times
    let i = 0;
    while (i < 5){
        let playerPick = playerSelection();
        let computerPick = getComputerChoice();
        playRound(playerPick, computerPick);
        i++
    }
}

game();