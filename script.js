const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resetNext = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const buttonText = button.textContent;

        if (resetNext) {
            currentInput = '';
            resetNext = false;
        }

        if (!action) {
            currentInput += buttonText;
        } else {
            handleAction(action);
        }
        updateDisplay();
    });
});

function handleAction(action) {
    switch (action) {
        case 'clear':
            currentInput = '';
            break;
        case 'delete':
            currentInput = currentInput.slice(0, -1);
            break;
        case 'divide':
            currentInput += '/';
            break;
        case 'multiply':
            currentInput += '*'; 
            break;
        case 'subtract':
            currentInput += '-';
            break;
        case 'add':
            currentInput += '+';
            break;
        case 'equals':
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
            resetNext = true;
            break;
    }
    
}

function updateDisplay() {
         screen.value = currentInput.replace(/\*/g, 'x');
}   
