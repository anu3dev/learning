### Instructions

- Write a method `sumEvenArgs` which returns the sum of even arguments passed to the function.

### rest operator(...)

- The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

### reducer()

- The reduce() method executes a reducer function on each element of the array, resulting in a single output value.

```
const array1 = [1,2,3,4,5];
console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));
console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue, 5));
```
