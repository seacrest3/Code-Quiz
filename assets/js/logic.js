//Module 6 Challenge: Coding Quiz Challenge

var startButton = document.getElementById("start");
var viewScores = document.getElementsByClassName("scores");
var countdownTimer = document.getElementsByClassName("timer");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var answerArrayList = document.getElementById("choices");
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
var questionNumber = 0;

// Create an array of 5 questions:
var questionsArray = [
    {
        question: "Question 1: Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        answerArray: ["(A) last()", "(B) put()", "(C) push()", "(D) None of the above"],
        correctAnswer: 2
    },
    {
        question: "Question 2: Which of the following function of Array object joins all elements of an array into a string?",
        answerArray: ["(A) concat()", "(B) join()", "(C) map()", "(D) pop()"],
        correctAnswer: 1
    },
    {
        question: "Question 3: Which of the following function of Array object sorts the elements of an array?",
        answerArray: ["(A) sort()", "(B)  toSource()", "(C) toString()", "(D) unshift()"],
        correctAnswer: 0
    },
    {
        question: "Question 4: Which of the following methods is/are used to access HTML elements using Javascript?",
        answerArray: ["(A) getElementbyId()", "(B) getElementbyClassName()", "(C) Both A and B", "(D) None of the above"],
        correctAnswer: 2
    },
    {
        question: "Question 5: Which of the following is not a Javascript framework",
        answerArray: ["(A) Node", "(B) Vue", "(C) React", "(D) Cassandra"],
        correctAnswer: 3
    }];

//Countdown timer
function setCountdownTimer() {
    var timeInterval = setInterval(function () {
        if (startQuiz) {
            time--;
        }
        if (questionNumber == questionsArray.length) {
            console.log("The value of questionNumber: " + questionNumber);
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            endQuiz();
        } else if (time < 0 ) {
            time = 0;
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

// Creat a new button and ID for each answer choice of a question
for (var j = 0; j < questionsArray[questionNumber].answerArray.length; j++) {
    var button = document.createElement("button");
    switch (j) {
        case 0:
            button.id = "answerArrayA";
            break;
        case 1:
            button.id = "answerArrayB";
            break;
        case 2:
            button.id = "answerArrayC";
            break;
        case 3:
            button.id = "answerArrayD";
            break;
    }

    answerArrayList.appendChild(button);
}
var answerArrayA = document.getElementById("answerArrayA");
var answerArrayB = document.getElementById("answerArrayB");
var answerArrayC = document.getElementById("answerArrayC");
var answerArrayD = document.getElementById("answerArrayD");

//Display question and answer choices
function setQuiz() {
    console.log("Type of answerArrayA: " + typeof (answerArrayA));
    console.log("questionNumber = " + questionNumber);
    questionTitle.textContent = questionsArray[questionNumber].question;
    answerArrayA.textContent = questionsArray[questionNumber].answerArray[0];
    answerArrayB.textContent = questionsArray[questionNumber].answerArray[1];
    answerArrayC.textContent = questionsArray[questionNumber].answerArray[2];
    answerArrayD.textContent = questionsArray[questionNumber].answerArray[3];
}

//Listener for answer choice (A) is selected
answerArrayA.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    correctAnswer = questionsArray[questionNumber].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //Correct answer clicked, play sound and add score
    if (correctAnswer === 0) {
        correct.play();
        score++;
    } else {
        //Wrong answer clicked, play sound and subtract time from the clock
        incorrect.play();
        time -= penalizedTime;
        if (time < 0) {
            time = 0;
        }
    }
    console.log("questionNumber = " + questionNumber);
    if (questionNumber === questionsArray.length - 1) {
        questionNumber++;
        endQuiz();
    } else {
        questionNumber++;
        console.log("questionNumber = " + questionNumber);
        setQuiz();
    };
});

//Listener for answer choice (B) is selected
answerArrayB.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    correctAnswer = questionsArray[questionNumber].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //Correct answer clicked, play sound and add score
    if (correctAnswer === 1) {
        correct.play();
        score++;
    } else {
        //incorrect answer clicked, play sound and subtract time from the clock
        incorrect.play();
        time -= penalizedTime;
        if (time < 0) {
            time = 0;
        }
    }
    console.log("questionNumber = " + questionNumber);
    if (questionNumber === questionsArray.length - 1) {
        questionNumber++;
        endQuiz();
    } else {
        questionNumber++;
        console.log("questionNumber = " + questionNumber);
        setQuiz();
    };
});

//Listener for answer choice (C) is selected
answerArrayC.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    correctAnswer = questionsArray[questionNumber].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //Correct answer clicked, play sound and add score
    if (correctAnswer === 2) {
        correct.play();
        score++;
    } else {
        //incorrect answer clicked, play sound and subtract time from the clock
        incorrect.play();
        time -= penalizedTime;
        if (time < 0) {
            time = 0;
        }
    }
    console.log("questionNumber = " + questionNumber);
    if (questionNumber === questionsArray.length - 1) {
        questionNumber++;
        endQuiz();
    } else {
        questionNumber++;
        console.log("questionNumber = " + questionNumber);
        setQuiz();
    };
});

//Listener for answer choice (D) is selected
answerArrayD.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    correctAnswer = questionsArray[questionNumber].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //Correct answer clicked, play sound and add score
    if (correctAnswer === 3) {
        correct.play();
        score++;
    } else {
        //incorrect answer clicked, play sound and subtract time from the clock
        incorrect.play();
        time -= penalizedTime;
        if (time < 0) {
            time = 0;
        }
    }
    console.log("questionNumber = " + questionNumber);
    if (questionNumber === questionsArray.length - 1) {
        questionNumber++;
        endQuiz();
    } else {
        questionNumber++;
        console.log("questionNumber = " + questionNumber);
        setQuiz();
    };
});

//Display end screen of the coding quiz
function endQuiz() {
    endScreen.style.display = "block";
    quizScreen.style.display = "none";
    document.getElementById("final-score").innerHTML = score;
}

//Set 'Submit' button attribute
submit.setAttribute('onclick', "submitScore()");

//Submit and save user initials and scores
function submitScore() {
    var initials = document.querySelector("#initials").value;
    console.log("Type of initials: " + typeof (initials));
    // Validate for user input of initials
    if (initials.length === 0) {
        alert("Initials must be entered! Try again!");
    } else {
        localStorage.setItem("initials", initials);
        localStorage.setItem('quizScores', score);
        countdownTimer[0].style.visibility = "hidden";
        viewScores[0].style.visibility = "hidden";
        location.assign("./highscores.html");
        console.log("value of quizScores: " + localStorage.getItem("quizScores"));
        console.log("value of initials: " + localStorage.getItem("initials"));
    }
}