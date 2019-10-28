$(document).ready(function() {

    //declare global variables
    userAnsArr = [];

    function hideQuestions() {
        $(".questions").hide();
    }

    hideQuestions();

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
        $("#timer").html("<h2>" + "Time left: " + minutes + ":" + seconds + "</h2>");
        if (number === 0) {
            stop();
            hideQuestions();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    $(".btn").on("click", function() {
        $(".questions").show();
        runTimer();
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
});