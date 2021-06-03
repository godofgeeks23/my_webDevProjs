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
greeting = "World";         // we cant do this, as const var values cant be changed

const testvar;      // this throws an error, because conts variables have to be initialized at the time of declaration.



