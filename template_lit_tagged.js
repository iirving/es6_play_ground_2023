// an example of tagged template literals

const greet = (greeting, name, age) => {
  console.log("greeting: ", greeting.raw);
  console.log("name: ", name);
  console.log("age: ", age);
};

const name = "John";
const age = 23;

greet`My Name is ${name} and I am ${age} years old.`;
