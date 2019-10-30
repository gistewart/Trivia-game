$(document).ready(function() {

    //declare global variables
    let numUserCorrectAns = 0;
    let numUserIncorrectAns = 0;
    let numUserEmpties = 0;
    let userAnsArr = [];

    //array to store the correct answers to the questions
    const correctAnsArr = ["01A", "02D", "03A", "04C", "05A", "06B", "07B", "08D"];

    //there are 3 views to show the user, depending on phase of game: opening, questions and results

    function hideQuestions() {
        $(".questions").hide();
    }

    function hideOpening() {
        $(".opening").hide();
    }

    function showResults() {
        $(".results").show();
    }

    function hideResults() {
        $(".results").hide();
    }
    //Questions and Results are hidden on page load
    hideQuestions();
    hideResults();

    $(".start").on("click", function() {
        $(".opening").hide();
        $(".questions").show();
        runTimer();
    });

    // Code for timer
    // Upon the earlier of the timer expiring or the user clicking "Done", the question view is hidden, the results view is shown, and the results are calculated

    var number = 11;
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


    //click events when user selects an answer; answer stored in indexed position in user answer array
    $(".Q01").on("click", function() {
        let answer = $('input[name="optradio01"]:checked').val();
        console.log(answer);
        userAnsArr[0] = answer;
    });

    $(".Q02").on("click", function() {
        let answer = $('input[name="optradio02"]:checked').val();
        console.log(answer);
        userAnsArr[1] = answer;
    });

    $(".Q03").on("click", function() {
        let answer = $('input[name="optradio03"]:checked').val();
        console.log(answer);
        userAnsArr[2] = answer;
    });

    $(".Q04").on("click", function() {
        let answer = $('input[name="optradio04"]:checked').val();
        console.log(answer);
        userAnsArr[3] = answer;
    });

    $(".Q05").on("click", function() {
        let answer = $('input[name="optradio05"]:checked').val();
        console.log(answer);
        userAnsArr[4] = answer;
    });

    $(".Q06").on("click", function() {
        let answer = $('input[name="optradio06"]:checked').val();
        console.log(answer);
        userAnsArr[5] = answer;
    });

    $(".Q07").on("click", function() {
        let answer = $('input[name="optradio07"]:checked').val();
        console.log(answer);
        userAnsArr[6] = answer;
    });

    $(".Q08").on("click", function() {
        let answer = $('input[name="optradio08"]:checked').val();
        console.log(answer);
        userAnsArr[7] = answer;
    });

    //Function to calculate the results used above
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