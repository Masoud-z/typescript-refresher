function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
console.log(printResult(add(23, 21)));
// let combinedValue: Function;
var combinedValues;
combinedValues = add;
console.log(combinedValues(4, 3));
