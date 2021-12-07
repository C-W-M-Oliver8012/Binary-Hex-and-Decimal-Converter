let input = document.getElementById("input");
let inputButton = document.getElementById("convert-button");
inputButton.addEventListener("click", convert);

let error = document.getElementById("error");
let b0 = document.getElementById("b0");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let h0 = document.getElementById("h0");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let dec = document.getElementById("dec");

function convert() {
	b0.innerHTML = "<b>0b: </b>";
	b1.innerHTML = "<b>1b: </b>";
	b2.innerHTML = "<b>2b: </b>";
	h0.innerHTML = "<b>0h: </b>";
	h1.innerHTML = "<b>1h: </b>";
	h2.innerHTML = "<b>2h: </b>";
	dec.innerHTML = "<b>Value: </b>";
	setNoError();
	let inputString = input.value;

	if (inputString.length === 0) {
		setError("There is no input to convert.");
		return;
	} else {
		b0.innerHTML = "<b>0b: </b>11000000110010010100";
		b1.innerHTML = "<b>1b: </b>00111111001101101011";
		b2.innerHTML = "<b>2b: </b>00000000000011000000110010010100";
		h0.innerHTML = "<b>0h: </b>C0C94";
		h1.innerHTML = "<b>1h: </b>3F36B";
		h2.innerHTML = "<b>2h: </b>C0C94";
		dec.innerHTML = "<b>Value: </b>789652";
	}
}

function setNoError() {
	error.style.visibility = "hidden";
	error.innerHTML = "";
}

function setError(errorString) {
	error.style.visibility = "visible";
	error.innerHTML = errorString;
}
