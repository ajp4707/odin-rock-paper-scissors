function playGame() {
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
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
        else if (   (humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "scissors" && computerChoice === "paper") ||
                    (humanChoice === "paper" && computerChoice === "rock")  ) {
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                        humanScore += 1;
                    }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
    }

    while (humanScore < 3 && computerScore < 3) playRound(getHumanChoice(), getComputerChoice());
    if (humanScore >= 3) console.log("You win!");
    else console.log("You lose!");
}