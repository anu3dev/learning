# ES6 Features
> If you use var outside of a function, it belongs to the global scope.
If you use var inside of a function, it belongs to that function.
If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.
var has a function scope, not a block scope.
###### The let keyword
> let has a block scope.
let is the block scoped version of var, and is limited to the block (or expression) where it is defined.
If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.
````
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
````
###### The const keyword
> const is a variable that once it has been created, its value can never change.
const has a block scope.
````
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
````
###### JavaScript Arrow Functions
> Arrow functions allows a short syntax for writing function expressions.
You don't need the function keyword, the return keyword, and the curly brackets.
Arrow functions do not have their own this. They are not well suited for defining object methods.
Arrow functions are not hoisted. They must be defined before they are used.
Using const is safer than using var, because a function expression is always a constant value.
You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them.
with arrow functions there are no binding of this.
With a regular function, this represents the object that called the function.
With an arrow function, this represents the Header object no matter who called the function.
````
hello = function() {
  return "Hello World!";
}
````
````
hello = () => {
  return "Hello World!";
}
````
````
hello = () => "Hello World!";
````
> Differences & Limitations:
Does not have its own bindings to this or super, and should not be used as methods.
Does not have arguments, or new.target keywords.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
Can not be used as constructors.
Can not use yield, within its body.
````
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
console.log(materials.map(material => material.length));
expected output: Array [8, 6, 7, 9]
````
###### JavaScript For/of
The JavaScript for/of statement loops through the values of an iterable objects.
for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
````
let cars = ["BMW", "Volvo", "Mini"];
let x;
for (x of cars) {
  document.write(x + "<br >");
}
// Expected Output : BMW, Volvo, Mini
````
> Note: for/in, loops through the properties of an iterable object.
###### JavaScript Classes
> JavaScript Classes are templates for JavaScript Objects.
Use the keyword class to create a class.
Always add a method named constructor():
````
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
````
> A JavaScript class is not an object.
It is a template for JavaScript objects.
When you have a class, you can use the class to create objects:
````
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
````
###### JavaScript Promises
> A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
"Producing Code" can take some time and "Consuming Code" must wait for the result.
````
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});
````
###### JavaScript Symbol
> A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
It represents a unique "hidden" identifier that no other code can accidentally access.
For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.
Using Symbol() to create a unique identifiers, solves this problem:
````
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
let id = Symbol('id');
person[id] = 140353;
// Now Person[id] = 140352
// but person.id is still undefined
````
> Symbols are always unique.
If you create two symbols with the same description they will have different values.
````
Symbol("id") == Symbol("id") // false
````
###### Default Parameters
> ES6 allows function parameters to have default values.
````
Example
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
````
###### Function Rest Parameter
> The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
````
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
````
###### Array.find()
> The find() method returns the value of the first array element that passes a test function.
````
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
````
> Note that the function takes 3 arguments:
- The item value
- The item index
- The array itself
###### Array.findIndex()
> The findIndex() method returns the index of the first array element that passes a test function.
````
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
````
###### New Math Methods
> ES6 added the following methods to the Math object:
- Math.trunc()
````
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns 4
````
- Math.sign()
````
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1
````
- Math.cbrt()
````
Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5
````
- Math.log2()
````
Math.log2(2);    // returns 1
````
- Math.log10()
````
Math.log10(10);    // returns 1
````
###### New Number Properties
> ES6 added the following properties to the Number object:
- EPSILON i.e. var x = Number.EPSILON; // 2.220446049250313e-16
- MIN_SAFE_INTEGER i.e. var x = Number.MIN_SAFE_INTEGER; // -9007199254740991
- MAX_SAFE_INTEGER i.e. var x = Number.MAX_SAFE_INTEGER; // 9007199254740991
###### New Number Methods
> ES6 added 2 new methods to the Number object:
- Number.isInteger()
````
Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false
````
- Number.isSafeInteger()
````
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false
````
> Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.
###### New Global Methods
> ES6 added 2 new global number methods:
- isFinite()
````
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true
````
- isNaN()
````
isNaN("Hello");       // returns true
````
###### JavaScript Modules
