const natAmerican = "American";
const natBritish = "British";
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
];

// try a for loop
let points = 0;
for (const member in team) {
  // console.log("member: ", member);
  points += team[member].points;
}
console.log("points with for loop: ", points);

// try a  reducde method on the array , take 1

const pointsArray = team.map((member) => member.points);
console.log("pointsArray: ", pointsArray);
const totalPoints = pointsArray.reduce((total, points) => total + points, 0);
console.log("totalPoints: ", totalPoints);

// try a  reducde method on the array , take 2
function getSumofArray(array) {
  return array.reduce((total, points) => total + points, 0);
}
console.log("getSumofArray: ", getSumofArray(pointsArray));
console.log("getSumofArray []: ", getSumofArray([]));

// try a  reducde method on the array , take 3
let sum = team
  .map((member) => member.points)
  .reduce((total, points) => total + points, 0);
console.log("sum: ", sum);

// try a  reducde method on the subarry array
const billonaries = [
  { name: "Jeff Bezos", compaines: ["Amazon", "Blue Origin"] },
  { name: "Bill Gates", compaines: ["Microsoft"] },
  { name: "Elon Musk", compaines: ["Tesla", "SpaceX", "The Boring Company"] },
  { name: "Mark Zuckerberg", compaines: ["Facebook", "WhatsApp", "Instagram"] },
  { name: "Jack Dorsey", compaines: ["Twitter", "Square"] },
];

const companiesArray = billonaries.map((member) => member.compaines);
console.log("companiesArray: ", companiesArray);

const allCompanies = billonaries.reduce((acc, cur) => {
  return acc.concat(cur.compaines);
}, []);
console.log("allCompanies: ", allCompanies);
