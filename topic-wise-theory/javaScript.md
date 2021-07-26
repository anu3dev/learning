# Introduction
	We generally write a computer program using a high-level language. A high-level language is one that is understandable by us, humans. This is called source code.

	However, a computer does not understand high-level language. It only understands the program written in 0's and 1's in binary, called the machine code.

	To convert source code into machine code, we use either a compiler or an interpreter.

	Both compilers and interpreters are used to convert a program written in a high-level language into machine code understood by computers. However, there are differences between how an interpreter and a compiler works.

# Interpreter Vs Compiler
	Intrepreter Translates program one statement at a time where as Compilerscans the entire program and translates it as a whole into machine code.

	Interpreters usually take less amount of time to analyze the source code. However, the overall execution time is comparatively slower than compilers where as Compilers usually take a large amount of time to analyze the source code. However, the overall execution time is comparatively faster than interpreters.

	In intrepreter, No intermediate object code is generated, hence are memory efficient, where as Compiler generates intermediate object code which further requires linking, hence requires more memory.

# JavaScript is intrepreter or compiler language?
	We all know the common question every programmer has to ask about the programming language he learns — is it compiled or interpreted.

	Let’s first define what each of those means.

	Compilation vs. Interpretation

	There’s a lot of information about each of those procedures so I will keep it simple:
	Compiled language — the source file typically will be “compiled” to machine code (or byte code) before being executed.
	Interpreted language — the source code will be read and directly executed, line by line.

	And like everything in life, I strongly believe that you can better understand it with alcohol.

	Let’s say you want to make a Mojito, you go to Google (or Bing if you are a freak) and search for the ingredients list, this is what you came up with:
	· The juice of 1 Lime
	· White rum
	· Mint
	· Soda water

	There are 2 ways to make the cocktail, the Compiler or the Interpreter way.

	The compiler will first, before doing any mixing, organize all the ingredients in front of him, the specific amounts of every single ingredient, only then, will he mix all the ready components of the cocktail.

	The interpreter will take his glass and will start by reading the ingredients, line by line. he will go to his refrigerator and will fetch a lemon, cut it and squeeze it directly into the glass, then pour the white rum, etc.

	The build (preparation) time of the compiler will be longer than the interpreters. however, the run (mixing) time will be much shorter.

	Now that you know the difference let’s talk about JavaScript.
	So — is JavaScript Compiled or Interpreted?

	Well, Like many of you, when I started learning JavaScript I’ve been told that JavaScript — like most scripting languages is an interpreted language, and lived with this presumption in peace.

	Read the following paragraph published at web.stanford.edu:

	JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run.

	According to most of the internet, JavaScript is an interpreted language, but that’s not necessarily true.

	For Example, the V8 engine, the engine that runs Google Chrome and NodeJS, compiles to native code internally:

	V8 increases performance by compiling JavaScript to native machine code before executing it, versus executing bytecode or interpreting it.

	Also, Rhino and TraceMonkey use compilation as part of their process:

	TraceMonkey adds native‐code compilation to Mozilla’s JavaScript® engine (known as “SpiderMonkey”).

	For example, look at this program:

	console.log('Hippity Hoppity');
	oops oops;

	In theory, an interpreter would read the first line, print “Hippity Hoppity” and only then throw a Syntax Error.

	But for modern JavaScript’s runtime environments, this is not the case, immediately after running the program, before executing the log function, it crashes.

	Another example is Hoisting, consider:

	max(1, 2);
	// 2
	function max(num1, num2){
 	 return num1 > num2 ? num1 : num2;
	}

	How does the JS engine know about the ‘max’ Function before it “reaches” to the deceleration? Again, the only reasonable answer to this question is that the code must first be compiled before execution.

	So, JavaScript is a compiled language, right?

	Well, it’s complicated. in the past, every programming language was fairly easy to categorize as one or the other, but the modern approach of running the source code created a sort of “in-between” area.

	Of course, the result of compilation is not portable among various JS engines. Also, JS is not compiled well in advance, like traditional compiles language. But, modern JS engines perform similar steps as other compilers.
	Consider the flow of a program:
	1. The source code gets transpiled (Babel) and packaged (Webpack).
	2. The JS engine parses the code to an Abstract Syntax Tree (AST).
	3. The engine converts that AST to a kind-of byte code, which is then converted even further by the JIT compiler.
	4. JS VM executes the program.

	Some will argue that the JS VM is “interpreting” the “byte code”, but if you say that you also say that Java (another JVM-driven language) is also interpreted.

	Well?! Is it Compiled then?

	The answer is closer to yes than no, but it’s a matter of perspective and implementation, I guess.

# var vs let
	https://www.w3schools.com/js/js_let.asp

# Data type in js => 8
	number, string, boolean, null, symbol, underdefine, object, bigint

# parameter and argument
	Parameters are variables listed as a part of the function definition.
	Arguments are values passed to the function when it is invoked.

	function argCheck(parameter)
	{
  		console.log(parameter);
	}

	windows.write(argCheck(1)); // 1 is argument.





























































# error




during compilation, dont reserver memory but 

js engine will execute compiler output

refrence error

use strict - engine will not fix user mistake

compiler scope engine

scope only care about entry

laxical scope - scope of variable is determined or static scope

var let and const
temporal dead zone




trim split replaceALL charAt

parameter and argument
 everytime you exceute a fxn, u create a new execution context or environmenyt
name of variable parameter
value is argument

hoisting 

dry principal                                                                                                                                                                                                                                                                                                                                                                                                                  

debounce

compiler is creating in scope

js engine always goes to current scope and check varible exist if not go to parent if find use if not ref error

tdz let and const, cant use untill they are fully initilize

cmd //c tree .git" will work in bash
tree.com //a //f
"du -c"


js engine
scope
compiler

1. compiler staert - taking and onerting to another language like typical compiler
2. talking to scope about declaration
 declartion keyword--  var let const function  
after seeing these keyword in a program, asked scope to declare  a veriable in memory   

declaration always happens during compilation
at time of execution, js engine already knows varibale is declared                      this is hoisting

function declartion behaves different from variable declaration
dependency of other fxn is -- closure
js is single thread language , one                                               
               if value is missing refrenece error          
call stack           

npm init -y
npm i -D jest

go to .packagejson test "test" -> "jest"

npm test

                  primitive data type
refrenece muted, primitive not muted
fxn
incapculation
avoid repeatation

not accessible then undefined error
this keyword in js
 fxn is created --execution context also created
in execution context - variable(, value, stack, call sight -object having info about fxn 
object contain info about fxn like function call
stack
memmory (variable and value
value of object will be determined by ()
look for () to determine the value of this object

value of this object is global like window.
in strict mode, window will not work, it will be undefinedf
if no reule apply, this will apply
default binding

explicit binding
object in javascript

hardcoded value to object is called hard binding

rest operator -- array of argument
expression and declaration

fxn returning inside fxn is -- closure

bind method, design pattern, .bind method == bind

binding - default, implicit, explicit, hard
default
obj is there before implicit
explicitit value to fxn explicit binding
hard binding, we can call it design pattern
fxn with new keyword-one new object gets created-this newly creatd object will work as this object-newly creatde object if not return statement then it-- willl return when execution ends constructor fxn
fxn and array is object--
default
implicit
explicit
hard
binding with new keyword

inheritance

oops concept

memorization in js

higher order fxn
given the same input, i will not recompute memoized fxn
dynamic programing ???
in both storing solution, different is in dynamic it will in part but in memoized stores whole solution

# best programming practice in js
* use by default 'const' and if we have to assign some value then use 'let', never use 'var'
	Reason: scope issue
* function defines action so write is carefully. like function smallLetter.
* in js always use camelcase convention.
* js variables are case sensetive. 
	
	var name = 'Robin Wieruch';
 
	var Name = 'Dennis Wieruch';
	 
	var NAME = 'Thomas Wieruch';
	 
	console.log(name);
	// "Robin Wieruch"
	 
	console.log(Name);
	// "Dennis Wieruch"
	 
	console.log(NAME);
	// "Thomas Wieruch"

* it should be self descriptive like FirstName.
	
	// bad
	var value = 'Robin';
	 
	// bad
	var val = 'Robin';
	 
	// good
	var firstName = 'Robin';

* example of camelcase convention.

	// bad
	var firstname = 'Robin';
	 
	// bad
	var first_name = 'Robin';
	 
	// bad
	var FIRSTNAME = 'Robin';
	 
	// bad
	var FIRST_NAME = 'Robin';
	 
	// good
	var firstName = 'Robin';	

* A brief overview about the different case styles:

	camelCase (used in JS)
	PascalCase (used in JS)
	snake_case
	kebab-case

* js naming convention for boolean be like 'let = hasEncryption'.
	
	// bad
	var visible = true;
	 
	// good
	var isVisible = true;
	 
	// bad
	var equal = false;
	 
	// good
	var areEqual = false;
	 
	// bad
	var encryption = true;
	 
	// good
	var hasEncryption = true;

* js naming convention for functions be like 'function getName(){}'.
	
	// bad
	function name(firstName, lastName) {
	  return `${firstName} ${lastName}`;
	}
	 
	// good
	function getName(firstName, lastName) {
	  return `${firstName} ${lastName}`;
	}

* js naming convention for class be like 'class SoftwareDeveloper'{}.

	class SoftwareDeveloper {
	  constructor(firstName, lastName) {
	    this.firstName = firstName;
	    this.lastName = lastName;
	  }
	}
 
	var me = new SoftwareDeveloper('Robin', 'Wieruch');	

* js naming convention for component

	// bad
	function userProfile(user) {
	  return (
	    <div>
	      <span>First Name: {user.firstName}</span>
	      <span>Last Name: {user.lastName}</span>
	    </div>
	  );
	}
	 
	// good
	function UserProfile(user) {
	  return (
	    <div>
	      <span>First Name: {user.firstName}</span>
	      <span>Last Name: {user.lastName}</span>
	    </div>
	  );
	}

* When a component gets used, it distinguishes itself from native HTML and web components, because its first letter is always written in uppercase.

	<div>
	  <UserProfile
	    user={{ firstName: 'Robin', lastName: 'Wieruch' }}
	  />
	</div>

* js naming convention for method.

	class SoftwareDeveloper {
	  constructor(firstName, lastName) {
	    this.firstName = firstName;
	    this.lastName = lastName;
	  }
	 
	  getName() {
	    return `${this.firstName} ${this.lastName}`;
	  }
	}
	 
	var me = new SoftwareDeveloper('Robin', 'Wieruch');
	 
	console.log(me.getName());
	// "Robin Wieruch"

* js naming convention for private

	For instance, a private method in a class should only be used internally by the class, but should be avoided to be used on the instance of the class:

	class SoftwareDeveloper {
	  constructor(firstName, lastName) {
	    this.firstName = firstName;
	    this.lastName = lastName;
	    this.name = _getName(firstName, lastName);
	  }
	  _getName(firstName, lastName) {
	    return `${firstName} ${lastName}`;
	  }
	}
	var me = new SoftwareDeveloper('Robin', 'Wieruch');
	// good
	var name = me.name;
	console.log(name);
	// "Robin Wieruch"
	// bad
	name = me._getName(me.firstName, me.lastName);
	console.log(name);
	// "Robin Wieruch"
	A private variable/function can occur in a JavaScript file as well. This could mean that the variable/function shouldnot be used outside of this file but only internally to compute further business logic for other functions within the same file.

* JAVASCRIPT NAMING CONVENTIONS: CONSTANT
Last but not least, there are constants -- intended to be non-changing variables -- in JavaScript which are written in capital letters (UPPERCASE):

var SECONDS = 60;
var MINUTES = 60;
var HOURS = 24;
 
var DAY = SECONDS * MINUTES * HOURS;
var DAYS_UNTIL_TOMORROW = 1;
Usually JavaScript constants are defined at the top of a JavaScript file. As hinted before, no one enforces one to not change the variable here, except a const declaration of the variable for primitive data structures, but it's capitalized naming suggests avoiding it.

JAVASCRIPT NAMING CONVENTIONS: GLOBAL VARIABLE
A JavaScript variable is globally defined, if all its context has access to it. Often the context is defined by the JavaScript file where the variable is declared/defined in, but in smaller JavaScript projects it may be the entire project. There are no special naming conventions for global JavaScript variables.

A global JavaScript variable is declared at the top of a project/file.
A global JavaScript variable is written in camelCase if it is mutable.
A global JavaScript variable is written in UPPERCASE if it is immutable.
JAVASCRIPT NAMING CONVENTIONS: UNDERSCORE
So what about the underscore and dash in JavaScript variable namings? Since camelCase and PascalCase are primarily considered in JS, you have seen that the underscore is only rarely used for private variables or constants. Occasionally you will find underscores when getting information from third-parties like databases or APIs. Another scenario where you might see an underscore are unused function parameters, but don't worry about these yet if you haven't seen them out there ;-)

JAVASCRIPT NAMING CONVENTIONS: DASH
A dash in a JavaScript variable isn't common sense as well. It just makes things more difficult; like using them in an object:

// bad
var person = {
  'first-name': 'Robin',
  'last-name': 'Wieruch',
};
 
var firstName = person['first-name'];
 
// good
var person = {
  firstName: 'Robin',
  lastName: 'Wieruch',
};
 
var firstName = person.firstName;
It's even not possible to use a dash directly for a variable declaration:

var first-name = 'Robin';
// Uncaught SyntaxError: Unexpected token '-'
That's why it's better to avoid them.

JAVASCRIPT NAMING CONVENTIONS: FILES
There are two strategies of naming files in JavaScript: PascalCase and kebab-case. In JavaScript frontend applications, you will often see PascalCase for naming components (e.g. React components).

- components/
--- user/
----- UserProfile.js
----- UserList.js
----- UserItem.js
--- ui/
----- Dialog.js
----- Dropdown.js
----- Table.js
In contrast, in JavaScript backend application, kebab-case is the common sense:

- routing/
--- user-route.js
--- messages-route.js
You will also see camelCase namings, but similar to PascalCase (sorry frontend applications), there is a risk that operating systems are handling them differently which may lead to bugs. That's why sticking to kebab-case should be the norm for file names in JavaScript. 




	what is call back fxn
how to code in console
map in js
args or ....args means





