// game values
let min = 1,
	max = 10,
	guessesLeft = 3,
	winningNumber = getRandomNumber(min, max);


// UI pieces
const game = document.querySelector("#game"),
	minNum = document.querySelector(".min-num"),
	maxNum = document.querySelector(".max-num"),
	guessInput = document.querySelector("#guess-input"),
	submitBtn = document.querySelector("#guess-btn"),
	message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

// play again
game.addEventListener("mousedown", (e) => {
	if (e.target.className === 'play-again') {
		window.location.reload();
	}
});

// listen for the guess
submitBtn.addEventListener("click", () => {

	let guess = parseInt(guessInput.value);
	// validate
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter values between ${min} and ${max}`, "red");
		return false;
	}

	// check if won
	if (guess === winningNumber) {
		// player won;
		setMessage(` You Won! Winning number was ${guess} `, "green", "url(https://www.costcutter.co.uk/~/media/images/sheree-barker/competitions/win-header.jpg?thn=0&w=1980&hash=CF282F1684106C850AF5406DD273B5476282672F)");
		// play again
		gameOver();
	} else {
		// wrong number
		guessesLeft -= 1;
		guessInput.value = "";
		if (guessesLeft === 0) {
			setMessage(`You Lost, Game over. Winning number was ${winningNumber}`, "red", "url(over.jpg)");
			gameOver();
		} else {
			setMessage(` ${guess} is wrong. ${guessesLeft} guesses left. `, "red");
		}
	}
});
// Play again button
function gameOver() {
	submitBtn.textContent = "Play Again";
	submitBtn.className = 'play-again';
	guessInput.disabled = true;
}
// get random number
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
let body = document.querySelector("body");
// message
function setMessage(msg, color, bg) {
	message.textContent = msg;
	message.style.color = color;
	guessInput.style.borderColor = color;
	body.style.backgroundImage = bg;
}
// click button with enter key
var input = document.getElementById("guess-input");
input.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("guess-btn").click();
	}
});

