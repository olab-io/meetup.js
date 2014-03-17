# Functions

In JavaScript (and programming in general) functions house reusable chunks of code. They are quite useful when you want to repeat a similar process multiple times.

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

## Calling a Function

## Parameters

## Variable Scope