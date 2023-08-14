"use strict";
var Access;
(function (Access) {
    Access[Access["ADMIN"] = 0] = "ADMIN";
    Access[Access["AUTHOR"] = 1] = "AUTHOR";
    Access[Access["READ_ONLY"] = 2] = "READ_ONLY";
})(Access || (Access = {}));
const person = {
    name: "Masoud",
    age: 27,
    hubbies: ["Sports", "Movies"],
    role: [2, "Front-end Developer"],
    access: Access.ADMIN,
};
let favoriteActivities;
favoriteActivities = [
    "Playing Video Games",
    "Hanging out with friends",
    "Netflix and chill",
];
console.log(person.name);
for (const hobby of person.hubbies) {
    console.log(hobby);
}
//# sourceMappingURL=obj-arr-enum.js.map