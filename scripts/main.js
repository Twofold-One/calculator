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

//Populate display function
function displayNumbers() {
    const display = document.querySelector('#calculator-display');
    const numButtons = document.querySelectorAll('#button-number');
    
}