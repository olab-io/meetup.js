// Below is a list of all JavaScript variable types.
// JavaScript is "loosly" or "weakly" typed, which means
// that variable types do not need to be explicitly declaired.
// Where in some languages you need to declare a variable like:
// 
// int myInt = 5;
// 	or...
// String myString = "Hello World";
// 
// In JavaScript you simply use the var keyword:
// 
// var myInt = 5;
//  or...
// var myString = "Hello World";



// Booleans variables can be true or false ONLY 
var myBoolean = true;



// Int variables are whole numbers
var myInt = 5;



// Float variables are numbers with decimal points
// or floating-point numbers
var myFloat = 5.5;



// Chars are single characters.
// They can represent text, number, or even unicode characters
// note: a '5' is different than a 5
var myChar = 's';



// Strings are combined characters.
// They hold things like sentences
var myString = 'string';



// An array is a list of variables of any type.
// Arrays can hold booleans, ints, floats, chars, strings,
// objects, functions (don't do this), and even other arrays.
// Arrays can also hold variables of different types.
// i.e. strings and ints. Although this is considered bad
// practice and can lead to some hard-to-find bugs
var myIntArray = [5, 10, 12, 14, 800];
var myStringArray = [
					 "Ulysses",
					 "The Great Gatsby",
					 "1984",
					 "Catcher in the Rye", 
					 "A Clockwork Orange"
					];
// Each value in an array is called an element.
// Elements can be accessed using the "index",
// or position in the array, where that value is
// located. Array indexes start at 0 instead of 1

// returns "Ulysses"
myStringArray[0];

// returns "A Catcher in the Rye"
myStringArray[3];

//etc...



// Assosciative Array's store values with a string index
// instead of a numerical one. This is helpful for storing
// data with human-readible keys. For instance, storing id
// numbers in an array with each index being the student's
// last name.
var myAssocArray = [];
myAssocArray['Thompson'] = 345;
myAssocArray['Johnson'] = 487;
myAssocArray['Wallace'] = 101;

// returns 345
myAssocArray['Thompson'];

// returns 101
myAssocArray['Wallace'];

//etc...


// An object is a special kind of data, with properties and methods.
// Properties are kind of like variables that BELONG to an object and
// methods are like functions that BELONG to an object.
var myObject = {
	property: "value";
	method: function(){
		// some code...
	}
};

// Objects can be created all at once like this...
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

// or seperately like this...
var myCar = {};
myCar.make = "Subaru";
myCar.model = "Legacy";
myCar.year = 1992;
// etc...

// An object's properties and methods are
// accessed using "dot syntax" just like we 
// assigned them above

// returns "Subaru"
myCar.make;

// runs the code for that badass trick
myCar.doCoolTrick();



// In JavaScript, functions are actually variables.
// This can be confusing, but also very helpful.
var myFunction = function(parameter1, parameter2, etc...){
	// code...
}

// run the function
myFunction();



// To recap, JavaScript has 8 variable types:
// 1. Boolean
// 2. Int
// 3. Float
// 4. Char
// 5. String
// 6. Array (and Assosciative Array)
// 7. Object
// 8. Function

// Cool, thats all of them. There are some programming books
// that are entirely devoted to variable types, so if all of 
// this doesn't make since just yet don't sweat it. The nice
// thing to know is that you just learned EVERY variable type
// in JavaScript!
