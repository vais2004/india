var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Vaishnavi",
    score: 3,
  },

  {
    name: "Tejas",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "who is prime minister of India ? ",
  answer: "Narendra Modi"
}, {
  question: "who is president of India? ",
  answer: "Droupadi Murmu"
},
{
  question: "which is the national flower of India? ",
  answer: "Lotus"
}, {
  question: "which is the national animal of India? ",
  answer: "Tiger"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Vaishnavi?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
