console.log("jeg er i guessNumber")

let rannum = 0;

function generateNumber() {
    rannum = Math.trunc(Math.random()*20) + 1;
}

let highScore = 0

function guessNumber() {
    const guess = Number(inpGuess.value)
    if (guess === rannum) {
        document.body.style.backgroundColor = "#48ff00";
        lblMessage.textContent = "DU HAR VUNDET! Tryk 'Again', for at prøve igen."
        lblNumber.textContent = rannum
        pbGuess.disabled = true
        if (score > highScore) {
            highScore = score;
            lblHighScore.textContent = highScore;
        }
    }
}

let score = 20

function ifWrong() {
    const guess = Number(inpGuess.value)
    if (guess !== rannum) {
        document.body.style.backgroundColor = "#ff0000";
        if (guess > rannum) {
            lblMessage.textContent = "For højt.";
        } else {
            lblMessage.textContent = "For lavt.";
        }
    }
    if (guess < 1 || guess > 20) {
        lblMessage.textContent = "Tallet findes ikke. Prøv igen."
        document.body.style.backgroundColor = "#222"
        return
    }
    score--
    lblScore.textContent = score
    if (score <= 0) {
        lblMessage.textContent = "Du har tabt. Tryk 'Again', for at prøve igen"
        score = 20
        pbGuess.disabled = true
    }
}

function resetGame() {
    generateNumber();
    score = 20;
    lblMessage.textContent = "Start guessing...";
    lblNumber.textContent = "?";
    lblScore.textContent = score;
    inpGuess.value = "";
    document.body.style.backgroundColor = "#222"
    pbGuess.disabled = false;
}

const lblMessage = document.querySelector(".message");
//console.log(lblMessage);
//console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number");
//console.log(lblNumber);

const lblScore = document.querySelector(".score");
//console.log(lblScore);

const lblHighScore = document.querySelector(".highscore")

const inpGuess = document.querySelector(".guess");
//console.log(inpGuess);

const pbGuess = document.querySelector(".check")

const pbAgain = document.querySelector(".again")

pbAgain.addEventListener("click", generateNumber)
//console.log(pbAgain)

pbGuess.addEventListener("click", guessNumber)

pbGuess.addEventListener("click", ifWrong)

pbAgain.addEventListener("click", resetGame)

resetGame()




