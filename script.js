
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
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice();
    if (playerSelection==='Rock' && computerSelection==='Scissors') {
        playerScore++;
        return `You Win! Rock beats Scissors.`
    } else if (playerSelection==='Scissors'&& computerSelection==='Paper') {
        playerScore++;
        return `You Win! Scissors beats Paper.`
    } else if (playerSelection==='Paper' && computerSelection==='Rock') {
        playerScore++;
        return `You Win! Paper beats Rock.`
    } else if (computerSelection==='Rock' && playerSelection==='Scissors') {
        computerScore++;
        return `You Lose! Rock beats Scissors.`
    } else if (computerSelection==='Scissors' && playerSelection==='Paper') {
        computerScore++;
        return `You Lose! Scissors beats Paper.`
    } else if (computerSelection==='Paper' && playerSelection==='Rock') {
        computerScore++;
        return `You Lose! Paper beats Rock.`
    } else if (playerSelection===computerSelection) {
        console.log(`This round was tied. You choose ${playerSelection} and Computer choose ${computerSelection}.`);
        return playRound(playerSelection, computerSelection);
    } else {
        console.log(`The game does not run.`);
        return playRound(playerSelection, computerSelection);
    }
}
//Determining the report of each round along with determining the final winner and ending the game
function game() {
    function getGameReport() {
        if (playerScore===3) {
            console.log ('You Win');
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
            console.log ('You must make the right choice to win!');
        } 
    }
    function showScores() {
        return `
        You're score: ${playerScore}
        Computer score: ${computerScore}`
    }
console.log(playRound(playerSelection, computerSelection));
console.log(showScores());
if (getGameReport()) return;
console.log(playRound(playerSelection, computerSelection));
console.log(showScores());
if (getGameReport()) return;
console.log(playRound(playerSelection, computerSelection));
console.log(showScores());
if (getGameReport()) return;
console.log(playRound(playerSelection, computerSelection));
console.log(showScores());
if (getGameReport()) return;
console.log(playRound(playerSelection, computerSelection));
console.log(showScores());
if (getGameReport()) return;
}
game();

