//Module 6 Challenge: Coding Quiz Challenge
//Set countdown timer, listeners for answer choice of each question
//Display end screen and save the final score and initials input by user

var startButton = document.getElementById("start");
var viewScores = document.getElementsByClassName("scores");
var countdownTimer = document.getElementsByClassName("timer");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("questions");
var correctAnswer = document.getElementById("correctAnswer");
var endScreen = document.getElementById("end-screen");
var submit = document.querySelector('#submit');
var correct = new Audio("assets/sfx/correct.wav");
var incorrect = new Audio("assets/sfx/incorrect.wav");
var time = 50;
var totalQuestions = 5;
var penalizedTime = 10;
var startQuiz = false;
var quizScores = [];
var score = 0;

var pTag = document.createElement("p");


//Set countdown timer
function setCountdownTimer() {
    var timeInterval = setInterval(function () {
        if (startQuiz) {
            time--;
        }
        if (time < 0) {
            time = 0;
            endQuiz();
        } else if (questionNumber == questionsArray.length) {
            // Stop the timer when all questions answered
            clearInterval(timeInterval);
            endQuiz();
        }
        document.getElementById("time").innerHTML = time;
    }, 1000);
}

//Listener for 'Start Quiz' button is clicked to start the coding quiz
startButton.addEventListener("click", function () {
    quizScreen.style.display = "block";
    startScreen.style.display = "none";
    setQuiz();
    startQuiz = true;
    setCountdownTimer();
});

//Listener for answer choice (A) is selected
answerArrayA.addEventListener('click', function (event) {
    // Prevent the default behavior
    event.preventDefault();
    correctAnswer = questionsArray[questionNumber].correctAnswer;
    //Correct answer clicked, play sound and add score
    if (correctAnswer === 0) {
        correct.play();
        score++;
        pTag.textContent = "Correct!"
        quizScreen.append(pTag);
        setTimeout(function () {
            pTag.textContent = ""
            quizScreen.append(pTag);
        },
            1000
        );
    } else {
        //Wrong answer clicked, play sound and subtract time from the clock
        incorrect.play();
        time -= penalizedTime;
        pTag.textContent = "Wrong!"
        quizScreen.append(pTag);
        setTimeout(function () {
            pTag.textContent = ""
            quizScreen.append(pTag);
        },
            1000
        );
        if (time < 0) {
            time = 0;
            endQuiz();
        }
    }
    if (questionNumber === questionsArray.length - 1) {
        questionNumber++;
        endQuiz();
    } else {
        questionNumber++;
        setQuiz();
    };
});

//Listener for answer choice (B) is selected
answerArrayB.addEventListener('click', function (event) {
    // Prevent the default behavior
    event.preventDefault();
    correctAnswer = questionsArray[questionNumber].correctAnswer;
    //Correct answer clicked, play sound and add score
    if (correctAnswer === 1) {
        correct.play();
        score++;
        pTag.textContent = "Correct!"
        quizScreen.append(pTag);
        setTimeout(function () {
            pTag.textContent = ""
            quizScreen.append(pTag);
        },
            1000
        );
    } else {
        //incorrect answer clicked, play sound and subtract time from the clock
        incorrect.play();
        time -= penalizedTime;
        pTag.textContent = "Wrong!"
        quizScreen.append(pTag);
        setTimeout(function () {
            pTag.textContent = ""
            quizScreen.append(pTag);
        },
            1000
        );
        if (time < 0) {
            time = 0;
            endQuiz();
        }
    }
    if (questionNumber === questionsArray.length - 1) {
        questionNumber++;
        endQuiz();
    } else {
        questionNumber++;
        setQuiz();
    };
});

//Listener for answer choice (C) is selected
answerArrayC.addEventListener('click', function (event) {
    // Prevent the default behavior
    event.preventDefault();
    correctAnswer = questionsArray[questionNumber].correctAnswer;
    //Correct answer clicked, play sound and add score
    if (correctAnswer === 2) {
        correct.play();
        score++;
        pTag.textContent = "Correct!"
        quizScreen.append(pTag);
        setTimeout(function () {
            pTag.textContent = ""
            quizScreen.append(pTag);
        },
            1000
        );
    } else {
        //incorrect answer clicked, play sound and subtract time from the clock
        incorrect.play();
        time -= penalizedTime;
        pTag.textContent = "Wrong!"
        quizScreen.append(pTag);
        setTimeout(function () {
            pTag.textContent = ""
            quizScreen.append(pTag);
        },
            1000
        );
        if (time < 0) {
            time = 0;
            endQuiz();
        }
    }
    if (questionNumber === questionsArray.length - 1) {
        questionNumber++;
        endQuiz();
    } else {
        questionNumber++;
        setQuiz();
    };
});

//Listener for answer choice (D) is selected
answerArrayD.addEventListener('click', function (event) {
    // Prevent the default behavior
    event.preventDefault();
    correctAnswer = questionsArray[questionNumber].correctAnswer;
    //Correct answer clicked, play sound and add score
    if (correctAnswer === 3) {
        correct.play();
        score++;
        pTag.textContent = "Correct!"
        quizScreen.append(pTag);
        setTimeout(function () {
            pTag.textContent = ""
            quizScreen.append(pTag);
        },
            1000
        );
    } else {
        //incorrect answer clicked, play sound and subtract time from the clock
        incorrect.play();
        time -= penalizedTime;
        pTag.textContent = "Wrong!"
        quizScreen.append(pTag);
        setTimeout(function () {
            pTag.textContent = ""
            quizScreen.append(pTag);
        },
            1000
        );
        if (time < 0) {
            time = 0;
            endQuiz();
        }
    } if (questionNumber === questionsArray.length - 1) {
        questionNumber++;
        endQuiz();
    } else {
        questionNumber++;
        setQuiz();
    };
});

//Display end screen of the coding quiz
function endQuiz() {
    endScreen.style.display = "block";
    quizScreen.style.display = "none";
    endScreen.append(pTag);
    console.log("The value of pTag: "+pTag);
    document.getElementById("final-score").innerHTML = score;
}

//Set 'Submit' button attribute
submit.setAttribute('onclick', "submitScore()");

//Submit and save user initials and scores
function submitScore() {
    var initials = document.querySelector("#initials").value;
    // Validate for user input of initials
    if (initials.length === 0) {
        alert("Initials must be entered! Try again!");
    } else {
        localStorage.setItem("initials", initials);
        localStorage.setItem('quizScores', score);
        countdownTimer[0].style.visibility = "hidden";
        viewScores[0].style.visibility = "hidden";
        location.assign("./highscores.html");
    }
}