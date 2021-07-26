### Instructions

**input**: string

**output**: false if input contains no duplicate letters else
the total count of the letter with the most
duplicates.

For Example:

```js
  "abc" => false
  "aba" => 2
  "ababcb" => 3
```

### for of

- The for...of statement creates a loop iterating over iterable objects

```
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
```

### in operator

- The in operator returns true if the specified property is in the specified object or its prototype chain.

```
const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);

console.log(car.make);
```

### Array initilization

- Array literal => var abc = [];
- Array Constructor => var abc = new Array();
- Accessing Array Elements

```
var stringArray = new Array("one", "two", "three", "four");

stringArray[0]; // returns "one"
```

```
var stringArray = new Array("one", "two", "three", "four");

for (var i = 0; i < stringArray.length ; i++)
{
    stringArray[i];
}
```

### Object initilization

- Object literal => var abc = {};
- Object Constructor => var abc = new Object();
- Accessing Object Elements

```
var person = {
                firstName: "James",
                lastName: "Bond",
                age: 25,
                getFullName: function () {
                    return this.firstName + ' ' + this.lastName
                }
            };

person.firstName; // returns James

person["firstName"];// returns James

person.getFullName();
```

### Hoisting

- JavaScript compiler moves variables and function declaration to the top and this is called hoisting.
- Only variable declarations move to the top, not the initialization.
- Functions definition moves first before variables.
- JavaScript compiler does not move function expression.
