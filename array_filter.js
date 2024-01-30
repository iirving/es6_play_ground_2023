const products = [
  { name: "banana", type: "fruit", quantity: 0, price: 1 },
  { name: "cucumber", type: "vegetable", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 9 },
  { name: "orange", type: "fruit", quantity: 0, price: 5 },
  { name: "apple", type: "fruit", quantity: 5, price: 7 },
  { name: "tomato", type: "vegetable", quantity: 2, price: 3 },
];

const productsInStock = products.filter((item) => {
  return item.quantity > 0;
});
console.log("productsInStock: ", productsInStock);

const productsNotInStock = products.filter((item) => {
  return item.quantity <= 0;
});

console.log("productsNotInStock: ", productsNotInStock);

const fruitProducts = products.filter((item) => {
  return item.type === "fruit";
});
const vegProducts = products.filter((item) => {
  return item.type === "vegetable";
});
console.log("fruitProducts: ", fruitProducts);
console.log("vegProducts: ", vegProducts);
