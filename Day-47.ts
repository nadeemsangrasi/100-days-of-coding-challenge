// Question 139: List three reserved words in JavaScript and create a valid use case for each.
// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
function fetchSomething() {}
//////////////////// Question 139 //////////////
let count = 5;
if (count > 0) {
  console.log("Count is greater than 0.");
}
// Reserved word: return - used to exit a function and return a value from that function
function add(a, b) {
  return a + b;
}

//////////////////// Question 140 //////////////
// let if = 5; // This line would cause a syntax error
console.log(
  "Using a reserved word as a variable name causes a syntax error in JavaScript."
);

//////////////////// Question 141 //////////////
async function fetchData() {
  const data = await fetchSomething();
  console.log(data);
}
console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
