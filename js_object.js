const specialProperty = "nationality";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  isAdmin: true,
  [specialProperty]: "Scottish",
  getFullName: function () {
    // console.log("this", this.firstName, this.lastName);
    return `${this.firstName} ${this.lastName}`;
  },
  getFullName2() {
    // console.log("this", this.firstName, this.lastName);
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherSpecialProperty = "gender";
person[anotherSpecialProperty] = "male";

// person[specialProperty] = "English";

console.log("person", person);
const personname = person.getFullName();
console.log("personname", personname);
console.log("get full name", person.getFullName());
console.log("get full name2", person.getFullName2());

function makeObject(key, value) {
  return {
    [key]: value,
  };
}

console.log(makeObject("name", "John"));
console.log(makeObject("age", 23));
console.log(makeObject("isAdmin", true));

const firstNmae = "Bill";
const lastName = "Gates";

const person2 = {
  firstNmae,
  lastName,
  [specialProperty]: "American",
  getFullName() {
    return `${this.firstNmae} ${this.lastName}`;
  },
};

console.log("person2", person2);
console.log("get full name", person2.getFullName());
