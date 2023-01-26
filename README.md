# Code-Quiz
Build a timed coding quiz with multiple-choice questions

## Description

As part of an interview process, a typical coding assessment is a combination of multiple-choice questions and interactive coding challenges. It is tasked to apply javascript skilles to build a timed coding quiz with multiple-choice questions.

### User Story

AS A client, I WANT this app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It is expected to have a clean, polished, and responsive user interface.

### Acceptance Criteria

Create a code quiz that contains the following requirements:

* A start button that when clicked a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.
  * 
  * When answer is clicked, the next question appears
  * 
  * If the answer clicked was incorrect then subtract time from the clock

* The quiz should end when all questions are answered or the timer reaches 0.

  * When the game ends, it should display their score and give the user the ability to save their initials and their score

### Mock up and Functionality

The following image shows the web application's appearance and functionality:

![Coding Quiz mock up](./assets/sfx/Coding%20Quiz.gif)

When a user clicks on the 'Start Quiz' button, a timer starts to count down from 50 seconds

1. The first question appears with four answer choices (A), (B), (C) and (D)

2. When any one of the answer choices is clicked, the next question appears

3. If the answer is incorrect, the user is alerted by playing a short pulse of tone. It will penalize the time by 10 seconds. If the answer is correct, another short pulse of tune is played for a short time to appraise the user. A message is displayed for a second to show the answer is 'Correct!" or "Wrong!".

4. The quiz ends when all questions are answered or the timer counts down to 0.

5. When the quiz ends, the final score is displayed. The user can enter and submit their initials to save with their final score.

6. After submission, a summary of the initials and scores is displayed. The user is given the ability to clear their initials and scores or go back to start the quiz again.

### Review

TA, a Web Developer, reviews the code, providing feedback on errors and making sure that all of the acceptance criteria have been met.

* [The URL of the deployed application.](https://seacrest3.github.io/Code-Quiz/)

* [The URL of the GitHub repository.](https://github.com/seacrest3/Code-Quiz.git)

### Helpful Resources

- [MDN Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

- [W3Schools Javascript](https://www.w3schools.com/js/)

- [JavaScript Tutorial](https://www.javascripttutorial.net/)

- [freeCodeCamp.org](https://www.freecodecamp.org/)

- [Github Pages Guide](https://pages.github.com/)
