// User is a function constructor
function User(firstName, lastNAme, age) {
  this.firstName = firstName;
  this.lastNAme = lastNAme;
  this.age = age;

  this.getFullName = function () {
    return this.firstName + " " + this.lastNAme;
  };
}

const user1 = new User("John", "Doe", 34);
console.log(user1.getFullName());

class User2 {
  constructor(firstName, lastNAme, age) {
    this.firstName = firstName;
    this.lastNAme = lastNAme;
    this.age = age;
  }

  getFullName() {
    return `Full name is ${this.firstName} ${this.lastNAme}`;
  }
}

const user2 = new User2("John", "Doe", 34);
console.log(user2.getFullName());

class Admin extends User2 {
  constructor(firstName, lastNAme, age, role) {
    super(firstName, lastNAme, age);
    this.role = "admin";
  }
}

const superUser = new Admin("John", "Doe", 34);
console.log(superUser); // Admin {firstName: "John", lastNAme: "Doe", age: 34, role: "admin"}
