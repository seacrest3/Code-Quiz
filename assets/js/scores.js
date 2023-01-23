//Module 6 Challenge: Coding Quiz Challenge

//Retrieve and render user initials and scores from storage 
var scoreList = document.querySelector("#highscores");
var clearHighScores = document.querySelector("#clear");
var initials = localStorage.getItem("initials");
var highScores = localStorage.getItem("quizScores");

if (typeof initials !== 'undefined' && initials !== null)
renderScore();

//Create and list out user initials and scores 
function renderScore() {
    var li = document.createElement("li");
    li.textContent = initials + " - " + highScores;
    scoreList.appendChild(li);
}

//Listener for clearing highscores
clearHighScores.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("highscores").style.display = "none";
  localStorage.clear();
})
