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

// assign doesnt work well for nested objects are pass by referance not by value
const orignalName = "Ian";
const orignalCountry = "CA";
const person = {
  name: orignalName,
  info: {
    country: orignalCountry,
  },
};

const newPerson = Object.assign({}, person);
console.log("\n\n", "person", person);
console.log("newPerson", newPerson);

console.log("\n\n", "try modifying name and country for newPerson");
const newName = "Andrew";
const newCountry = "USA";
newPerson.name = newName;
newPerson.info.country = newCountry;
console.log("person", person);
console.log("newPerson", newPerson);
console.assert(
  person.name === orignalName,
  `if pass by value we expect ${orignalName}, not`,
  person.name
);
console.assert(
  person.info.country === orignalCountry,
  `if pass by value we expect ${orignalCountry}, not`,
  person.info.country
);
console.assert(
  person.name !== newPerson.name,
  "the names should Not be the same"
);
console.assert(
  newPerson.info.country !== newPerson.info.country,
  "the countries should not be be the same"
);

// Javascript has added the structured clone api which creates a deep clone
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
console.log("\n\n", "try new structured clone api  ");
const person2 = {
  name: orignalName,
  info: {
    country: orignalCountry,
  },
};
const newPersonDeepClone1 = Object.assign({}, structuredClone(person2));
console.log("person2", person2);
console.log("newPersonDeepClone1", newPersonDeepClone1);

newPersonDeepClone1.name = newName;
newPersonDeepClone1.info.country = newCountry;

console.info("after change:");
console.log("person2", person2);
console.log("newPersonDeepClone1", newPersonDeepClone1);
console.assert(
  person2.name === orignalName,
  `if pass by value we expect ${orignalName}, not`,
  person2.name
);
console.assert(
  person2.info.country === orignalCountry,
  `if pass by value we expect ${orignalCountry}, not`,
  person2.info.country
);
console.assert(
  person2.name !== newPersonDeepClone1.name,
  "the names should Not be the same"
);
console.assert(
  person2.info.country !== newPersonDeepClone1.info.country,
  "the countries should not be be the same"
);

console.info("\n\nKeys and values ");
const deliveryInfo = {
  street: "3434 Young St",
  postalCode: "M5B 2H1",
  city: "Toronto",
  province: "Ontario",
};
console.log("keys: ", Object.keys(deliveryInfo));
console.log("values: ", Object.values(deliveryInfo));

// test wheather incules provice key and return it or Alberta as default
function getprovince(testObject) {
  console.log("getprovince testObject", testObject);
  console.log("keys", Object.keys(testObject));
  const inculesProvince = Object.keys(testObject).includes("province");
  console.log("getprovince inculesProvince", inculesProvince);
  const province = inculesProvince ? deliveryInfo.province : "Alberta";
  console.log("getprovince province", province);
  return province;
}

console.log("\n\n\n");

const prov1 = getprovince(structuredClone(deliveryInfo));
console.log("getprovince for deliveryInfo", getprovince(deliveryInfo));
console.assert(prov1 === "Ontario", "expecting Ontario as province");

const deliveryInfoWithNOProvince = {
  street: "3434 Young St",
  postalCode: "M5B 2H1",
  city: "Toronto",
};
console.log("\n\n\n");
const prov2 = getprovince(deliveryInfoWithNOProvince);
console.log("prov2", prov2);

console.assert(
  prov2 === "Alberta",
  " prov2 dont have a prov so expecting Albert as province"
);

const deliveryInfo3 = {
  street: "3434 Young St",
  postalCode: "M5B 2H1",
  city: "Toronto",
  province: "Ontario",
  person: {
    name: "Ian",
  },
};

console.log(getprovince({ ...deliveryInfo3 }));

const deliveryInfo4 = {
  street: "3434 Young St",
  personsAtLocation: 32,
  postalCode: "M5B 2H1",
  city: "Hamilton",
  province: "Ontario",
  person: {
    name: "Tom",
  },
};
console.log(Object.keys(deliveryInfo4).toString());
console.log(
  "compare keys",
  Object.keys(deliveryInfo3).toString() ===
    Object.keys(deliveryInfo4).toString()
);

//entries
console.log("\n\n\nEntries");
console.log(Object.entries(deliveryInfo));

const deliveryInfoMap = new Map(Object.entries(deliveryInfo));
console.log("deliveryInfoMap : ", deliveryInfoMap);

// display object
Object.entries(deliveryInfo).forEach((field) => {
  const [key, value] = field;
  console.log(`${key.padEnd(10)} ${value}`);
});

function displayObjectFlat(objectToDisplay, debug = false) {
  debug ? console.log("\n\n\ndisplayObjectFlat debug: ", debug) : "";
  debug ? console.log("displayObjectFlat for ", objectToDisplay) : "";
  debug ? console.log("displayObjectFlat", typeof objectToDisplay) : "";

  Object.entries(objectToDisplay).forEach((field) => {
    debug ? console.log("field", field) : "";
    debug ? console.log("typeof field[1]", typeof field[1]) : "";

    if (Array.isArray(field) && typeof field[1] != "object") {
      const [key, value] = field;
      console.log(`${key.padEnd(20)} ${value}`);
    } else {
      debug ? console.log("ELSE field", field) : "";
      debug ? console.log("typeof field[1]", typeof field[1]) : "";
      displayObjectFlat(field[1], debug);
    }
  });
}
console.log("\n\n\n", "displayObjectFlat");
displayObjectFlat(deliveryInfo);

console.log("\n\n\n", "displayObjectFlat");
displayObjectFlat(deliveryInfo4, false);
