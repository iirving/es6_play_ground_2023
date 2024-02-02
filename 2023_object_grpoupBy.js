// Object.groupBy  > Node 21.0.0 (Released 2023-10-17)

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// group inventory by type
const result1 = Object.groupBy(inventory, ({ type }) => type);
console.log(result1);

// {
//   vegetables: [ { name: 'asparagus', type: 'vegetables', quantity: 5 } ],
//   fruit: [
//     { name: 'bananas', type: 'fruit', quantity: 0 },
//     { name: 'cherries', type: 'fruit', quantity: 5 }
//   ],
//   meat: [
//     { name: 'goat', type: 'meat', quantity: 23 },
//     { name: 'fish', type: 'meat', quantity: 22 }
//   ]
// }

function quantityNeedingRestock({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, quantityNeedingRestock);
console.log(result2);
// restock: [
//   { name: 'asparagus', type: 'vegetables', quantity: 5 },
//   { name: 'bananas', type: 'fruit', quantity: 0 },
//   { name: 'cherries', type: 'fruit', quantity: 5 }
// ],
// ok: [
//   { name: 'goat', type: 'meat', quantity: 23 },
//   { name: 'fish', type: 'meat', quantity: 22 }
// ]
