//Adding Keys With Dot Notation
var cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "tortoiseshell";

var dog= {
  name: "Pancake",
  legs: 4,
  isAwesome: true,
  };
console.log(dog.isBrown);

var dinasours = [
  { name: "Tyrannosaurus Rex", Period: "Late Cretaceous" },
  { name: "Stegosaurus", period: "Late Jurassic" },
  { name: "Plateosaurus", period: "Trriassic" }
 ];

var object = dinasours[0];
console.log(object);
var objectOne = dinasours[0].name;
console.log(objectOne);
var objectTwo = dinasours[1].period;
console.log(objectTwo);

//An array of Friends
anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
kate = { name: "kate", age:9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];
var arrayOne = friends[1];
console.log(arrayOne);

var arrayTwo = friends[2].name;
console.log(arrayTwo);

var arrayThree = friends[0].luckyNumbers[1];
console.log(arrayThree);

//Exploring Objects In the console
console.log(friends[1]);

var owedMoney = {};
owedMoney.jimmy = 5;
owedMoney.anna = 7;
var bank = owedMoney.jimmy;
console.log(bank);
var bankOne = owedMoney.jinen;
console.log(bankOne);

bank += 3;
console.log(bank);
console.log(owedMoney);

//Storing Info About Movies
var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
},
  "Star Wars: Episode VI - Return Of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter and the Goblet of Fire" : {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu ray"
  }
};
console.log(movies);

var findingNemo = movies["Finding Nemo"];
console.log(findingNemo.duration);

var cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  format: "Blu-ray"
};
console.log(movies.cars= cars);

console.log(Object.keys(movies));
