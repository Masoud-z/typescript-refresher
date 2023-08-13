var Access;
(function (Access) {
    Access[Access["ADMIN"] = 0] = "ADMIN";
    Access[Access["AUTHOR"] = 1] = "AUTHOR";
    Access[Access["READ_ONLY"] = 2] = "READ_ONLY";
})(Access || (Access = {}));
var person = {
    name: "Masoud",
    age: 27,
    hubbies: ["Sports", "Movies"],
    role: [2, "Front-end Developer"],
    access: Access.ADMIN,
};
var favoriteActivities;
favoriteActivities = [
    "Playing Video Games",
    "Hanging out with friends",
    "Netflix and chill",
];
console.log(person.name);
for (var _i = 0, _a = person.hubbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
