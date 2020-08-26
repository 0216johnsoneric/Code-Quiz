const startButton = document.getElementById("start");
const nextButton = document.getElementById("next")
const startText = document.getElementById("card-text");
const questionList = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById('answer-buttons')
var secondsElement = document.getElementById("time-remaining")
var messageElement = document.querySelector("h2");
var choicesList = document.getElementById("choices");
var formButton = document.createElement("button");
var formElement = document.createElement("div");
var mainElement = document.getElementById("main-content");
var indicatorElement = document.getElementById("indicator");

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
    score = 0;
    secondsLeft = 60;
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

    var newChoices = document.createElement("div");
    // var newChoices = document.createElements("button");
    choicesList.appendChild(newChoices);

    for (var i = 0; i < questionItem.choices.length; i++) {
        var choice = questionItem.choices[i];

        var li = document.createElement("li");
        li.setAttribute("data-index", i);
        li.textContent = choice;
        newChoices.appendChild(li);

        li.addEventListener("click", function (event) {
            if (
                questionItem.answer ===
                parseInt(event.target.getAttribute("data-index"))
            ) {
                score += 10;
                indicatorElement.innerHTML = "<hr> Correct!";
                indicatorElement.setAttribute("style", "color: brightgreen");
            } else {
                secondsLeft -= 10;
                indicatorElement.innerHTML = "<hr> Try Again!";
                indicatorElement.setAttribute("style", "color: red");
            }

            questionNumber++;

            if (questionNumber === questions.length) {
                clearInterval(timerInterval);
                indicatorElement.textContent = "";
                newChoices.remove();
                messageElement.textContent = "Thanks for playing!";
                messageElement.appendChild(startText);
                startText.textContent = "Your final score is: " + score;

                renderForm();
            } else {
                setTimeout(function () {
                    newQuestions(questionNumber);
                    newChoices.remove();
                    indicatorElement.textContent = "";
                }, 1000);
            }
        });
    }
}



startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", newQuestions);