// simple sum function
export default function sum(a, b) {
  return a + b;
}
console.log("sum(1,2)", sum(1, 2));

// use rest operator to pass in an array of numbers
export function sumAll(a, b, ...values) {
  console.log(values);
  let sum = a + b;
  values.forEach((value) => (sum += value));
  return sum;
}
console.log("sumAll(1,2,3,4,5)", sumAll(1, 2, 3, 4, 5));

function f(a, b, ...theArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("theArgs", theArgs);
  // …
}
console.log("f", f(1, 2, 3, 4, 5));

export { f };

/// sperad operator

const user = { name: "John", age: 30 };
const cart = {
  items: [
    { name: "Apple", price: 1.5 },
    { name: "Orange", price: 2.5 },
    { name: "Banana", price: 3.5 },
  ],
};

const deliveryAddress = {
  street: "123 Main St",
  city: "London",
  country: "UK",
};

const order = {
  user,
  cart,
  deliveryAddress,
};

console.log("non spread order", order);

user.name = "Bill";
console.log("non spread order", order);
// note the user name in the order object has changed

const order2 = {
  ...user,
  ...cart,
  ...deliveryAddress,
};
console.log("spread order2", order2);

user.name = "Steve";
console.log("spread order2", order2);
// note the user name in the order object has NOT changed
// so no need to worry about the original object being changed aka mutated aka side effect!
