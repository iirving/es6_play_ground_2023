const newMap = new Map([
  [1, "one"],
  [2, "another"],
  [3, "three"],
]);
console.log("newMap: ", newMap);
console.log("newMap with key of 2 have value:", newMap.get(2));

newMap.set(4, "four");
console.log("newMap: ", newMap);

newMap.forEach((value, key) => {
  console.log("newMap.forEach: ", key, value);
});

// shoping cart
const cart = new Map();

const shoe = { id: 0, name: "show", price: 150 };
const boot = { id: 2, name: "boot", price: 250 };

console.log("before cart: ", cart); //
function addToCart(item) {
  if (cart.has(item.id)) {
    const cartItem = cart.get(item.id);
    cartItem.quantity++;
  } else {
    cart.set(item.id, { ...item, quantity: 1 });
  }
}

function deleteFromCart(item) {
  if (cart.has(item.id)) {
    const cartItem = cart.get(item.id);
    cartItem.quantity--;
    if (cartItem.quantity === 0) {
      cart.delete(item.id);
    }
  }
}

addToCart(shoe);
addToCart(shoe);
addToCart(boot);
addToCart(shoe);
console.log("cart: ", cart);

for (let item of cart.values()) {
  console.log("item: ", item);
}

console.log("cart.size: ", cart.size);
console.log("Shoes in cart: ", cart.get(shoe.id).quantity);
console.log("Boots in cart: ", cart.get(boot.id).quantity);

console.log('delete a shoe"');
deleteFromCart(shoe);
console.log("cart: ", cart);
console.log("cart.size: ", cart.size);
console.log("Shoes in cart: ", cart.get(shoe.id).quantity);

console.log("delete a boot ");
deleteFromCart(boot);
console.log("cart: ", cart);
console.log("cart.size: ", cart.size);

// SETS
const set = new Set([1, 9, 9, 2, 3, 4, 5, 5, 5, 5, 5, 5]);
console.log("set: ", set); // set(6) { 1, 9, 2, 3, 4, 5 }

const memberCountries = [
  "USA",
  "USA",
  "USA",
  "USA",
  "USA",
  "USA",
  "USA",
  "DE",
  "UK",
  "CAN",
  "DE",
  "UK",
  "CAN",
  "NL",
];
const uniqueCountriesSet = new Set(memberCountries);
console.log("uniqueCountriesSet: ", uniqueCountriesSet); // Set(5) { 'USA', 'DE', 'UK', 'CAN', 'NL' }
uniqueCountriesSet.add("IT");
console.log("uniqueCountriesSet: ", uniqueCountriesSet); // Set(6) { 'USA', 'DE', 'UK', 'CAN', 'NL', 'IT' }
const uniqueCountriesArray = [...uniqueCountriesSet];
console.log("uniqueCountriesArray: ", uniqueCountriesArray); // [ 'USA', 'DE', 'UK', 'CAN', 'NL', "IT" ]

uniqueCountriesSet.forEach((country) => {
  console.log("country: ", country);
});
uniqueCountriesSet.clear();
console.log("uniqueCountriesSet: ", uniqueCountriesSet); // Set(0) {}

const natAmerican = "American";
const natBritish = "British";
const natCanadian = "Canadian";
const team = [
  { name: "Joe", age: 20, nationality: natAmerican, points: 100 },
  { name: "Will Smith", age: 44, nationality: natAmerican, points: 54 },
  { name: "Donald Trump", age: 77, nationality: natAmerican, points: 23 },
  { name: "Boris Johson", age: 77, nationality: natAmerican, points: 12 },
  { name: "Charles Darwin", age: 999, nationality: natBritish, points: 1 },
  {
    name: "Richard Attenborough",
    age: 99,
    nationality: natBritish,
    points: 90,
  },
  {
    name: "Justin Trudeau",
    nationality: natCanadian,
  },
];

const teamNationalities = team.map((member) => member.nationality);
console.log("teamNationalities: ", teamNationalities);
const uniqueTeamNationalities = [...new Set(teamNationalities)];
console.log("uniqueTeamNationalities: ", uniqueTeamNationalities);
console.log("number of unique Nationalities: ", uniqueTeamNationalities.length);

// union
// as of Jan 2024 the union method is not available in the Set object for node
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union

// Ypu could use union and intersection with core-js polyfills
// https://github.com/zloirock/core-js npm install
// import Set from 'core-js-pure/actual/set';

// console.log("\n\nunion");
// const odd = new Set([1, 3, 5, 7, 9]);
// const even = new Set([2, 4, 6, 8, 10]);
// const prime = new Set([2, 3, 5, 7, 11]);

// const union = new Set([...odd, ...even, ...prime]);
// console.log("union: ", union);

// console.log(odd.union(even).union(prime));
// console.log("odd", odd, "even", even, "prime", prime);

// intersection
// as of Jan 2024 the intersection method is not available in the Set object for node
// console.log("\n\nintersection");
// const odd = new Set([1, 3, 5, 7, 9]);
// const prime = new Set([2, 3, 5, 7, 11]);

// console.log("odd", odd, "prime", prime);
// console.log("odd.intersection(prime): ", odd.intersection(prime));
// console.log("odd", odd, "prime", prime);
