const option = ["rock", "paper", "scissors"];

// program to get random choice from an array

function getComputerChoice(choice) {
    
    // get random index value
    const randomIndex = Math.floor(Math.random() * choice.length);

    // get random choice
    const oneOfChoice = choice[randomIndex];

    return oneOfChoice;
};

// computer selection randomly
const computerSelection = getComputerChoice(option);

// ask user to pick rock, paper or scissor
const askPlayerSelection = prompt("Please enter your choice:", "Rock, Paper and Scissor");

// convert user choice to lower case
const playerSelection = askPlayerSelection.toLowerCase()

// function for single round game
function singleRound(playerSelection, computerSelection) {
 
    // If player choose = computer choose then print draw
    if (playerSelection === computerSelection){
    return `Draw, you choose ${playerSelection} computer choose ${computerSelection}`;
    } 
    
    // if player/computer choose rock/scissors, paper/rock, scissors/paper then
    // print player win
    else if 
    (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! ${playerSelection} beat ${computerSelection}`;
    } 
    else if
    (playerSelection === 'paper' && computerSelection === 'rock'){
        return `You Win! ${playerSelection} beat ${computerSelection}`;
    }
    else if 
    (playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You Win! ${playerSelection} beat ${computerSelection}`;
    }  

    // if player/computer choose rock/paper, paper/scissors, scissors/rock then 
    // print player lose
    else {
        return `You Lose! ${computerSelection} beat ${playerSelection}`;
    }  
}




console.log(singleRound(playerSelection, computerSelection))


