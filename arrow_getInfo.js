function getIfno(name, age) {
  return `Name: ${name} > Age: ${age};`;
}

console.log(getIfno("John", 23));

const getIfno2 = (name, age) => {
  return `Name: ${name} > Age: ${age};`;
};
console.log(getIfno2("John", 23));

const getIfno3 = (name, age) => `Name: ${name} > Age: ${age};`;
console.log(getIfno3("John", 23));

const getInfo4 = (name) => `Name: ${name};`;
console.log(getInfo4("John"));
