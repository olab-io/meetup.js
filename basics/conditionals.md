// Conditionals are chunks of logic in code.
// In most programming languages they appear in the 
// form of "if", "if else", and "else" statements.
// Each condition to be evaluated goes inside the 
// parentheses. Note, else statements don't have
// parentheses because they are only fired if the
// above "if" and "if else" statements fail.

//Here is an idea of how conditionals work...
if (someConditionIsTrue) {
	// run this code
} else if (someOtherConditionIsTrue) {
	// run this other code
} else { 
	// run this code if the "if" statements
	// weren't true
}

//if statements don't need to have all of the
// "if", "if else", and "else" statements like above.
// You can use less or more...

// Sometimes you just need an "if"
if (someConditionIsTrue) {
	// code...
}

// Sometimes you need an "if" and an "else" only
if (someConditionIsTrue) {
	// code...
} else {

}

// Sometimes you need multiple "if else" statements
// to chain lots of possibilities. Note that the order
// of "else if" statements matter because the next one
// in the list only runs if the ones above it have failed.

if (condition1IsTrue) {

} else if (condition2IsTrue) {

} else if (condition3IsTrue) {

} else if (condition4IsTrue) {

} //etc...

// Enough with this abstract conditionIsTrue stuff,
// Lets see a real "if" statement in practice.

int myInt = 5;

if (myInt == 5) {
	// run if myInt is 5
} else {
	// run anytime myInt is not 5
}

// Wait! What is that weird == operator?
// In JavaScript, and most any programming language, 
// the == operator is used to EVALUATE an expression.
// Essentially, == tests if the condition is true,
// while = assigns a value to a variable. This can be
// a weird thing to wrap your head around and can lead
// to lots of bugs as a beginner. = operators should never
// be used inside a conditional.

// Lets do some more...

var itsMyBirthday = true;
var message;

if (myBoolean == true) {
	message = "Happy Birthday!";
} else {
	message = "Just a regular day. Unless its some other holiday like Holloween or something."
}

// Because conditionals actually evaluate whatever expression is
// placed inside their parentheses, you can place all kinds logic
// inside of them. Notable operators are:
// == equals
// != not equals
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

var hour = 8;
var timeOfDay;
if (hour >= 12) {
	timeOfDay = "Afternoon or night";
} else {
	timeOfDay = "Morning";
}


// And and Or statements can be included in a conditional.
// This allows for some very powerful logical statements...

//Note: You can't have an "else if" or "else" without
// an "if" statement.

// Sometimes you might see conditionals code written
// without the curly brackets. If there is only 1 code
// statement that is to be run if the condition is true,
// then curly brackets may be omitted. Programmers often do
// this to save space, but we will always include the brackets
// for clearity.

if (someConditionIsTrue) myInt = 1;
else myInt = 0;