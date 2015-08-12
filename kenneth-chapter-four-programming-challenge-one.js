//Programming Challenge

var Scores = {};
var Names = ["Kenneth", "Thomas", "Barimah", "Arnold", "Eno", "Sahvana"];

Scores.Kenneth = 0;
Scores.Thomas = 0;
Scores.Barimah = 0;
Scores.Arnold = 0;
Scores.Eno = 0;
Scores.Sahvana = 0;

//RoundOne : Worth 2 points

Scores.Kenneth += 2;
Scores.Arnold += 2;
Scores.Thomas += 2;
Scores.Sahvana += 2;
Scores.Arnold += 2;

//RoundTwo : Worth 4 points

Scores.Barimah += 4;
Scores.Sahvana += 4;
Scores.Arnold += 4;
Scores.Eno += 4;
Scores.Thomas += 4;

//Final Round : Worth 8 points
Scores.Arnold += 8;
Scores.Arnold += 8;
Scores.Sahvana += 8;
Scores.Barimah += 8;
Scores.Kenneth += 8;

console.log(Scores);

//WINNER IS ARNOLD
