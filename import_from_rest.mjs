// import sum from "./rest_and_spread.mjs";

import * as Calc from "./rest_and_spread.mjs";
import { f } from "./rest_and_spread.mjs";
import { sumAll as Another } from "./rest_and_spread.mjs";
import sum from "./rest_and_spread.mjs";

console.log("f", f(1, 2, 3, 4, 5));
console.log("before sumAll(1,2,3,4,5)", sumAll(1, 2, 3, 4, 5));

console.log("sum(1,2)", sum(1, 2));

console.log("sum(1,2)", Calc.default(1, 2));

import { sumAll } from "./rest_and_spread.mjs";

console.log("sumAll(1,2,3,4,5)", sumAll(1, 2, 3, 4, 5));

console.log("Another(1,2,3,4,5)", Another(1, 2, 3, 4, 5));
