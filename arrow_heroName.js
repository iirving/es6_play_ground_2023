const hero = {
  name: "Arrow",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};

// console.log(hero.greet()); // Arrow
hero.greet(); // Arrow
