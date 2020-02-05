$(document).ready(function() {
  card = $("#question-container");

  var questions = [
    {
      question: "Who is the author of Harry Potter?",
      answers: [
        "J.K. Rowling",
        "David Williams",
        "Lois Lowry",
        "Louis Tomlinson"
      ],
      correctAnswer: "J.K. Rowling"
    },
    {
      question: "Who did Snape fall in love with when he was at Hogwarts?",
      answers: [
        "Molly Weasley",
        "Bellatrix Lestrange",
        "Professor McGonagall",
        "Lily Evans"
      ],
      correctAnswer: "Lily Evans"
    },
    {
      question: "Who killed Nagini at the Battle of Hogwarts",
      answers: [
        "Neville Longbottom",
        "Harry Potter",
        "Ron Weasley",
        "Molly Weasley"
      ],
      correctAnswer: "Neville Longbottom"
    },
    {
      question: "What house is Harry’s son, Albus Severus, sorted into?",
      answers: ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"],
      correctAnswer: "Slytherin"
    },
    {
      question:
        "Which body part of Peter Petigrew is left after Sirius Black “kills” him?",
      answers: ["Finger", "Arm", "Ear", "Eyeball"],
      correctAnswer: "Finger"
    },
    {
      question:
        "What wizarding family helps Harry get on the Hogwarts Express in his first year?",
      answers: ["Dumbledores", "Weasleys", "Malfoys", "Riddles"],
      correctAnswer: "Weasleys"
    },
    {
      question: "Who doesn’t want Harry to go to school in his second year?",
      answers: ["Hagrid", "Dobby", "Dumbledore", "Mrs Weasley"],
      correctAnswer: "Dobby"
    },
    {
      question: "Who impersonates Mad-Eye in The Goblet of Fire?",
      answers: [
        "Voldemort",
        "Sirius Black",
        "Barty Crouch",
        "Barty Crouch Jr."
      ],
      correctAnswer: "Barty Crouch Jr."
    }
  ];

  var timer;
  var minutes;
  var game = {
    correct: 0,
    incorrect: 0,
    counter: 5,

    countdown: function() {
      game.counter--;
      minutes = parseInt(game.counter / 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = parseInt(game.counter % 60, 10);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      $("#counter-number").html("Time remaining " + minutes + ":" + seconds);
      if (game.counter === 0) {
        game.done();
      }
    },

    start: function() {
      timer = setInterval(game.countdown, 1000);

      card.prepend("<h2 class='timer'><span id='counter-number'></span></h2>");

      $(".start").remove();
      $(".instructions").remove();

      for (let i = 0; i < questions.length; i++) {
        card.append("<h4>" + questions[i].question + "</h4");
        for (let j = 0; j < questions[i].answers.length; j++) {
          card.append(
            "<input type='radio' name='question-" +
              i +
              "' value = '" +
              questions[i].answers[j] +
              "''>" +
              questions[i].answers[j]
          );
        }
      }

      card.append(
        "<p><a id='done' class='btn btn-secondary btn-lg done' href='#' role='button'>Done</a></p>"
      );
    },

    done: function() {
      var inputs = card.children("input:checked");
      console.log(inputs);
      var arr = [];
      for (let i = 0; i < inputs.length; i++) {
        arr.push(inputs[i].name.slice(-1));
      }
      console.log(arr);

      for (var i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).val() === questions[arr[i]].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      }
      this.result();
    },

    result: function() {
      clearInterval(timer);

      $("#question-container h4").remove();

      card.html("<h2>All Done!</h2>");
      card.append("<h3>Correct Answers: " + this.correct + "</h3>");
      card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
      card.append(
        "<h3>No Response: " +
          (questions.length - this.correct - this.incorrect) +
          "</h3>"
      );
    }
  };

  $(document).on("click", ".start", function() {
    game.start();
  });

  $(document).on("click", "#done", function() {
    console.log("I've been clicked");
    game.done();
  });
});
