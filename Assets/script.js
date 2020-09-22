// title page

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
var countdown = 0;
timerPTag.textContent = "Time: " + countdown;
timerPTag.style.position = "fixed";
timerPTag.style.top = "0";
timerPTag.style.right = "0";
timerPTag.style.marginTop = "4px";
timerPTag.style.marginRight = "4px";

document.body.appendChild(timerPTag);

// Create a questions and answers array
var questionsAndAnswers = [{
        q: "Commonly used data types DO NOT include:",
        a: "1. strings",
        b: "2. booleans",
        c: "3. alerts",
        d: "4. numbers"
    },
    {
        q: "The condition in an if / else statement is enclosed within ____.",
        a: "1. quotes",
        b: "2. curly brackets",
        c: "3. parenthesis",
        d: "4. square brackets"
    },
    {
        q: "Arrays in JavaScript can be used to store ____.",
        a: "1. numbers and strings",
        b: "2. other arrays",
        c: "3. booleans",
        d: "4. all of the above"
    },
];


// create a div container for the Go Back and Clear High Scores buttons
var buttonContainer = document.createElement("div");
buttonContainer.style.textAlign = "center";
buttonContainer.style.marginLeft = "auto";
buttonContainer.style.marginRight = "auto";
buttonContainer.style.display = "block";
buttonContainer.setAttribute("id", "container")

// Create Go Back button 
var goBackButton = document.createElement("button");
goBackButton.textContent = "Go Back";
goBackButton.style.marginRight = "6px";
goBackButton.setAttribute("id", "goBack")

// Create Clear High Scores button 
var clearHighScoresButton = document.createElement("button");
clearHighScoresButton.textContent = "Clear High Scores";
clearHighScoresButton.style.marginLeft = "6px";
clearHighScoresButton.setAttribute("id", "clearHighScores")

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
    }
}

var clickStartQuiz = document.querySelector("#startQuiz");
clickStartQuiz.addEventListener("click", userTakesTest);

function userTakesTest() {
    document.body.removeChild(startQuizButton);
    document.body.removeChild(p1Tag);
    document.body.removeChild(h1Tag);
    h2Tag.textContent = questionsAndAnswers[0].q;

    document.body.appendChild(h2TagContainer);
    h2TagContainer.appendChild(h2TagInsideContainer);
    h2TagInsideContainer.appendChild(h2Tag);

    viewHighScoresPTag.setAttribute("id", "viewHighScoresFromQuiz");
    var clickViewHighScoresFromQuiz = document.querySelector("#viewHighScoresFromQuiz");
    clickViewHighScoresFromQuiz.addEventListener("click", goToHighScoresFromQuiz);
}

function goToHighScoresFromQuiz() {
    if (viewHighScoresPTag.id === "viewHighScoresFromQuiz") {
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
}