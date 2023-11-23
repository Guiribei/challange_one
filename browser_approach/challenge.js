function addDivisibles(number) {
	let result = 0;

	if (number == 0)
		return result;
	while (number) {
		number--;
		if (number % 3 == 0 || number % 5 == 0 )
			result += number;
	}
	return result
}

window.onload = function() {
    let userInput;
    let validatedInput = null;
	let outputDiv = document.getElementById('output');

	while (validatedInput == null || isNaN(validatedInput)) {
		userInput = prompt("Insira um inteiro positivo:");
		if (userInput.length > 9)
			userInput = -1;
		validatedInput = parseInt(userInput);
		if (validatedInput < 0)
			validatedInput = null;
	}
    outputDiv.textContent = `A soma dos inteiros positivos divisíveis por 3 ou por 5 até o número ${validatedInput} é: ${addDivisibles(validatedInput)}`
	outputDiv.style.display = 'block';
}