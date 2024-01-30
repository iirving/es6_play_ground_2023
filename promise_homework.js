let cookedFood = () => {
  return new Promise((resolve, reject) => {
    let food = true;
    if (food) {
      resolve("I cooked Food!");
    } else {
      reject("I didnt cook Food!");
    }
  });
};

let walkDog = () => {
  return new Promise((resolve, reject) => {
    let dog = true;
    if (dog) {
      resolve("I walked the dog!");
    } else {
      reject("I didnt walk the dog!");
    }
  });
};

let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    let room = true;
    if (room) {
      resolve("I cleaned the room!");
    } else {
      reject("I didnt clean the room!");
    }
  });
};

// run type one
cleanRoom()
  .then(() => walkDog())
  .then(() => cookedFood())
  .then(() => console.log("run type one  > ", "I did all the chores!"))
  .catch((err) => console.log(err));

// run type two
console.log("run type two");
Promise.all([cleanRoom(), walkDog(), cookedFood()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
