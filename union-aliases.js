"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedNumbers = combine(20, 30, "as-number");
console.log(combinedNumbers);
const combinedStringNumbers = combine("20", "30", "as-number");
console.log(combinedStringNumbers);
const combinedNames = combine("Masoud", "Ghazal", "as-text");
console.log(combinedNames);
