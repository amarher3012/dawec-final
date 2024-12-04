// Ejercicio 2 html elements
const form = document.querySelector('form');

// Ejercicio 2

// Se pasa 'e' como argumento para utilizar mas tarde el atributo preventDefault del form
const validate = (e) => {
    // FormData facilita la coleccion de datos del formulario
    const formData = new FormData(form);
    // Por cada check se mete un error si ocurrem en activeErrors para despues mostrarlos
    const activeErrors = [];
    const errors = {
        passwordError:
            'La contraseña debe empezar por una letra mayuscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito',
        passwordCheckError:
            'Las contraseñas escritas no coinciden. Vuelve a intentarlo',
        hintError: 'El indicio de contraseña no puede contener la contraseña',
    };
    let isValid = true;

	// Password check
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

	// Pasword repeat check
    if (formData.get('new-password') !== formData.get('new-password-check')) {
        console.log('error_pass_check');
        activeErrors.push(errors.passwordCheckError);
        isValid = false;
        document.getElementById('new-password-check').focus();
    }

	// Hint check
    if (formData.get('hint').includes(formData.get('new-password'))) {
        activeErrors.push(errors.hintError);
        isValid = false;
        document.getElementById('hint').focus();
    }

    // Se comprueba si isValid es falso, y en su caso alerta de los errores
    if (!isValid) {
        alert(activeErrors.join('\n'));
        // preventDefault previene que se envie el formulario
        e.preventDefault();
    }
};

form.addEventListener('submit', validate);
