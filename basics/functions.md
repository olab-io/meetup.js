# Functions

In JavaScript (and programming in general) functions house reusable chunks of code. They are quite useful when you want to repeat a similar process multiple times. Essentially, a function is a "block of code that will be executed when someone calls it."

Here is an example of an appropriate use of a function:

```javascript

console.log(cheesyNameSwap("Bob", "Wallace"));
console.log(cheesyNameSwap("Holly", "Robinson"));
console.log(cheesyNameSwap("Frank", "Candler"));

function cheesyNameSwap(firstName, lastName) {

	var newFirstName = lastName.charAt(0) + firstName.substring(1);
	var newLastName = firstName.charAt(0) + lastName.substring(1);
	return newFirstName + " " + newLastName;
}

```

The above code outputs the following to the console:

```
> Wob Ballace
> Rolly Hobinson
> Crank Fandler
```

Had we not used a function we would have had to write the code something like this:

```javascript

var cheesyFirstName1 = "Wallace".charAt(0) + "Bob".substring(1);
var cheesyLastName1 = "Bob".charAt(0) + "Wallace".substring(1);

var cheesyFirstName2 = "Robinson".charAt(0) + "Holly".substring(1);
var cheesyLastName2 = "Holly".charAt(0) + "Robinson".substring(1);

var cheesyFirstName3 = "Chandler".charAt(0) + "Frank".substring(1);
var cheesyLastName3 = "Frank".charAt(0) + "Candler".substring(1);

console.log(cheesyFirstName1 + " " + cheesyLastName1);
console.log(cheesyFirstName2 + " " + cheesyLastName2);
console.log(cheesyFirstName3 + " " + cheesyLastName3);

```

Not only is this practice cumbersome and lengthy but it also makes it difficult if we want to change the way that we are transforming the names. To do this we would have to update our algorithm in three separate places rather than inside of one tidy function.

## Declaring a Function

In order to use a function, it must first be declared. This process occurs when you actually define what the function does:

```javascript

function myFunctionName() {
	// code...
}

```

In older programming languages, functions had to be defined before they were first used (called). In JavaScript you can define a function anywhere in your code. For this reason, most function declarations nowadays are actually grouped together with all other functions that are used in the program and placed at the bottom of the `.js` file.

## Calling a Function

When you call a function, you are running the code inside of that function's decleration. Calling looks like this:

```javascript

myFunctionName();
```

## Parameters

Parameters are variables that can be passed into a function. They act as a function's "input" and provide data that that function can manipulate. While JavaScript functions and methods like:

- `console.log()`
- `String.toUpperCase()`
- `Array.push()`

May require you to include or exclude a certain number of parameters, when you define your own functions you get to decide how many parameters your function will require.

```javascript
function parameterExample(param1, param2, param3, etc...) {
	console.log(param1);
	console.log(param2);
	console.log(param3);
}

```

We can now easily print three strings to the console like this:

```javascript

parameterExample("we", "used", "parameters");
```

```
> we
> used
> parameters
```

To make JavaScript parameters even more versatile, check out the built in [`arguments` variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments).

## Variable Scope

It is important to realize that variables that are defined in a function __live__ and __die__ inside of that function.

```javascript

function variableExample() {

	var explanation = "This variable is only available inside of the variableExample function."
}
```

There is a whole basics section on variable scope [here](scope.md).

## Return keyword

All javascript functions return, or produce, a value. If the `return` value is unspecified, the function will automatically return `undefined`. To illustrate this idea, let's remake a very familiar function: the plus operator.

```javascript
//returns undefined but logs the sum to the console.
// These kinds of functions are often called void functions because
// they return no value.
function plus(numb1,numb2){
	console.log(numb1 + numb2);
}

//returns the sum of numb1 and numb2
function plus(numb1,numb2){
	return numb1 + numb2;
}

```

## Anonymous functions

Anonymous functions can be a bit confusing, and to the best of my knowledge are unique to JavaScript. Anonymous functions are have no name, and are often called  called as soon as they are defined.

```javascript
// the function declaration is wrapped in parenthesis.
(function(){
	// code...
})(); // the last parenthesis actually calls the function.

```

Perhaps more importantly, JavaScript uses anonymous functions often when passing functions as parameters to other functions in the form of callbacks. Callbacks are often used for passing code from a function into an event handler. Below is an example of an anonymous function used with jQuery's `$(document).ready()`.

```javascript

$(document).ready(function(){
	// code that runs when the document is ready...
});
```

To summarize anonymous functions (sometimes called anonymous inline functions) are useful for:

- Short-term use
- Passing a function as a parameter (callbacks)
- Taking advantage of function scope (closure)
