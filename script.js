let computerScore = 0;
let humanScore = 0;

let rock = document.querySelector(".rock-btn")
let paper = document.querySelector(".paper-btn")
let scissor = document.querySelector(".scissor-btn")

rock.addEventListener("click", () => playRound("Rock"))
paper.addEventListener("click", () => playRound("Paper"))
scissor.addEventListener("click", () => playRound("Scissor"))

let result = document.querySelector(".result")
let roundResult = document.createElement("p")
roundResult.style.color = "#105978ff"
roundResult.style.fontFamily = "PixelSans"
roundResult.style.fontSize = "1.5rem"
roundResult.style.paddingLeft = "7px"




function getComputerChoice() {
    const compChoiceNumber = Math.floor(Math.random() * 3 + 1);
    if (compChoiceNumber == 1) {
        return "Rock"
    } else if (compChoiceNumber == 2) {
        return "Paper"
    } else {
        return "Scissor"
    }
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. It's a Draw.`;
            result.appendChild(roundResult)
        } else if (computerChoice == "Scissor") {
            humanScore += 1;
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win! Rock beats Scissors`;
            result.appendChild(roundResult)
        } else {
            computerScore += 1;
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You lost! Paper beats Rock`;
            result.appendChild(roundResult)

        }
    }

    if (humanChoice == "Paper") {
        if (computerChoice == "Paper") {
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. It's a Draw.`;
            result.appendChild(roundResult)

        } else if (computerChoice == "Rock") {
            humanScore += 1;
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win! Paper beats Rock`;
            result.appendChild(roundResult)

        } else {
            computerScore += 1;
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You lost! Scissor beats Paper`;
            result.appendChild(roundResult)

        }
    }

    if (humanChoice == "Scissor") {
        if (computerChoice == "Scissor") {
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. It's a Draw.`;
            result.appendChild(roundResult)

        } else if (computerChoice == "Paper") {
            humanScore += 1;
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win! Scissors beats Paper`;
            result.appendChild(roundResult)

        } else {
            computerScore += 1;
            roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You lost! Rock beats Scissors`;
            result.appendChild(roundResult)

        }
    }
}