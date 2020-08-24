// const seconds = document.querySelector("seconds");
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next")
const startText = document.getElementById("card-text");
const questionList = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById('answer-buttons')


// var choicesList = document.querySelector("ul#choices");
// var indicator = document.querySelector("div#indicator");
// var timer = document.querySelector("div#timer");
// var secondsLeft;

var questions = [
    {
        question: "What is the DOM?",
        answers: ["A. <Javascript>", "B. A mafia boss", "C. Document Object Model"],
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
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    // nextQuestion();
}




startButton.addEventListener("click", startGame);