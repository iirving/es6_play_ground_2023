console.log(greeting()); // Hello, World! because its hoisted
// console.log(name); // ReferenceError: Cannot access 'name' before initialization
console.log(name2); // undefined
// console.log(greeting2()); // ReferenceError: Cannot access 'greeting2' before initialization
// console.log(greeting3()); // TypeError: greeting3 is not a function
function greeting() {
  return "Hello, World!";
}

const name = "John";
var name2 = "John";
console.log(name2); // John

const greeting2 = () => {
  return "Hello, World!";
};
console.log(greeting2()); // Hello, World!

var greeting3 = () => {
  return "Hello, World!";
};
console.log(greeting3()); // Hello, World!
