// Question 124 Create a function inside an object that returns the object's own name property using the this keyword.
// Question 125 Modify a method in an object to use the this keyword to access another property in the same object.
// Question 126 Explain how the this keyword changes its value when used inside a nested function within a method.

const person = {
  name: "Alice",
  getName: function () {
    return this.name;
  },
};

console.log(person.getName());

const rectangle = {
  length: 4,
  width: 5,
  calculateArea: function () {
    return this.length * this.width;
  },
};

console.log(rectangle.calculateArea());

const myObject = {
  property: "Value",
  outerMethod: function () {
    console.log(this.property);

    const innerMethod = () => {
      console.log(this.property);
    };

    innerMethod();
  },
};

myObject.outerMethod();
