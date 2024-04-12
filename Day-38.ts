// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

//////////////////// Question 112 //////////////
var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);

//////////////////// Question 113 //////////////
var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);

function logCapitalOfCanada(countries): void {
  if (countries.has("Canada")) {
    console.log("The capital of Canada is ".concat(countries.get("Canada")));
  } else {
    console.log("Canada is not in the Map.");
  }
}
logCapitalOfCanada(countries);

//////////////////// Question 114 //////////////
var students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.forEach((name: string, id: number): void => {
  console.log("Student ID: ".concat(id.toString(), ", Name: ").concat(name));
});
