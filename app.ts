const person: { name: string; age: number; hubbies: string[] } = {
  name: "Masoud",
  age: 27,
  hubbies: ["Sports", "Movies"],
};

let favoriteActivities: string[];
favoriteActivities = [
  "Playing Video Games",
  "Hanging out with friends",
  "Netflix and chill",
];

console.log(person.name);

for (const hobby of person.hubbies) {
  console.log(hobby);
}
