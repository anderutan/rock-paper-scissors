// computer will return randomly either 'Rock', 'Paper', or 'Scissors
function getComputerChoice() {
    let option = ["Rock", "Paper", "Scissors"];

    let choice = option[(Math.floor(Math.random() * option.length))];

    return choice;
}

// function capitalize first character of string and lower case the rest.
function capitalize(str){
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
} 

// single round of Rock Paper Scissors between player and computer.
let result;

function singleRound(playerSelection, computerSelection) {
    let player = capitalize(playerSelection);
    let computer = computerSelection;

    // Player win case and result
    if (player == "Rock" && computer == "Scissors" || 
        player == "Paper" && computer == "Rock" ||
        player == "Scissors" && computer == "Paper") {
            return result = "win" ;
            alert(`You Win! ${player} beats ${computer}!`);
        } else if ( player == "Rock" && computer == "Paper" ||
                    player == "Paper" && computer == "Scissor" ||
                    player == "Scissor" && computer == "Rock") {
                        return result = "lose";
                        alert(`You Lose! ${computer} beats ${player}!`);
        } else {
            return result = "draw";
            alert("This round is draw!");
        }
}

