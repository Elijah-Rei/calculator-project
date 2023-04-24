


function getComputerChoice(){
    let rps = ['rock', 'paper', 'scissor'];
    
    let randNum = Math.floor(Math.random() * rps.length);
    
    let choice = rps[randNum];
    
    console.log(choice);
}

getComputerChoice();