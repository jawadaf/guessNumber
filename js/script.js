console.log("jeg er i guessNumber")

let rannum = 0;
let highScore = 0
let score = 20

function generateNumber() {
    rannum = Math.trunc(Math.random()*20) + 1;
}

function guessNumber() {
    const guess = Number(inpGuess.value)
    if (guess === rannum) {
        document.body.style.backgroundColor = "#48ff00";
        lblMessage.textContent = "DU HAR VUNDET! Tryk 'Again', for at prøve igen."
        lblNumber.textContent = rannum
        pbGuess.disabled = true
        letHighScore()
    }
}

function letHighScore() {
    if (score > highScore) {
        highScore = score;
        lblHighScore.textContent = highScore;
    }
}

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
    letScore()
}

function letScore() {
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

const lblNumber = document.querySelector(".number");

const lblScore = document.querySelector(".score");

const lblHighScore = document.querySelector(".highscore")

const inpGuess = document.querySelector(".guess");

const pbGuess = document.querySelector(".check")

const pbAgain = document.querySelector(".again")

pbAgain.addEventListener("click", generateNumber)

pbGuess.addEventListener("click", guessNumber)

pbGuess.addEventListener("click", ifWrong)

pbAgain.addEventListener("click", resetGame)

resetGame()




