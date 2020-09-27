// h1 title tag
var h1Tag = document.createElement("h1");
h1Tag.textContent = "Coding Quiz Challenge";
h1Tag.setAttribute("id", "title")
h1Tag.style.textAlign = "center";

document.body.appendChild(h1Tag);

// h2 question tag
var h2Tag = document.createElement("h2");
h2Tag.textContent = "";
h2Tag.setAttribute("id", "titleQuestions");

// h2 container 
var h2TagContainer = document.createElement("div");
h2TagContainer.style.textAlign = "center";
h2TagContainer.setAttribute("id", "h2TagContainer")

// h2 second container
var h2TagInsideContainer = document.createElement("div");
h2TagInsideContainer.style.textAlign = "left";
h2TagInsideContainer.style.marginLeft = "auto";
h2TagInsideContainer.style.marginRight = "auto";
h2TagInsideContainer.style.display = "inline-block";

// p tag with code quiz instructions
var p1Tag = document.createElement("p");
p1Tag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your quiz time by ten seconds!";
p1Tag.style.textAlign = "center";
p1Tag.style.marginLeft = "auto";
p1Tag.style.marginRight = "auto";
p1Tag.style.width = "50%";
p1Tag.style.display = "block";

document.body.appendChild(p1Tag);

// Start Quiz button
var startQuizButton = document.createElement("button");
startQuizButton.textContent = "Start Quiz";
startQuizButton.style.marginLeft = "auto";
startQuizButton.style.marginRight = "auto";
startQuizButton.style.display = "block";
startQuizButton.setAttribute("id", "startQuiz")

document.body.appendChild(startQuizButton);

// View High Scores link at top left corner
var viewHighScoresPTag = document.createElement("p");
viewHighScoresPTag.textContent = "View High Scores";
viewHighScoresPTag.style.position = "fixed";
viewHighScoresPTag.style.top = "0";
viewHighScoresPTag.style.left = "0";
viewHighScoresPTag.style.marginTop = "4px";
viewHighScoresPTag.style.marginLeft = "4px";
viewHighScoresPTag.style.color = "rgb(117,92,150)";
viewHighScoresPTag.setAttribute("id", "viewHighScoresFromStart");

document.body.appendChild(viewHighScoresPTag);

// Timer at top right corner
var timerPTag = document.createElement("p");
timerPTag.textContent = "Time: " + "0";
timerPTag.style.position = "fixed";
timerPTag.style.top = "0";
timerPTag.style.right = "0";
timerPTag.style.marginTop = "4px";
timerPTag.style.marginRight = "4px";

document.body.appendChild(timerPTag);

// ul to hold li answer buttons 
var answerUlTag = document.createElement("ul");
answerUlTag.textContent = "";
answerUlTag.style.textAlign = "left";
answerUlTag.style.listStyleType = "none";
answerUlTag.setAttribute("id", "answerUlTag")

// correct or wrong text pop up if answered correctly
var correctOrWrongPTag = document.createElement("p");
correctOrWrongPTag.textContent = "";
correctOrWrongPTag.style.borderTop = "solid";
correctOrWrongPTag.style.color = "gray";
correctOrWrongPTag.setAttribute("id", "correctOrWrongPTag");
// correctOrWrongPTag.style.fontFamily = "";


// div container for the Go Back and Clear High Scores buttons
var buttonContainer = document.createElement("div");
buttonContainer.style.textAlign = "center";
buttonContainer.style.marginLeft = "auto";
buttonContainer.style.marginRight = "auto";
buttonContainer.style.display = "block";
buttonContainer.setAttribute("id", "container")

// Go Back button 
var goBackButton = document.createElement("button");
goBackButton.textContent = "Go Back";
goBackButton.style.marginRight = "6px";
goBackButton.setAttribute("id", "goBack")

// Clear High Scores button 
var clearHighScoresButton = document.createElement("button");
clearHighScoresButton.textContent = "Clear High Scores";
clearHighScoresButton.style.marginLeft = "6px";
clearHighScoresButton.setAttribute("id", "clearHighScores")

// questions and answers array
var questionsAndAnswers = [{
        q: "Commonly used data types DO NOT include:",
        0: "1. strings",
        1: "2. booleans",
        2: "3. alerts",
        3: "4. numbers",
        answer: "3. alerts"
    },
    {
        q: "The condition in an if / else statement is enclosed within ____.",
        0: "1. quotes",
        1: "2. curly brackets",
        2: "3. parenthesis",
        3: "4. square brackets",
        answer: "3. parenthesis"
    },
    {
        q: "Arrays in JavaScript can be used to store ____.",
        0: "1. numbers and strings",
        1: "2. other arrays",
        2: "3. booleans",
        3: "4. all of the above",
        answer: "4. all of the above"
    },
    {
        q: "Math.random() returns what? ",
        0: "1. numbers and strings",
        1: "2. a random number between 0 (exclusive), and 1 (inclusive)",
        2: "3. booleans",
        3: "4. a random number between 0 (inclusive), and 1 (exclusive)",
        answer: "4. a random number between 0 (inclusive), and 1 (exclusive)"
    },
    {
        q: "What keyword displays a box requesting user input?",
        0: "1. console.log",
        1: "2. prompt",
        2: "3. confirm",
        3: "4. alert",
        answer: "2. prompt"
    },
    {
        q: "What does DOM stand for?",
        0: "1. Document Observed Module",
        1: "2. Document Object Module",
        2: "3. Document Object Model",
        3: "4. Doughnuts Oreos Milk",
        answer: "3. Document Object Model"
    },
    {
        q: "Which of the following programming language is used for styling?",
        0: "1. JavaScript",
        1: "2. HTML",
        2: "3. CSS",
        3: "4. jQuery",
        answer: "3. CSS"
    },
];

// li answer buttons 
function createQuestionButtons(i) {
    while (answerUlTag.hasChildNodes()) {
        answerUlTag.removeChild(answerUlTag.childNodes[0]);
    }
    if (document.querySelector("#correctOrWrongPTag")) {
        document.body.removeChild(correctOrWrongPTag);
    }

    for (j = 0; j < 4; j++) {
        var buttonX = document.createElement("button");
        var liX = document.createElement("li");
        liX.setAttribute("data-index", i);
        buttonX.textContent = questionsAndAnswers[i][j];
        answerUlTag.appendChild(liX);
        liX.appendChild(buttonX);
    }

    document.body.appendChild(h2TagContainer);
    h2TagContainer.appendChild(h2TagInsideContainer);
    h2TagInsideContainer.appendChild(h2Tag);
    h2Tag.textContent = questionsAndAnswers[i].q;
    h2TagContainer.appendChild(answerUlTag);
    document.body.appendChild(answerUlTag);
}

// when View High Scores is clicked, show different h1 title, show high scores, show an input form for the user to enter a high score, show a Go Back button that'll lead back to the starting page, show a Clear High Scores button that'll clear the high scores list 

var clickViewHighScoresFromStart = document.querySelector("#viewHighScoresFromStart");
clickViewHighScoresFromStart.addEventListener("click", goToHighScoresFromStart);

function goToHighScoresFromStart() {
    if (viewHighScoresPTag.id === "viewHighScoresFromStart") {

        document.body.removeChild(timerPTag);
        document.body.removeChild(viewHighScoresPTag);
        document.body.removeChild(startQuizButton);
        document.body.removeChild(p1Tag);
        title.textContent = "High Scores";

        document.body.appendChild(buttonContainer);
        buttonContainer.appendChild(goBackButton);
        buttonContainer.appendChild(clearHighScoresButton);

        var clickGoBack = document.querySelector("#goBack");
        clickGoBack.addEventListener("click", goBackToStart);

        // have to add clear high scores functionality here later 
    }
}

function goBackToStart() {
    buttonContainer.removeChild(clearHighScoresButton);
    buttonContainer.removeChild(goBackButton);
    document.body.removeChild(buttonContainer);

    document.body.appendChild(p1Tag);
    document.body.appendChild(startQuizButton);
    document.body.appendChild(viewHighScoresPTag);
    document.body.appendChild(timerPTag);
    title.textContent = "Coding Quiz Challenge";
    viewHighScoresPTag.setAttribute("id", "viewHighScoresFromStart");
    timerPTag.textContent = "Time: " + "0";
}

function goToHighScoresFromQuiz() {
    if (viewHighScoresPTag.id === "viewHighScoresFromQuiz") {

        while (answerUlTag.hasChildNodes()) {
            answerUlTag.removeChild(answerUlTag.childNodes[0]);
        }

        h2TagInsideContainer.removeChild(h2Tag);
        h2TagContainer.removeChild(h2TagInsideContainer);
        document.body.removeChild(h2TagContainer);
        document.body.removeChild(timerPTag);
        document.body.removeChild(viewHighScoresPTag);

        document.body.appendChild(h1Tag);

        title.textContent = "High Scores";

        document.body.appendChild(buttonContainer);
        buttonContainer.appendChild(goBackButton);
        buttonContainer.appendChild(clearHighScoresButton);

        var clickGoBack = document.querySelector("#goBack");
        clickGoBack.addEventListener("click", goBackToStart);
    }
}

var clickStartQuiz = document.querySelector("#startQuiz");
clickStartQuiz.addEventListener("click", userTakesTest);

function userTakesTest() {
    document.body.removeChild(startQuizButton);
    document.body.removeChild(p1Tag);
    document.body.removeChild(h1Tag);

    let i = 0;
    // set timer to 50
    let countdown = 50;
    let status = false;
    timerPTag.textContent = "Time: " + countdown--;
    createQuestionButtons(i);
    i++;
    var timerInterval = setInterval(function () {
            timerPTag.textContent = "Time: " + countdown;
            countdown--;

            if (status) {
                createQuestionButtons(i);
                status = false;
                i++;
            }

            if (countdown <= 0) {
                clearInterval(timerInterval);
                // put a function here that brings user to All Done page
                console.log("test clearInterval for countdown");
            }
        },
        1000);

    var uLAnswerList = document.querySelector("#answerUlTag");
    uLAnswerList.addEventListener("click", function (event) {

        console.log("answer button pushed");

        var element = event.target;
        if (element.matches("button")) {
            var index = element.parentElement.getAttribute("data-index");
            if (element.textContent === questionsAndAnswers[index].answer) {
                console.log("correct!");
                correctOrWrongPTag.textContent = "Correct!";
                document.body.appendChild(correctOrWrongPTag);
                status = true;
                if (i === questionsAndAnswers.length) {
                    clearInterval(timerInterval);
                    console.log("test clearInterval for end of questions");
                    // call all done function here 
                }
            } else {
                console.log("wrong");
                countdown -= 5;
                correctOrWrongPTag.textContent = "Wrong!";
                document.body.appendChild(correctOrWrongPTag);
                status = false;
            }
        }
    });

    // clickViewHighScoresFromQuiz
    viewHighScoresPTag.setAttribute("id", "viewHighScoresFromQuiz");
    var clickViewHighScoresFromQuiz = document.querySelector("#viewHighScoresFromQuiz");
    clickViewHighScoresFromQuiz.addEventListener("click", goToHighScoresFromQuiz);
    clickViewHighScoresFromQuiz.addEventListener("click", function () {
        clearInterval(timerInterval);
    });
}