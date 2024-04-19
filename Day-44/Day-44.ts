// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
// Question 132: Discuss the difference between default and named exports in JavaScript modules.

//////////////////// Question 130 //////////////
import { add } from "../Day-44/mathFunction";
console.log(add(2, 3));

//////////////////// Question 131 //////////////
import { Person } from "../Day-44/Person";

const alice = new Person("Alice");
alice.greet();

//////////////////// Question 132 //////////////
import { utilOne, utilTwo } from "../Day-44/utils";
import Calculator from "../Day-44/Calculator";
