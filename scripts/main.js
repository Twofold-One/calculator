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

//Global storing obj for operator, num1, num2 
const storedValue = {
    num1: null,
    operator: null,
    num2: null,
    result: null
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
            if (display.textContent.includes(String(storedValue.num1)) || display.textContent.includes(String(storedValue.result))) {
                display.textContent = e.target.textContent;
            } else if (display.textContent.includes('0.') === true) {
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

//function which stores num1 and operator in displayValue on operator click
function operatorClick() {
    const display = document.querySelector('#calculator-display');
    const operatorButton = document.querySelectorAll('#button-operator');

        operatorButton.forEach((button) => {
            button.addEventListener('click', function(e) {
                if (storedValue.num1 !== null && storedValue.operator !== null) {
                    storedValue.num2 = Number(display.textContent);
                    storedValue.result = roundDecimals(operate(storedValue.operator, storedValue.num1, storedValue.num2));
                    display.textContent = storedValue.result;
                    storedValue.operator = e.target.textContent;
                    storedValue.num1 = null;
                    storedValue.num2 = null;
                    console.log(storedValue);  
                } else if (storedValue.operator === '/' && display.textContent == 0) {
                    alert('You can\'t divide by 0!');
                } else if (storedValue.result !== null && storedValue.operator !== null) {
                    storedValue.num1 = storedValue.result;
                    storedValue.num2 = Number(display.textContent);
                    storedValue.result = roundDecimals(operate(storedValue.operator, storedValue.num1, storedValue.num2));
                    display.textContent = storedValue.result;
                    storedValue.operator = e.target.textContent;
                    storedValue.num1 = null;
                    storedValue.num2 = null;
                    console.log(storedValue);
                } else {
                    storedValue.num1 = Number(display.textContent);
                    storedValue.operator = e.target.textContent;
                    console.log(storedValue);   
                }             
            });
        });
}
operatorClick();


//function which stores num2 and runs equality operation
function equalityClick() {
    const display = document.querySelector('#calculator-display');
    const equalityButton = document.querySelector('#button-equality');


    equalityButton.addEventListener('click', function() {
        if (storedValue.num1 === null && storedValue.operator === null && storedValue.num2 === null && storedValue.result === null) {
            display.textContent; 
        } else if (storedValue.result !== null && storedValue.operator === null) {
            display.textContent = storedValue.result;
            console.log(storedValue);
        } else if (storedValue.operator === '/' && display.textContent == 0) {
            alert('You can\'t divide by 0!');
        } else if (storedValue.result !== null) {
            storedValue.num1 = storedValue.result;
            storedValue.num2 = Number(display.textContent);
            storedValue.result = roundDecimals(operate(storedValue.operator, storedValue.num1, storedValue.num2));
            display.textContent = storedValue.result;
            storedValue.num1 = null;
            storedValue.num2 = null;
            storedValue.operator = null;
            console.log(storedValue);
        } else {
            storedValue.num2 = Number(display.textContent);
            storedValue.result = roundDecimals(operate(storedValue.operator, storedValue.num1, storedValue.num2));
            display.textContent = storedValue.result;
            storedValue.num1 = null;
            storedValue.num2 = null;
            storedValue.operator = null;
            console.log(storedValue);
        }
    });
}
equalityClick();


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

//All clear function
function allClear() {
    const display = document.querySelector('#calculator-display');
    const allClearButton = document.querySelector('#all-clear-button');
    const dotButton = document.querySelector('#button-dot'); 

    allClearButton.addEventListener('click', () => {
        display.textContent = 0;
        dotButton.disabled = false;
        storedValue.num1 = null;
        storedValue.num2 = null;
        storedValue.operator = null;
        storedValue.result = null;
    });
}
allClear();

//Backspace function
function backspace() {
    const display = document.querySelector('#calculator-display');
    const backspaceButton = document.querySelector('#backspace-button');

    backspaceButton.addEventListener('click', () => {
        if (display.textContent.length > 1)
        display.textContent = display.textContent.slice(0, -1);
        else {
            display.textContent = 0;
        }
    });
}
backspace();

//percentage function
function percentage() {
    const display = document.querySelector('#calculator-display');
    const percentageButton = document.querySelector('#button-percentage');

    percentageButton.addEventListener('click', () => {
        display.textContent = (Number(display.textContent) / 100).toString();
    });
}
percentage();

//plus-minus function
function plusMinus() {
    const display = document.querySelector('#calculator-display');
    const plusMinusButton = document.querySelector('#button-plus-minus');

    plusMinusButton.addEventListener('click', () => {
        if (Number(display.textContent) > 0) {
            display.textContent = (0 - Number(display.textContent)).toString();
        } else (
            display.textContent = Math.abs(Number(display.textContent))
        )
    });
}
plusMinus();

//round decimals function
function roundDecimals(number) {
    return Math.round(number * 100) / 100;
}

//display overflow block function
function displayOverflowBlock() {
    const display = document.querySelector('#calculator-display');
    const numButtons = document.querySelectorAll('#button-number');

    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (display.textContent.toString().length > 15) {
                display.textContent = display.textContent.substring(0, 15);
            }
        });
    });    
}
displayOverflowBlock();



//keyboard support function
function keyboardKey() {
    const display = document.querySelector('#calculator-display');
    const numButtons = document.querySelectorAll('#button-number');

    window.addEventListener('keydown', (e) => {
        const key = document.querySelector(`button[key='${e.key}']`);
        key.click();
    });
}
keyboardKey();