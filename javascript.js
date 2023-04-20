function getComputerChoice() {
    let computerChoice;
    //get random int between and 3
    let random = getRandomIntInclusive(1, 3);
    //assign rock, paper, and scissors to int values
    if (random === 1) {
        computerChoice = "ROCK";
    }
    else if (random === 2){
        computerChoice = "PAPER";
    }
    else {
        computerChoice = "SCISSORS";
    }
    //return value
    return computerChoice;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    let tie = "tie"
    let loss = "loss";
    let win = "win";

    //tie conditions
    if (playerSelection === computerSelection){
        console.log("Tie!");
        return tie;
    }

    //rock
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        console.log("You win! Rock beats Scissors!");
        return win;
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        console.log("You lose. Paper beats rock.");
        return loss;
    }

    //paper
    if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        console.log("You win! Paper beats Rock!");
        return win;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        console.log("You lose. Scissors beats paper.");
        return loss;
    }

    //scissors
    if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        console.log("You win! Scissors beats Paper!");
        return win;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        console.log("You lose. Rock beats Scissors.");
        return loss;
    }
}

function game(){
    let roundCount = 0;
    let winCount = 0;
    let lossCount = 0;
    for (let i = 0; i < 5; i++){
        let choice = prompt("Choice: ");
        let computer = getComputerChoice();
        let round = playRound(choice, computer);
        if (round === "tie"){
            i--;
        }
        else if (round === "loss"){
            lossCount++;
            roundCount++;
        }
        else if (round === "win"){
            winCount++;
            roundCount++;
        }
    }
    if (winCount > lossCount){
        console.log("You won the game!");
    }
    else {
        console.log("You lost the game.");
    }
}
console.log("Best of five! Go!")
game();