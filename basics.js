"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 4;
const number2 = 12;
const printResult = true;
const resultPrase = "Result is: ";
add(number1, number2, printResult, resultPrase);
