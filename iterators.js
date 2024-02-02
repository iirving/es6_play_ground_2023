const aPerson = {
  name: "John",
  age: 32,
  superPowers: ["Super Strength", "X-Ray Vision"],
};

// for (items of aPerson) {
//   console.log(items);
// }
//Error: aPerson is not iterable

// an array is iterable
letters = ["a", "b", "c", "d", "e"];
for (let letter of letters) {
  console.log(letter);
}

// make person iterable
const person = {
  name: "John",
  age: 32,
  superPowers: ["Super Strength", "X-Ray Vision"],
  *[Symbol.iterator]() {
    for (let key in this) {
      yield { [key]: this[key] };
    }
  },
};

for (let item of person) {
  console.log(item);
}
