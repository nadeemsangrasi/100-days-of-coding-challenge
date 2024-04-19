// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.

//////////////////// Question 136 //////////////
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}, i value:, i`);
}

//////////////////// Question 137 //////////////
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
}

//////////////////// Question 138 //////////////
console.log("Before breakpoint");
console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");
