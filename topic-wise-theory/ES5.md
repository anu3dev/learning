# ES5 Features

###### ES5 Syntactical Changes
- Property access [ ] on strings
> charAt() method returns the character at a specified index (position) in a string.
- Trailing commas in array and object literals
> ES5 allows trailing commas in object and array definitions:
- Multiline string literals
> ES5 allows string literals over multiple lines if escaped with a backslash:
- Reserved words as property names
> ES5 allows reserved words as property names:
````
var obj = {name: "John", new: "yes"}
````
###### "use strict"
>  is just a string expression, defines that the JavaScript code should be executed in "strict mode".

###### String.trim()
> removes whitespace from both sides of a string.
###### Array.isArray()
> checks whether an object is an array.
````
function myFunction() {
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  let x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}
````
###### Array.forEach()
> calls a function once for each array element.
````
let txt = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}
````
###### Array.map()
````
let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
````
###### Array.filter()
````
let numbers = [45, 4, 9, 16, 25];
let over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
````
###### Array.reduce()
````
let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
````
###### Array.reduceRight()
````
let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
````
###### Array.every()
> checks if all values are over 18:
````
let numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
````
###### Array.some()
> checks if some values are over 18:
````
let numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}
````
###### Array.indexOf()
> Search an array for an element value and returns its position.
````
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.indexOf("Apple");
````
###### Array.lastIndexOf()
> Array.lastIndexOf() is the same as Array.indexOf(), but searches from the end of the array.
````
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.lastIndexOf("Apple");
````
###### JSON.parse()
> A common use of JSON is to receive data from a web server.
Imagine you received this text string from a web server:
````
'{"name":"John", "age":30, "city":"New York"}'
````
The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:
````
let obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
````
###### JSON.stringify()
> A common use of JSON is to send data to a web server.
When sending data to a web server, the data has to be a string.
Imagine we have this object in JavaScript:
````
let obj = {name:"John", age:30, city:"New York"};
````
> Use the JavaScript function JSON.stringify() to convert it into a string.
````
let myJSON = JSON.stringify(obj);
````
> The result will be a string following the JSON notation.
myJSON is now a string, and ready to be sent to a server:
````
let obj = {name:"John", age:30, city:"New York"};
let myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
````
###### Date.now()
> Date.now() returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).
Date.now() returns the same as getTime() performed on a Date object.
````
let timInMSs = Date.now();
````
###### Property Getters and Setters
> This example creates a getter for a property called fullName:
````
// Create an object:
let person = {
  firstName: "John",
  lastName : "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};
// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;
````
This example creates a setter and a getter for the language property:
````
let person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  }
};
// Set an object property using a setter:
person.lang = "en";
// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
````
###### New Object Property Methods

> Adding or changing an object property
Object.defineProperty(object, property, descriptor)

> Adding or changing many object properties
Object.defineProperties(object, descriptors)

> Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

> Returns all properties as an array
Object.getOwnPropertyNames(object)

> Returns enumerable properties as an array
Object.keys(object)

> Accessing the prototype
Object.getPrototypeOf(object)

> Prevents adding properties to an object
Object.preventExtensions(object)

> Returns true if properties can be added to an object
Object.isExtensible(object)

> Prevents changes of object properties (not values)
Object.seal(object)

> Returns true if object is sealed
Object.isSealed(object)

> Prevents any changes to an object
Object.freeze(object)

> Returns true if object is frozen
Object.isFrozen(object)

