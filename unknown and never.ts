let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Masoud";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Some Error has happened", 500);
