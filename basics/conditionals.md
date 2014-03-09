# Conditionals

Conditionals are chunks of logic in code.
In most programming languages they appear in the 
form of `if`, `if else`, and `else` statements.
Each condition to be evaluated goes inside the 
parentheses. Note that `else` statements don't have
parentheses because they are only fired if their
above `if` and `if else` statements fail.

Here is an idea of how conditionals work...

```javascript

	if (someConditionIsTrue) {
		// run this code
	} else if (someOtherConditionIsTrue) {
		// run this other code
	} else { 
		// run this code if the "if" and "if else" statements
		// weren't true
	}
```

`if` statements don't need to have the
`if else", and `else` statements like above.
You can use less or more of them.

Sometimes you just need an `if`:

```javascript
	
	if (someConditionIsTrue) {
		// code...
	}
```

Sometimes you need an `if` and an `else` only.

```javascript

	if (someConditionIsTrue) {
		// code...
	} else {
	   // code...
	}
```

Sometimes you need multiple `if else` statements
to chain lots of possibilities. Note that the order
of `else if` statements matters because the next one
in the list only runs if the ones above it have failed.

```javascript

	if (condition1IsTrue) {
	
	} else if (condition2IsTrue) {
	
	} else if (condition3IsTrue) {
	
	} else if (condition4IsTrue) {
	
	} //etc...
```

__Note__ that you can't have an `else if` or `else` without
an `if` statement.

Enough with this abstract `conditionIsTrue` stuff,
Lets see a real `if` statement in practice.

```javascript

	int myInt = 5;
	
	if (myInt == 5) {
		// run if myInt is 5
	} else {
		// run anytime myInt is not 5
	}
```

Wait! What is that weird `==` operator?
In JavaScript, and most any programming language, 
the `==` operator is used to __evaluate__ an expression.
`==` tests if the condition is `true`,
while `=` assigns a value to a variable. This can be
a weird thing to wrap your head around and can lead
to lots of bugs as a beginner. `=` operators should never
be used inside a conditional.

Lets do some more...

```javascript

	var itsMyBirthday = true;
	var message;
	
	if (myBoolean == true) {
		message = "Happy Birthday!";
	} else {
		message = "Just a regular day. Unless its some other holiday like Holloween or something."
	}
```

Because conditionals actually evaluate whatever expression is
placed inside their parentheses, you can place all kinds of logic
inside of them. Notable operators are:

- `==` equals
- `!=` not equals
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

```javascript

	var hour = 8;
	var timeOfDay;
	
	if (hour >= 12) {
		timeOfDay = "Afternoon or night";
	} else {
		timeOfDay = "Morning";
	}
```

"And" and "or" statements can also be included inside of a conditional.
This allows for some very powerful logical statements...

Say you want to evaluate whether one thing is true __and__ another thing is false inside of one `if` statement. That would look like this:

```javascript

	var hour = 14;
	var timeOfDay;
	
	if (hour >= 12 &&
	    hour < 16) {
	    timeOfDay = "Afternoon";
	} else if (hour >= 16) {
		timeOfDay = "Night";
	} else {
		timeOfDay = "Morning";
	}
```

The `&&` operator is used to require that __both__ expressions are `true` for the condition to pass.

Similarly, the `||` (or) operator can be used to require that __at least one__ of the expressions is `true`.

```javascript

	var hour = 14;
	var itsEleven = false;
	
	if (hour == 11 ||
	    hour == 23) {
	    itsEleven = true;
	}
```

Sometimes you might see conditionals code written
without the curly brackets. If there is only 1 code
statement that is to be run if the condition is true,
then curly brackets may be omitted. Programmers often do
this to save space, but we will always include the brackets
for clarity.

```javascript

	if (someConditionIsTrue) myInt = 1;
	else myInt = 0;
```

Other times you might see an expression being evaluated without an `== true`. This is because any expression inside of the conditional's parentheses is evaluated as a boolean, and thus `if(myBoolean == true)` and `if(myBoolean == false)` are equivalent to `if(myBoolean)` and `if(!myBoolean)`. You are more than welcome to continue to use `== true` or `== false` for clarity or to help you remember what is actually going on in the code. Just remember that some code that you read may use the shorthand version.
