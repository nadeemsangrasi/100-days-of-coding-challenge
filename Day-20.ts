// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.



function averageScore(...scores: number[]): number {
    let total : number = 0
    for(let score of scores){
        total+=score
    }
    return total/scores.length
}

console.log(averageScore(80, 90, 100, 70)); 


function makeAdder(valueToAdd: number): (number) => number {
    return function(number: number): number {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10)); 



let userProfile = function(name:string,age:number) {
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
};

console.log(userProfile("nadeem",16).displayInfo())