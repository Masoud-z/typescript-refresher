const person: {
  name: string;
  age: number;
  hubbies: string[];
  role: [number, string];
} = {
  name: "Masoud",
  age: 27,
  hubbies: ["Sports", "Movies"],
  role: [2, "Front-end Developer"],
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
