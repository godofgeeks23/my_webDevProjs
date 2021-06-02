// JS Objects

var anotherObject = {
  make: "Ford",         // can omit the quotes for single-word string properties
  5: "five",            // use number as properties
  "model": "focus"
};

// accessing the object properties - 
// Dot notation is used when you know the name of the property to access
var a = anotherObject.make;
// brackets notation - If the property of the object you are trying to access has a space in its name
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

// modify the values of objects
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";   // modifying existing property value
myDog.bark = "woof";          // add new property to obj
myDog["clean"] = "yes";       // add new propety to obj

delete ourDog.bark;           // delete properties from objs

myDog.hasOwnProperty("clean");    // chk if a obj has a specific property

// accessing complex objects in js
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

// accessing nested array objects
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1];

// while loops in JS
var i = 5;
while(i>=0)
{
  myArray.push(i);
  i--;
}

// for loop in JS
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// do while loops in JS
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

// recursion in JS
function sum(arr, n) {
  if (n <= 0)
    return 0;
  else
    return sum(arr, n - 1) + arr[n - 1];
}
// sum([1], 0) should equal 0.
// sum([2, 3, 4], 1) should equal 2.
// sum([2, 3, 4, 5], 3) should equal 9.


