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
      question: "Who killed Nagini at the Battle of Hogwarts",
      answers: [
        "Neville Longbottom",
        "Harry Potter",
        "Ron Weasley",
        "Molly Weasley"
      ],
      correctAnswer: "Lily Evans"
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
      answers: ["Dumbledore's", "Weasley's", "Malfoy's", "Riddle's"],
      correctAnswer: "Weasley's"
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
  var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function() {
      game.counter--;
      $("#counter-number").html(game.counter);
      if (game.counter === 0) {
        game.done();
      }
    },

    start: function() {
      timer = setInterval(game.countdown, 1000);
      card.prepend(
        "<h2>Time Remaining: <span id='counter-number'>120</span>Seconds</h2>"
      );
      $(".start").remove();
      $(".instructions").remove();

      for (let i = 0; i < questions.length; i++) {
        card.append("<h4>" + questions[i].question + "</h4");
        for (let j = 0; j < questions[i].answers.length; j++) {
          card.append(
            "<input type = 'radio' name = 'question-" +
              i +
              "' value = '" +
              questions[i].answers[j] +
              "''>" +
              questions[i].answers[j]
          );
        }
      }
      card.append("<button id = 'done'>Done</button");
    },

    done: function() {
      var inputs = card.children("input:checked");
      console.log(inputs);
      for (var i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).val() === questions[i].correctAnswer) {
          game.correct++;
          console.log(game.correct);
        } else {
          game.incorrect++;
          console.log(game.incorrect);
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
