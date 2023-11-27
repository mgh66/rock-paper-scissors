
function getComputerChoice() {
    function computerChoice() {
    return Math.floor(Math.random()*3);
    }
    switch (computerChoice()) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors'        
    }
}

// The section related to player selection
function getPlayerChoice() {
    function playerChoice() {
        let userInput = prompt('What is your choice between Rock, Paper and Scissors?');
        if (userInput===null||userInput==='') {
            return playerChoice();
        }
        return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    }
    let getPlayerSelection = playerChoice();
    if (getPlayerSelection==='Rock'
    ||getPlayerSelection==='Paper'
    ||getPlayerSelection==='Scissors') {
        return getPlayerSelection;
    } else {
        console.log ('Please choose between rock, paper and scissors.')
        return getPlayerSelection;
    }
}
let playerSelection;
let computerSelection;
//The section related to the execution of each round of the game
let playerScore = 0;
let computerScore = 0;
function playRound() {
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice();
    if (playerSelection==='Rock' && computerSelection==='Scissors') {
        console.log(`You Win! Rock beats Scissors.
        You're score: ${++playerScore}
        computer score: ${computerScore}`);
    } else if (playerSelection==='Scissors'&& computerSelection==='Paper') {
        console.log(`You Win! Scissors beats Paper.
        You're score: ${++playerScore}
        computer score: ${computerScore}`);
    } else if (playerSelection==='Paper' && computerSelection==='Rock') {
        console.log(`You Win! Paper beats Rock.
        You're score: ${++playerScore}
        computer score: ${computerScore}`);
    } else if (computerSelection==='Rock' && playerSelection==='Scissors') {
        console.log(`You Lose! Rock beats Scissors.
        You're score: ${playerScore}
        computer score: ${++computerScore}`);
    } else if (computerSelection==='Scissors' && playerSelection==='Paper') {
        console.log(`You Lose! Scissors beats Paper.
        You're score: ${playerScore}
        computer score: ${++computerScore}`);
    } else if (computerSelection==='Paper' && playerSelection==='Rock') {
        console.log(`You Lose! Paper beats Rock.
        You're score: ${playerScore}
        computer score: ${++computerScore}`);
    } else if (playerSelection===computerSelection) {
        console.log(`This round was tied. You choose ${playerSelection} and Computer choose ${computerSelection}.
        You're score: ${playerScore}
        computer score: ${computerScore}`);
        return playRound();
    } else {
        console.log(`The game does not run.`);
        return playRound();
    }
}
//Determining the report of each round along with determining the final winner and ending the game
function getGameReport() {
    if (playerScore===3) {
        console.log('You Win');
        return true;
    } else if (computerScore===3) {
        console.log('You Lose');
        return true;
    } else if (playerScore===1 && computerScore===0) {
        console.log('Great! You are ;ahead!')
    } else if (playerScore===1 && computerScore===1) {
        console.log('keep trying.');
    } else if (playerScore===2 && computerScore===0) {
        console.log('You are doing great!');
    } else if (playerScore===2 && computerScore===1) {
        console.log('You are very close to winning the game!');
    } else if (playerScore===2 && computerScore===2) {
        console.log('This is the last round. Choose carefully.');
    } else if (playerScore===0 && computerScore===1) {
        console.log('You just lost the first round! It is not over yet.');
    }  else if (playerScore===0 && computerScore===2) {
        console.log('You are close to losing the game.');
    } else {
        console.log('You must make the right choice to win!');
    } 
}
function game() {
playRound();
if (getGameReport()) return;
playRound();
if (getGameReport()) return;
playRound();
if (getGameReport()) return;
playRound();
if (getGameReport()) return;
playRound();
if (getGameReport()) return;
}
game();

