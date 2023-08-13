function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedNumbers = combine(20, 30, "as-number");
console.log(combinedNumbers);
var combinedStringNumbers = combine("20", "30", "as-number");
console.log(combinedStringNumbers);
var combinedNames = combine("Masoud", "Ghazal", "as-text");
console.log(combinedNames);
