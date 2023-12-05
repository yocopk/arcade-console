const value = ["sasso", "forbice", "carta"];
let playerScore = 0;
let computerScore = 0;

function valueGenerator() {
    return value[Math.floor(Math.random() * 3)];
}

const keyHandler = function (playerValue) {
    document.getElementById("sasso").disabled = true;
    document.getElementById("forbice").disabled = true;
    document.getElementById("carta").disabled = true;

    const computerValue = valueGenerator();
    const text = document.getElementById("result");

    const imgPlayer = document.getElementById("playerHand");
    imgPlayer.src = `/assets/${playerValue}.svg`;
    imgPlayer.classList.remove("animate-bounce");

    const imgComputer = document.getElementById("computerHand");
    imgComputer.src = `/assets/${computerValue}.svg`;
    imgComputer.classList.remove("animate-bounce");

    if (playerValue === computerValue) {
        displayResult("Pareggio");
    } else if (playerValue === "sasso" && computerValue === "carta") {
        incrementComputerScore();
        displayResult("Hai perso!");
    } else if (playerValue === "carta" && computerValue === "forbice") {
        incrementComputerScore();
        displayResult("Hai perso!");
    } else if (playerValue === "forbice" && computerValue === "sasso") {
        incrementComputerScore();
        displayResult("Hai perso!");
    } else {
        incrementPlayerScore();
        displayResult("Hai vinto!");
    }

    setTimeout(() => {
        imgPlayer.src = `/assets/sasso.svg`;
        imgPlayer.classList.add("animate-bounce");

        imgComputer.src = `/assets/sasso.svg`;
        imgComputer.classList.add("animate-bounce");

        text.classList.remove("text-red-500");
        text.classList.remove("text-green-500");
        displayResult("");

        document.getElementById("sasso").disabled = false;
        document.getElementById("forbice").disabled = false;
        document.getElementById("carta").disabled = false;
    }, 1800);
};

function displayResult(result) {
    const text = document.getElementById("result");
    text.textContent = result;

    if (result === "Hai perso!") {
        text.classList.add("text-red-500");
    } else if (result === "Hai vinto!") {
        text.classList.add("text-green-500");
    }
}

function incrementPlayerScore() {
    document.getElementById("playerPoint").textContent = `Punteggio: ${++playerScore}`;
}

function incrementComputerScore() {
    document.getElementById("computerPoint").textContent = `Punteggio: ${++computerScore}`;
}