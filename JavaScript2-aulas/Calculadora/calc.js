import allowedKeys from "./keys.js";
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const buttonCopy = document.getElementById("copyToClipboard");
import switchTheme from "./switchTheme.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
	charKeyBtn.addEventListener("click", () => {
		const value = charKeyBtn.dataset.value;
		input.value += value;
	});
});

document.getElementById("clear").addEventListener("click", () => {
	buttonCopy.innerText = "Copy";
	buttonCopy.classList.remove("success");
	resultInput.classList.remove("error");
	resultInput.value = "";
	input.value = "";
	input.focus();
});

window.addEventListener("keydown", function (ev) {
	ev.preventDefault();
	if (allowedKeys.includes(ev.key)) {
		input.value += ev.key;
		return;
	}
	if (ev.key === "Backspace") {
		input.value = input.value.slice(0, -1);
	}
	if (ev.key === "Enter") {
		calculate();
	}
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
	resultInput.value = "ERROR";
	resultInput.classList.add("error");
	const result = eval(input.value);
	resultInput.value = result;
	resultInput.classList.remove("error");
}

buttonCopy.addEventListener("click", (ev) => {
	if (buttonCopy.innerText === "Copy") {
		buttonCopy.innerText = "Copied!";
		buttonCopy.classList.add("success");
		navigator.clipboard.writeText(resultInput.value);
	} else {
		buttonCopy.innerText = "Copy";
		buttonCopy.classList.remove("success");
	}
});

document.getElementById("themeSwitcher").addEventListener("click", switchTheme);

