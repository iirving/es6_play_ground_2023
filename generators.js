// linear function

function getPizzaIngeadients() {
  console.log("Wheat");
  console.log("Tomato");
  console.log("Chesse");
  console.log("Basil");
}

console.log("inoke standard getPizzaIngeadients function ");
getPizzaIngeadients();

// generator fuction
console.log(" a getPizzaIngeadients2 generator function");
function* getPizzaIngeadients2() {
  yield "Wheat";
  yield "Tomato";
  yield "Chesse";
  yield "Basil";
}

const piObject = getPizzaIngeadients2();
console.log(piObject.next().value);
console.log(piObject.next().value);
console.log(piObject.next().value);
console.log(piObject.next().value);
console.log(piObject.next().value);
console.log(piObject.next().value);
console.log(piObject.next().value);

console.log("another generator");
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);
console.log(gen.next().value);
// Expected output: 10
console.log(gen.next().done);
console.log(gen.next().value);
// Expected output: 10
console.log(gen.next().done);
console.log(gen.next().value);
// Expected output: 20
console.log(gen.next().done);

const gen5 = generator(5);
let genNext = gen5.next();
console.log("value", genNext.value);

console.log("done", genNext.done);

genNext = gen5.next();
console.log(genNext);
console.log("value", genNext.value);

console.log("done", genNext.done);

genNext = gen.next();
console.log(genNext);

function* getPizzaStuff() {
  yield "wheat";
  yield "Basil";
}
const doPizza = getPizzaStuff();
console.log(doPizza.next().value);

// yielding to a genrator
console.log("\n\n yielding to a genrator\n");
function* genOne() {
  yield "!! 1: in geerator ONE !!";
  yield "!! 2: in geerator ONE !!";
  yield "!! 3: in geerator ONE !!";
}
function* genTwo() {
  yield "** 1: in generator TOW **";
  yield* genOne();
  yield "** 2: in generator TOW **";
}

const obj = genTwo();

console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

console.log("\n\n superHerosTeams\n");
const superHerosTeams = [
  {
    name: "Avengers",
    heroes: [
      {
        id: 1,
        name: "Thor",
        superPowers: ["Super Strength", "Thunder"],
      },
      {
        id: 2,
        name: "Iron Man",
        superPowers: ["Tech", "Money", "Intelligence"],
      },
      {
        id: 3,
        name: "Hulk",
        superPowers: ["Super Strength", "Invincible"],
      },
    ],
  },
  {
    name: "Justice League",
    heroes: [
      {
        id: 3,
        name: "Superman",
        superPowers: ["Super Strength", "Laser Vision"],
      },
      {
        id: 4,
        name: "Batman",
        superPowers: ["Tech", "Money"],
      },
      {
        id: 5,
        name: "Wonder Women",
        superPowers: ["Super Strength", "Lasso of Truth"],
      },
    ],
  },
];

console.log("\n\n superHerosTeams: heroes with Super Strength with forEach\n");
superHerosTeams.forEach((team) => {
  team.heroes.forEach((hero) => {
    // console.log(hero.name);
    hero.superPowers.forEach((power) => {
      if (power === "Super Strength") {
        console.log(hero.name);
      }
    });
  });
});

console.log(
  "\n\n superHerosTeams: heroes with Super Strength with generator\n"
);
function* superStrengthHeroes(teams) {
  for (let team of teams) {
    for (let hero of team.heroes) {
      for (let power of hero.superPowers) {
        if (power === "Super Strength") {
          yield hero;
        }
      }
    }
  }
}

const superStrength = superStrengthHeroes(superHerosTeams);
console.log(superStrength.next().value);
console.log(superStrength.next().value);
console.log(superStrength.next().value);
console.log(superStrength.next().value);
console.log(superStrength.next().value);
console.log(superStrength.next().value);
console.log(superStrength.next().value);

function* iteratePowers(superPowers) {
  for (let power of superPowers) {
    yield power;
  }
}
function* iterateSuperHeroes(superHeroes) {
  for (let hero of superHeroes) {
    yield* iteratePowers(hero.superPowers);
  }
}

function* iterateTeams(teams) {
  for (let team of teams) {
    yield* iterateSuperHeroes(team.heroes);
  }
}

const superPowers = iterateTeams(superHerosTeams);
let result = superPowers.next();
const forPower = "Super Strength";
while (!result.done) {
  const power = result.value;
  if (power === forPower) {
    console.log(`Found Superpower ${forPower}!`);
    break;
  } else {
    result = superPowers.next();
  }
}

function heroHasPower(superPowers, hasPower) {
  for (let power of superPowers) {
    console.log("power", power);
    if (power === hasPower) {
      return true;
    }
  }
  return false;
}
function* iterateSuperHeroesforPower(superHeroes, forPower) {
  for (let hero of superHeroes) {
    if (heroHasPower(hero.superPowers, forPower)) {
      // console.log("hero", hero.name, "has power", forPower);
      yield hero;
    }
  }
}

function* iterateTeamsForPower(teams, forPower) {
  for (let team of teams) {
    yield* iterateSuperHeroes(team.heroes, forPower);
  }
}

const powerToSearchFor = "Super Strength";
console.log(
  "\n\n superHerosTeams: heroes with Super Strength with generator\n"
);
const superPowersforPower = iterateTeams(superHerosTeams, powerToSearchFor);
let searchResult = superPowers.next();
while (!result.done) {
  // console.log(result.value);

  result = superPowers.next();
}

console.log("\n\n letterGeneratorWithStar");
function* letterGeneratorWithStar() {
  yield* ["a", "b", "c", "d"];
}

let letters = letterGeneratorWithStar();
console.log(letters.next());
console.log(letters.next());
console.log(letters.next());
console.log(letters.next());
console.log(letters.next());
console.log(letters.next());

console.log("\n\n letterGeneratorWithOutStar");
function* letterGeneratorWithOutStar() {
  yield ["a", "b", "c", "d"];
}

letters = letterGeneratorWithOutStar();
console.log(letters.next());

const lettersWithStar = letterGeneratorWithStar();
console.log("\n\n lettersWithStar spread operator");
console.log([...lettersWithStar]);
