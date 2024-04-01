// Question 91 Create an array of your three favorite fruits and add a new fruit to the end of the array.
// Question 92 Write a function to remove the last element from an array and return the removed element.
// Question 93 Find the index of "Banana" in an array of fruits and replace it with "Mango".


//////////////////// Question 91 //////////////
let favoriteFruits: string[] = ["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango"); 
console.log(favoriteFruits);

//////////////////// Question 92 //////////////
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop(); 
}
const fruits1: string[] = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits1));

//////////////////// Question 93 //////////////
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana");
    if (index !== -1) fruits[index] = "Mango"; 
}
const fruits2: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits2);
