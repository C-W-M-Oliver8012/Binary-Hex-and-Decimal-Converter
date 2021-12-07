let input = document.getElementById("input");
let inputButton = document.getElementById("convert-button");
inputButton.addEventListener("click", convert);

let error = document.getElementById("error");
let b0 = document.getElementById("b0");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");


function convert() {
	b0.innerHTML = "<b>0b: </b>";
	b1.innerHTML = "<b>1b: </b>";
	b2.innerHTML = "<b>2b: </b>";
	setNoError();
	let inputString = input.value;

	if (inputString.length === 0) {
		setError("There is no input to convert");
		return;
	}

	// input is unsigned binary
	if (
		inputString.length > 2
		&& inputString[0] === '0'
		&& inputString[1] == 'b'
	) {
		let binaryString = "";
		let index = 2;

		while (index < inputString.length) {
			if (inputString[index] === '0' || inputString[index] === '1') {
				binaryString = binaryString + inputString[index];
			} else {
				setError("Binaray numbers must contain only '0' or '1'.");
				return;
			}
			index += 1;
		}

		b0.innerHTML = b0.innerHTML + binaryString;

		// invert 1's and 0'switch
		index = 0;
		while (index < binaryString.length) {
			if (binaryString.charAt(index) === '0') {
				console.log("here");
				binaryString[index] = '1';
				binaryString = binaryString.substr(0, index) + "1" + binaryString.substr(index, binaryString.length - 1);
			} else {
				console.log("here2");
				binaryString = binaryString.substr(0, index) + "0" + binaryString.substr(index, binaryString.length - 1);
			}
			index += 1;
		}
		b1.innerHTML = b1.innerHTML + binaryString;
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
