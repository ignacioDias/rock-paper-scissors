let humanScore = 0;
let computerScore = 0;
const text = document.querySelector("#winner");

function getComputerChoice() {
    const arr = ["paper", "rock", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return arr[choice];
}
function wins(winner, loser) {
    if((winner != "paper" && winner != "rock" && winner != "scissors") || (loser != "paper" && loser != "rock" && loser != "scissors"))
        alert("bad entry");
    if(winner == loser)
        return 0;
    if ((winner == "scissors" && loser == "paper") ||
        (winner == "paper" && loser == "rock") ||
        (winner == "rock" && loser == "scissors")) {
        return 1;
    }
    return -1;
}

const play = document.querySelector(".button-container");
play.addEventListener("click", (event) => {

    let button = event.target.closest("button");
    let humanChoice = button.id;

    let computerChoice = getComputerChoice();
    const showComputerChoice = document.querySelector("#cpu-play");

    showComputerChoice.innerHTML = '';

    const h3 = document.createElement("h3");
    h3.innerText = "Computer's choice:";
    showComputerChoice.appendChild(h3);

    const img = document.createElement("img");
    img.src = computerChoice + ".png";
    img.alt = "Computer's choice";
    showComputerChoice.appendChild(img); 
    
    let result = wins(humanChoice, computerChoice);
    if(result == 0) {
        text.innerText = `It's a draw!\nYour score: ${humanScore} - CPU' score: ${computerScore}`;
    } else if(result > 0) {
        text.innerText = `You win!\nYour score: ${++humanScore} - CPU' score: ${computerScore}`;
    } else {
        text.innerText = `You lost!\nYour score: ${humanScore} - CPU' score: ${++computerScore}`;
    }
});