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





