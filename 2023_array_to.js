// using toSpliced(), toSorted(), and toReversed(),
// we can splice, sort, and reverse an array without mutating the source array
// sort(), splice(), and reverse(),  mutate the original array

const numbers = [3, 4, 1, 5, 2];
console.log(numbers);

const splicedNumbers = numbers.toSpliced(1, 1);
console.log("original array", numbers, "\nspliced array", splicedNumbers);
const sortedNumbers = numbers.toSorted();
console.log("original array", numbers, "\nsorted array", sortedNumbers);
const reversedNumbers = numbers.toReversed();
console.log("original array", numbers, "\nreversed array", reversedNumbers);
