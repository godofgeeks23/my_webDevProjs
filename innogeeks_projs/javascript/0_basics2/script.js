var myName = "Aviral Srivastava";
var strLength = nyName.length;
console.log(strLength);

// In JavaScript, String values are immutable, which means that they cannot be altered once created.
// For example, the following code:
var myStr = "Bob";
myStr[0] = "J";
// will not make myStr = "Job"
// only way to do this is - 
myStr = "Job";

// Arrays in JavaScript
var myArray = ["String", 23];

// Nested Arrays
var myArray = [["String", 23], ["Test", 89]];

// but arrays elements can be modified by index, unlike strings
myArray[1] = 34;

// Access Multi-Dimensional Arrays With Indexes
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
/*
Then - 
arr[3];						[[10, 11, 12], 13, 14]
arr[3][0];					[10, 11, 12]
arr[3][0][1];				11
*/

var arr1 = [1,2,3];
arr1.push(4);		// arr1 now has the value [1, 2, 3, 4]
var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);		// arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]]

// .pop() is used to pop a value off of the end of an array. 
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);		// 6
console.log(threeArr);		// 4

// .shift() works just like .pop(), except it removes the first element instead of the last.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// function is JS
function testFun(param1, param2) {
  console.log(param1, param2);
}

// Variables which are declared without the var keyword are automatically created in the global scope. This
// Variables which are declared within a function, as well as the function parameters, have local scope.

// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// returning from a function
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);

// if else in JS
if(answer)
{
  console.log(true);
}
else
{
  console.log(false);
}

// JavaScript to compare two different data types (for example, numbers and strings), must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:
// 1   ==  1       // true
// 1   ==  2       // false
// 1   == '1'      // true
// "3" ==  3       // true

// Strict equality (===) operator does not perform a type conversion. If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
// 3 ===  3        // true
// 3 === '3'       // false

// to get a type of a variable or constant, use typeof
typeof 3;           // number
typeof("Helo")      // string

// like strictly equality(===), strictly inequality (!==) also exists

// Logical operators - &&, ||,  

// switch case in JS
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
  default:
    defaultStatement;
    break;
}
// case values are tested with strict equality (===)
