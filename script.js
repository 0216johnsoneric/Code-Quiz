// const seconds = document.querySelector("seconds");
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next")
const startText = document.getElementById("card-text");
const questionList = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById('answer-buttons')
var secondsElement = document.getElementById("seconds")
var messageElement = document.querySelector("h2");
var choicesList = document.getElementById("choices");
var formButton = document.createElement("button");
var formElement = document.createElement("div");
var mainElement = document.getElementById("main-content");

// var choicesList = document.querySelector("ul#choices");
// var indicator = document.querySelector("div#indicator");
// var timer = document.querySelector("div#timer");
var highscore = {
    initials: "",
    score: 0,
};
var highscores = [];
var secondsLeft;
var timerInterval;
var secondsLeft;

var questions = [
    {
        question: "What is the DOM?",
        choices: ["A. <Javascript>", "B. A mafia boss", "C. Document Object Model"],
        answer: 2,
    },
    {
        question: "How do you add an Event Listener?",
        choices: [
            "A. input.addEventListener('click', function)",
            "B. Beem me up scotty!",
            "C. Both are correct",
        ],
        answer: 0,
    },
    {
        question:
            "Which of the following is an incorrect way of defining a variable?",
        choices: [
            "A. const x = A",
            "B. B = bob",
            "C. var d = C",
        ],
        answer: 1,
    },
  
    {
    question: "Which is a querySelector Method?",
        choices: [
            "A. “Hello_world",
            "B. language.querySelector()",
            "C. document.querySelector()",
        ],
        answer: 2,
    },
];

init();

function init() {
    secondsLeft = 60;
    score = 0;
}

function startGame() {
    console.log("STARTED")
    startButton.remove();
    startText.remove();
    nextButton.classList.remove("hide");
    questionList.classList.remove("hide");
    timerInterval = setInterval(function () {
        secondsLeft--;
        secondsElement.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    newQuestions();
}

function newQuestions(questionNumber) {
    questionNumber = questionNumber || 0;
    var questionItem = questions[questionNumber];
    messageElement.textContent = questionItem.question;

    var newChoices = document.createElement("li");
    choicesList.appendChild(newChoices);

    for (var i = 0; i < questionItem.choices.length; i++) {
        var choice = questionItem.choices[i];

        var li = document.createElement("button");
        li.setAttribute("data-index", i);
        li.textContent = choice;
        newChoices.appendChild(li);
    }
    
}


startButton.addEventListener("click", startGame);