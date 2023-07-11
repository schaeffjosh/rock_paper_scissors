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
    //tie conditions
    if (playerSelection === computerSelection){
        console.log("Tie!");
        return 'tie';
    }

    //rock
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        console.log("You win! Rock beats Scissors!");
        return 'win';
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        console.log("You lose. Paper beats Rock.");
        return 'loss';
    }

    //paper
    if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        console.log("You win! Paper beats Rock!");
        return 'win';
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        console.log("You lose. Scissors beats paper.");
        return 'loss';
    }

    //scissors
    if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        console.log("You win! Scissors beats Paper!");
        return 'win';
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        console.log("You lose. Rock beats Scissors.");
        return 'loss';
    }
}

// result and score count variables
let res;
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

// format results div and allow for score manipulation
const results = document.querySelector('.results');
const score = document.querySelector('.score');
score.textContent = "Wins: 0 Losses: 0 Ties: 0";

// register button clicks and increment counts for each round played
const button = document.querySelectorAll("button");
button.forEach((button) => {
    button.addEventListener('click', function() {

        // simulate each round based off of button click and random computer choice
        let computer = getComputerChoice();
        res = playRound(button.classList[0], computer);

        // increment based off of results
        if (res === 'win'){
            winCount++;
        } else if (res === 'loss'){
            lossCount++;
        } else if (res === 'tie'){
            tieCount++;
        }

        // display scores
        score.textContent = 'Wins: ' + winCount + ' Losses: ' + lossCount + ' Ties: ' + tieCount;

        // display end result after 5 wins/losses
        if (winCount >= 5){
            score.textContent = 'You win!';
        }
        if (lossCount >= 5){
            score.textContent = 'You lose.';
        }
    }); 
});



