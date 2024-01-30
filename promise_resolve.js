const myPromise = new Promise((result) => result("I am a promise!"));
const name = "Ian";

Promise.resolve(myPromise).then((res) => console.log(res));
Promise.resolve(name).then((res) => console.log(res));
Promise.resolve("I have completed the task!").then((res) => console.log(res));
