// pre symbol
const shape = {
  radious: 10,
};

function libraryOne(obj) {
  obj.specialBehavior = "Library One!";
}

function libraryTwo(obj) {
  obj.specialBehavior = function () {
    return "Libary Two!";
  };
}

libraryOne(shape);
console.log(shape);
libraryTwo(shape);

console.log(shape); // the libraryTwo specialBehavior function has overwitten the libraryOne specialBehavior property

// with synbols
console.log(Symbol());
console.log(typeof Symbol()); // symbol

const mySymbol = Symbol("this is the descrion of a new Symbol Value");
console.log(mySymbol);

console.log("\n\nwith Symbol");
const shapeNew = {
  radious: 10,
};

function libraryOneNew(obj) {
  obj[Symbol("specialBehavior")] = "Library One!";
}

function libraryTwoNew(obj) {
  obj[Symbol("specialBehavior")] = function () {
    return "Libary Two!";
  };
}

libraryOneNew(shapeNew);
console.log("After libraryOneNew", shapeNew);

libraryTwoNew(shapeNew);
console.log("After libraryTwoNew", shapeNew);

for (let item in shapeNew) console.log(item); // only 'radious'

console.log(
  "getOwnPropertySymbols for shapeNew",
  Object.getOwnPropertySymbols(shapeNew)
);

console.log("\n\naccess and use symbol");
const sym = Object.getOwnPropertySymbols(shapeNew).filter(
  (s) => String(s) === "Symbol(specialBehavior)"
);

console.log("sym @0", shapeNew[sym[0]]);
console.log("sym @1", shapeNew[sym[1]]);

console.log("\n\nsymbols are unique", Symbol("pizza") === Symbol("pizza")); // false
