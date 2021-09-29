## HTML

- semantic tag
- what is a data attribute

## CSS

- pseudo-class and element
- inline and block
- box model
- center a tag
- if we write footer => header in the body then how it will be rendered at front end?

## JavsScript

- difference between var and let?

````
console.log(a);
var a = 5;
console.log(b);  
let b = 5;
````
````
undefined, refrence error
````

- difference between settimeout and promises?

````
console.log('script start');

setTimeout(function() {
console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
console.log('promise1');
}).then(function() {
console.log('promise2');
});

console.log('script end');
````
````
script start(web api), 
script end(web api), 
promise1(micro task), 
promise2(micro task), 
setTimeout(web api)
````

- what is primitive data types in js?
- primitive data types are mutable or immutable?

```
var bar = 'baz';
console.log(bar);
bar.toUpperCase();
console.log(bar);
````
````
baz, baz
````

- what is deep copy and shallow copy?

````
const sheeps = ['🐑', '🐑', '🐑'];
const fakeSheeps = sheeps;
const cloneSheeps = [...sheeps];
console.log(sheeps === fakeSheeps);
console.log(sheeps === cloneSheeps);
````
````
true, false
````

- what is symbol in javascript?

````
let id = Symbol('name');
let id1 = Symbol('name');
console.log(id === id1);
````

- which es6 features have you used?

````
let num1 = [-1, 1, 2, 3, 6].filter((x) => x * 2);
console.log(num1);
let num2 = [-1, 1, 2, 3, 6].map((x) => x * 2);
console.log(num2);
let num3 = [-1, 1, 2, 3, 6].map((x) => x > 2);
console.log(num3);
let num4 = [-1, 1, 2, 3, 6].filter((x) => x > 2);
console.log(num4);
````
````
[ -1, 1, 2, 3, 6 ], 
[ -2, 2, 4, 6, 12 ], 
[false, false, false, true, true], 
[ 3, 6 ]
````
````
input = i am a good boy
output = yob doog a ma i
````

- what is hoisting?
- what is closure?

````
let a = [1, 2, 3];
let b = a;
b.length = 0;
console.log(a);
console.log(b);
````
````
[],[]
````
````
let a = [1, 2, 3];
let b = a;
b = [];
console.log(a);
console.log(b);
````
````
[ 1, 2, 3 ], []
````

## React

- what is virtal DOM?
- what is lifecycle methods in react?
- difference between setState and useState?
- Where will you make api call in class n fxn component?
- what is array dependency in useEffect? empty than once
- how can be handle conditional rendering in class component? true
- what is webpack?
- what is babel?
- how can we validate the props?
- what is state lifting?
- what is error boundry?
- difference between context and redux?
- what is server and client side rendering?
