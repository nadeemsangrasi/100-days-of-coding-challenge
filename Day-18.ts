// 🚀 *Day 18 Challenge: Start Coding!* 🚀
// Question 52 Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
// Question 53 Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// Question 54 Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.


//////////////////// Question 52 //////////////

let myPhone = {
    make: "Samsung",
    model: "Galaxy A32",
    specifications: {
        storage: "128GB",
        screenSize: "6.1 inches",
    }
};

console.log(myPhone);

//////////////////// Question 53 //////////////

let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", ],
    tools: ["Git", "Webpack", ]
};


let { languages, frameworks, tools } = developerSkills;

console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);


//////////////////// Question 54 //////////////

function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    
    if(Object.values(dynamicObject).includes(value)){
        return `${value} already exist in object`
    }
    else{
        dynamicObject[key] = value;
        return dynamicObject;
    }
}

let userPreference = createObjectWithDynamicKey("theme", "dark");
let userPreference1 = createObjectWithDynamicKey("theme", "dark");
let userPreference3 = createObjectWithDynamicKey("theme", "dark");

console.log(userPreference);
console.log(userPreference1);
console.log(userPreference3);