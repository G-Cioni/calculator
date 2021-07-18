function btnInput(number) {
    console.log(display.textContent);
    if (number == ".") {
        display.textContent += "."
    } else {
        (display.textContent === "0")? display.textContent = number : display.textContent += number;
}
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
        
        operate: function(operator, a, b) {
            if (operator == "+") {
                return this.addition(a,b);
            } else if (operator == "-") {
                return this.subtraction(a,b);
            } else if (operator == "*") {
                return this.multiplication(a,b);
            } else if (operator == "/") {
                return this.division(a,b);
            } else {
                return "ERROR";
            }
        },
    }

};

let display = document.querySelector("#display")

let allClearBtn = document.querySelector("#allClear")

let plusMinusBtn = document.querySelector("#plusMinus")

let divisionBtn = document.querySelector("#division")

let multiplicationBtn = document.querySelector("#multiplication")

let subtractionBtn = document.querySelector("#subtraction")

let additionBtn = document.querySelector("#addition")

let equals = document.querySelector("#equals")

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


allClearBtn.addEventListener("click", () => display.textContent = 0)

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





