// Question 55 Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// Question 56  Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// Question 57  Find the Average Grade: Given a list of grades, calculate the average grade.


//////////////////// Question 55 //////////////
let numbers:number[] = [1, 2, 3, 4, 5];
let doubleNumbers:number[] = []
for(let number of numbers){
    doubleNumbers.push(number*2)
}
console.log(doubleNumbers); 

//////////////////// Question 56 //////////////
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];
let words:string[]=[]
mixedArray.forEach((word):void=>{
    if(typeof word==="string"){
        words.push(word)
    }
})
console.log(words); 

//////////////////// Question 57 //////////////
let grades = [88, 94, 72, 99, 53, 77];
let sum=0;
for(let i=0;i<grades.length;i++){
    sum+=grades[i]
}
console.log(sum/grades.length);
