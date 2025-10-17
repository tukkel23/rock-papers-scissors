let computerChoice = 0;
let humanChoice = 0;

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
    let humanChoiceNumber = prompt("ENTERROCK, PAPER OR SCISSORS").toLowerCase();
    if (humanChoiceNumber = "rock") {
        return "rock"
    } else if (humanChoiceNumber == "paper" || humanChoiceNumber == "papers") {
        return "paper"
    } else if (humanChoiceNumber == "scissor" || humanChoiceNumber == "scissors") {
        return "scissor"
    }

}

function playRound(humanChoice, computerChoice) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {} else if (computerChoice == "scissor") {
            humanChoice += 1;
        } else {
            computerChoice += 1;
        }
    }

    if (humanChoice == "paper") {
        if (computerChoice == "paper") {} else if (computerChoice == "rock") {
            humanChoice += 1;
        } else {
            computerChoice += 1;
        }
    }

    if (humanChoice == "scissor") {
        if (computerChoice == "scissor") {} else if (computerChoice == "paper") {
            humanChoice += 1;
        } else {
            computerChoice += 1;
        }
    }
}