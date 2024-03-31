// Question 88 Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
// Question 89 Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// Question 90 Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

//////////////////// Question 88 //////////////
function roundToNearestInteger(num: number): number {
    return Math.round(num);
}
console.log(roundToNearestInteger(4.7))
console.log(roundToNearestInteger(4.4)); 

//////////////////// Question 89 //////////////
function convertStringToNumber(str: string): number {
    return parseFloat(str);
}
console.log(convertStringToNumber("123.45")); 
console.log(convertStringToNumber("98")); 

//////////////////// Question 90 //////////////
function isValueNaN(value: any): boolean {
    return isNaN(value); 
}
console.log(isValueNaN("hello"));
console.log(isValueNaN(123)); 