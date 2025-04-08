CHOICE_ARRAY = ["rock", "paper", "scissors"];

function getComputerChoice() {
    
    // // Array-less solution
    // switch (Math.floor(Math.random()*3)) {
    //     case 0: return "rock";
    //     case 1: return "paper";
    //     case 2: return "scissors";
    //     default: return "";
    // }

    return CHOICE_ARRAY[Math.floor(Math.random()*3)];
}

function getHumanChoice() {
    let response;
    while  (!response || !(CHOICE_ARRAY.includes(response.toLowerCase()))) {
        response = prompt("Please enter rock, paper, or scissors: ")
    }
    return response
}

let computerScore = 0;
let humanScore = 0;

function getScores() {
    return `Your score: ${computerScore}
    Robot's score: ${humanScore}`
}

const displayDiv = document.querySelector("div.display");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        displayDiv.textContent= `Tie! ${humanChoice} ties ${computerChoice}. ${getScores()}`;
    }
    else if (   (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")  ) {
                    // console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    
                    humanScore += 1;
                    displayDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}. ${getScores()}`;
                    
                }
    else {
        // console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
        displayDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}. ${getScores()}`;
    }
    if (humanScore >= 3) {
        displayDiv.textContent+=(" You win!");
        computerScore = humanScore = 0;
    }
    else if (computerScore >= 3) {
        displayDiv.textContent+=(" You lose!");
        computerScore = humanScore = 0;
    }
}

// while (humanScore < 3 && computerScore < 3) playRound(getHumanChoice(), getComputerChoice());
// if (humanScore >= 3) console.log("You win!");
// else console.log("You lose!");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));