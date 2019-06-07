// Questions for the trivia game
var questions = [{
    question: "Which of the two NBA teams, are currently in the NBA Finals?",
    answers: ["Cleveland Cavaliers vs. Denver Nuggets",
        "San Antonio Spurs vs. Golden State Warriors",
        "Golden State Warriors vs. Toronto Raptors",
        "Los Angeles Lakers vs. Toronto Raptors"
    ],
    correctAnswer: "Golden State Warriors vs. Toronto Raptors"
}, {
    question: "Which team was the 2018 NBA Finals Championship?",
    answers: ["Cleveland Cavaliers", "Golden State Warriors", "Milwaukee Bucks", "San Antonio Spurs"],
    correctAnswer: "Golden State Warriors"
}, {
    question: "Which team has more wins, as of June 6th, 2019?",
    answers: ["The series is tied 1-1", "Golden State Warriors lead the series 3-2",
        "Toronto Raptors lead the series 3-1", "Toronto leads the series 2-1"
    ],
    correctAnswer: "Toronto leads the series 2-1"
}, {
    question: "Which team does the former San Antonio Spurs team member, Kawhi Leonard, play for?",
    answers: ["He is still with the San Antonio Spurs", "Golden State Warriors", "Toronto Raptors",
        "None, he is not in the finals"
    ],
    correctAnswer: "Toronto Raptors"
}]

// User will have 120 seconds to complete the trivia
var correct = 0;
var incorrect = 0;
var counter = 120;

// Countdown
function start() {
    timer = setInterval(countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>")
    $("#start").remove();

    // Start the questions
    for (var i = 0; i < questions.length; i++) {
        $("#quiz-area").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#quiz-area").append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }


    }
    // Once the user is done with the questions, click done
    $("#quiz-area").append("<button id='done'>Done</button>");
}

// End game when counter gets to 0
function countdown() {
    counter--;
    $("#counter-number").html(counter);
    if (counter === 0) {
        console.log("time is up");
        endGame();
    }
}