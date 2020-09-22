// title page

// h1 title tag
document.querySelector("h1").style.textAlign = "center";
h1Title = "";

// p tag with code quiz instructions
var p1Tag = document.createElement("p");
p1Tag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your quiz time by ten seconds!";
p1Tag.style.textAlign = "center";
p1Tag.style.marginLeft = "auto";
p1Tag.style.marginRight = "auto";
p1Tag.style.width = "50%";
p1Tag.style.display = "block";
p1Tag.style.fontWeight = "bold";

document.body.appendChild(p1Tag);

// View High Scores link at top left corner
var viewHighScoresPTag = document.createElement("p");
viewHighScoresPTag.textContent = "View High Scores";
viewHighScoresPTag.style.position = "fixed";
viewHighScoresPTag.style.top = "0";
viewHighScoresPTag.style.left = "0";
viewHighScoresPTag.style.marginTop = "4px";
viewHighScoresPTag.style.marginLeft = "4px";
viewHighScoresPTag.style.fontWeight = "bold";
viewHighScoresPTag.style.color = "purple";
viewHighScoresPTag.setAttribute("id", "viewHighScores");

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
timerPTag.style.fontWeight = "bold";

document.body.appendChild(timerPTag);

// when View High Scores is clicked, show different h1 title, show high scores, show an input form for the user to enter a high score, show a Go Back button that'll lead back to the starting page, show a Clear High Scores button that'll clear the high scores list 
var clickViewHighScores = document.querySelector("#viewHighScores");
clickViewHighScores.addEventListener("click", function () {
    title.textContent = "High Scores";
    viewHighScoresPTag.textContent = "";
    p1Tag.textContent = "";
    timerPTag.textContent = "";
});