const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

const { firstName, age, lastName } = person;
console.log("firstName", firstName, "lastName", lastName, "age", age);

const firstName2 = person.firstName;
const lastName2 = person.lastName;
const age2 = person.age;
console.log("firstName2", firstName2, "lastName2", lastName2, "age2", age2);

const { firstName: fn, lastName: ln, age: a } = person;
console.log("fn", fn, "ln", ln, "a", a);

// Desctructuring an array
const furits = ["apple", "orange", "banana", "pear"];
const [first, second, third, fourth] = furits;
console.log(
  "first:",
  first,
  "second:",
  second,
  "third:",
  third,
  "fourth:",
  fourth
);
const [first2, , third2] = furits;
console.log("first2:", first2, "third2:", third2);

const [first3, ...rest] = furits;
console.log("first3:", first3, "rest:", rest);

// min max destructuring

let [min, max] = [3, 9];
if (min > max) {
  [min, max] = [max, min];
}
console.log("min", min, "max", max);

[min, max] = [13, 9];
if (min > max) {
  [min, max] = [max, min];
}
console.log("min", min, "max", max);

const team = [
  { name: "John" },
  { name: "Jane" },
  { name: "Bill" },
  { name: "Mary" },
  { name: "Bob" },
];

const [captain, assistant, ...players] = team;
console.log("captain", captain, "assistant", assistant, "players", players);

const happening = {
  type: "birthday",
  date: "2020-01-01",
  location: "London",
  guests: 100,
  invited: 50,
  confirmed: 30,
  declined: 20,
};

const { type, createAt = new Date(), ratting } = happening;
console.log("type", type, "createAt", createAt);
console.log("ratting", ratting, "ratting is undefined");

async function fetchDogs({ breed }) {
  console.log("breed", breed);
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/`);
    const data = await response.json();
    console.log("data", data);
    return data.message;
  } catch (error) {
    return console.error(error);
  }
}

const dog = {
  name: "Fido",
  age: 5,
  breed: "hound",
};

const dogList = fetchDogs(dog);

const fetchedDogList = fetchDogs({ breed: "hound" });
// console.log("dog", fetchedDogList);
