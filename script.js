const choices = ["rock", "paper", "scissors"];
let winners = [];
// Start game function//
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  
  logWins();
}

// play round function // 
function playRound (round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

//player choice function//
function playerChoice(){
  let input = prompt("Type Rock, Paper, or Scissors. Spelling needs to be correct");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors. Spelling needs to be correct")
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type Rock, Paper, or Scissors. Spelling needs to be correct");
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

// get computer choice function //
function computerChoice() {
  return choices [Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices[Math.floor(Math.random() * choices.length)];
}

// check winner function // 
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
  (choiceP === "rock" && choiceC == "scissors") ||
  (choiceP === "paper" && choiceC == "rock") ||
  (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer"
  }
}

// logging the wins//
function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}

//log round function//
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  console.log(winner, "Won the round!");
  console.log("===============================================");
}
