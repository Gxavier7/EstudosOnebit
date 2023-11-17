let win;
let matchs;
const start = document.getElementById("start");
const result = document.getElementById("result");
const marker = document.getElementById("marker");
const buttons = document.querySelectorAll(".btn");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const currentPlayer = document.getElementById("currentPlayer");

function updatePlayer() {
	if (marker.innerText === "X") {
		currentPlayer.innerText = "Jogador: " + playerTwo.value;
		marker.innerText = "O";
	} else {
		currentPlayer.innerText = "Jogador: " + playerOne.value;
		marker.innerText = "X";
	}
}

function search(id) {
	const value = document.getElementById(`${id}`);
	return value.innerText;
}

function verifyWin(first, second, third) {
	let one = search(first);
	let two = search(second);
	let three = search(third);

	if (one != "") {
		if (one == two && two == three) {
			win = one;
			game = false;
		}
	}
}

function winCondicion() {
	verifyWin(1, 5, 9);
	verifyWin(3, 5, 7);
	verifyWin(1, 2, 3);
	verifyWin(4, 5, 6);
	verifyWin(7, 8, 9);
	verifyWin(1, 4, 7);
	verifyWin(2, 5, 8);
	verifyWin(3, 6, 9);
}

function restart() {
	win = "";
	matchs = 0;
	result.innerText = "";
	marker.innerText = "X";
	currentPlayer.innerText = "Jogador: ";

	buttons.forEach((button) => {
		button.innerText = "";
	});
}

function highlight(win, person, btn) {
	result.classList.toggle("victory");

	if (win == person.dataset.mark) {
		person.classList.toggle("victory");
	}

	buttons.forEach((button) => {
		if (button.innerText == win) {
			if (btn) {
				button.classList.add("victory");
			} else {
				button.classList.remove("victory");
			}
		}
	});
}

start.addEventListener("click", () => {
	if (playerOne.value != "" && playerTwo.value != "" && !game) {
		highlight(win, playerOne, false);
		highlight(win, playerTwo, false);

		restart();
		currentPlayer.innerText = "Jogador: " + playerOne.value;
		start.innerText = "Jogar Novamente";
	}
});

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (matchs <= 9 && win == "") {
			if (button.innerText == "" && currentPlayer.innerText == "Jogador: ") {
				button.innerText = marker.innerText;

				updatePlayer();

				matchs++;
			}

			winCondicion();
		}

		if (win == "" && matchs == 9) {
			win = "tie";
		}

		switch (win) {
			case "X":
				highlight(win, playerOne, true);
				result.innerText = playerOne.value;
				break;

			case "O":
				highlight(win, playerTwo, true);
				result.innerText = playerTwo.value;
				break;

			case "tie":
				highlight(win, playerOne, true);
				result.innerText = "Oops! Deu empate";
				break;

			default:
				break;
		}
	});
});
