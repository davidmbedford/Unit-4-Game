$(document).ready(function() {
// Variables related to scores and misc global data
  var winTotal = 0;
  var lossTotal = 0;
  scoreCounter = 0; //for calculating how much youve hit so far
  console.log("Score", scoreCounter);
  var targetNumber = "";

// Random Number Options/Generation
var setNumbers = function () {
  var targetNumberOptions = [50, 60, 70, 85, 100];
  targetNumber = targetNumberOptions[Math.floor(Math.random() * targetNumberOptions.length)];
  $("#targetNumber").text(targetNumber);
  console.log("target", targetNumber);

  var crysOneOptions = [1, 2, 3, 4, 5];
  var crysOneValue = crysOneOptions[Math.floor(Math.random() * crysOneOptions.length)];
  console.log(crysOneValue);

  var crysTwoOptions = [6, 7, 8, 9 , 10];
  var crysTwoValue = crysTwoOptions[Math.floor(Math.random() * crysTwoOptions.length)];
  console.log(crysTwoValue);

  var crysThreeOptions = [11, 12, 13, 14, 15];
  var crysThreeValue = crysThreeOptions[Math.floor(Math.random() * crysThreeOptions.length)];
  console.log(crysThreeValue);

  var crysFourOptions = [16, 17, 18, 19, 20];
  var crysFourValue = crysFourOptions[Math.floor(Math.random() * crysFourOptions.length)];
  console.log(crysFourValue);
  //Code for Value Assignment
  $("#targetNumber").attr("data-targetNumber", targetNumber)
  $("#crystalOne").attr("data-crysValue", crysOneValue);
  $("#crystalTwo").attr("data-crysValue", crysTwoValue);
  $("#crystalThree").attr("data-crysValue", crysThreeValue);
  $("#crystalFour").attr("data-crysValue", crysFourValue);

};

// Code for onStart
setNumbers();


$("#winTotal").text(winTotal);
$("#lossTotal").text(lossTotal);

// On.Click functions for the crystal images
  $(".crystal-image").on("click", function() {
    var crystalValue = $(this).attr("data-crysValue");
      crystalValue = parseInt(crystalValue);
      scoreCounter += crystalValue;
      $("#scoreCounter").text(scoreCounter);
      console.log(scoreCounter);

      if (scoreCounter === targetNumber) {
        alert("HELL YEAH");
        winTotal++;
        $("#winTotal").text(winTotal);
        reset();
      }
      else if (scoreCounter >= targetNumber) {
        alert("Woah! Back it up, bud");
        lossTotal++;
        $("#lossTotal").text(lossTotal);
        reset();
      }

    });

  var reset = function() {
    scoreCounter = 0;
    setNumbers();
  }

});

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
