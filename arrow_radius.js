var radius = 5;
const shape = {
  radius: 10,
  diameter: function () {
    return this.radius * 2;
  },
  diameter2: () => {
    radius * 2;
  },
};
console.log(shape.diameter());
console.log(shape.diameter2());

console.log(radius);
