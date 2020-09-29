// h1 tag to display the titles for the starting page and high scores page
var h1Tag = document.createElement("h1");
h1Tag.textContent = "Coding Quiz Challenge";
h1Tag.setAttribute("id", "title")
h1Tag.style.textAlign = "center";
document.body.appendChild(h1Tag);

// p tag to display code quiz instructions on the starting page
var p1Tag = document.createElement("p");
p1Tag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your quiz time by 5 seconds and penalize your score by 2! Each correct answer adds 5 to your score! Good luck!";
p1Tag.style.textAlign = "center";
p1Tag.style.marginLeft = "auto";
p1Tag.style.marginRight = "auto";
p1Tag.style.width = "auto";
p1Tag.style.display = "block";
document.body.appendChild(p1Tag);

// start quiz button on the starting page
var startQuizButton = document.createElement("button");
startQuizButton.textContent = "Start Quiz";
startQuizButton.style.marginLeft = "auto";
startQuizButton.style.marginRight = "auto";
startQuizButton.style.display = "block";
startQuizButton.setAttribute("id", "startQuiz")
document.body.appendChild(startQuizButton);

// view high scores link at top left corner
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

// timer at top right corner
var timerPTag = document.createElement("p");
timerPTag.textContent = "Time: " + "0";
timerPTag.style.position = "fixed";
timerPTag.style.top = "0";
timerPTag.style.right = "0";
timerPTag.style.marginTop = "4px";
timerPTag.style.marginRight = "4px";
document.body.appendChild(timerPTag);

// container to hold the questions and answers during the quiz
var h2UlTagContainer = document.createElement("div");
h2UlTagContainer.style.textAlign = "left";
h2UlTagContainer.setAttribute("id", "h2UlTagContainer")

// h2 tag to display each question and all done title
var h2Tag = document.createElement("h2");
h2Tag.textContent = "";
h2Tag.setAttribute("id", "titleQuestions");

// ul to hold li answer buttons 
var answerUlTag = document.createElement("ul");
answerUlTag.textContent = "";
answerUlTag.style.textAlign = "left";
answerUlTag.style.listStyleType = "none";
answerUlTag.style.paddingLeft = "0px";
answerUlTag.setAttribute("id", "answerUlTag")

// p tag for all done page to display final score
var p2Tag = document.createElement("p");
p2Tag.textContent = "";
p2Tag.style.textAlign = "left";
p2Tag.setAttribute("id", "p2Tag")

// form for all done page
var allDoneForm = document.createElement("form");
allDoneForm.setAttribute("method", "post");
allDoneForm.setAttribute("id", "allDoneForm")
allDoneForm.textContent = "Enter initials: "
var allDoneInput = document.createElement("input");
allDoneInput.setAttribute("id", "allDoneInput")
var allDoneButton = document.createElement("button");
allDoneButton.setAttribute("id", "submit");
allDoneButton.textContent = "Submit";
allDoneButton.style.marginLeft = "6px";

// ul to hold high scores list
var highScoresUlTag = document.createElement("ul");
highScoresUlTag.textContent = "";
highScoresUlTag.style.paddingLeft = "0px";
highScoresUlTag.style.textAlign = "left";
highScoresUlTag.style.listStyleType = "none";
highScoresUlTag.setAttribute("id", "highScoresUlTag")

// correct or wrong text pop up
var correctOrWrongPTag = document.createElement("p");
correctOrWrongPTag.textContent = "";
correctOrWrongPTag.style.borderTop = "solid";
correctOrWrongPTag.style.color = "gray";
correctOrWrongPTag.setAttribute("id", "correctOrWrongPTag");

// container for the Go Back and Clear High Scores buttons on high scores page
var buttonContainer = document.createElement("div");
buttonContainer.style.textAlign = "left";
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
        0: "1. a random number between 1 and 10",
        1: "2. a random number between 0 (exclusive), and 1 (inclusive)",
        2: "3. a random number between 50 and 100",
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
        q: "Which of the following programming languages is used for styling?",
        0: "1. JavaScript",
        1: "2. HTML",
        2: "3. CSS",
        3: "4. jQuery",
        answer: "3. CSS"
    },
];

// empty arrays to hold the initials and scores for the high scores page 
var highScoresInitials = [];
var highScores = [];

// event listener for when the user clicks the view high scores link from the starting page 
var clickViewHighScoresFromStart = document.querySelector("#viewHighScoresFromStart");
clickViewHighScoresFromStart.addEventListener("click", goToHighScoresFromStart);

// event listener for when the user clicks the start quiz button 
var clickStartQuiz = document.querySelector("#startQuiz");
clickStartQuiz.addEventListener("click", userTakesQuiz);

// this function is called when the user clicks the view high scores link from the starting page 
function goToHighScoresFromStart() {
    // this if statement tests to ensure that this function runs only when the user clicks on the view high scores link from the starting page 
    if (viewHighScoresPTag.id === "viewHighScoresFromStart") {
        // remove elements that aren't on the high scores page
        document.body.removeChild(timerPTag);
        document.body.removeChild(viewHighScoresPTag);
        document.body.removeChild(startQuizButton);
        document.body.removeChild(p1Tag);
        // change title from Coding Quiz Challenge to High Scores and align the text left 
        h1Tag.style.textAlign = "left";
        title.textContent = "High Scores";
        // call the renderHighScoresList function to create the high scores list 
        renderHighScoresList();
        // add the go back and clear high scores button elements 
        document.body.appendChild(buttonContainer);
        buttonContainer.appendChild(goBackButton);
        buttonContainer.appendChild(clearHighScoresButton);
        // event listener for when the user clicks the go back button 
        var clickGoBack = document.querySelector("#goBack");
        clickGoBack.addEventListener("click", goBackToStart);
        // event listener for when the user clicks the clear high scores button 
        var clickClearHighScores = document.querySelector("#clearHighScores");
        clickClearHighScores.addEventListener("click", clearHighScores);
    }
}

// this function is called when the user clicks the go back button from the high scores page 
function goBackToStart() {
    // this if statement tests to ensure that the high scores list is removed from display 
    if (document.querySelector("#highScoresUlTag")) {
        document.body.removeChild(highScoresUlTag);
    }

    // remove elements that aren't on the starting page
    buttonContainer.removeChild(clearHighScoresButton);
    buttonContainer.removeChild(goBackButton);
    document.body.removeChild(buttonContainer);

    // add elements that are on the starting page 
    document.body.appendChild(p1Tag);
    document.body.appendChild(startQuizButton);
    document.body.appendChild(viewHighScoresPTag);
    document.body.appendChild(timerPTag);
    h1Tag.style.textAlign = "center";
    title.textContent = "Coding Quiz Challenge";
    viewHighScoresPTag.setAttribute("id", "viewHighScoresFromStart");
    timerPTag.textContent = "Time: " + "0";
}

// this function is called when the user clicks the start quiz button
function userTakesQuiz() {
    // remove elements that aren't present during the quiz
    document.body.removeChild(startQuizButton);
    document.body.removeChild(p1Tag);
    document.body.removeChild(h1Tag);

    // initialize variables
    let score = 0;
    let i = 0;
    let countdown = 50; // countdown set to 50 seconds
    let status = false; // this status variable is to keep track of if the user gets the question correct so the next question can be rendered

    // display countdown timer and call the createQuestionButtons function once before getting into the setInterval function to account for the 1 second delay 
    timerPTag.textContent = "Time: " + countdown--;
    createQuestionButtons(i);
    i++;
    // this if statement tests to make sure the text showing the user's final score is removed if the user decides to take the quiz again
    if (document.querySelector("#p2Tag")) {
        h2UlTagContainer.removeChild(p2Tag);
    }
    // this if statement tests to make sure the form is removed
    if (document.querySelector("#allDoneForm")) {
        h2UlTagContainer.removeChild(allDoneForm);
    }
    // this if statement tests to make sure the correct/wrong pop up goes away
    if (document.querySelector("#correctOrWrongPTag")) {
        h2UlTagContainer.removeChild(correctOrWrongPTag);
    }
    // interval function 
    var timerInterval = setInterval(function () {
            // display updated timer
            timerPTag.textContent = "Time: " + countdown;
            countdown--;
            // this if statement tests to make sure the next question isn't displayed until the user gets the current question correct
            if (status) {
                createQuestionButtons(i);
                status = false;
                i++;
            }
            // this if statement tests when the countdown is done so the quiz can be ended. When the quiz ends, the allDonePage function is called and passed the user's score as an argument
            if (countdown <= 0) {
                timerPTag.textContent = "Time: " + 0;
                clearInterval(timerInterval);
                allDonePage(score);
                i = 0; // set i back to 0 to ensure quiz can be retaken
                return; // return to make sure this function is no longer running
            }
        },
        1000);
    // event listener for when the user clicks any of the answer buttons 
    var uLAnswerList = document.querySelector("#answerUlTag");
    uLAnswerList.addEventListener("click", function (event) {
        // assign the target to a variable to make sure the element captured is a button 
        var element = event.target;
        if (element.matches("button")) {
            // this index variable gets the data-index of the button so that the button's text content can be compared to the correct answer in the questionsAndAnswers array 
            var index = element.parentElement.getAttribute("data-index");
            // test if correct and if so, add to score and set status to true so that the next question can be rendered
            if (element.textContent === questionsAndAnswers[index].answer) {
                correctOrWrongPTag.textContent = "Correct!";
                h2UlTagContainer.appendChild(correctOrWrongPTag);
                score += 5;
                status = true;
                // this if statement tests when the user has reached the last question and has answered it correctly so the quiz can be ended. When the quiz ends, the allDonePage function is called and passed the user's score as an argument
                if (i === questionsAndAnswers.length) {
                    clearInterval(timerInterval);
                    allDonePage(score);
                    i = 0; // set i back to 0 to ensure quiz can be retaken
                    return; // return to make sure this function is no longer running
                }
            } else {
                countdown -= 5;
                correctOrWrongPTag.textContent = "Wrong!";
                h2UlTagContainer.appendChild(correctOrWrongPTag);
                // this if statement tests to make sure the user's score is never negative and will otherwise subtract 2
                if (score <= 0) {
                    score = 0;
                } else {
                    score -= 2;
                }
                status = false;
            }
        }
    });
    // event listener for when the user clicks the view high scores link during the quiz. The click will send the user to the high scores page and also end the quiz
    viewHighScoresPTag.setAttribute("id", "viewHighScoresFromQuiz");
    var clickViewHighScoresFromQuiz = document.querySelector("#viewHighScoresFromQuiz");
    clickViewHighScoresFromQuiz.addEventListener("click", goToHighScoresFromQuiz);
    clickViewHighScoresFromQuiz.addEventListener("click", function () {
        clearInterval(timerInterval);
    });
}

// this function creates the multiple choice answer buttons
function createQuestionButtons(i) {
    // this while loop removes the previous answer buttons so it's clear for the next set of buttons
    while (answerUlTag.hasChildNodes()) {
        answerUlTag.removeChild(answerUlTag.childNodes[0]);
    }
    // this if statement tests to make sure the correct/wrong pop up goes away
    if (document.querySelector("#correctOrWrongPTag")) {
        h2UlTagContainer.removeChild(correctOrWrongPTag);
    }

    // for loop to iterate through the object at index i in the questionsAndAnswers array. i is used as a parameter here that is sent from the userTakesQuiz function. The data-index attribute set here is used in the userTakesQuiz function to compare the answer button pressed by the user with the answer in the questionsAndAnswers array
    for (j = 0; j < 4; j++) {
        var buttonX = document.createElement("button");
        var liX = document.createElement("li");
        liX.setAttribute("data-index", i);
        buttonX.textContent = questionsAndAnswers[i][j];
        answerUlTag.appendChild(liX);
        liX.appendChild(buttonX);
    }
    // display question and answer buttons to the user 
    document.body.appendChild(h2UlTagContainer);
    h2UlTagContainer.appendChild(h2Tag);
    h2Tag.textContent = questionsAndAnswers[i].q;
    h2UlTagContainer.appendChild(answerUlTag);
}

// this function renders the all done page when the quiz ends. It takes in one argument passed from the userTakesQuiz function which represents the user's score
function allDonePage(x) {
    // this while loop removes the previous answer buttons so it's clear for the next set of buttons
    while (answerUlTag.hasChildNodes()) {
        answerUlTag.removeChild(answerUlTag.childNodes[0]);
    }
    // this if statement tests to make sure the correct/wrong pop up goes away
    if (document.querySelector("#correctOrWrongPTag")) {
        h2UlTagContainer.removeChild(correctOrWrongPTag);
    }
    // display all done text, score, and form to the user 
    h2Tag.textContent = "All done!";
    p2Tag.textContent = "Your final score is " + x;
    h2UlTagContainer.appendChild(h2Tag);
    h2UlTagContainer.appendChild(p2Tag);
    h2UlTagContainer.appendChild(allDoneForm);
    allDoneForm.appendChild(allDoneInput);
    allDoneForm.appendChild(allDoneButton);
    // add the score to the highScores array to save user progress 
    highScores.push(x);
    // event listener for when the user clicks the submit button after entering their initials.
    var submitEl = document.querySelector("#submit");
    submitEl.addEventListener("click", function (event) {
        event.preventDefault();
        // this if statement tests to make sure the user cannot input an empty string
        if (allDoneInput.value.trim() === "") {
            return;
        }
        // add user input to highScoresInitials array for saving
        highScoresInitials.push(allDoneInput.value.trim());
        goToHighScoresFromQuiz(); // this takes the user to the high scores list after clicking submit
        allDoneInput.value = ""; // clear the input field on the form
    });
}

// this function is called when the user clicks the view high scores link during the quiz 
function goToHighScoresFromQuiz() {
    // this if statement tests to ensure that this function runs only when the user clicks on the view high scores link from the quiz
    if (viewHighScoresPTag.id === "viewHighScoresFromQuiz") {
        // this while loop removes the answer buttons
        while (answerUlTag.hasChildNodes()) {
            answerUlTag.removeChild(answerUlTag.childNodes[0]);
        }
        // remove elements that aren't on the high scores page
        h2UlTagContainer.removeChild(h2Tag);
        document.body.removeChild(h2UlTagContainer);
        document.body.removeChild(timerPTag);
        document.body.removeChild(viewHighScoresPTag);
        // change title to High Scores and align the text left 
        h1Tag.style.textAlign = "left";
        document.body.appendChild(h1Tag);
        title.textContent = "High Scores";
        // call the renderHighScoresList function to create the high scores list 
        renderHighScoresList();
        // add the go back and clear high scores button elements 
        document.body.appendChild(buttonContainer);
        buttonContainer.appendChild(goBackButton);
        buttonContainer.appendChild(clearHighScoresButton);
        // event listener for when the user clicks the go back button 
        var clickGoBack = document.querySelector("#goBack");
        clickGoBack.addEventListener("click", goBackToStart);
        // event listener for when the user clicks the clear high scores button 
        var clickClearHighScores = document.querySelector("#clearHighScores");
        clickClearHighScores.addEventListener("click", clearHighScores);
    }
}

// this function is called when the high scores page is to be displayed
function renderHighScoresList() {
    // clear it out first
    highScoresUlTag.innerHTML = "";
    // then create it using the highScoresInitials and highScores arrays to display data that has been saved from previous quiz takes 
    let j = 1;
    for (let i = 0; i < highScoresInitials.length; i++) {
        var liTag = document.createElement("li");
        var textNode = document.createTextNode(j + ". " + highScoresInitials[i] + " - " + highScores[i]);
        liTag.style.backgroundColor = "rgb(239, 231, 247)";
        document.body.appendChild(highScoresUlTag);
        highScoresUlTag.appendChild(liTag);
        liTag.appendChild(textNode);
        j++;
    }
}

// this function is called when the user clicks the clear high scores button
function clearHighScores() {
    // the list is cleared by clearing the two arrays and rendering the list
    highScoresInitials = [];
    highScores = [];
    renderHighScoresList();
}