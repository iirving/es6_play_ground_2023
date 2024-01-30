const natAmerican = "American";
const natBritish = "British";
const team = [
  { name: "Joe", age: 20, nationality: natAmerican },
  { name: "Will Smith", age: 44, nationality: natAmerican },
  { name: "Donald Trump", age: 77, nationality: natAmerican },
  { name: "Boris Johson", age: 77, nationality: natAmerican },
  { name: "Charles Darwin", age: 999, nationality: natBritish },
  {
    name: "Richard Attenborough",
    age: 99,
    nationality: natBritish,
  },
];

function findTeamMemberByName(name) {
  return team.find((member) => member.name === name); // return member.name === name
}

// console.log("findTeamMemberByName: ", findTeamMemberByName("Joe"));
console.assert(
  findTeamMemberByName("Joe") !== "Joe",
  "should return the Joe name string"
);
console.assert(
  findTeamMemberByName("Joe") === team[0],
  "should return Joe object"
);
console.assert(
  findTeamMemberByName("Will Smith") === team[1],
  "should return Will Smith"
);
console.assert(
  findTeamMemberByName("Donald Trump") === team[2],
  "should return Donald Trump object"
);
console.assert(
  findTeamMemberByName("Boris Johson") === team[3],
  "should return Boris Johson object"
);

function findFirstAmericanMemberByName(name) {
  // console.log("findFirstAmericanMemberByName, name", name);
  return team
    .filter((member) => {
      return member.nationality === "American";
    })
    .find((member) => {
      return member.name === name;
    });
}

function findFirstAmericanMemberByName2(name) {
  // console.log("findFirstAmericanMemberByName2, name", name);
  return team
    .filter((member) => member.nationality === "American")
    .find((member) => member.name === name);
}

console.assert(
  findFirstAmericanMemberByName("Joe") ===
    findFirstAmericanMemberByName2("Joe"),
  "should return Joe object"
);

//const testName = "Donald Trump";
let nameVlaue = "Donald Trump";
let resultValue = findFirstAmericanMemberByName2(nameVlaue);
let expectedValue = team[2];
console.assert(
  resultValue === expectedValue,
  `findFirstAmericanMemberByName for ${nameVlaue} should return ${expectedValue} instead of ${resultValue} `
);

function findFirstNationalityMemberByName(nationality, name) {
  // console.log(
  //   "findFirstNationalityMemberByName, name",
  //   name,
  //   "nationality",
  //   nationality
  // );
  return team
    .filter((member) => {
      // console.log("member: ", member.nationality, nationality);
      return member.nationality === nationality;
    })
    .find((member) => {
      // console.log("member: ", member.name, name);
      return member.name === name;
    });
}

const nameB = "Boris Johson";
let resultValueB = findFirstNationalityMemberByName("American", nameB);
let expectedValueB = team[3]; // boris is born in New York
console.assert(
  resultValueB === expectedValueB,
  `findFirstNationalityMemberByName for ${"American"} ${nameB},`,
  ` should return ${JSON.stringify(expectedValueB)} instead of `,
  `${JSON.stringify(resultValueB)}  `
);

let resultValueBB = findFirstNationalityMemberByName("British", nameB);
let expectedValueBB = undefined; // boris is born in New York so American so undefined
console.assert(
  resultValueBB === expectedValueBB,
  `findFirstNationalityMemberByName for ${"British"} ${nameB}, should return $`,
  expectedValueBB,
  ` instead of `,
  resultValueBB
);

const nameC = "Will Smith";
// console.log(
//   `First American called ${nameC}: `,
//   findFirstNationalityMemberByName("American", nameC)
// );
let resultValueCC = findFirstNationalityMemberByName("American", nameC);
let expectedValueCC = team[1];
// console.log("resultValueCC: ", resultValueCC);
// console.log("expectedValueCC: ", expectedValueCC);
console.assert(
  resultValueCC === expectedValueCC,
  findFirstNationalityMemberByName("American", nameC) === expectedValueCC,
  `findFirstNationalityMemberByName for ${"American"} ${nameC}, should return `,
  expectedValueCC,
  `instead of `,
  resultValueCC
);

const isBritish = (el) => el.nationality === "British";
function findFirstAmericanMemberByName(name) {
  const isAmerican = (el) => el.nationality === "American";
  return team.filter(isAmerican).find((member) => member.name === name);
}
// console.log(
//   `First American called ${nameC}: `,
//   findFirstAmericanMemberByName(nameC)
// );

// Alternative solution using .find() only
// maybe better performance (?) on large arrays
function findFirstNationalityMemberByNameAlt(nationality, name) {
  return team.find(
    (member) => member.name === name && member.nationality === nationality
  );
}

let nameOfMember = "Donald Trump";
let testNationality = "American";
let result = findFirstNationalityMemberByNameAlt(testNationality, nameOfMember);
console.assert(
  result === team[2],
  `should return for ${nameOfMember} and ${testNationality} instead of ${result.name}`,
  result
);

console.assert(
  findFirstNationalityMemberByNameAlt("American", "Donald Trump") === team[2],
  "should return Donald Trump's record."
);

result = findFirstNationalityMemberByNameAlt(natAmerican, "Boris Johson");
expectedValue = team[3];
// console.log("result: ", result);
// console.log("expectedValue: ", expectedValue);
console.assert(
  findFirstNationalityMemberByNameAlt(natBritish, "Boris Johson") !==
    expectedValue,
  "should NOT return Boris Johson's record beuase he is american born.",
  `expected: ${JSON.stringify(expectedValue)}`,
  `result ${JSON.stringify(
    findFirstNationalityMemberByNameAlt(natBritish, "Boris Johson")
  )}`
);
console.assert(
  result === expectedValue,
  "should return Boris Johson's record. ",
  `expected: ${JSON.stringify(expectedValue)}`,
  `result ${JSON.stringify(result)}`
);
