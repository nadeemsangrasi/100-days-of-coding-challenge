
// Question 94 Use the .map() method to create a new array that contains the length of each word from an array of words.
// Question 95 Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Question 96 Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

//////////////////// Question 94 //////////////
const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
const lengths: number[] = words.map(word => word.length);
console.log(lengths);


//////////////////// Question 95 //////////////
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}
const numbers1: number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers1));

//////////////////// Question 96 //////////////
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers2: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers2));