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
    const dotButton = document.querySelector('#button-dot');

    //One dot function
    function oneDot() {
        const display = document.querySelector('#calculator-display');
        if (display.textContent.includes('.') == true) {
            dotButton.disabled = true;
        } else {
            dotButton.disabled = false;
        }   
    }

    dotButton.addEventListener('click', function(e) {
        if (display.textContent.indexOf('0') === 0) {
            display.textContent += e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
        oneDot();
    });

    numButtons.forEach((button) => {
        button.addEventListener('click', function(e) {
            if (display.textContent.includes('0.') === true) {
                display.textContent += e.target.textContent;
            } else if (display.textContent.indexOf(0) === 0) {
                display.textContent = e.target.textContent;
            } else {                
                display.textContent += e.target.textContent;
            }
            oneDot();   
        });
    });
}
displayNumbers();

//Clear display function
function clearDisplay() {
    const display = document.querySelector('#calculator-display');
    const clearButton = document.querySelector('#clear-button');
    const dotButton = document.querySelector('#button-dot');

    clearButton.addEventListener('click', () => {
        display.textContent = 0;
        dotButton.disabled = false;
    });
}
clearDisplay();

//Global storing obj for operator, num1, num2 
const storedValue = {
    num1: undefined,
    operator: undefined,
    num2: undefined
}

//function which stores num1 and operator in displayValue on operator click
function storeFirstNumAndOperator() {
    const display = document.querySelector('#calculator-display');
    const operatorButton = document.querySelectorAll('#button-operator');

    operatorButton.forEach((button) => {
        button.addEventListener('click', function(e) {
            storedValue.num1 = Number(display.textContent);
            storedValue.operator = e.target.textContent;
            console.log(storedValue);
        });
    });
}
storeFirstNumAndOperator();

//function which stores num2 and runs equality operation
function storeSecondNumAndOperate() {
    const display = document.querySelector('#calculator-display');
    const equalityButton = document.querySelector('#button-equality');

    equalityButton.addEventListener('click', function() {
        storedValue.num2 = Number(display.textContent);
        display.textContent = operate(storedValue.operator, storedValue.num1, storedValue.num2);
        console.log(storedValue);
        console.log(operate(storedValue.operator, storedValue.num1, storedValue.num2))
    });
}
storeSecondNumAndOperate();

//function which clears display if num1 is already stored
function storedNumCheck() {
    if (storedValue.num1 !== undefined) {
    }
}
