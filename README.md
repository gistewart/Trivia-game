# Harry Potter Trivia Game

## Project Functionality

This is a game for web browsers where the user answers a number of questions. Radio buttons represent 4 possible answers to each question. The radio buttons mean only 1 answer can be provided. As soon as the game starts, a timer begins, and when the timer expires, the game ends and the results are shown. The user can opt to see the results earlier by clicking a Done button. Results for correct answers, incorrect answers and unanswered questions are shown.

## Project Challenges

The main challenges of this project, and the solutions used, were as follows:

1. display of questions and possible answers using DRY code: achieved using an array of objects (1 for each question) and a for loop to append the details to the DOM
2. capture of user answers: achieved by appending name and value attributes to each question as part of the above for loop
3. comparison of user answers and correct answers, but allowing for no user response to 1 or more questions: achieved by using .children() method to grab user's response and also the related question number. A comparison of user's answer and solution for the same question could then be performed via a for loop.
4. timer for the game: achieved by using setInterval and clearInterval jQuery methods
5. display results: achieved by using jQuery DOM manipulation

## Project Usefulness

This project demonstrates the applicaton of the jQuery library including click events, a timer, adding to and removing data from the DOM, and the .children() method.

## How to get started

On page load, the user just needs to click Start to start the game. The user can play as many times as they wish, but the questions remain the same.

## How to get help

[jQuery Official Website](https://jquery.com/)

## Project maintenance and contributions

This is not an original game. Instead, this project was prepared as part of an assignment for Georgia Tech's Coding Boot Camp.

## Deployed link

https://gistewart.github.io/TriviaGame/
