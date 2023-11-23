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

function chooseQuit() {
	while (true) {
		const readlineSync = require('readline-sync');
		userInput = readlineSync.question("Quer continuar? S || N \n");
		if (userInput == 'N' || userInput == 'n')
			process.exit(0);
		if (userInput == 'S' || userInput == 's')
			break;
	}
}

function main() {
    let validatedInput = null;
	const readlineSync = require('readline-sync');
	while (validatedInput == null || isNaN(validatedInput)) {
		validatedInput = readlineSync.questionInt("Insira um inteiro positivo:");
		if (validatedInput < 0) {
			validatedInput = null;
			console.log("Input valid number, please");
		}
	}
    console.log(`A soma dos inteiros positivos divisíveis por 3 ou por 5 até o número ${validatedInput} é: ${addDivisibles(validatedInput)}`)
	chooseQuit();
}

while (true)
	main();