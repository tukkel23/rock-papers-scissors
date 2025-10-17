function getComputerChoice() {
    const compChoiceNumber = Math.floor(Math.random() * 3 + 1);
    if (choiceNumber == 1) {
        return "rock"
    } else if (choiceNumber == 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

function getHumanChoice() {
    let humanChoiceNumber = prompt("ENTER 1 FOR ROCK, 2 FOR PAPER OR 3 FOR SCISSORS").toLowerCase();
    if (humanChoiceNumber == 1 || humanChoiceNumber = "rock") {
        return "rock"
    } else if (humanChoiceNumber == 2 || humanChoiceNumber == "paper" || humanChoiceNumber == "papers") {
        return "paper"
    } else {
        return "scissor"
    }

}