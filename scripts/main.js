//Basic math operator functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};

// Opereate function
function operate(operator, num1 , num2) {
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }
    return result;
}

//Populate display with numbers function
function displayNumbers() {
    const display = document.querySelector('#calculator-display');
    const numButtons = document.querySelectorAll('#button-number');

    numButtons.forEach((button) => {
        button.addEventListener('click', function(e) {
            if (display.textContent == 0) {
                display.textContent = e.target.textContent
            } else {
                display.textContent += e.target.textContent;
            }    
        });
    });
}
displayNumbers();

//Clear display function
function clearDisplay() {
    const display = document.querySelector('#calculator-display');
    const clearButton = document.querySelector('#clear-button');

    clearButton.addEventListener('click', () => {
        display.textContent = 0;
    });
}
clearDisplay();

//One dot function
function oneDot() {
    const display = document.querySelector('#calculator-display');
    const dotButton = document.querySelector('.dot-btn');
    if (display.textContent.indexOf('.') !== -1) {
        dotButton.disabled = true;
    } else {
        dotButton.disabled = false;
    }   
}
oneDot();


//Global stored operator, num1, num2 array
const displayValue = {
    num1: 0,
    operator: undefined,
    num2: 0
}


