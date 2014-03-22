# Variable Scope

Variable scope refers to where a variable can be accessed in a program.
There are two kinds of variable scope:

- Global - Can be accessed __anywhere__ in the JavaScript code once the variable
has been defined.
- Local - Can be accessed __only__ inside of the function, and subsequent children
functions of the function, where it was defined.

A good rule of thumb is to only make a variable global if it has to be. Otherwise
variables should be kept local to their functions.

### Global scope

```javascript

var myGlobalVar = "I am global.";
logGlobal();

function logGlobal() {
	console.log(myGlobalVar);
}
```

```
> I am global.
```

### local scope
```javascript

logLocal();

function logLocal() {
	var myGlobalVar = "I am local.";
	console.log(myGlobalVar);
}
```

```
> I am local.
```


Variables __should be global when__ they are used by multiple functions and
need to be used constantly throughout the program in many different places. An
example of variables that might need to be global is score in a videogame.

Variables __should be local when__ they are used only inside of a function or a
child of that function.

### Falling out of scope

Variables can be said to fall out of (or lose) scope when part of program is
trying to use a variable that it doesn't have access to because of its scope.

```javascript
var globalInt = 5;

function1();
function2();

function function1() {
	var localInt = 10;
	console.log(globalInt + localInt);
}

function function2(){
	console.log(globalInt + localInt);
}
```

```
> 15
> NaN
```

Here, `function2()` prints `NaN`, or "not a number" because it is trying to access
`localInt` which has scope __only__ inside of `function1()`. Therefore, when
`function2()` tries to add `localInt` to `globalInt`, `localInt` is `undefined`.

It should be noted here that a [function's parameters](functions.md#parameters)
have scope that is local to that function.

```javascript

console.log(addTen(80));
console.log(addTwenty());

function addTen(param) {
	return param + 10;
}

function addTwenty(){
	return param + 20;
}
```

```
> 90
> NaN
```

### Closure

Remember how I said that variables declared in functions are available only inside
of those functions __and their child functions__. Well that is because,
in JavaScript, you can define functions inside of functions
(inside of functions, etc...). Variables will be visible (have scope) inside of
any function where that variable was defined inside of a function that is that
function's parent.

```javascript

parent();
console.log(visible);

function parent() {

	var visible = true;
	console.log(visible);
	child();

	function child() {
		console.log(visible)
	}
}
```

```
> true
> true
> undefined
```

[More on closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures).
