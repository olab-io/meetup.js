# Variables

Below is a list of all JavaScript variable types.
JavaScript is "loosly" or "weakly" typed, which means
that variable types do not need to be explicitly declaired.
Where in some languages you need to declare a variable like:

```javascript

	int myInt = 5;
	// or...
	String myString = "Hello World";
```

In JavaScript you simply use the var keyword:

```javascript

	var myInt = 5;
	// or...
	var myString = "Hello World";
```

In JavaScript there are 8 variable types:

 1. Boolean
 2. Int
 3. Float
 4. Char
 5. String
 6. Array (and Associative Array)
 7. Object
 8. Function

## Boolean

Booleans variables can be `true` or `false` __only__.

```javascript

	var myBoolean = true;
```

## Int

Int variables are whole numbers.

```javascript

	var myInt = 5;
```

## Float

Float variables are numbers with decimal points (also called floating-point numbers).

```javascript

	var myFloat = 5.5;
```

## Char 

Chars are single characters. They can represent text, a number, or even unicode characters.

```javascript

	var myChar = 's';
```
__Note__: a `'5'` is different than a `5`.

## String

Strings are combined characters, they hold things like words or sentences.

```javascript

	var myString = 'string';
```

## Array

An array is a list of variables of any type.
Arrays can hold booleans, ints, floats, chars, strings,
objects, functions (don't do this), and even other arrays.
Arrays can also hold variables of different types.
i.e. strings and ints. Although this is considered bad
practice and can lead to some hard-to-find bugs

```javascript

	var myIntArray = [5, 10, 12, 14, 800];
	var myStringArray = [
						 "Ulysses",
						 "The Great Gatsby",
						 "1984",
						 "Catcher in the Rye", 
						 "A Clockwork Orange"
						];
```

Each value in an array is called an element. 
Elements can be accessed using the "index",
or position in the array, where that value is
located. Array indexes start at `0` instead of `1`.

```javascript

	// returns "Ulysses"
	myStringArray[0];
	
	// returns "A Catcher in the Rye"
	myStringArray[3];
	
	//etc...
```

Associative Arrays store values with a string index
instead of a numerical one. This is helpful for storing
data with human-readable keys. For instance, storing id
numbers in an array with each index being the student's
last name.

```javascript

	var myAssocArray = [];
	myAssocArray['Thompson'] = 345;
	myAssocArray['Johnson'] = 487;
	myAssocArray['Wallace'] = 101;
	
	// returns 345
	myAssocArray['Thompson'];
	
	// returns 101
	myAssocArray['Wallace'];
	
	//etc...
```
##Object

An object is a special kind of data, with properties and methods.
Properties are kind of like variables that __belong__ to an object and
methods are like functions that __belong__ to an object.

```javascript

	var myObject = {
		property: "value";
		method: function(){
			// some code...
		}
	};
```

Objects can be created all at once like this...

```javascript

	var myCar = {
		
		make: "Subaru",
		model: "Legacy",
		type: "Station Wagon",
		year: 1992,
		color: "champagne",
		offRoad: false,
		drive: function(){
			// code to drive
		},
		doCoolTrick: function(){
			// code to look like a badass
		}
	};
```

or separately like this...

```javascript

	var myCar = {};
	myCar.make = "Subaru";
	myCar.model = "Legacy";
	myCar.year = 1992;
	// etc...
```

An object's properties and methods are
accessed using "dot syntax" just like we 
assigned them above

```javascript

	// returns "Subaru"
	myCar.make;
	
	// runs the code for that badass trick
	myCar.doCoolTrick();
```

## Function

In JavaScript, functions are actually variables.
This can be confusing, but also very helpful.

```javascript

	var myFunction = function(parameter1, parameter2, etc...){
		// code...
	}
	
	// run the function
	myFunction();
```

Cool, thats all of them. There are some programming books
that are entirely devoted to variable types, so if all of 
this doesn't make since just yet don't sweat it. The nice
thing to know is that you just learned __every__ variable type
in JavaScript!
