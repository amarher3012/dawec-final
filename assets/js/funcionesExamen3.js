// Ejercicio 3 html elements
const form = document.querySelector('form');
const cipherResult = document.getElementById('cipher-result');

// Ejercicio 3

const decipher = (e) => {	    
	// FormData facilita la coleccion de datos del formulario
	const formData = new FormData(form);
	const selectedLanguage = formData.get('language');
	const textToDecipher = formData.get('text').toUpperCase();
	const rotationNumber = formData.get('level');
	// Se guardan cada letra en un array a descifrar y mas tarde se meten en el array una vez descifradas
	const lettersToDecipher = [];
	const lettersDeciphered = [];

	// A la hora de meter otro alfabeto solo se tendria que crear otro else if y meter las letras necesarias
	const letters = [];
	if (selectedLanguage === 'spanish') {
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

	// Separando letras
	for (let i = 0; i < textToDecipher.length; i++) {
		lettersToDecipher.push(textToDecipher[i]);
	}

	if (rotationNumber >= 0 && rotationNumber <= letters.length) {
		lettersToDecipher.forEach((letter) => {
			// Si hay letras fuera de las permitidas, simplemente las mete en el array de descifrado
			if (!letters.includes(letter)) {
				lettersDeciphered.push(letter);
			} else {
				lettersDeciphered.push(
					// Se mete en el array la 'letter' que sea index de 'letters' - el numero de rotacion
					letters.at(letters.indexOf(letter) - rotationNumber) // .at() recoje el indice del argumento que se le pasa
				);
			}
		});
	} else {
		alert('Nivel de rotado no valido');
	}
	console.log(lettersDeciphered);
	cipherResult.textContent = lettersDeciphered.join(''); // El resultado se une sin espacios

	e.preventDefault(); // No hay necesidad de enviar el formualario
};

form.addEventListener('submit', decipher);

// .map
