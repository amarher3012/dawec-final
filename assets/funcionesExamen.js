// Ejercicio 1 html objects
const curiousExec = document.getElementById('first');

// Ejercicio 1
const curiousNumbers = () => {
    let num = 0;
    let sum = 0;
    let res = [];

    for (let i = 1; i <= 999999999; i++) {
        num = i.toString().split('').map(Number);
        for (let j = 0; j < num.length; j++) {
            sum += Math.pow(num[j], 3);
        }
        if (sum === i) {
            res.push(i);
        }
        sum = 0;
        num = 0;
    }

    alert(`Los numeros curiosos son:\n ${res.join(', ')}`);
};

curiousExec.addEventListener('click', curiousNumbers);
