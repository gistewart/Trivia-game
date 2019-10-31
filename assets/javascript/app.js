$(document).ready(function() {

    //declare global variables for number of questions answered correctly, number of questions answered incorrectly and number of questions not answered
    let correctCounter = 0;
    let incorrectCounter = 0;
    let unansweredCounter = 0;

    //array to story user's answers
    let userAnsArr = [];

    //array to store the correct answers
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

    var number = 121;
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

    //function to calculate the results used above
    function calcResults() {
        //console log correct answers and user's answers
        console.log(correctAnsArr);
        console.log(userAnsArr);

        //------------------------------------------------
        //set up array to store user's correct answers only
        let userCorrectAnsArr = [];

        //push correct answers into this array by looping through user's answers and check to see if they are included in the correct answer array
        for (let i = 0; i < userAnsArr.length; i++) {
            if (correctAnsArr.indexOf(userAnsArr[i]) !== -1) {
                userCorrectAnsArr.push(userAnsArr[i]);
                correctCounter++;
            }
        }
        console.log("Correct answers array: " + userCorrectAnsArr);

        //determine NUMBER of correct answers
        console.log("Number of correct answers: " + correctCounter);

        //------------------------------------------------
        //set up array to store user's incorrect answers only
        let userIncorrectAnsArr = [];

        //push incorrect answers into this array by looping through user's answers and check to see if they are not included in the correct answer array
        for (let i = 0; i < userAnsArr.length; i++) {
            if (correctAnsArr.indexOf(userAnsArr[i]) === -1) {
                userIncorrectAnsArr.push(userAnsArr[i]);
            }
        }
        console.log("Incorrect answer array: " + userIncorrectAnsArr);

        // but need to modify this array to exclude empty values
        let filteredUserIncorrectAnsArr = userIncorrectAnsArr.filter(function(element) {
            if (element != "") return element;
        });
        console.log("Modified incorrect answer array: " + filteredUserIncorrectAnsArr);

        //determine NUMBER of non-empty elements in array
        incorrectCounter = filteredUserIncorrectAnsArr.length;
        console.log("Number of incorrect answers: " + incorrectCounter);

        //------------------------------------------------
        //Calculate number of unanswered questions
        unansweredCounter = correctAnsArr.length - correctCounter - incorrectCounter;

        console.log("Number of unanswered questions: " + unansweredCounter);

        //Write values to the DOM
        $("#numUserCorrectAns").text("Correct answers: " + correctCounter);
        $("#numUserIncorrectAns").text("Incorrect answers: " + incorrectCounter);
        $("#numUserEmpties").text("Unanswered questions: " + unansweredCounter);
    }
});