// Ejercicio 3 html elements
const form = document.querySelector('form');
const cipherResult = document.getElementById('cipher-result');

// Ejercicio 3

const decipher = (e) => {
	const formData = new FormData(form);
	const selectedLanguage = formData.get('language');
	const textToDecipher = formData.get('text');
	const rotationNumber = formData.get('level');
	const lettersToDecipher = [];
	const lettersDeciphered = [];

	// A la hora de meter otro alfabeto solo se tendria que crear otro else if y meter las letras necesarias
	const letters = [];
	if (selectedLanguage === 'spanish') {
		// ['A', 'J', ' ', 'K']
		letters.push(
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'Ñ',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z'
		);
	} else if (selectedLanguage === 'english') {
		letters.push(
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z'
		);
	}

	for (let i = 0; i < textToDecipher.length; i++) {
		lettersToDecipher.push(textToDecipher[i]);
	}

	if (rotationNumber >= 0 && rotationNumber <= letters.length) {
		lettersToDecipher.forEach((letter) => {
			if (!letters.includes(letter)) {
				lettersDeciphered.push(letter);
			} else {
				lettersDeciphered.push(
					letters.at(letters.indexOf(letter) - rotationNumber)
				);
			}
		});
	} else {
		alert('Nivel de rotado no valido');
	}
	console.log(lettersDeciphered);
	cipherResult.textContent = lettersDeciphered.join('');

	e.preventDefault(); // No hay necesidad de enviar el formualario
};

form.addEventListener('submit', decipher);

// .map
