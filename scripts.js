//Function that returns the computer's choice (ex: rock, paper or scissors)
function getComputerChoice() {
    //Generates a random integer between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    //Returns a String based on the random number
    if(randomNum == 0) {
        return 'Rock';
    }
    else if(randomNum == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

//Function that declares the winner
function playRound(playerSelection, computerSelection) {

    //Making both selections lower case for easier comparisons (case insensitive)
    let playerSelectionToLowerCase = playerSelection.toLowerCase();
    let computerSelectionToLowerCase = computerSelection.toLowerCase();

    //Player draw Scenario
    if(playerSelectionToLowerCase == computerSelectionToLowerCase) {
        return `Draw! You both chose ${playerSelection}`;
    }
    //Player loss scenarios
    else if(playerSelectionToLowerCase == 'rock' && computerSelectionToLowerCase == 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(playerSelectionToLowerCase == 'paper' && computerSelectionToLowerCase == 'scissors') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(playerSelectionToLowerCase == 'scissors' && computerSelectionToLowerCase == 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    //Player win scenarios
    else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}