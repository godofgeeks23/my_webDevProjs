/*
variable naming rules in javascript  - 
	first character must be a letter, or an underscore (_), or a dollar sign ($).

JavaScript is Case Sensitive

JavaScript uses the Unicode character set.

ES 6 introduced the keywords 'let' and 'const' for defininf variables, except the already used 'var' keyword - 
	const - define a variable that cannot be reassigned
	let - keyword to define a variable with restricted scope

*/

var a = "Avi", b = true, c = 78.34;

var d = 13;
d = "Now d is a string variable";

var e;	// e currently is a variable of undfined data type
var f = undefined;

// If you re-declare a JavaScript variable, it will not lose its value.
var carName = "Volvo";
var carName;	// The variable carName will still have the value "Volvo" after the execution of these statements

var g = "5" + 3 + 2;
console.log(g);		// gives output as 532
// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

var x = 2 + 3 + "5";
console.log(x);		// gives output as 55

var $mymoney = 56.890;
var $$$ = 3424.545;

console.log("Hello world", 18)
console.log("Hello world" + 18)


