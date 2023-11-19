
function getComputerChoice() {
    let computerChoice = function (){
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




