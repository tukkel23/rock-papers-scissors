let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const compChoiceNumber = Math.floor(Math.random() * 3 + 1);
    if (compChoiceNumber == 1) {
        return "rock"
    } else if (compChoiceNumber == 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

function getHumanChoice() {
    let humanChoiceNumber = prompt("ENTER ROCK, PAPER OR SCISSORS");
    if (humanChoiceNumber = "rock") {
        return "rock"
    } else if (humanChoiceNumber == "paper" || humanChoiceNumber == "papers") {
        return "paper"
    } else if (humanChoiceNumber == "scissor" || humanChoiceNumber == "scissors") {
        return "scissor"
    }

}


function playGame() {
    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("Draw");
            } else if (computerChoice == "scissor") {
                humanScore += 1;
                console.log("You win! Rock beats Scissors")
            } else {
                computerScore += 1;
                console.log("You lost! Paper beats Rock");

            }
        }

        if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                console.log("Draw");

            } else if (computerChoice == "rock") {
                humanScore += 1;
                console.log("You win! Paper beats Rock");

            } else {
                computerScore += 1;
                console.log("You lost! Scissor beats Paper");

            }
        }

        if (humanChoice == "scissor") {
            if (computerChoice == "scissor") {
                console.log("Draw");

            } else if (computerChoice == "paper") {
                humanScore += 1;
                console.log("You win! Scissors beats Paper");

            } else {
                computerScore += 1;
                console.log("You lost! Rock beats Scissors");

            }
        }
    }
    playRound();
}

let rounds = 1;
while (rounds <= 5) {
    playGame();
    rounds += 1;
}

if (computerScore > humanScore) {
    console.log("You lost the overall Game. :{");
} else if (computerScore < humanScore) {
    console.log("You won the overall Game. :)");
} else {
    console.log("Draw.");
}