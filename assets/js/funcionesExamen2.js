// Ejercicio 2 html objects
const form = document.querySelector('form');

// Ejercicio 2

const validate = (e) => {
	const formData = new FormData(form);
	const activeErrors = [];
	const errors = {
		passwordError:
			'La contraseña debe empezar por una letra mayuscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito',
		passwordCheckError:
			'Las contraseñas escritas no coinciden. Vuelve a intentarlo',
		hintError: 'El indicio de contraseña no puede contener la contraseña',
	};
	let isValid = true;

	if (
		!/^[A-Z](?=.*\d)(?=.*[a-z])[\da-z]{6,}$/.test(
			formData.get('new-password')
		)
	) {
		console.log(formData.get('new-password'));
		activeErrors.push(errors.passwordError);
		isValid = false;
		document.getElementById('new-password').focus();
	}

	if (formData.get('new-password') !== formData.get('new-password-check')) {
		console.log('error_pass_check');
		activeErrors.push(errors.passwordCheckError);
		isValid = false;
		document.getElementById('new-password-check').focus();
	}

	if (formData.get('hint').includes(formData.get('new-password'))) {
		activeErrors.push(errors.hintError);
		isValid = false;
		document.getElementById('hint').focus();
	}

	if (!isValid) {
		alert(activeErrors.join('\n'));
		e.preventDefault();
	}
};

form.addEventListener('submit', validate);
