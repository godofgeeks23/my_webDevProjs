alert("Hello");

document.querySelector("h1").style.color = "red";

var obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(obj);
console.table(obj);

console.error("This is a error.");
console.warn("This is a warning.");

console.time("Time started...");
    console.log("This is some instruction...");
    console.log("This is some instruction...");
    console.log("This is some instruction...");
    console.log("This is some instruction...");
    console.log("This is some instruction...");
    console.log("This is some instruction...");
    console.log("This is some instruction...");
console.timeEnd("Time started...");

const greeting = "Hello";
// greeting = "World";         // we cant do this, as const var values cant be changed

// const testvar;      // this throws an error, because conts variables have to be initialized at the time of declaration.

const arr = [1,2,3,4,5];        // now this array cant be reassigned, but std array oeprations can still be performed
// arr = [1,2,3,4,56,6];           // this is not allowed

// but these things can be done
arr.push(78);                   
arr[2] = 789;

// similarly for object also, except from declaring it completely, it can be modified ising its properties...

const person = {
    name: "Aviral",
    age: 20
}
person.age = 21;        // we can still do this...
person["surname"] = "srivastava";   // and this also..


