calculator = {
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