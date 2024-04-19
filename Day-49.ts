// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Question 146: Show an example of a callback function used to filter an array of numbers.
// Question 147: Explain how to handle errors in a callback pattern.

//////////////////// Question 145 //////////////
function executeCallback(
  callback: (arg1: number, arg2: number) => void,
  arg1: number,
  arg2: number
): void {
  callback(arg1, arg2);
}
const add = (a: number, b: number) => {
  console.log(a + b);
};
executeCallback(add, 5, 3);

//////////////////// Question 146 //////////////
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers: number[] = numbers.filter((number) => number > 5);
console.log(filteredNumbers);

//////////////////// Question 148 //////////////
function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  const error = new Error("Failed to fetch data");
  const data = "Some data";
  if (Math.random() > 0.5) {
    callback(null, data);
  } else {
    callback(error);
  }
}
fetchData((error, data) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(data);
  }
});
