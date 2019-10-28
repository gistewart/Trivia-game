$(document).ready(function() {

    //declare global variables
    userAnsArr = [];

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