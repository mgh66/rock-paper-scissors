
function getComputerChoice() {
    function computerChoice() {
    return Math.floor(Math.random()*3);
    }
    function getComputerSelection(){
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
    return getComputerSelection();
}
const computerSelection = getComputerChoice();
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
alert `Please choose between rock, paper and scissors.`
}
const PlayerSelection = getPlayerChoice();







