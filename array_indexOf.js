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

let member = team.find((member) => member.name === "Boris Johson");
console.log("member: ", member);

const memberIndex = team.indexOf(member);
console.log("memberIndex: ", memberIndex);

const firstHalfOfTeam = team.slice(0, memberIndex);
console.log("firstHalfOfTeam: ", firstHalfOfTeam);

const secondHalfOfTeam = team.slice(memberIndex);
console.log("secondHalfOfTeam: ", secondHalfOfTeam);

let member2 = { ...team[1] };
console.log("member2: ", member2);
console.log(team[1] === member2);
// retuen -1 because its a new object
let findmember2 = team.indexOf(member2);
console.log("findmember 2: ", findmember2);

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1
