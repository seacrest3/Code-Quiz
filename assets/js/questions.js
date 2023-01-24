//Module 6 Challenge: Coding Quiz Challenge
// Set out the quiz question and answer choices

//Linking the elements
var questionTitle = document.getElementById("question-title");
var answerArrayList = document.getElementById("choices");
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

// Creat a button element and id for each answer choice of a question
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
    questionTitle.textContent = questionsArray[questionNumber].question;
    answerArrayA.textContent = questionsArray[questionNumber].answerArray[0];
    answerArrayB.textContent = questionsArray[questionNumber].answerArray[1];
    answerArrayC.textContent = questionsArray[questionNumber].answerArray[2];
    answerArrayD.textContent = questionsArray[questionNumber].answerArray[3];
}