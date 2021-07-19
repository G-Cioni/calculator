// Define global variables

let firstOperand = 0

let secondOperand = 0

let tempOperator = 0

let display = document.querySelector("#display")

// Give each button a function

allClearBtn.addEventListener("click", () => calculator.functions.allClear())

equalsBtn.addEventListener("click", () => calculator.operations.equals(tempOperator, firstOperand))

divisionBtn.addEventListener("click", () => calculator.functions.operation("/"))

multiplicationBtn.addEventListener("click", () => calculator.functions.operation("*"))

additionBtn.addEventListener("click", () => calculator.functions.operation("+"))

subtractionBtn.addEventListener("click", () => calculator.functions.operation("-"))

plusMinusBtn.addEventListener("click", () => calculator.functions.plusMinus())

zero.addEventListener("click", () => calculator.functions.displayInput(0))

one.addEventListener("click", () => calculator.functions.displayInput(1))

two.addEventListener("click", () => calculator.functions.displayInput(2))

three.addEventListener("click", () => calculator.functions.displayInput(3))

four.addEventListener("click", () => calculator.functions.displayInput(4))

five.addEventListener("click", () => calculator.functions.displayInput(5))

six.addEventListener("click", () => calculator.functions.displayInput(6))

seven.addEventListener("click", () => calculator.functions.displayInput(7))

eight.addEventListener("click", () => calculator.functions.displayInput(8))

nine.addEventListener("click", () => calculator.functions.displayInput(9))

point.addEventListener("click", () => calculator.functions.displayInput("."))

// Create calculator object

calculator = {

    // Contains all operation related functions

    operations: {
        addition: function(a,b){
            return a + b;
        },        
        subtraction: function(a,b) {
            return a - b;
        },
        multiplication: function(a,b) {
            return a * b;
        },     
        division: function(a,b) {
            return a / b;
        },
        equals: function(tempOperator,firstOperand) {
            secondOperand = parseFloat(display.textContent);
            return calculator.operations.operate(tempOperator,firstOperand,secondOperand)
        },      
        operate: function(tempOperator, a, b) {
            if (tempOperator == "+") {
                display.textContent = this.addition(a,b);
                calculator.functions.displayMaxLength();
            } else if (tempOperator == "-") {
                display.textContent = this.subtraction(a,b)
                calculator.functions.displayMaxLength();
            } else if (tempOperator == "*") {
                display.textContent = this.multiplication(a,b)
                calculator.functions.displayMaxLength();
            } else if (tempOperator == "/") {
                display.textContent = this.division(a,b)
                calculator.functions.displayMaxLength();
            } else {
                return "ERROR";
            }
        },
    },

    // Contains all other neccessary functions

    functions: {
        plusMinus: function() {
            display.textContent = parseFloat(display.textContent) * -1;
        },
        allClear: function() {
            display.textContent = 0;
            firstOperand = 0;
            secondOperand = 0;
            operator = "";
        },
        operation: function(operator) {
            if (display.textContent != 0){
            firstOperand = parseFloat(display.textContent);
            display.textContent = ""
            tempOperator = operator;
        };
        },
        displayInput: function(number) {
            if (number == ".") {
                display.textContent += "."
            } else {
                (display.textContent === "0")? display.textContent = number : display.textContent += number;
        }
        },
        displayMaxLength: function() {
            if (display.textContent.length > 10) {
                console.log(display.textContent)
                return display.textContent = "ERROR"
            };
        },
    }
};

//trying to get keyboard input to work. check javascript 30 drums on youtube.
// window.addEventListener("keydown", function(e) {
//     const btn = document.querySelector(`button[data-key="${e.keyCode}]`);
//     console.log(`${e.keyCode}`)
//     console.log(btn.textContent);
//     if(!btn) return;
// });


