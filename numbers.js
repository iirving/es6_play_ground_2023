// old isNan

console.log(isNaN(5)); // false
console.log(isNaN("Ian")); // true WTF
console.log(isNaN(NaN)); // true

console.log(Number.isNaN(5)); //false
console.log(Number.isNaN("Ian")); //false
console.log(Number.isNaN(NaN)); //true
// all false
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");

// isFinite
console.log(isFinite(0)); //true
console.log(isFinite("0")); //convert to number zero, true

console.log(Number.isFinite(0)); //true
console.log(Number.isFinite("0")); // does not convert from string, false

// Math truc ? better perfamance that paresInt ?
console.log("\n\n trunc");
console.log(Math.trunc(12.23456)); // 12
console.log(Math.trunc(-12.23456)); //-12
console.log(Math.trunc(12 / 89)); // 0
console.log(Math.trunc("12.23456")); // 12
console.log(Math.trunc({})); // Nan

console.log("\n\n parseInt");
console.log(parseInt(12.23456)); // 12
console.log(parseInt(-12.23456)); //-12
console.log(parseInt(12 / 89)); // 0
console.log(parseInt("12.23456")); // 12
console.log(parseInt({})); // Nan
