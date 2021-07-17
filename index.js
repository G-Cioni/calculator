function addition(a,b) {
    return a + b;
};

function subtraction(a,b) {
    return a - b;
};

function multiplication(a,b) {
    return a * b;
};

function division(a,b) {
    return a / b;
};

function operate(operator, a, b) {
    if (operator == "+") {
        return addition(a,b);
    } else if (operator == "-") {
        return subtraction(a,b);
    } else if (operator == "*") {
        return multiplication(a,b);
    } else if (operator == "/") {
        return division(a,b);
    } else {
        return "ERROR";
    }
};