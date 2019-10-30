$(document).ready(function() {

    //declare global variables
    let numUserCorrectAns = 0;
    let numUserIncorrectAns = 0;
    let numUserEmpties = 0;
    let userAnsArr = [];
    const correctAnsArr = ["01C", "02D", "03A"];

    function hideQuestions() {
        $(".questions").hide();
    }

    function hideOpener() {
        $(".Opening").hide();
    }

    function showResults() {
        $(".results").show();
    }

    function hideResults() {
        $(".results").hide();
    }

    hideQuestions();
    hideResults();

    $(".start").on("click", function() {
        $(".opening").hide();
        $(".questions").show();
        runTimer();
    });

    // Timer
    var number = 10;
    var intervalId;

    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        minutes = parseInt(number / 60, 10);
        seconds = parseInt(number % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $("#timer").html("Time remaining " + minutes + ":" + seconds);
        if (number === 0) {
            stop();
            hideQuestions();
            showResults();
            calcResults();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    $(".done").on("click", function() {
        stop();
        hideQuestions();
        showResults();
        calcResults();
    });

    $(".Q01").on("click", function() {
        console.log("Q1 just got clicked");
        let answer = $('input[name="optradio01"]:checked').val();
        console.log(answer);
        userAnsArr[0] = answer;
        console.log(userAnsArr);
    });

    $(".Q02").on("click", function() {
        console.log("Q2 just got clicked");
        let answer = $('input[name="optradio02"]:checked').val();
        console.log(answer);
        userAnsArr[1] = answer;
        console.log(userAnsArr);
    });

    $(".Q03").on("click", function() {
        console.log("Q3 just got clicked");
        let answer = $('input[name="optradio03"]:checked').val();
        console.log(answer);
        userAnsArr[2] = answer;
        console.log(userAnsArr);
    });
    //Function to calculate the results


    function calcResults() {
        //console log correct answers and user's answers
        console.log(correctAnsArr);
        console.log(userAnsArr);

        //set up array to store user's correct answers only
        let userCorrectAnsArr = [];

        //push correct answers into this array by looping through user's answers and check to see if they are included in the correct answer array
        for (let i = 0; i < userAnsArr.length; i++) {
            if (correctAnsArr.indexOf(userAnsArr[i]) !== -1) {
                userCorrectAnsArr.push(userAnsArr[i]);
            }
        }
        console.log(userCorrectAnsArr);

        //determine NUMBER of correct answers
        numUserCorrectAns = userCorrectAnsArr.length;
        console.log("Number of correct answers: " + numUserCorrectAns);

        // check for NUMBER of unanswered questions, allowing for all questions either being answered or all questions not being answered
        console.log(userAnsArr.length);
        let numUserEmpties = 0;
        if (userAnsArr.length > 0) {
            numUserEmpties = userAnsArr.length - userAnsArr.filter(function(x) { return true }).length;
        } else if (userAnsArr.length == correctAnsArr.length) {
            numUserEmpties = 0
        } else {
            numUserEmpties = correctAnsArr.length;
        }
        console.log("Number of unanswered questions: " + numUserEmpties);

        //calculate NUMBER of incorrect answers
        let numUserIncorrectAns = correctAnsArr.length - numUserCorrectAns - numUserEmpties;
        console.log("Number of incorrect answers: " + numUserIncorrectAns);

        //Write values to the DOM
        $("#numUserCorrectAns").text("Correct answers: " + numUserCorrectAns);
        $("#numUserIncorrectAns").text("Incorrect answers: " + numUserIncorrectAns);
        $("#numUserEmpties").text("Unanswered questions: " + numUserEmpties);
    }
});