$(document).ready(function() {

    //declare global variables
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
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    $(".btn").on("click", function() {
        $(".opening").hide();
        $(".questions").show();
        // runTimer();
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
        console.log(correctAnsArr);

        var results1 = [];
        for (var i = 0; i < userAnsArr.length; i++) {
            if (correctAnsArr.indexOf(userAnsArr[i]) !== -1) {
                results1.push(userAnsArr[i]);
            }
        }
        console.log(results1);
        console.log(correctAnsArr.length);

        var empties = userAnsArr.length - userAnsArr.filter(function(x) { return true }).length;
        console.log(empties);
    });

});