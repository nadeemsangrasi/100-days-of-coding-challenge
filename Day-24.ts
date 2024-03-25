// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
// Question 71 Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Question 72 Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of 

//////////////////// Question 70 //////////////
function printNumbersWithLet() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbersWithLet()

//////////////////// Question 71 //////////////
let age = 18;
age = 26; 
console.log(age); // Shows 26

//////////////////// Question 72 //////////////
const name1 = "Alice";
try {
    name1 = "Bob"; 
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}


