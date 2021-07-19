function btnInput(number) {
    if (number == ".") {
        display.textContent += "."
    } else {
        (display.textContent === "0")? display.textContent = number : display.textContent += number;
}
};

function btnOperator(operator) {
    if (display.textContent != 0){
    tempDisplay1 = parseFloat(display.textContent);
    display.textContent = ""
    tempOperator = operator;
}
}


function clear() {
    display.textContent = 0;
    tempDisplay1 = 0;
    tempDisplay2 = 0;
    operator = "";
}

function plusMinus() {
    display.textContent = parseFloat(display.textContent) * -1;
};

calculator = {
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

        equals: function(tempOperator,tempDisplay1) {
            tempDisplay2 = parseFloat(display.textContent);
            console.log(tempDisplay1)
            console.log(tempDisplay2)
            console.log(tempOperator)

            return calculator.operations.operate(tempOperator,tempDisplay1,tempDisplay2)
        
        },
        
        operate: function(tempOperator, a, b) {
            if (tempOperator == "+") {
                console.log("hello")
                display.textContent = this.addition(a,b);
                return this.addition(a,b);
            } else if (tempOperator == "-") {
                display.textContent = this.subtraction(a,b)
                return this.subtraction(a,b);
            } else if (tempOperator == "*") {
                display.textContent = this.multiplication(a,b)
                return this.multiplication(a,b);
            } else if (tempOperator == "/") {
                display.textContent = this.division(a,b)
                return this.division(a,b);
            } else {
                return "ERROR";
            }
        },
    }

};

var tempDisplay1 = 0

var tempDisplay2 = 0

var tempOperator = 0

var display = document.querySelector("#display")

let allClearBtn = document.querySelector("#allClear")

let plusMinusBtn = document.querySelector("#plusMinus")

let divisionBtn = document.querySelector("#division")

let multiplicationBtn = document.querySelector("#multiplication")

let subtractionBtn = document.querySelector("#subtraction")

let additionBtn = document.querySelector("#addition")

let equalsBtn = document.querySelector("#equals")

let point = document.querySelector("#point")

let nine = document.querySelector("#nine")

let eight = document.querySelector("#eight")

let seven = document.querySelector("#seven")

let six = document.querySelector("#six")

let five = document.querySelector("#five")

let four = document.querySelector("#four")

let three = document.querySelector("#three")

let two = document.querySelector("#two")

let one = document.querySelector("#one")


allClearBtn.addEventListener("click", () => clear())

equalsBtn.addEventListener("click", () => calculator.operations.equals(tempOperator, tempDisplay1))

divisionBtn.addEventListener("click", () => btnOperator("/"))

multiplicationBtn.addEventListener("click", () => btnOperator("*"))

additionBtn.addEventListener("click", () => btnOperator("+"))

subtractionBtn.addEventListener("click", () => btnOperator("-"))

plusMinusBtn.addEventListener("click", () => plusMinus())

zero.addEventListener("click", () => btnInput(0))

one.addEventListener("click", () => btnInput(1))

two.addEventListener("click", () => btnInput(2))

three.addEventListener("click", () => btnInput(3))

four.addEventListener("click", () => btnInput(4))

five.addEventListener("click", () => btnInput(5))

six.addEventListener("click", () => btnInput(6))

seven.addEventListener("click", () => btnInput(7))

eight.addEventListener("click", () => btnInput(8))

nine.addEventListener("click", () => btnInput(9))

point.addEventListener("click", () => btnInput("."))



//trying to get keyboard input to work. check javascript 30 drums on youtube.
// window.addEventListener("keydown", function(e) {
//     const btn = document.querySelector(`button[data-key="${e.keyCode}]`);
//     console.log(`${e.keyCode}`)
//     console.log(btn.textContent);
//     if(!btn) return;
// });


