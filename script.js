let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const choice_div = document.querySelector('.choice');
const scissors_div = document.querySelector('#scissors');
const smallUserWord = 'user'.fontsize(3).sub();
const smallCompWord = 'comp'.fontsize(3).sub();

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random(choices) * 3);
  return choices[randomNumber];
}

const capitalize = (letter) => letter[0].toUpperCase() + letter.slice(1);

// prettier-ignore
function win(userChoice, computerChoice) {
  const userChoiceClassList = document.getElementById(userChoice).classList;
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${capitalize(userChoice)}${smallUserWord} beat 
    ${capitalize(computerChoice)}${smallCompWord} . You Win!`;
  userChoiceClassList.add('green-glow');
  setTimeout(() => userChoiceClassList.remove('green-glow'), 300);
}
// prettier-ignore
function lose(userChoice, computerChoice) {
  const userChoiceClassList = document.getElementById(userChoice).classList;
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${capitalize(computerChoice)}${smallCompWord} beat 
    ${capitalize(userChoice)}${smallUserWord} . You Lose...`;
  userChoiceClassList.add('red-glow');
  setTimeout(() => userChoiceClassList.remove('red-glow'), 300);
}

// prettier-ignore
function draw(userChoice, computerChoice) {
  const userChoiceClassList = document.getElementById(userChoice).classList;
  result_p.innerHTML = `Both of you choose ${capitalize(userChoice)}. It is Tie.`;
  userChoiceClassList.add('grey-glow');
  setTimeout(() => userChoiceClassList.remove('grey-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'scissorspaper':
    case 'paperrock':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissor':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game('rock'));
  paper_div.addEventListener('click', () => game('paper'));
  scissors_div.addEventListener('click', () => game('scissors'));
}

main();
