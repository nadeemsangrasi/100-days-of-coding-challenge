// Question 133: Write a JavaScript object and convert it into a JSON string.
// Question 134: Take a JSON string and parse it into a JavaScript object.
// Question 135: Explain how you can format a JSON string with proper indentation for readability.

//////////////////// Question 133 //////////////
const person1 = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};
const jsonString1 = JSON.stringify(person1);
console.log(jsonString1);

//////////////////// Question 134 //////////////
const jsonString2 = '{"name":"Alice","age":30,"city":"Wonderland"}';
const person2 = JSON.parse(jsonString2);
console.log(person2);

//////////////////// Question 135 //////////////
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};
const jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
