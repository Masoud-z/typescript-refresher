"use strict";
let userInput;
let userName;
userInput = 5;
userName = "Masoud";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Some Error has happened", 500);
//# sourceMappingURL=unknown%20and%20never.js.map