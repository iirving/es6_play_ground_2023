const warning = " Watch out!";

console.log("repeat 3 times: ", warning.repeat(3));

const url =
  "https://www.falsepositives.com/2023/07/04/will-apples-vision-pro-end-the-vr-winter/";

console.log("testing against url=", url);
console.log("startWith https//: ", url.startsWith("https://")); // true
console.log("startWith http: ", url.startsWith("http")); // true
console.log("startWith http:// ", url.startsWith("http://")); // false

console.log(
  "startWith falsepositves at the 12 postion: ",
  url.startsWith("falsepositives", 12)
); // true

console.log("includes falsepositives: ", url.includes("falsepositives")); // true

const testString = "WILL-APPLE"; //will - apple;
console.log(
  `does not includes ${testString}, because uppercase : `,
  url.includes(testString)
); // false
console.log(
  `does includes lowercase version of ${testString}, : `,
  url.includes(testString.toLowerCase())
); // true

console.log("endsWith .com: ", url.endsWith(".com")); // true
console.log("endsWith '/' ", url.endsWith("/")); // true

const greeting = "Hello world!";
console.log("greeting: ", greeting, "length: ", greeting.length);

const greeting21 = greeting.padStart(21);
console.log("greeting21: ", greeting21, "length: ", greeting21.length);

const greeting21X = greeting.padStart(21, "X");
console.log("greeting21X: ", greeting21X, "length: ", greeting21X.length);

const greeting8 = greeting.padStart(8);
console.log("greeting8: ", greeting8, "length: ", greeting8.length);

const phoneNumber = "123456789";
console.log("phoneNumber: ", phoneNumber, "length: ", phoneNumber.length);
const lastTwoDigits = phoneNumber.slice(-2);
console.log("lastTwoDigits: ", lastTwoDigits);
const hiddenPhoneNumber = lastTwoDigits.padStart(phoneNumber.length, "*");
console.log("hiddenPhoneNumber: ", hiddenPhoneNumber);

const membersAndPoints = [
  { name: "John", points: 200 },
  { name: "Peter", points: 300 },
  { name: "Mark", points: 400 },
  { name: "Maria", points: 350 },
  { name: "Peter", points: 50 },
];
console.log("uneven printout");
membersAndPoints.map((member) =>
  console.log(`Name: ${member.name} Points: ${member.points}`)
);
console.log("even printout");
membersAndPoints.map(({ name, points }) =>
  console.log(`Name: ${name.padEnd(10)} Points: ${points}`)
);
