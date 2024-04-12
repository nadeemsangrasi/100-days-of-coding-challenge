// Question 106: Determine if a given year is a leap year using comparison operators.
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

//////////////////// Question 106 //////////////
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));

//////////////////// Question 107 //////////////
function isDivisibleByTwoAndThree(number: number): boolean {
  return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));

//////////////////// Question 108 //////////////
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello"));
console.log(areStringsEqualIgnoreCase("world", "Word"));
