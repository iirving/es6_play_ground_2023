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

console.log("berfore cart: ", cart); //
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
