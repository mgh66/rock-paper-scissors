
function getComputerChoice() {
    function computerChoice() {
    return Math.floor(Math.random()*3);
    }
    switch (computerChoice()) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors'        
    }
}

// The section related to player selection
function getPlayerChoice() {
    function playerChoice() {
        let userInput = prompt('What is your choice between Rock, Paper and Scissors?');
        return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    }
    let getPlayerSelection = playerChoice();
    if (getPlayerSelection==='Rock'
    ||getPlayerSelection==='Paper'
    ||getPlayerSelection==='Scissors') {
        return getPlayerSelection;
    }
return `Please choose between rock, paper and scissors.`
}
let playerSelection;
let computerSelection;
//The section related to the execution of each round of the game
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice();
    if (playerSelection==='Rock'&&computerSelection==='Scissors') {
        console.log(`You Win! Rock beats Scissors.
        You're score: ${++playerScore}
        computer score: ${computerScore}`);
    } else if (playerSelection==='Scissors'&&computerSelection==='Paper') {
        console.log (`You Win! Scissors beats Paper.
        You're score: ${++playerScore}
        computer score: ${computerScore}`);
    } else if (playerSelection==='Paper'&&computerSelection==='Rock') {
        console.log(`You Win! Paper beats Rock.
        You're score: ${++playerScore}
        computer score: ${computerScore}`);
    } else if (computerSelection==='Rock'&&playerSelection==='Scissors') {
        console.log(`You Lose! Rock beats Scissors.
        You're score: ${playerScore}
        computer score: ${++computerScore}`);
    } else if (computerSelection==='Scissors'&&playerSelection==='Paper') {
        console.log(`You Lose! Scissors beats Paper.
        You're score: ${playerScore}
        computer score: ${++computerScore}`);
    } else if (computerSelection==='Paper'&&playerSelection==='Rock') {
        console.log (`You Lose! Paper beats Rock.
        You're score: ${playerScore}
        computer score: ${++computerScore}`);
    } else if (playerSelection===computerSelection) {
        console.log(`This round was tied. You choose ${playerSelection} and Computer choose ${computerSelection}.
        You're score: ${playerScore}
        computer score: ${computerScore}`);
        return playRound(playerSelection, computerSelection);
    } else {
        console.log(`The game does not run.`);
    }
}
