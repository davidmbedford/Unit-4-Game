// these are general project notes
// i want to create an onclick function for the images
// then i want to create a variable that tracks the aount of clicks per image
// then i want to create a variable that equals the amount of clicks times the value
// where the value is the randomly assigned number

// use $(".myElementClass").text("to create win/loss messages")
// you can also add html elements -> with text and classes and all
// (1) $(".myElementClass").html("<p class=\"myclass\" to create win/loss messages")
// or
// (1) var myNewEl = $("<p>")
// myNewEl.text("check this out")
// myNewEl.addClass("checkClass")
// $("myElement").html(myNewEl)

// questions: how to properly link jquery
// q: how to do bootstrap-js

$(document).ready(function() {
// Variables realted to scores and other 'starting' info
  var targetNumber = "";
  var winTotal = 0;
  var lossTotal = 0;
  var counter = 0;

// Code for onStart
  $("#winTotal").text(winTotal);
  $("#lossTotal").text(lossTotal);
  $("#targetNumber").text(targetNumber);

// Random Number Options
  var targetNumberOptions = [40, 50, 60];

  var crystalOne = {
    options: [1, 2, 3];
  }

  var crystalTwo = {
    options: [4, 5, 6];
  }

  var crystalThree = {
    options: [7, 8, 9];
  }

  var crystalFour = {
    options: [10, 11, 12];
  }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr(""));
    crystalValue = parseInt(crystalValue);

    counter += crystalOne[i];

    if (counter === targetNumber) {
      alert("You win!");
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
    }



  };



});
