// Question 76  Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
// Question 77  Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
// Question 78  Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

//////////////////// Question 76 //////////////
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addNumbers(5, 7)); 

//////////////////// Question 77 //////////////
function greetUser(name: string = "anonymous") {
    console.log(`Hello, ${name}!`);
}
greetUser("Alice"); 
greetUser(); 

//////////////////// Question 78 //////////////
function squareDeclaration(number: number): number {
    return number * number;
}
const squareExpression = function(number: number): number {
    return number * number;
};
console.log(squareDeclaration(5))
console.log(squareExpression(2))