

window.onload = function() {
    let userInput;
    let validatedInput = null;
	let outputDiv = document.getElementById('output');

	while (validatedInput == null || isNaN(validatedInput)) {
		userInput = prompt("Insira um inteiro positivo:");
		validatedInput = parseInt(userInput);
	}
    outputDiv.textContent = `O número é: ${validatedInput}`
	outputDiv.style.display = 'block';
}