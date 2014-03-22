# Loops

Loops in programming allow for the easy repetition of chunks of code. They are also handy for automating batch or iterative processes.

In JavaScript there are four types of loops:

- `for` loops
- `for/in` loops
- `while` loops
- ~~and `do/while` loops~~ (which I will omit for brevity)

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

## For/in Loops
`For/in` loops are similar to `for` loops but are used to iterate through each property in an object. Here is an example:

```javascript

var author = {
	name: "William Faulkner",
	born: "September 25, 1897",
	died: "July 6, 1962",
	notableWorks: [
		"The Sound and the Fury",
		"As I Lay Dying",
		"Light in August",
		"Absalom, Absalom!",
		"A Rose for Emily",
	]
}

for (var propertyName in author) {
	if (propertyName == "notableWorks") {
		console.log(author[propertyName].length + " notable works.");
	} else console.log(propertyName[propertyName]);
}
```
Would print

```
> William Faulkner
> September 25, 1897
> July 6, 1962
> 5 Notable Works
```

There are two important __notes__ to mention in regards to `for/in` loops:

1. An Object's property value is returned using the object[propertyName] syntax rather than the object.propertyName syntax. This is an important distinction because it illustrates how __variable variable__ names work.
2. `For/in` loops do not guarantee a specific order in which the property names are iterated through.

## While loops

While loops are much simpler than `for` and `for/in` loops, however they are rarely used. Their syntax is as follows:

```javascript

while (someCondition) {
	// the code inside of here loops until someCondition is false
}
```

Here is a while loop that counts to 100:

```javascript

var i = 1;
while (i <= 100) {
	console.log(i);
}
```

When using `while` loops, you must be very careful to make sure that the condition being evaluated each loop will eventually return false. Otherwise you will create an infinite loop that can crash your browser (or impertinently, your computer).
