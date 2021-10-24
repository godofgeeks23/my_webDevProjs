// teaching javascript strings for innogeeks coordinator

// strings in javascript

let name1 = "aviral";	// double quotes
let name2 = 'ayush';	// single quotes
let name3 = `aditya`;	// back ticks

console.log(name1, name2, name3);

// a v i r a l
// 0 1 2 3 4 5

console.log(name1[1], name1[2]);

name1[0] = 'g';			// strings are immutable in javascript
console.log(name1);

name1 = "aviral srivastava";	// assign completely new string
console.log(name1);

console.log(name1.length);	// length of string

// last index of string = name.length - 1
console.log(name1[name1.length - 1]);

// trim function
let test = "   AvIrAl   ";
console.log(test.length, test.trim().length);
// console.log(test.trim().length);

test.toUpperCase();
console.log(test);

console.log(test.toLowerCase());

let test2 = test.toLowerCase();
console.log(test2);

console.log(test.toUpperCase());

// slice function - get a part of the string
// slice(start index, end index+1)
console.log(name1.slice(0, 3));
console.log(name1.slice(1));

// converting numbers to strings
let num = 10;
let mystring1 = num.toString();
console.log(mystring1, typeof mystring1);

let mystring2 = String(num);
console.log(mystring2, typeof mystring2);

let mystring3 = num + "";
console.log(mystring3, typeof mystring3);

// converting strings to numbers
let mystr = "10";
let mynum1 = Number(mystr);
console.log(mynum1, typeof mynum1);

let mynum2 = +mystr;
console.log(mynum2, typeof mynum2);

// concatenation of strings in javascript
let final = "my name is " + name1 + ", and i love coding";
console.log(final);

// template strings in javascript
let final2 = `my name is ${name1}, and i love coding`;
console.log(final2);