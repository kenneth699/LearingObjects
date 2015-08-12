//creating Objects
var cat = {
  "legs" : 3,
  "name" : "Harmony",
  "color" : "TortoiseShell"
  };
//Keys without Objects

var cat = {
  legs: 3,
  name: "Harmony",
  color:  "TortoiseShell"
};

var cat = {
  legs: 3,
  "full name": "Harmony Philomena Snuggly-Pants Morgan",
  color:  "TortoiseShell"
  };
var cat = { legs: 3, name: "Harmony", color: "Tortoiseshell" };

//Acessing Values in objects
console.log(cat.name);

var dog = { name: "Pancake" , age: 6, color: "white", bark: "Yip yap yip"};
var cat = {name: "Harmony", age: 8, color: "tortoiseshell" };
var animalOne = Object.keys(dog);
var animalTwo = Object.keys(cat);
console.log(animalOne);
console.log(animalTwo);

//Adding Values To Objects
var object ={};
var cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Tortoiseshell";
console.log(cat);
