"use strict";
function add(n1, n2) {
    return n1 + n2;
}
const printResult = (num) => {
    console.log(num);
};
console.log(printResult(add(23, 21)));
// let combinedValue: Function;
let combinedValues;
combinedValues = add;
console.log(combinedValues(4, 3));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(12, 21, printResult);
//# sourceMappingURL=functions.js.map