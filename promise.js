const promiseToWalkDog = new Promise((resolve, reject) => {
  let hasWalkedTheDog = false;

  if (hasWalkedTheDog) {
    resolve("I walked the dog!");
  } else {
    reject("I didn't walk the dog.");
  }
});

const preableToWalkDog = "Did you walk the dog? ";
promiseToWalkDog
  .then((fromResolve) => {
    console.log(`${preableToWalkDog} ${fromResolve}`);
  })
  .catch((fromReject) => {
    console.log(`${preableToWalkDog} ${fromReject}`);
  });
