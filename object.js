// object assign method
// Object.assign(target, ...sources)

// example 1
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log("pre assign target: ", target);
console.log("pre source: ", source);
const returnedTarget = Object.assign(target, source);
console.log("target: ", target, "note that b is overwritten by source");
console.log("source: ", source);
console.log("returnedTarget: ", returnedTarget);

// example 2
const name = { firstName: "John", lastName: "Doe" };
const auth = { email: "john.doe@companyName", pasword: "123" };

console.log("pre assign name", name);
const data = Object.assign(name, auth);

console.log("data from assign", data);
console.log("post assign name", name);

//example 3
const name2 = { firstName: "John", lastName: "Doe" };
const auth2 = { email: "john.doe@companyName", pasword: "123" };

console.log("pre assign name 2", name2);
// given that the target name2 gets changed, just use name2 for presesatance?
Object.assign(name2, auth2);
console.log("post assign name", name2);

// example 4
// dont change the target object
// use spread
const name4 = { firstName: "John", lastName: "Doe" };
const auth4 = { email: "john.doe@companyName", pasword: "123" };
console.log("pre assign name 4", name4);
console.log("pre assign auth 4", auth4);

const data4 = { ...name4, ...auth4 };
console.log("post assign name 4", name4);
console.log("post assign data 4", data4);

// example 5
// works when there is overlap
const target5 = { a: 1, b: 2 };
const source5 = { b: 4, c: 5 };
console.log("pre assign target 5: ", target5);
console.log("pre source 5: ", source5);

const returnedTarget5 = { ...target5, ...source5 };
console.log("post assign target 5: ", target5);
console.log("post assign source 5: ", source5);
console.log("returnedTarget5: ", returnedTarget5);
