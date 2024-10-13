// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentOperation = '';
let previousOperation = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === 'C') {
            currentOperation = '';
            display.value = '';
        } else if (buttonText === '=') {
            try {
                const result = eval(currentOperation);
                display.value = result;
                previousOperation = currentOperation;
                currentOperation = '';
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            currentOperation += buttonText;
            display.value = currentOperation;
        } else {
            currentOperation += buttonText;
            display.value = currentOperation;
        }
    });
});