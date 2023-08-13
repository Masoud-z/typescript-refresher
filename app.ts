function combine(input1: number | string, input2: number | string) {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedNumbers = combine(20, 30);
console.log(combinedNumbers);

const combinedNames = combine("Masoud", "Ghazal");
console.log(combinedNames);
