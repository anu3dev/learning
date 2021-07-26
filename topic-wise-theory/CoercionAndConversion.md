# Type Coercion in JS

	Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

		const value1 = '5';
		const value2 = 9;
		let sum = value1 + value2;

		console.log(sum);

	In the above example, JavaScript has coerced the 9 from a number into a string and then concatenated the two values together, resulting in a string of 59. JavaScript had a choice between a string or a number and decided to use a string.

	The compiler could have coerced the 5 into a number and returned a sum of 14, but it did not. To return this result, you'd have to explicitly convert the 5 to a number using the Number() method:

		sum = Number(value1) + value2;

# In JavaScript there are 5 different data types that can contain values:

	string
	number
	boolean
	object
	function

# There are 6 types of objects:

	Object
	Date
	Array
	String
	Number
	Boolean

# And 2 data types that cannot contain values:

	null
	undefined

# The typeof Operator

	You can use the typeof operator to find the data type of a JavaScript variable.

		typeof "John"                 // Returns "string"
		typeof 3.14                   // Returns "number"
		typeof NaN                    // Returns "number"
		typeof false                  // Returns "boolean"
		typeof [1,2,3,4]              // Returns "object"
		typeof {name:'John', age:34}  // Returns "object"
		typeof new Date()             // Returns "object"
		typeof function () {}         // Returns "function"
		typeof myCar                  // Returns "undefined" *
		typeof null                   // Returns "object"

# Type Conversion or Type Casting

	Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler automatically assigns data types, but the source code can also explicitly require a conversion to take place. 
	For example, given the instruction 5+2.0, the floating point 2.0 is implicitly typecasted into an integer, but given the instruction Number("0x11"), the string "0x11" is explicitly typecasted as the number 17.

	JavaScript variables can be converted to a new variable and another data type:

# By the use of a JavaScript function Automatically by JavaScript itself

		String(x)         // returns a string from a number variable x
		String(123)       // returns a string from a number literal 123
		String(100 + 23)  // returns a string from a number from an expression

	The global method String() can convert booleans to strings.

		String(false)      // returns "false"
		String(true)       // returns "true"

	The Boolean method toString() does the same.

		false.toString()   // returns "false"
		true.toString()    // returns "true"

	The global method String() can convert dates to strings.

		String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

	The Date method toString() does the same.

		Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

	Converting string to number

		Number("3.14")    // returns 3.14
		Number(" ")       // returns 0
		Number("")        // returns 0
		Number("99 88")   // returns NaN

	The global method Number() can also convert booleans to numbers.

		Number(false)     // returns 0
		Number(true)      // returns 1

	Converting Dates to Numbers

		d = new Date();
		Number(d)          // returns 1404568027739

	The date method getTime() does the same.

		d = new Date();
		d.getTime()        // returns 1404568027739

# Automatic Type Conversion

	When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

		5 + null    // returns 5         because null is converted to 0
		"5" + null  // returns "5null"   because null is converted to "null"
		"5" + 2     // returns "52"      because 2 is converted to "2"
		"5" - 2     // returns 3         because "5" is converted to 5
		"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

	JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:

		// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
		// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
		// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

	Numbers and booleans are also converted, but this is not very visible:

		// if myVar = 123             // toString converts to "123"
		// if myVar = true            // toString converts to "true"
		// if myVar = false           // toString converts to "false"


