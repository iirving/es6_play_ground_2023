const score = [90, 19, 23, 89, 12, 62];

function msgScoreGT50(score) {
  return score > 50 ? `higher than 50` : `Less than or equal to 50`;
}

for (const item of score) {
  console.log(`Item : ${item}`, msgScoreGT50(item));
  // item = item + 10;
}

console.log("\nUsing forEach");

score.forEach((item, index) => {
  console.log(`Index key ${index} : ${item}`, msgScoreGT50(item));
  // score[index] = item + 10;
});

console.log("score: ", score);

console.log("\nUsing map");
const scorewords = score.map((item, index) => {
  return msgScoreGT50(item);
});
console.log("scorewords: ", scorewords);

const numbers = [9.23, 10.23, 5.04, 89.5, 100.0, 0.0, 0.1, 0.2, 0.9, 0.4];
const integer = numbers.map((item) => {
  return Math.floor(item);
});
console.log("integer: ", integer);
