# Template literals or Template strings or literal syntax

	Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

They were called "template strings" in prior editions of the ES2015 specification.

Syntax
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
Description
Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function.

The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here), this is called a tagged template. In that case, the tag expression (usually a function) gets called with the template literal, which you can then manipulate before outputting.

To escape a backtick in a template literal, put a backslash (\) before the backtick.

`\`` === '`' // --> true
Multi-line strings
Any newline characters inserted in the source are part of the template literal.

Using normal strings, you would have to use the following syntax in order to get multi-line strings:

console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
Using template literals, you can do the same like this:

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
Expression interpolation
In order to embed expressions within normal strings, you would use the following syntax:

let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
Now, with template literals, you are able to make use of the syntactic sugar, making substitutions like this more readable:

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
Nesting templates
In certain cases, nesting a template is the easiest (and perhaps more readable) way to have configurable strings. Within a backticked template, it is simple to allow inner backticks by using them inside a placeholder ${ } within the template.

For instance, if condition a is true, then return this templated literal.

In ES5:

let classes = 'header';
classes += (isLargeScreen() ?
  '' : item.isCollapsed ?
    ' icon-expander' : ' icon-collapser');
In ES2015 with template literals and without nesting:

const classes = `header ${ isLargeScreen() ? '' :
  (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
In ES2015 with nested template literals:

const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
Tagged templates
A more advanced form of template literals are tagged templates.

Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, it can return something completely different, as described in one of the following examples.)

The name of the function used for the tag can be whatever you want.

let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Mike is a youngster.
Tag functions don't even need to return a string!

function template(strings, ...keys) {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

let t1Closure = template`${0}${1}${0}!`;
//let t1Closure = template(["","","","!"],0,1,0);
t1Closure('Y', 'A');                      // "YAY!"

let t2Closure = template`${0} ${'foo'}!`;
//let t2Closure = template([""," ","!"],0,"foo");
t2Closure('Hello', {foo: 'World'}); // "Hello World!"

let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;
//let t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure('foo', {name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
t3Closure({name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
Raw strings
The special raw property, available on the first argument to the tag function, allows you to access the raw strings as they were entered, without processing escape sequences.

function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
In addition, the String.raw() method exists to create raw strings—just like the default template function and string concatenation would create.

let str = String.raw`Hi\n${2+3}!`;
// "Hi\n5!"

str.length;
// 6

Array.from(str).join(',');
// "H,i,\,n,5,!"

