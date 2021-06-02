// Math.random() - generates a random decimal number between 0 (inclusive) and 1 (exclusive)

var n = 20;
Math.floor(Math.random() * n);    // to get a random number in [0, n-1]

Math.floor(Math.random() * (max - min + 1)) + min;    // to get a random number in a given range of numbers

var a = parseInt("007");    // parses a string and returns an integer

// parseInt(string, radix);
var a = parseInt("11", 2);  // displays 3

// nested ternary operator
function checkSign(num) {
 return num<0?"negative":(num==0)?"zero":"positive";
}

