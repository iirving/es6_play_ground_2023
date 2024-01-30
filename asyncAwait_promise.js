// https://codesandbox.io/p/devbox/wsf8t4?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrtr2b5t00063b6gjaw7cnyw%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrtr2b5s00023b6gfqkp5t9q%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrtr2b5s00033b6gcghqaws9%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrtr2b5s00053b6g8joigjim%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrtr2b5s00023b6gfqkp5t9q%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrtr2b5s00013b6ggdyitogc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Findex.html%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clrtr2b5s00023b6gfqkp5t9q%2522%252C%2522activeTabId%2522%253A%2522clrtr2b5s00013b6ggdyitogc%2522%257D%252C%2522clrtr2b5s00053b6g8joigjim%2522%253A%257B%2522id%2522%253A%2522clrtr2b5s00053b6g8joigjim%2522%252C%2522activeTabId%2522%253A%2522clrtr8sw1008b3b6gn4x4z0wx%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A1234%252C%2522id%2522%253A%2522clrtr8sw1008b3b6gn4x4z0wx%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clrtr2b5s00033b6gcghqaws9%2522%253A%257B%2522id%2522%253A%2522clrtr2b5s00033b6gcghqaws9%2522%252C%2522activeTabId%2522%253A%2522clrtr9pn800ep3b6gldp93c6s%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clrtr8s1400673b6g6ho7y6e1%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522id%2522%253A%2522clrtr9pn800ep3b6gldp93c6s%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clrtr9pr30084e7gq3pku2bqh%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D

function myPromise() {
  return new Promise((resolve) => resolve("First, I am a promise!"));
}

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("Second, I am a function!");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("Second, I am a function!");
}

//firstFunction();

secondFunction();

async function thirdFunction() {
  const res = await myPromise().Promise.resolve();
  console.log(res);
  console.log("Second, I am a function!");
}

function fourthFunction() {
  return new Promise((resolve) => resolve("fourth, I resolved!"));
}
async function fithFunction() {
  return "fith, I resolved!";
}

fourthFunction().then((res) => console.log(res));
fithFunction().then((res) => console.log(res));

const getNum = (num) => Promise.resolve(num);
const getNum2 = async (num) => num;

getNum(5).then((res) => console.log(res));
getNum2(5).then((res) => console.log(res));

async function sixthFunction() {
  const data = await Promise.reject("sixth, I rejected!");
  console.log(data);
}
// gets a rejected promise error : UnhandledPromiseRejection, and the program stops.
// sixthFunction();

// to catch the error, use .catch() on the function call.
sixthFunction().catch((err) => console.log(err));

async function fetchUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    return await data;
  } catch (err) {
    console.log(err);
  }
}

// fetchUser(1).then((user) => {
//   console.log("fetchUser(1):");
//   console.log(user);
// });

// bad url  with a try/catch block
async function fetchUserBadExample(id) {
  try {
    const response = await fetch(`http://www.randon_web.com/user/${id}`);
    return await response.json();
  } catch (err) {
    console.log("inside the catch block", err);
    return await null;
  }
}

console.log("fetchUserBadExample(1):");
const user = fetchUserBadExample(1).then((user) =>
  console.log("  inside the .then block", user)
);

// // bad url without a try/catch block
// async function fetchUserBadExample2(id) {
//   const response = await fetch(`http://www.randon_web.com/user/${id}`);
//   return await response.json();
// }

// //  fetchUserBadExample2(1); with a .then and .catch
// fetchUserBadExample2(1)
//   .then((user) => {
//     console.log("fetchUserBadExample2(1):");
//     console.log(user);
//   })
//   .catch((err) => console.log("fetchUserBadExample2(1) .catch:", err));
