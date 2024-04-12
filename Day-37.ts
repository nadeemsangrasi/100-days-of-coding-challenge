// Question 109 Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Question 110 Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
// Question 111 Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

//////////////////// Question 109 //////////////
var currentTime: Date = new Date();
if (currentTime.getHours() < 12) {
  console.log("Good Morning");
}

//////////////////// Question 110 //////////////
function assignGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(assignGrade(85));

//////////////////// Question 111 //////////////
function categorizeAge(age: number): string {
  if (age < 13) {
    return "child";
  } else if (age <= 19) {
    return "teenager";
  } else {
    return "adult";
  }
}
console.log(categorizeAge(12));
