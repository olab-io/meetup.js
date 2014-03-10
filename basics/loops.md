# Loops

Loops in programming allow for the easy repetition of chunks of code. They are also handy for automating batch or iterative processes.

In JavaScript there are four types of loops:

- `for` loops
- `for` in
- `while` loops
- and `do/while` loops

`For` and `for/in` loops are by far the most used. `While` loops are more rare, as anything you can do in a `for` loop can (and v.v.). `do/while` loops are almost unheard of.

The structure for loops are as follows:

```javascript

loopType(conditionsAndStatements) {
	// code that is run on each iteration of the loop...
}
```

## For Loops

`For` loops have a very strange syntax:

```javascript

for (statement1; statement2; statement3) {
	// code...
}
```

There are three separate statements __separated by semicolons__ inside of a `for` loop's parenthesis. In order they are:

- statement1: is executed before the loop starts. It is usually used to declare the variable(s) that will be used inside the loop to keep track of how many times the loop has occurred. This variable is often called `i` for index.
- statement2: defines the condition for running the loop. It is tested with each iteration of the loop. The loop stops once the condition evaluates to `false`.
- statement3: is executed each time after the loop has been executed. It can be thought of as the increment, or the place where you update the variable(s) that are used in the loop (usually just `i`).

Here is an example of a common `for` loop:

```javascript 

for (var i = 0; i < 100; i++) {
	// code...
}
```

The `//code...` in the above loop is iterated 100 times with `i` being incremented by one each loop through.

For loops are great for iterating through each element in an array:

```javascript
var superheroes = [
					"Batman", 
					"Superman", 
					"Wonder Women", 
					"Wolverine", 
					"Spiderman",
					"The Flash",
					"Captain America"
				   ];
				   
for (var i = 0; i < superheroes.length; i++) {
	var superhero = superheroes[i];
	
	if (superhero == "The Flash") {
		console.log(superheroes[i] + " is very fast.");
	} else {
		console.log(superheroes[i] + " is very strong.");
	}
}
```

This example would print the following to the JavaScript console:

```javascript

Batman is very strong.
Superman is very strong.
Wonder Women is very strong.
Wolverine is very strong.
Spiderman is very strong.
The Flash is very fast.
Captain America is very strong.
```

