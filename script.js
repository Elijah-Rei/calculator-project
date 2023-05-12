// A function to ask the user between rock paper and scissor
/*
function playerSelection(){
    let playerChoice = 'rock'; //prompt("Pick between rock, paper, and scissors");
    playerChoice.toLowerCase();
    return playerChoice;
}*/
//btnTry.style.display = 'none';
document.getElementById('btnTry').style.display = 'none';
let playerScore = 0;
let computerScore = 0;
let roundsCounter = 0;

const playerPicks = document.createElement('p');
const computerPicks = document.createElement('p');
const score = document.createElement('p');
const finalScore = document.createElement('p');
const results = document.querySelector('.results');
results.innerHTML = '';

const startBtn = document.querySelector('#startBtn');


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
    
    playerPicks.textContent = "You chose: " + playerPick;
    computerPicks.textContent = "Opponent chose: " + computerPick;
    results.appendChild(playerPicks);
    results.appendChild(computerPicks);
    //console.log("You chose: " + playerPick + " and Opponent chose: " + computerPick);
    
    if (playerPick == computerPick){
        score.textContent = "Tie";
        results.appendChild(score);
        roundsCounter++;
    }else if(playerPick == 'rock' && computerPick == 'scissor' || playerPick == 'paper' && computerPick == 'rock' || playerPick == 'scissor' && computerPick == 'paper'){
        score.textContent = "You won!";
        results.appendChild(score);
        ++playerScore;
        roundsCounter++;
    }else{
        score.textContent = "You lost!";
        results.appendChild(score);
        ++computerScore;
        roundsCounter++;
    }

    if(roundsCounter === 5){
        if(playerScore > computerScore){
            finalScore.textContent =  "Score is " + playerScore + " - " + computerScore + " you won!";
            results.appendChild(finalScore);
        }else if(computerScore > playerScore){
            finalScore.textContent =  "Score is " + playerScore + " - " + computerScore+ " you lost!";
            results.appendChild(finalScore);
        }else {
        finalScore.textContent =  "Score is " + playerScore + " - " + computerScore+ " its a tie!";
        results.appendChild(finalScore);
        }
        
        playerScore = 0;
        computerScore = 0;
        roundsCounter = 0;
        btnTry.style.display = 'block';
    }
}

const btnTry = document.querySelector('#btnTry');
    btnTry.addEventListener('click', () => {
        btnTry.style.display = 'none';
        tryAgain();
    })

function tryAgain(){

    playerScore = 0;
    computerScore = 0;
    roundsCounter = 0;

    playerPicks.textContent = '';
    computerPicks.textContent = '';
    results.textContent = '';
    score.textContent = '';
    finalScore.textContent = '';

    results.appendChild(playerPicks);
    results.appendChild(computerPicks);
    results.appendChild(results);
    results.appendChild(score);
    results.appendChild(finalScore);

    
}