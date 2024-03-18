// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.


//////////////////// Question 49 //////////////

function printHobbies(...rest:string[]):void{
for(let hobby of rest){
    console.log("Enjoy "+hobby )
}
}
printHobbies("playing","reading","sports")

//////////////////// Question 50 //////////////

let myIdeas:string=`My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`

console.log(myIdeas)

//////////////////// Question 51 //////////////

function calculateRectangleArea(length:number, width:number):number {
    return length * width;
  }
const calculateRectangleAreaArrowFunc = (length:number, width:number):number => length * width;
  
