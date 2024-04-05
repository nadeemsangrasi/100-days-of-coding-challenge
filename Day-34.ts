// Question 100 Use the JavaScript Math object to find the square root of 144.
// Question 101 Generate a random integer between 1 and 10.
// Question 102 Calculate and log the absolute difference between the number -5 and 5.

//////////////////// Question 100 //////////////
const squareRoot: number = Math.sqrt(144);
console.log(squareRoot);

//////////////////// Question 102 //////////////
function getRandomInt(): number {
  return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomInt());

//////////////////// Question 103 //////////////
const difference: number = Math.abs(-5 - 5);
console.log(difference);
