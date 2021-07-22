// Define global variables

let firstOperand = 0

let secondOperand = 0

let tempOperator = 0

let result = 0

let display = document.querySelector("#display")

// Give each button a function

allClearBtn.addEventListener("click", () => calculator.functions.allClear())

equalsBtn.addEventListener("click", () => calculator.operations.equals(tempOperator, firstOperand))

divisionBtn.addEventListener("click", () => calculator.functions.operation("/"))

multiplicationBtn.addEventListener("click", () => calculator.functions.operation("*"))

additionBtn.addEventListener("click", () => calculator.functions.operation("+"))

subtractionBtn.addEventListener("click", () => calculator.functions.operation("-"))

plusMinusBtn.addEventListener("click", () => calculator.functions.plusMinus())

deleteBtn.addEventListener("click", () => calculator.functions.delete(display.textContent))

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
            if (b == 0) {
                return "ERROR"
            } else {
                return a / b;
            }
        },
        equals: function(tempOperator,firstOperand) {
            if (display.textContent != result) {
                secondOperand = parseFloat(display.textContent);
            }
            return calculator.operations.operate(tempOperator,firstOperand,secondOperand)
        },      
        operate: function(tempOperator, a, b) {
            if (tempOperator == "+") {
                result = this.addition(a,b);
                display.textContent = result;
                calculator.functions.displayMaxLength();
            } else if (tempOperator == "-") {
                result = this.subtraction(a,b);
                display.textContent = result;
                calculator.functions.displayMaxLength();
            } else if (tempOperator == "*") {
                result = this.multiplication(a,b);
                display.textContent = result;
                console.log(result);
                calculator.functions.displayMaxLength();
            } else if (tempOperator == "/") {
                result = this.division(a,b);
                if (typeof result == "number") {
                    display.textContent = result;
                } else {
                    return display.textContent = "ERROR"
                }
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
            result = 0;
        },
        operation: function(operator) {
            if (firstOperand != 0) {
                calculator.operations.equals(tempOperator, firstOperand);
            };
            if (display.textContent != 0){
            firstOperand = parseFloat(display.textContent);
            (display.textContent != result) ? display.textContent = "" : display.textContent != result
            tempOperator = operator;
            };
        },
        displayInput: function(number) {
            if (display.textContent == result) {
                display.textContent = "";
            }
            if (number == ".") {
                if (!display.textContent.includes(".")) {
                    display.textContent += ".";
                };
            } else {
                (display.textContent === "0")? display.textContent = number : display.textContent += number;
            }
        },
        displayMaxLength: function() {

            display.textContent = Math.round(display.textContent*100000) / 100000

            switch (true) {
                case (display.textContent.length < 11):
                    display.style.fontSize = "3.8rem";
                    break;
                case (display.textContent.length < 12):
                    display.style.fontSize = "3.5rem";
                    break;
                case (display.textContent.length < 14):
                    display.style.fontSize = "3.3rem";
                    break;
                case (display.textContent.length < 15):
                    display.style.fontSize = "3rem";
                    break;
                case (display.textContent.length > 16):
                    result = "ERROR"
                    display.textContent = result;
                    console.log(display.textContent);
                    console.log(result);
                    break;

            }


        },
        delete: function(displayValue) {
            display.textContent = displayValue.slice(0, display.textContent.length - 1);
        },
    }
};

// NumPad compatibility

window.addEventListener("keydown", function(e) {
    let num = e.keyCode;
    switch (true) {
        case (num == 111):
            calculator.functions.operation("/")
            break;
        case (num == 106):
            calculator.functions.operation("*")
            break;
        case (num == 109):
            calculator.functions.operation("-")
            break;
        case (num == 107):
            calculator.functions.operation("+")
            break;
        case (num == 13):
            calculator.operations.equals(tempOperator, firstOperand)
            break;
        case (num == 27):
            calculator.functions.allClear()
            break;
        case (num == 8):
            calculator.functions.delete(display.textContent)
            break;
        default:
            const button = document.querySelector(`button[data-key="${num}"]`);
            calculator.functions.displayInput(button.textContent)
            }
});


