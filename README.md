# Harry Potter Trivia Game

## Project Functionality
This is a game for web browsers where the user answers a number of questions.  Radio buttons represent 4 possible answers to each question. The radio buttons mean only 1 answer can be provided. As soon as the game starts, a timer begins, and when the timer expires, the game ends and the results are shown. The user can opt to see the results earlier by clicking a Done button. Results for correct answers, incorrect answers and unanswered questions are shown.

## Project Challenges
The main challenges of this project, and the solutions used, were as follows:
    - capture user answers: achieved using jQuery on click event
    - update user answers if user changes their mind: achieved by storing the answer to each question in an indexed position in an array, allowing an update process
    - comparison of user answers and correct answers: achieved by using a for loop to see how many answers in the user answer array were a) included and b) not included in the correct answer array
    - timer for the game: achieved by using setInterval and clearInterval jQuery methods
    - display results: achieved by using jQuery DOM manipulation

## Project Usefulness
This project demonstrates the applicaton of the jQuery library including click events, a timer, content being hidden and displayed, and updates to the HTML file based on user behavior. 

## How to get started
On page load, the user just needs to click Start to start the game. The user can play as many times as they wish by refreshing the page, but the questions remain the same. 

## How to get help
[jQuery Official Website](https://jquery.com/)

## Project maintenance and contributions
This is not an original game.  Instead, this project was prepared as part of an assignment for Georgia Tech's Coding Boot Camp.



