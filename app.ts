function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
}

console.log(printResult(add(23, 21)));

// let combinedValue: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(4, 3));
