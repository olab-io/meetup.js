#FUNCTIONS

## What is a Function?

A function is an encapsulated process. It is a "block of code that will be executed when 
someone calls it."

##Primitive Functions
* mathematical operators
* console.log
* String.toUpperCase
* Array.push

A function may or may not take parameters. A parameter is a value that will be utilized by
the function. For example, the console.log function prints whatever its parameter is to the 
console.

There are two ways to pass a value into a function: by value and by reference.

Reference => Connected to the original.
Value => Disconnected from the original.

JavaScript Functions can take the form of:
* Expressions
* Declarations
* Methods
* Constructors

```javascript
//EXPRESSION
var functName = function(){
	//code...
}

//STATEMENT
function functName(){
	//code...
}

//METHOD
var person = {
	height : 5,
	width : 6,
	
	getHeight : function(){
		return this.height
	}
}

person.getWidth = function(){
	return this.width;
}
```

The `this` keyword refers to the object that called the function. Allows objects to refer 
to themselves. Allows an object to call a function that will reference itself.

Only functions have scope in Javascript. Scope can be thought of as the the space where a 
variable has a certain meaning. If a variable is defined in a function, its meaning only 
exists within that function. Global variables are accessible everywhere. And they are evil!!

But say you wanted several different persons, all possessing a unique height/width. In such
such a case, you'd want to create a constructor. A constructor can be looked at as a blueprint
for a specified type of object. They take the form of a function. With the `new` keyword, 
an object can be instantiated using the constructor.

```javascript
//CONSTRUCTOR
function Person(h, w){
	var height = h;
	var width = w;
	
	this.getHeight = function(){
		return height;
	}
	
	this.getWidth = function(){
		return width;
	}
} 

var tallGuy = new Person(10,3);
```


