function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 4;
const number2 = 12;
const printResult = true;
const resultPrase = "Result is: ";

add(number1, number2, printResult, resultPrase);
