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

    //Making both selections upper case for easier comparisons (case insensitive)
    let playerSelectionToUpperCase = playerSelection.toUpperCase();
    let computerSelectionToUpperCase = computerSelection.toUpperCase();

    //Player draw Scenario
    if(playerSelectionToUpperCase == computerSelectionToUpperCase) {
        return `Draw! You both chose ${playerSelectionToUpperCase}`;
    }
    //Player loss scenarios
    else if(playerSelectionToUpperCase == 'ROCK' && computerSelectionToUpperCase == 'PAPER') {
        return `You Lose! ${computerSelectionToUpperCase} beats ${playerSelectionToUpperCase}`;
    }
    else if(playerSelectionToUpperCase == 'PAPER' && computerSelectionToUpperCase == 'SCISSORS') {
        return `You Lose! ${computerSelectionToUpperCase} beats ${playerSelectionToUpperCase}`;
    }
    else if(playerSelectionToUpperCase == 'SCISSORS' && computerSelectionToUpperCase == 'ROCK') {
        return `You Lose! ${computerSelectionToUpperCase} beats ${playerSelectionToUpperCase}`;
    }
    //Player win scenarios
    else {
        return `You Win! ${playerSelectionToUpperCase} beats ${computerSelectionToUpperCase}`;
    }
}

//Function that plays five rounds of Rock Paper Scissors, while keeping score and announcing the winner at the end
function playGame() {
    //Initializes scores
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {

        //Stores player choice in playerSelection variable
        let playerSelection = prompt('Rock, Paper or Scissors?');
        let computerSelection = getComputerChoice();
        //Saves the result of the round in the roundResult variable
        let roundResult = playRound(playerSelection, computerSelection);

        //Displays the result of the round
        console.log(roundResult);

        //Adds points to the winner and displays the points
        if(roundResult.includes('Win')) {
            playerScore++;
            console.log(`Player: ${playerScore} --- Computer: ${computerScore}`);
        }
        else if(roundResult.includes('Lose')) {
            computerScore++;
            console.log(`Player: ${playerScore} --- Computer: ${computerScore}`);
        }
        else {
            console.log(`Player: ${playerScore} --- Computer: ${computerScore}`);
        }
    }

    if(playerScore > computerScore) {
        console.log('Congrats you won!')
    }
    else if (playerScore < computerScore) {
        console.log('You lost!');
    }
    else {
        console.log('You drew!')
    }
}